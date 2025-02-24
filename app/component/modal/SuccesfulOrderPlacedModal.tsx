import React, { Dispatch, SetStateAction } from 'react'
import { Icons } from '../ui/icons';
import ModalWrapper from './ModalWrapper';
import Image from 'next/image';
import Button from '../ui/button';
import images from '@/public/images';
import Link from 'next/link';
import { ApplicationRoutes } from '@/app/constants/applicationRoutes';
import { useRouter } from 'next/navigation';
import { DishCategory } from '@/app/enums/DishCategory';

type Props = {
    visibility: boolean
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
    activeTab: DishCategory
    setActiveTab: Dispatch<SetStateAction<DishCategory>>
    setIsPreviewOrderButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const SuccesfulOrderPlacedModal = ({ visibility, setVisibility, activeTab, setActiveTab,setIsPreviewOrderButtonClicked }: Props) => {
    const router = useRouter()
    const handleContinueExploring = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent default link behavior
        setIsPreviewOrderButtonClicked(false)
        setActiveTab(DishCategory.OnDemandDelightsByMcnif); // Programmatically set the active tab to OnDemandDelightsByMcnif
    }
    return (
        <ModalWrapper visibility={visibility} setVisibility={setVisibility}>
            <div className="bg-white p-5 shadow-lg w-full rounded-2xl max-w-[300px] max-h-[90vh] hideScrollbar overflow-y-auto flex flex-col items-center text-center">
                {/* <span className='ml-auto w-fit hover:rounded-sm hover:bg-primary/20 transition-all ease-in-out duration-300 flex mb-3 cursor-pointer'
                    onClick={toggleVisibility}
                >
                    <Icons.CloseIcon />
                </span> */}
                <h1 className='text-lg text-primary mb-1'>
                    Your Order has been Successfully Placed!
                </h1>
                <p className='text-sm text-mcNif-dark-grey/70 mb-4'>
                    A quote will be sent to your email within 48hrs. To get your
                    quote faster
                </p>
                <p className='text-mcNif-dark-grey/70'>Please Call</p>
                <Link href='tel:07359543209' className='text-primary font-semibold text-lg'>07359543209</Link>
                <p className='text-mcNif-dark-grey/70 pt-4'>or WhatsApp</p>
                <Link href='tel:447707867565' className='text-primary font-semibold text-lg mb-4'>+447707867565</Link>
                <button
                    onClick={handleContinueExploring}
                    className='bg-primary text-white font-medium py-3 px-6 rounded-full text-center hover:bg-primary-foreground w-full'>
                    Continue Exploring
                </button>
            </div>
        </ModalWrapper>
    )
}

export default SuccesfulOrderPlacedModal