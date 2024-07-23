import Image from "next/image";

const Ads = () => {
    return (
        <>
            <section className="flex flex-col bg-basicBlack-10 px-[min(10%,512px)] gap-8 py-4 sm:py-8 text-white">
                {/* Kartu Pertama */}
                <div className="flex flex-col w-[min(100%,1123px)] gap-2 bg-basicLightBrown-10 rounded-lg lg:ml-auto sm:rounded-xl relative px-8 py-8 lg:pl-48">
                    <h1 className="text-basicBlue-10 text-lg sm:text-2xl lg:text-3xl lg:text-left text-center font-bold">Lakukan Challenge dan Dapatkan Hadiah!</h1>
                    <p className="text-black font-medium text-sm text-center sm:text-lg lg:text-left">dapatkan posisi tertinggi dengan menyelesaikan challenge untuk masing-masing kelas!</p>
                </div>

                {/* Kartu Kedua */}
                <div className="flex flex-col items-center w-[min(100%,1123px)] gap-2 bg-basicLightBrown-10 rounded-lg lg:mr-auto sm:rounded-xl px-8 py-8">
                    <div className="rounded-xl sm:hidden bg-white relative w-[min(100%,213px)] h-auto">
                        {/* <Image 
                            src="/ronaldo.jpg"
                            fill={true}
                        /> */}
                    </div>
                    <h1 className="text-basicBlue-10 text-lg sm:text-2xl lg:text-3xl lg:text-right text-center font-bold">Berlatih Bersama Professional</h1>
                    <p className="text-black font-medium text-sm text-center sm:text-lg lg:text-right">Kelas dibimbing bersama anggota proffesional OmahTI dalam setiap divisi untuk memastikan kualitas pengalaman</p>
                    <div className="rounded-xl hidden sm:block bg-white relative w-[min(100%,213px)] h-auto">
                        {/* <Image 
                            src="/ronaldo.jpg"
                            fill={true}
                        /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ads;