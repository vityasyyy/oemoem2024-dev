import Image from "next/image";

const Loading = () => {
    return (
        <>
            <div className="fixed bg-basicBlack-10 inset-0 z-[998]"></div>
            <Image 
                src="diceloading.svg"
                width={1000}
                height={1000}
                className="z-[999] absolute top-0 bottom-0 left-0 right-0 ml-auto mr-auto"
            />
        </>
    )
};

export default Loading;