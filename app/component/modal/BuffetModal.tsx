import React from 'react'
import { Icons } from '../ui/icons';
import ModalWrapper from './ModalWrapper';

type Props = {
    buffetErrorModal: {
        visible: boolean;
        value: string;
    }
    setBuffetErrorModal: React.Dispatch<React.SetStateAction<{
        visible: boolean;
        value: string;
    }>>
    toggleVisibility: () => void
}

const BuffetModal = ({ buffetErrorModal, setBuffetErrorModal, toggleVisibility }: Props) => {
    return (
        <ModalWrapper visibility={buffetErrorModal.visible} setVisibility={toggleVisibility}>
            <div className="bg-white p-4 shadow-lg w-full rounded-xl max-w-[250px] max-h-[90vh] hideScrollbar overflow-y-auto">
                <span className='ml-auto w-fit hover:rounded-sm hover:bg-primary/20 transition-all ease-in-out duration-300 flex mb-3 cursor-pointer'
                    onClick={toggleVisibility}
                >
                    <Icons.CloseIcon />
                </span>
                <h1 className='text-sm text-start'>{buffetErrorModal.value}</h1>
            </div>
        </ModalWrapper>
    )
}

export default BuffetModal