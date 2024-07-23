import NavbarKelas from "@/components/NavbarKelas";
import Classes from "@/components/Classes";
import Image from "next/image";

export default function Kelas() {
    return (
        <>
            {/* Navigation Bar */}
            <NavbarKelas />

            {/* Section */}
            <section className="px-[min(10%,512px)] pt-20 bg-gradient-to-t from-basicDarkGreen-10 to-basicLightGreen-10">
                {/* Header Nama dan WA */}
                <div className="flex pb-8">

                    {/* Nama dan Tombol*/}
                    <div className="flex flex-col gap-5">

                        {/* Nama */}
                        <h1 className="text-basicBlack-10 text-3xl sm:text-4xl font-bold">Halo, Fahmi</h1>

                        {/* Tombol Kelas and Champions */}
                        <div className="flex gap-2">
                            <div className="flex items-center text-sm sm:text-lg justify-center px-4 py-1 rounded-md text-white bg-basicBlack-10 border-black border-2">Kelas</div>
                            <div className="flex items-center text-sm sm:text-lg justify-center px-4 py-1 rounded-md text-basicBlack-10 bg-white border-black border-2">Champions</div>
                        </div>
                    </div>

                    {/* Whatsapp */}
                </div>
            </section>

            {/* Section Utama (konten) dipake Wrapper */}
            <div className="bg-basicDarkGreen-10">
                <section className="flex flex-col text-lg px-[min(10%,512px)] rounded-t-xl py-8 bg-basicBlack-10">

                    {/* Kelas Pilihanmu */}
                    <div className="flex">
                        <div className="bg-basicBlue-10 text-white rounded-md px-4 py-2">Kelas Pilihanmu</div>
                    </div>

                    {/* Program dan Kelas */}
                    {/* <Classes /> */}
                </section>
            </div>
        </>
    );
}