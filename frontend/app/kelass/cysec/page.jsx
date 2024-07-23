import NavbarKelas from "@/components/NavbarKelas";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import KelasButton from "@/components/KelasButton";
import ChallengesButton from "@/components/ChallengesButton";

export default function cysec() {
    return (
        <>
            <NavbarKelas />

            <section className="h-fit  bg-basicLightGreen-10 pt-24 ">
                
                {/* Bagian Hijau Atas */}
                <div className="px-[min(10%,512px)]">
                    <div className=" bg-basicBlack-10 max-w-xs flex p-3 rounded-lg z-10 relative">
                        <Image
                            src="/cysec.svg"
                            alt="Cyber Security"
                            width={54}
                            height={32}
                            className="mr-3"
                        />
                        <div className="text-white flex-grow">
                            <h1 className="font-semibold text-xl mb-2">
                                Cyber Security
                            </h1>
                            <ProgressBar progress={10} maxProgress={20} />
                        </div>
                        
                    </div>
                    <Image
                        src="4cards.svg"
                        alt="4 Cards"
                        width={210}
                        height={32}
                        className="absolute right-3 top-[110px] z-0"
                    />

                    {/* Button Kelas dan Challenges */}
                    <div className="flex gap-2 mt-6 z-10 relative">
                        <KelasButton />
                        <ChallengesButton />
                    </div>
                </div>
                

                {/* Main */}
                <div className="h-screen bg-basicBlack-10 mt-5 pt-5 z-50 px-[min(10%,512px)] flex flex-col gap-10">
                    
                    {/* Overview */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Overview
                        </div>
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    {/* Tanggal dan Lokasi */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Tanggal dan lokasi
                        </div>
                        <p>
                            Senin, 27 Agustus 2024
                        </p>
                    </div>

                    {/* Kebutuhan */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Kebutuhan
                        </div>
                        <p>
                            Senin, 27 Agustus 2024
                        </p>
                    </div>
                    
                    {/* Kurikulum */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Kurikulum
                        </div>
                        <p>
                            Senin, 27 Agustus 2024
                        </p>
                    </div>

                    {/* Mentor */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Mentor
                        </div>
                        <div className="bg-basicLightBrown-10 rounded-md p-2">
                            sdfa
                        </div>
                    </div>

                    {/* Contact Person */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Contact Person
                        </div>
                        <p>
                            1. Ken bima
                        </p>
                    </div>

                </div>

            </section>
        </>
    );
}