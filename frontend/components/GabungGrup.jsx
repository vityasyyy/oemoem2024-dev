const GabungGrup = () => {
    return (
        <div>
            <h1 className="">
                Selamat bergabung <br></br> bersama <span className="text-basicLightBrown-10">OemOem</span>
            </h1>
            <p className="text-xs mt-1">
                Gabung grup chat untuk informasi lebih lanjut
            </p>
            <Image
                src="whatsapp.svg"
                height={50}
                width={50}
                className="mt-4"
                alt="WhatsApp Logo"
            />
            <button className="border-2 px-6 py-1/2 rounded-md border-basicLightBrown-10 bg-basicRed-10 mt-4">
                Gabung
            </button>
        </div>
    );
}

export default GabungGrup;