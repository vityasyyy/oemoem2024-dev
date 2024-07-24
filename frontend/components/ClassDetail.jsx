'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import KelasButton from "@/components/KelasButton";
import ChallengesButton from "@/components/ChallengesButton";
import axios from 'axios'; // Import axios for making API requests

const ClassDetail = ({ event, user }) => {
    const [activeView, setActiveView] = useState('kelas');
    const [submissionLink, setSubmissionLink] = useState(''); // State for the submission link
    const [submissionComment, setSubmissionComment] = useState(''); // State for the submission comment
    const [submissionMessage, setSubmissionMessage] = useState(''); // State for success/error message
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [enrollmentError, setEnrollmentError] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [assignmentId, setAssignmentId] = useState(null);

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
            const response = await axios.post(`http://localhost:8080/event/${event._id}/enroll`, {}, {
                withCredentials: true
            });
            if (response.status === 200) {
                setIsEnrolled(true);
                setEnrollmentError(null);
                // Optionally, update the event data here
            }
        } catch (error) {
            setEnrollmentError(error.response?.data?.error || 'An error occurred during enrollment');
        }
    };

    const handleSubmission = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (hasSubmitted) {
                response = await axios.put(`http://localhost:8080/event/${assignmentId}/update`, {
                    assignmentLink: submissionLink,
                    assignmentComment: submissionComment
                }, { withCredentials: true });
            } else {
                response = await axios.post(`http://localhost:8080/event/${event._id}/submit`, {
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
            const response = await axios.get(`http://localhost:8080/event/${event._id}/submission`, {
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

    return (
        <section className="h-fit bg-basicLightGreen-10 pt-24">
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
            <div className="h-screen bg-basicBlack-10 mt-5 pt-5 z-50 px-[min(10%,512px)] flex flex-col gap-10">
                {activeView === 'kelas' ? (
                    <>
                        {/* Kelas */}
                        {/* Overview */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                                Overview
                            </div>
                            <p>{event.description}</p>
                        </div>

                        {/* Tanggal dan Lokasi */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                                Tanggal dan lokasi
                            </div>
                            <p>{new Date(event.date).toLocaleDateString()}</p>
                            <p>{event.location}</p>
                        </div>

                        {/* Kebutuhan */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                                Kebutuhan
                            </div>
                            <p>{event.prerequisite}</p>
                        </div>
                        
                        {/* Kurikulum */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                                Kurikulum
                            </div>
                            <p>{event.curriculum}</p>
                        </div>

                        {/* Mentor */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                                Mentor
                            </div>
                            <div className="bg-basicLightBrown-10 rounded-md p-2">
                                {event.mentors}
                            </div>
                        </div>

                        {/* Contact Person */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                                Contact Person
                            </div>
                            <p>{event.contactPerson}</p>
                        </div>
                        {/* ENROLL BUTTON */}
                        {!isEnrolled ? (
                            <button 
                                onClick={handleEnroll}
                                className="bg-basicRed-10 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                                disabled={event.slots <= 0}
                            >
                                {event.slots > 0 ? 'Enroll in this class' : 'No slots available'}
                            </button>
                        ) : (
                            <div className="text-white bg-green-500 py-2 px-4 rounded-md">
                                You are enrolled in this class
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {/* Challenges */}
                        {/* Overview */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                                Overview
                            </div>
                            <p>{event.assignmentDetail}</p>
                        </div>

                        {/* Tenggat Pengumpulan */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-48 px-3 py-1 rounded-md">
                                Tenggat Pengumpulan
                            </div>
                            <p>{new Date(event.date).toLocaleDateString()}</p>
                        </div>

                        {/* Assets */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-48 px-3 py-1 rounded-md">
                                Asset
                            </div>
                            <p>{new Date(event.date).toLocaleDateString()}</p>
                        </div>

                        {/* Pengumpulan */}
                        <div className="flex flex-col gap-2 text-black">
                            <div className="bg-basicBlue-10 w-48 px-3 py-1 rounded-md text-white">
                                Pengumpulan
                            </div>
                            <form onSubmit={handleSubmission} className="flex flex-col gap-2">
                                <input 
                                    type="text"
                                    value={submissionLink}
                                    onChange={(e) => setSubmissionLink(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="cth: link github, link web, dll"
                                />
                                <textarea
                                    value={submissionComment}
                                    onChange={(e) => setSubmissionComment(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Add a comment"
                                />
                                <button 
                                    type="submit"
                                    className="w-full px-3 py-1 bg-basicRed-10 text-white border-2 border-basicDarkBrown-10 rounded-md focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                                >
                                    {hasSubmitted ? 'Update Assignment' : 'Submit Assignment'}
                                </button>
                            </form>
                            {submissionMessage && <p className="text-white mt-2">{submissionMessage}</p>}
                            <p className="text-white">
                                Tugas dikumpulkan dalam bentuk link sesuai dengan arahan mentor pada hari pembelajaran
                            </p>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ClassDetail;
