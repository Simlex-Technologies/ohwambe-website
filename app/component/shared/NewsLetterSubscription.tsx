import React, { useEffect, useState } from 'react'
import Button from '../ui/button'
// import { useCreateNewsletterSubscriber } from '@/app/api/apiClients';
import { emailRegex } from '@/app/constants/emailRegex';
import { toast } from 'sonner';

type Props = {}
enum FieldConfirmationStatus {
    Empty = 1,
    Invalid = 2,
    Valid = 3,
}

const NewsLetterSubscription = (props: Props) => {
    // const createNewsletterSubscriber = useCreateNewsletterSubscriber();
    const [email, setEmail] = useState<string>();
    
    const [emailErrorMsg, setEmailErrorMsg] = useState<{
        value: string;
        status: FieldConfirmationStatus;
    }>();
    const [isSubscribing, setIsSubscribing] = useState<boolean>(false);

    // async function subscribetoNewsletter() {
    //     if (!email || !emailRegex.test(email)) {
    //         setEmailErrorMsg({
    //             value: 'Please input your email address',
    //             status: FieldConfirmationStatus.Empty,
    //         });
    //         return;
    //     }
    //     // Close error message
    //     setEmailErrorMsg(undefined);

    //     // Start loader
    //     setIsSubscribing(true);
    //     toast.loading('Subscribing to newsletter...');

    //     await createNewsletterSubscriber(email)
    //         .then((response) => {
    //             toast.success('Subscribed to newsletter successfully');
    //             // Clear input
    //             setEmail(undefined);
    //         })
    //         .catch((error) => {
    //             toast.error('Error subscribing to newsletter');
    //         })
    //         .finally(() => {
    //             // Stop loader
    //             setIsSubscribing(false);
    //         });
    // }

    // Write a useEffect to close all toasts after 5 seconds
    useEffect(() => {
        if (!isSubscribing)
            setTimeout(() => {
                toast.dismiss();
            }, 3000);
    }, [isSubscribing]);
    return (
        <div className='mt-8 mb-8'>
            <p className='mb-3 font-semibold'>Subscribe to our Newsletter</p>
            <div className='bg-white flex items-center rounded-3xl justify-between mb-3 max-w-[400px]'>
                <input
                    type='email'
                    name='email'
                    value={email ?? ''}
                    placeholder='Email Address'
                    className='text-base text-black bg-transparent outline-none placeholder:text-sm ml-3'
                    onChange={(e) => {
                        if (e.target.value.trim() === '') {
                            setEmailErrorMsg({
                                value: 'Please enter your email address',
                                status: FieldConfirmationStatus.Empty,
                            });
                        } else if (!emailRegex.test(e.target.value.trim())) {
                            setEmailErrorMsg({
                                value: 'Please enter a valid email address',
                                status: FieldConfirmationStatus.Invalid,
                            });
                        } else {
                            setEmailErrorMsg({
                                value: '',
                                status: FieldConfirmationStatus.Valid,
                            });
                        }
                        setEmail(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        // If enter key was pressed, and the user is not subscribing, and the email is valid
                        if (e.key === 'Enter' && !isSubscribing) {
                            if (!emailRegex.test(e.currentTarget.value)) {
                                // Show error message
                                setEmailErrorMsg({
                                    value: 'Please input your email address',
                                    status: FieldConfirmationStatus.Empty,
                                });
                            }
                            // Subscribe to newsletter
                            // subscribetoNewsletter();
                        }
                    }}
                />
                {/* <Button disabled={isSubscribing} onClick={() => subscribetoNewsletter()} className='text-sm mr-1 my-[2px] disabled:pointer-events-none disabled:opacity-60'>
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </Button> */}
                <Button>Subscribe</Button>

            </div>
            {emailErrorMsg && (
                <span className='text-sm text-red-500'>{emailErrorMsg.value}</span>
            )}
        </div>
    )
}

export default NewsLetterSubscription