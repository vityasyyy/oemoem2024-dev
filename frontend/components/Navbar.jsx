import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between relative mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 bg-basicBlack-10 h-12 rounded-b-lg">
            <Link href="/">
                <h1 className="text-white font-semibold">
                    OemOem 
                </h1>
            </Link>

            {/* Program dan Kelas */}
            <div className="hidden md:flex items-center space-x-5">
                <h2 className="text-white">
                    Program dan Kelas
                </h2>   
                <div className="flex items-center justify between gap-2">
                    <button className="flex items-center p-1 rounded justify-center gap-3 bg-basicRed-10 text-white border-basicRed-10" type='login'>
                        <label className="cursor-pointer">Masuk</label>
                    </button>
                    <button className="flex items-center p-1 justify-center gap-3 border-basicWhite-10 bg-basicWhite-10 text-basicRed-10 rounded" type='login'>
                        <label className="cursor-pointer">Daftar</label>
                    </button>
                </div>
            </div>

            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer md:hidden"
            />
        </nav>
    );
}

export default Navbar;