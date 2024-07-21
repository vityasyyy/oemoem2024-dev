import Image from "next/image";
import Link from "next/link";

const LoginNavbar = () => {
    return (
        <nav className="bg-basicLightGreen-10">
            <nav className="flex items-center justify-between relative mx-auto px-6 lg:px-20 3xl:px-0 bg-basicBlack-10 h-12 rounded-b-lg">
                <Link href="/">
                    <h1 className="text-white font-semibold">
                        OemOem 
                    </h1>
                </Link>

            </nav>
        </nav>
    );
}

export default LoginNavbar;