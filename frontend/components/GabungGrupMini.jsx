import Image from "next/image";

const GabungGrupMini = () => {
    return (
        <div className="bg-basicBlack-10 ml-auto z-30 w-28 p-2 rounded-lg flex flex-col items-center gap-1">
            <h1 className="text-white text-base">Grup Chat</h1>

            <Image
                src="whatsapp.svg"
                height={50}
                width={50}
                className="w-10"
                alt="WhatsApp Logo"
            />

            <button className="text-white text-sm w-full py-1 rounded-lg -basicLightBrown-1 bg-basicRed-10">
                Gabung
            </button>
        </div>
    );
}

export default GabungGrupMini;