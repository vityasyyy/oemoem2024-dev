import Image from "next/image";
import Link from "next/link";

const GabungGrupMini = () => {
    return (
        <div className="bg-basicBlack-10 ml-auto z-30 w-24 sm:w-28 p-2 rounded-lg flex flex-col items-center place-content-between gap-1">
            <h1 className="hidden sm:block text-white text-sm sm:text-base text-center">Grup Chat</h1>
            <h1 className="block sm:hidden text-white text-sm sm:text-base text-center">Grup</h1>

            <Image
                src="whatsapp.svg"
                height={50}
                width={50}
                className="w-8 sm:w-10"
                alt="WhatsApp Logo"
            />

            <Link href="https://youtube.com" className="text-white text-xs sm:text-sm flex place-content-center w-full py-1 rounded-lg -basicLightBrown-1 bg-basicRed-10">
                Gabung
            </Link>
        </div>
    );
}

export default GabungGrupMini;