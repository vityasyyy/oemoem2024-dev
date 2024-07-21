import LoginNavbar from "@/components/LoginNavbar";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <LoginNavbar />

            <section className="bg-basicLightGreen-10 p-5">
                <Link href="/" className="flex">
                    <button className="flex items-center p-1 justify-center bg-basicWhite-10 text-basicRed-10 rounded" type='back'>
                            <label className="cursor-pointer">
                                <Image
                                    src="back.svg"
                                    alt="back"
                                    width={20}
                                    height={1}
                                />
                            </label>
                    </button>
                    <p>
                        Daftar
                    </p>
                </Link>
            </section>
        </>
    );
}