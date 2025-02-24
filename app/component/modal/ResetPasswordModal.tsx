import React from 'react'
import ModalWrapper from './ModalWrapper'

type Props = {
    visibility: boolean
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ForgotPasswordModal({ visibility, setVisibility }: Props) {
    return (
        <ModalWrapper visibility={visibility} setVisibility={setVisibility} modalWrapperClassName='!z-50'>
            <div className="bg-white p-5 shadow-lg w-full rounded-2xl min-w-[calc(100vw_-_20px)] md:min-w-[400px] max-h-[90vh] hideScrollbar overflow-y-auto flex flex-col">
                <div>ForgotPasswordModal</div>

                <button></button>
            </div>
        </ModalWrapper>
    )
}