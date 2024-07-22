import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <section className="flex flex-col relative pt-24 md:pb-4 pb-4 px-4 items-center w-screen h-fit bg-gradient-to-t from-basicBlack-10 to-basicLightGreen-10">
                {/* White Shine */}
                <Image 
                    src="heroShine.svg"
                    height={500}
                    width={500}
                    className="z-0 absolute top-0 left-0"
                />
                
                {/* White Shine */}
                <Image 
                    src="heroShine2.svg"
                    height={500}
                    width={500}
                    className="z-0 absolute bottom-0 right-0"
                />

                {/* Cards on Large Screens */}
                <Image 
                    src="heroCards.svg"
                    height={1000}
                    width={1000}
                    className="hidden lg:block absolute z-0 bottom-0 opacity-50"
                />

                {/* Cards on Smaller Screens */}
                <Image 
                    src="heroCardsMD.svg"
                    height={800}
                    width={800}
                    className="absolute block lg:hidden z-0 bottom-1/3 opacity-50 min-[400px]:bottom-24 min-[590px]:bottom-0"
                />

                {/* Penutupan Pendaftaran */}
                <div className="p-2 sm:p-4 w-fit text-white bg-basicBlue-10 rounded-lg text-base md:text-xl lg:mb-72 md:mb-64 sm:mb-56 mb-48 z-30 text-center">Penutupan Pendaftaran: &nbsp; 
                    <span className="font-bold">  00:00:00</span>
                </div>

                {/* div kelompokin konten hero */}
                <div className="flex flex-col mb-14 items-center gap-3 z-30">
                    {/* Headers */}
                    <h1 className="text-white lg:text-5xl md:text-4xl text-3xl text-center font-bold">Hadirkan IT Untuk Semua!</h1>
                    <h2 className="text-white lg:text-2xl md:text-xl text-lg text-center">Pelatihan hardskill komputer gratis dan offline bersama Ilmu Komputer Universitas Gadjah Mada</h2>

                    {/* Tombol Daftar Sekarang */}
                    <Link href="/auth/daftar" className="sm:rounded-2xl rounded-md bg-basicRed-10 text-white md:text-2xl text-lg text-center sm:px-28 px-16 md:py-3 py-1 mb-5 border-4 border-basicDarkBrown-10">Daftar Sekarang</Link>
                    
                    {/* Presented By */}
                    <Image
                        src="presented.svg"
                        alt="menu"
                        width={320}
                        height={32}
                    />

                </div>
            </section>
        </>
    );
}

export default Hero;