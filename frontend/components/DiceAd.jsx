import Link from "next/link";
import Image from "next/image";

const DiceAd = () => {
    return (
        <>
        <section className="flex flex-col px-[min(10%,512px)] items-center relative gap-8 py-4 pt-32 pb-48 bg-gradient-to-b from-basicBlack-10 to-basicLightGreen-10 overflow-clip">
            {/* Dice */}
            <Image 
            src="dice.svg"
            width={500}
            height={500}
            className="absolute top-0 bottom-0 right-0 left-0 m-auto z-0 opacity-50"
            />

            {/* Header */}
            <h1 className="text-white text-2xl sm:text-4xl sm:max-w-6xl font-semibold text-center z-20">Mari Bergabung dan Tentukan Jalanmu dalam Dunia Teknologi</h1>

            {/* Tombol Daftar Sekarang */}
            <Link href="/auth/daftar" className="sm:rounded-2xl rounded-md bg-basicRed-10 z-20 text-white md:text-2xl text-lg text-center sm:px-28 px-16 md:py-3 py-1 mb-5 border-4 border-basicDarkBrown-10 w-fit">Daftar Sekarang</Link>
            
        </section>
        </>
    );
};

export default DiceAd;