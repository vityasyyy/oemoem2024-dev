'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Mentor from './Mentor';
import ProgressBar from "@/components/ProgressBar";
import KelasButton from "@/components/KelasButton";
import ChallengesButton from "@/components/ChallengesButton";
import axios from 'axios'; // Import axios for making API requests
import { useRouter } from 'next/navigation';

const ClassDetail = ({ event, user }) => {
    const [activeView, setActiveView] = useState('kelas');
    const [submissionLink, setSubmissionLink] = useState(''); // State for the submission link
    const [submissionComment, setSubmissionComment] = useState(''); // State for the submission comment
    const [submissionMessage, setSubmissionMessage] = useState(''); // State for success/error message
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [enrollmentError, setEnrollmentError] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [assignmentId, setAssignmentId] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (user && event) {
            console.log(user._id)   
            const enrolled = event.enrolledBy.some(enrolledUser => 
                enrolledUser._id.toString() === user._id.toString()
            );
            console.log('User ID:', user._id);
            console.log('Enrolled By:', event.enrolledBy);
            console.log('Is Enrolled:', enrolled);
            setIsEnrolled(enrolled);
            checkExistingSubmission();
        }
    }, [user, event]);

    const handleEnroll = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/event/${event._id}/enroll`, {}, {
                withCredentials: true
            });
            if (response.status === 200) {
                setIsEnrolled(true);
                setEnrollmentError(null);
                // Optionally, update the event data here
            }
        } catch (error) {
            setEnrollmentError(error.response?.data?.error || 'An error occurred during enrollment');
            router.push('/auth/masuk')
        }
    };

    const handleSubmission = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (hasSubmitted) {
                response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/event/${assignmentId}/update`, {
                    assignmentLink: submissionLink,
                    assignmentComment: submissionComment
                }, { withCredentials: true });
            } else {
                response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/event/${event._id}/submit`, {
                    assignmentLink: submissionLink,
                    assignmentComment: submissionComment
                }, { withCredentials: true });
            }

            if (response.status === 200) {
                setSubmissionMessage(hasSubmitted ? 'Assignment updated successfully!' : 'Assignment submitted successfully!');
                setHasSubmitted(true);
                if (!hasSubmitted) {
                    setAssignmentId(response.data.assignment._id);
                }
            } else {
                setSubmissionMessage(hasSubmitted ? 'Update failed. Please try again.' : 'Submission failed. Please try again.');
            }
        } catch (error) {
            setSubmissionMessage(error.response?.data?.error || 'An error occurred. Please try again.');
        }
    };

    const checkExistingSubmission = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event/${event._id}/submission`, {
                withCredentials: true
            });
            if (response.data.assignment) {
                setHasSubmitted(true);
                setAssignmentId(response.data.assignment._id);
                setSubmissionLink(response.data.assignment.assignmentLink);
                setSubmissionComment(response.data.assignment.assignmentComment);
            }
        } catch (error) {
            console.error('Error checking existing submission:', error);
        }
    };
    const isChallengeOpen = () => {
        if (!event.openAssignment) return false;
        const challengeOpenDate = new Date(event.openAssignment);
        const currentDate = new Date();
        return currentDate >= challengeOpenDate;
    };
    const handleEnrollClick = () => {
        setShowConfirmation(true);
    };

    const handleConfirmEnroll = () => {
        handleEnroll();
        setShowConfirmation(false);
    };

    const handleCancelEnroll = () => {
        setShowConfirmation(false);
    };
    return (
        <section className="bg-basicLightGreen-10 pt-24 pb-6 relative">
            {/* 4 Cards Background Image */}
            <Image
                src="4cards.svg"
                width={300}
                height={300}
                className='absolute top-[5rem] w-64 right-0 sm:w-fit sm:right-[min(10%,512px)]'
            />
            {/* Bagian Hijau Atas */}
            <div className="px-[min(10%,512px)]">
                <div className="bg-basicBlack-10 max-w-xs flex p-3 rounded-lg z-10 relative">
                    <Image
                        src={event.image ? event.image.url : "/default-image.svg"}
                        alt={event.title}
                        width={54}
                        height={32}
                        className="mr-3"
                    />
                    <div className="text-white flex-grow">
                        <h1 className="font-semibold text-xl mb-2">
                            {event.title}
                        </h1>
                        <ProgressBar enrolledBy={event.enrolledBy} slots={event.slots} />
                    </div>
                </div>

                {/* Button Kelas dan Challenges */}
                <div className="flex gap-2 mt-6 z-10 relative">
                    <KelasButton 
                        onClick={() => setActiveView('kelas')} 
                        isActive={activeView === 'kelas'}
                    />
                    <ChallengesButton 
                        onClick={() => setActiveView('challenges')} 
                        isActive={activeView === 'challenges'}
                    />
                </div>
            </div>
            
            {/* Main */}
            <div className="h-fit bg-basicBlack-10 mt-5 pt-8 pb-48 z-50 px-[min(10%,512px)] text-lg relative flex flex-col gap-10">
                {activeView === 'kelas' ? (
                    <>
                        {/* Kelas */}
                        {/* Overview */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 text-lg rounded-md">
                                Overview
                            </div>
                            <p>{event.description}</p>
                        </div>

                        {/* Tanggal dan Lokasi */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 text-lg rounded-md">
                                Tanggal dan lokasi
                            </div>
                            <p>{new Date(event.date).toLocaleDateString()}</p>
                            <p>{event.location}</p>
                        </div>

                        {/* Kebutuhan */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 rounded-md">
                                Kebutuhan
                            </div>
                            <p>{event.prerequisite}</p>
                        </div>
                        
                        {/* Kurikulum */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 rounded-md">
                                Kurikulum
                            </div>
                            <p>{event.curriculum}</p>
                        </div>

                        {/* Mentor */}
                        <div className="flex flex-col gap-5 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 rounded-md">
                                Mentor
                            </div>
                            {/* Belom fetching nama component nya */}
                            <Mentor event={event}/>
                        </div>

                        {/* Contact Person */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 rounded-md">
                                Contact Person
                            </div>
                            <Link href={event.contactPerson.linkCP}>
                                <p>{event.contactPerson.namaCP}</p>
                            </Link>
                        </div>
                        {/* ENROLL BUTTON */}
                {!isEnrolled ? (
                    <div className='flex justify-center items-center'>
                        <button 
                            onClick={handleEnrollClick}
                            className="w-full px-4 py-2 mt-2 bg-basicRed-10 text-white border-2 border-basicDarkBrown-10 rounded-md sm:text-lg focus:outline-none focus:ring-2 focus:ring-white cursor-pointer hover:bg-red-900 transition-all"
                            disabled={event.slots <= 0}
                        >
                            {event.slots > 0 ? 'Enroll in this class' : 'No slots available'}
                        </button>
                    </div>
                ) : (
                    <div className="text-white bg-green-500 py-2 px-4 rounded-md">
                        You are enrolled in this class
                    </div>
                )}

                {/* Confirmation Popup */}
                {showConfirmation && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 max-w-[90%] rounded-lg shadow-xl">
                            <h2 className="text-xl font-bold mb-4">Confirm Enrollment</h2>
                            <p className="mb-6">Apakah anda yakin akan enroll ke dalam kelas ini? Kami mohon komitmen dan tanggung jawab anda.</p>
                            <div className="flex justify-end space-x-4">
                                <button 
                                    onClick={handleCancelEnroll}
                                    className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleConfirmEnroll}
                                    className="px-4 py-2 bg-basicRed-10 text-white rounded hover:bg-red-700"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                    </>

                ) :(
                    <>
                        {isChallengeOpen() ? (
                            <>
                                {/* Challenges Section */}
                
                                {/* Overview */}
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="bg-basicBlue-10 text-lg w-fit min-w-44 px-4 py-2 rounded-md">
                                        Overview
                                    </div>
                                    <p className='text-wrap'>{event.assignmentDetail}</p>
                                </div>
                
                                {/* Tenggat Pengumpulan */}
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="bg-basicBlue-10 text-lg w-fit min-w-44 px-4 py-2 rounded-md">
                                        Tenggat Pengumpulan
                                    </div>
                                    <p>{new Date(event.date).toLocaleDateString()}</p>
                                </div>
                
                                {/* Assets */}
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="bg-basicBlue-10 text-lg w-fit min-w-44 px-4 py-2 rounded-md">
                                        Asset
                                    </div>
                                    <p>{new Date(event.date).toLocaleDateString()}</p>
                                </div>
                
                                {/* Pengumpulan */}
                                <div className="flex flex-col gap-4 text-black">
                                    <div className="bg-basicBlue-10 text-lg w-fit min-w-44 px-4 py-2 rounded-md text-white">
                                        Pengumpulan
                                    </div>
                                    <form onSubmit={handleSubmission} className="flex flex-col gap-2">
                                        <input 
                                            type="text"
                                            value={submissionLink}
                                            onChange={(e) => setSubmissionLink(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 text-sm sm:text-base rounded-lg focus:text-basicBlack-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="cth: link github, link web, dll"
                                        />
                                        <textarea
                                            value={submissionComment}
                                            onChange={(e) => setSubmissionComment(e.target.value)}
                                            className="w-full px-3 py-2 border text-sm sm:text-base border-gray-300 rounded-lg focus:text-basicBlack-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Add a comment"
                                        />
                                        <p className="text-white mt-2 text-xs sm:text-sm">
                                            Tugas dikumpulkan dalam bentuk link sesuai dengan arahan mentor pada hari pembelajaran
                                        </p>
                                        <button 
                                            type="submit"
                                            className="w-full px-4 py-2 mt-2 bg-basicRed-10 text-white border-2 border-basicDarkBrown-10 rounded-md sm:text-lg focus:outline-none focus:ring-2 focus:ring-white cursor-pointer hover:bg-red-900 transition-all"
                                        >
                                            {hasSubmitted ? 'Update' : 'Submit'}
                                        </button>
                                    </form>
                                    {submissionMessage && <p className="text-white mt-2">{submissionMessage}</p>}
                                </div>
                            </>
                        ) : (
                            // Display message when challenge is not open
                            <div className="flex flex-col items-center justify-center text-white h-full">
                                <p className="text-2xl font-bold mb-4">Challenge belum dibuka</p>
                                <p className="text-lg">
                                    Challenge akan dibuka pada: {new Date(event.openAssignment).toLocaleString()}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default ClassDetail;
