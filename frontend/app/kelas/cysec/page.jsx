import NavbarKelas from "@/components/NavbarKelas";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";

export default function cysec() {
    return (
        <>
            <NavbarKelas />

            <section className="h-fit px-[min(10%,512px)] bg-basicLightGreen-10 pt-24">
                <div className="bg-basicBlack-10 max-w-xs flex p-3 rounded-lg">
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
            </section>
        </>
    );
}