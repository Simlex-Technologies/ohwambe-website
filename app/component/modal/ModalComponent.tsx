import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import ModalWrapper from './ModalWrapper';
import { Icons } from '../ui/icons';
import Button from '../ui/button';
import ModalIndicatorIcon from '../Reusable/ModalIndicatorIcon';

interface ModalComponentProps {
    setVisibility: Dispatch<SetStateAction<boolean>>;
    visibility: boolean;
    children?: ReactNode;
    rightActionButton?: { visibility: boolean; text: string; function: () => Promise<void>; }
    leftActionButton?: { visibility: boolean; text: string; }
    isLoading?: boolean;
    contentType?: string;
}

interface SuccessModalComponentProps {
    setVisibility: Dispatch<SetStateAction<boolean>>;
    visibility: boolean;
    messageTitle: string;
    description: string;
    actionBtnFunction?: () => Promise<void>;
    actionButtonText?: string;
    isLoading?: boolean;
}


// Success modal component
export const SuccessModalComponent = ({
    setVisibility,
    visibility,
    messageTitle,
    description,
    actionBtnFunction,
    actionButtonText,
    isLoading
}: SuccessModalComponentProps) => {
    return (
        <ModalWrapper visibility={visibility} setVisibility={setVisibility}>
            <div
                className="bg-white w-full h-full rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <ModalIndicatorIcon
                        icon={<Icons.CheckIcon />}
                        color='green'
                    />
                    <span className='-translate-y-2 cursor-pointer w-10 h-10 rounded-full grid place-items-center hover:bg-mcNif-light-gray' onClick={() => setVisibility(false)}>
                        <Icons.CloseIcon />
                    </span>
                </div>
                <div className="">
                    <h2 className='text-mcNif-gray-2 font-semibold text-lg'>{messageTitle}</h2>
                    <p className={`max-w-[352px] text-mcNif-gray-3 text-sm leading-5 ${actionBtnFunction && "mb-8"}`}>{description}</p>
                    {
                        actionBtnFunction && (
                            <div className="flex items-center gap-3">
                                <Button
                                    type='button'
                                    className='bg-transparent border border-primary !text-mcNif-gray-2 w-full !p-2 hover:bg-mcNif-light-gray transition'
                                    onClick={() => setVisibility(false)}
                                >
                                    No, Cancel
                                </Button>
                                <Button
                                    type='submit'
                                    disabled={isLoading}
                                    style={isLoading ? { opacity: '0.6', pointerEvents: 'none' } : {}}
                                    className='w-full relative overflow-hidden !p-2 hover:bg-mcNif-gray-2 transition'
                                    onClick={() => actionBtnFunction()}
                                >
                                    {actionButtonText}
                                </Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </ModalWrapper>
    )
}






