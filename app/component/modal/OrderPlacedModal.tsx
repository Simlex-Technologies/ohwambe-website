import React from 'react'
import { Icons } from '../ui/icons';
import ModalWrapper from './ModalWrapper';
import Image from 'next/image';
import Button from '../ui/button';
import images from '@/public/images';
import Link from 'next/link';
import { ApplicationRoutes } from '@/app/constants/applicationRoutes';

type Props = {
    visibility: boolean
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderPlacedModal = ({ visibility, setVisibility }: Props) => {
    return (
        <ModalWrapper visibility={visibility} setVisibility={setVisibility}>
            <div className="bg-white p-5 shadow-lg w-full rounded-2xl max-w-[300px] max-h-[90vh] hideScrollbar overflow-y-auto flex flex-col items-center text-center">
                {/* <span className='ml-auto w-fit hover:rounded-sm hover:bg-primary/20 transition-all ease-in-out duration-300 flex mb-3 cursor-pointer'
                    onClick={toggleVisibility}
                >
                    <Icons.CloseIcon />
                </span> */}
                <h1 className='text-lg text-primary mb-1'>
                    Your Order has been Successfully
                    Placed!
                </h1>
                <p className='text-sm text-mcNif-dark-grey/70'>
                    An email containing your order details will be
                    sent to you shortly. Thank you for being
                    our valued customer.
                </p>
                <div className='w-24 h-24 relative mb-4'>
                    <Image
                        src={images.order_placed_gif}
                        alt='order placed icon'
                        className='object-contain'
                    />
                </div>
                <Link href={ApplicationRoutes.ManageOrder} className='bg-primary text-white font-medium py-3 px-6 rounded-full text-center hover:bg-primary-foreground w-full'>
                    Track your Order
                </Link>
            </div>
        </ModalWrapper>
    )
}

export default OrderPlacedModal