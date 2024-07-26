import Image from "next/image";
import { useState } from "react";

const Champions = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('Comp Programming');
    const [allClasses, setAllClasses] = useState([]);

    const allTopics = [
        "Comp Programming",
        "UI/UX",
        "Front-End",
        "Back-End",
        "Data Science AI",
        "Mobile Apps",
        "Cyber Security",
        "Game-Dev"
    ];

    const topics = allTopics.filter(topic => topic !== selectedTopic);

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
        setIsOpen(false);
    };

    const fetchAllClasses = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event`, { withCredentials: true });
            setAllClasses(response.data);
        } catch (error) {
            console.error('Error fetching all classes:', error);
        }
    };

    return (
        <>
            <p className="text-white">Champions dipersembahkan bagi top-3 pemenang challenge untuk masing-masing kelas</p>

            {/* Dropdown */}
            <div className="w-72 mt-4 font-medium relative">
                <div className="flex items-center justify-between text-white rounded-lg">
                    <span className="flex-grow bg-basicBlue-10 pl-4 py-1 rounded-lg">{selectedTopic}</span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-2 focus:outline-none bg-basicBlue-10 rounded-lg"
                    >
                        <Image
                            src="/arrowDropdown.svg"
                            height={20}
                            width={20}
                            className={`m-2 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0' : 'rotate-180'}`}
                            alt="Dropdown"
                        />
                    </button>
                </div>
                <div 
                    className={`absolute w-full z-10 mt-1 transition-all duration-300 ease-in-out ${
                        isOpen 
                        ? 'opacity-100 visible max-h-96' 
                        : 'opacity-0 invisible max-h-0'
                    }`}
                >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                        {topics.map((topic, index) => (
                            <div 
                            key={index} 
                            className="p-3 text-indigo-800 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleTopicClick(topic)}
                            >
                            {topic}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bagian Bawah */}
            <div className="flex flex-col md:flex-row mt-10">
                
                {/* CP */}
                <div className="flex flex-col border-4 w-56 h-72 border-basicRed-10 bg-basicLightBrown-10 rounded-xl">
                    <Image
                        src="/heart.svg"
                        width={25}
                        height={20}
                        className={`m-2`}
                        alt="Dropdown"
                    />
                    <Image
                        src="/cp.svg"
                        width={100}
                        height={20}
                        className={`m-2`}
                        alt="Dropdown"
                    />
                    <h1 className="text-center text-basicRed-10 font-semibold justify-end">
                        Comp. Programming
                    </h1>
                    
                </div>
            

                {/* Merah-merah bawah */}
                <div className="flex flex-col gap-2 text-white mt-10 ">
                    <div className="rounded-lg border-4 border-basicRed-10 p-4 w-84">
                        Andreandhiki
                    </div>
                    <div className="rounded-lg border-4 border-basicRed-10 p-4 w-84">
                        Riyanta
                    </div>
                    <div className="rounded-lg border-4 border-basicRed-10 p-4 w-84">
                        Putra
                    </div>
                </div>
            </div>
        </>
    )
};

export default Champions;