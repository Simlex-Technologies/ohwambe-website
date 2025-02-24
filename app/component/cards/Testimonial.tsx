import { FunctionComponent, ReactElement } from "react";
import CustomImage from "../ui/image";
import Link from "next/link";
import { Testimony } from "@/app/models/ITestimony";

interface TestimonialProps {
testimony: Testimony
}

const Testimonial: FunctionComponent<TestimonialProps> = ({ testimony }): ReactElement => {
    return (
        <Link href={testimony.reviewLink} target="_blank" className=" bg-white min-w-[280px] px-6 py-5 rounded-[20px] h-full flex flex-col">
            <div className="relative h-[70px] w-[70px] mb-1">
                <CustomImage src={testimony.image} alt='user' className='object-cover rounded-full z-10' />
            </div>
            <h3 className='text-[#2B2B2B] text-2xl  mb-4 '>{testimony.name}</h3>

            <p className='text-[#666666] leading-6 mb-2'>{testimony.text}</p>

            {/* <span className="flex flex-row mt-auto gap-[3px]">
                {([...Array(testimony.ratingNumber)].map((_, index) => (
                    <Icons.Star />
                )))}
            </span> */}
        </Link>
    );
}

export default Testimonial;