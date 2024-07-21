import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-basicLightGreen-10 p-5 border-red-600 z-20 text-white ">
            <div className="bg-basicBlack-10 rounded-lg p-10 pt-20 flex flex-col items-center gap-4">
                {/* Logo OemOem */}
                <Image
                    src="footerLogo.svg"
                    alt="menu"
                    width={164}
                    height={32}
                    className="inline-block cursor-pointer"
                />

                {/* Presented By */}
                <Image
                        src="presented.svg"
                        alt="menu"
                        width={320}
                        height={32}
                        className="inline-block cursor-pointer"
                    />

                {/* Socials */}
                <div className="mt-10 flex flex-col gap-5 items-center">
                    <div className="flex items-center gap-2">
                        <Image
                            src="instagram.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                        <p>Instagram</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="tiktok.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                        <p>TikTok</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="web.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />  
                        <p>Website OmahTI</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
