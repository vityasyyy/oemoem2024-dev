import Image from "next/image";

const Kelas = () => {
    return (
        <section className="bg-basicBlack-10 px-5 py-10">
            <div className="px-5 py-2 w-fit text-white bg-basicBlue-10 rounded text-base md:text-xl lg:mb-72 md:mb-64 sm:mb-56 mb-6  z-50 text-center">Program dan Kelas
            </div>
            
            <div className="border-[3px] border-basicRed-10 rounded-xl w-44 h-56 pt-2 pr-2 pb-1 pl-2 bg-basicLightBrown-10 flex flex-col justify-between">
                {/* Upper part: Heart and Class Logo */}
                <div>
                    {/* Logo Kiri Atas */}
                    <Image
                        src="heart.svg"
                        alt="menu"
                        width={25}
                        height={32}
                        className=""
                    />

                    {/* Logo Kelas */}
                    <div className="flex justify-center mt-2">
                        <Image
                            src="cp.svg"
                            alt="menu"
                            width={75}
                            height={32}
                            className=""
                        />
                    </div>

                    {/* Nama Kelas */}
                    <h1 className="text-center font-medium text-base mt-1">
                        Comp. Prog.
                    </h1>
                </div>

                {/* Lower part: Lihat Kelas Button */}
                <div className="bg-basicRed-10 text-white py-2 mx-2 text-center rounded-xl mb-2">
                    Lihat Kelas
                </div>
            </div>
        </section>
    );
}

export default Kelas;