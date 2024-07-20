import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between relative mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0">
            <Link href="/">
                <h1 className="no-underline">
                    OemOem 
                </h1>
            </Link>

            {/* Program dan Kelas */}
            <div className="flex items-center space-x-5">
                <h2>
                    Program dan Kelas
                </h2>   
                <button className="flex items-center justify-center gap-3 border bg-black-90 text-white transition-all hover:bg-black" type='login'>
                    <label className="bold-16 whitespace-nowrap cursor-pointer">Login</label>
                </button>
                <button className="flex items-center justify-center gap-3 border bg-black-90 text-white transition-all hover:bg-black" type='login'>
                    <label className="bold-16 whitespace-nowrap cursor-pointer">Sign Up</label>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;