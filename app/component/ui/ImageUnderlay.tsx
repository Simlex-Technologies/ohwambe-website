import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

type Props = {
    image: StaticImageData;
}
const CorneredImageWithUnderlay = ({ image }: Props) => {
    return (
        <div className="flex items-center relative w-full mx-auto sm:max-w-[450px] h-[350px]">
            <span className="absolute w-full h-full bg-primary/20 rounded-tr-[50%] rounded-tl-[100px] rounded-bl-[100px] -right-4 top-4" />
            <div className="z-20 absolute left-0 rounded-tr-[50%] rounded-tl-[100px] rounded-bl-[100px] overflow-hidden w-full h-full">
                <Image src={image} alt="services image" className='object-cover h-full w-full' />
            </div>
        </div>
    )
}
export default CorneredImageWithUnderlay