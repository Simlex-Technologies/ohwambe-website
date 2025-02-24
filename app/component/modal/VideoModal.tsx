import React from 'react'
import { Icons } from '../ui/icons';
import ModalWrapper from './ModalWrapper';
import Button from '../ui/button';

type Props = {
    visibility: boolean;
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoModal = ({ visibility, setVisibility }: Props) => {
    return (
        <ModalWrapper visibility={visibility} setVisibility={setVisibility}>
            <div className="bg-white/90 p-4 shadow-lg flex flex-col gap-4 items-center w-full md:w-[75vw] rounded-xl h-[70vh] hideScrollbar overflow-y-auto">
                <iframe
                    width="100%"
                    height="100%"
                    className='rounded-xl'
                    src={"https://www.youtube.com/embed/j7QTjryA0H8?si=hPNbcuKouz6fSurD"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <Button onClick={() => setVisibility(false)}>
                    Close
                </Button>
            </div>
        </ModalWrapper>
    )
}

export default VideoModal