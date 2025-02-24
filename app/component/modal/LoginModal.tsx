import React, { FormEvent, useEffect, useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { Icons } from '../ui/icons'
import Label from '../ui/label'
import Input from '../ui/input'
import Link from 'next/link'
import Button from '../ui/button'
import SignUpModal from './SignUpModal'
import { signIn, useSession } from 'next-auth/react'
// import { LoginRequest } from '@/app/models/ILogin'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { catchError } from '@/app/constants/catchError'
import { LoginRequest } from '@/app/models/ILogin'

type Props = {
    visibility: boolean
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
    setIsSignUpModalVisible: (isVisible: boolean) => void; 
}

const LoginModal = ({ visibility, setVisibility, setIsSignUpModalVisible }: Props) => {

    // const { data: session, status } = useSession();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState<LoginRequest>()
    const [formMessage, setFormMessage] = useState<string>();

    const router = useRouter()

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        // Prevent default form submission
        e.preventDefault();

        // Validate user input
        if (!formValues?.email || !formValues.password) {
            setFormMessage('Please fill in all fields');
            return;
        }
        setFormMessage('');

        const email = formValues.email;
        const password = formValues.password;

        // Start loader
        setIsLoading(true);

        await signIn('credentials', { redirect: false, email: email, password: password })
            .then((response) => {

                if (response?.error) {
                    toast.error('Invalid login credentials. Please check your email and password, and try again.');
                    // setFormMessage('Invalid email or password');
                    // Close loader
                    setIsLoading(false);
                }

                if (response && !response.error) {
                    // router.push('/');
                    setVisibility(false)
                }
            })
            .catch((error) => {
                catchError(error);
                setFormMessage(
                    "We couldn't sign you in. Please verify your credentials, and ensure you provided the right information."
                );
                // Close loader
                setIsLoading(false);
            })
    };

    useEffect(() => {
        if (formMessage) {
            // Close after 5 seconds
            setTimeout(() => {
                setFormMessage('');
            }, 5000);
        }
    }, [formMessage])

    useEffect(() => {
        if (status == 'authenticated') {
            // router.push('/');
            setVisibility(false)
        }
    }, []);

    useEffect(() => {
        if (!visibility) {
            setIsLoading(false);
        }
    }, [visibility]);

    return (
        <ModalWrapper visibility={visibility} setVisibility={setVisibility} modalWrapperClassName='!z-50'>
            <div className="bg-white p-5 shadow-lg w-full rounded-2xl min-w-[calc(100vw_-_20px)] md:min-w-[400px] max-h-[90vh] hideScrollbar overflow-y-auto flex flex-col">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex flex-col">
                        <h1 className='text-mcNif-gray-2 text-xl font-bold'>Log in to your Account</h1>
                        <p className='text-mcNif-gray-3 text-base'>Enter your details below</p>
                    </div>
                    <span className='ml-auto w-fit bg-primary/25 rounded-[4px] hover:rounded-sm hover:bg-primary/20 transition-all ease-in-out duration-300 flex mb-3 cursor-pointer'
                        onClick={() => setVisibility(false)}
                    >
                        <Icons.CloseIcon />
                    </span>
                </div>
                <form action="" className='flex flex-col gap-5' onSubmit={handleLogin}>
                    <div className="w-full flex flex-col gap-[2px]">
                        <Label htmlFor='email' text={<>Email Address</>} />
                        <Input
                            type="text"
                            name="email"
                            id='email'
                            value={formValues?.email}
                            placeholder="Enter email address"
                            className="w-full border border-primary bg-white px-4 py-2 rounded-[10px!important] text-base placeholder:text-sm outline-none"
                            onChange={(e) => setFormValues({ ...formValues, email: e.target.value } as LoginRequest)}
                        />
                    </div>

                    <div className="w-full flex flex-col gap-[2px]">
                        <div className="flex items-center justify-between">
                            <Label text={<>Password</>} />
                            {/* <Link href="/forgot-password" className='flex items-end justify-end text-xs mt-1 text-primary cursor-pointer'>Forgot Password?</Link> */}
                        </div>
                        <div className="flex items-center justify-between bg-white !rounded-lg  border border-primary overflow-hidden">
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder='************'
                                className='!rounded-none !border-none !bg-transparent py-2 pl-4'
                                id="password"
                                onChange={(e) => setFormValues({
                                    ...formValues, password: e.target.value
                                } as LoginRequest
                                )}
                            />
                            <span className='cursor-pointer px-2' onClick={() => setShowPassword(!showPassword)} >
                                {showPassword ? <Icons.EyeOpen /> : <Icons.EyeClosed />}
                            </span>
                        </div>
                    </div>

                    {formMessage && <p className='text-mcNif-red text-sm -mt-5'>{formMessage}</p>}
                    <div className="flex flex-col gap-4">
                        <Button
                            type='submit'
                            disabled={isLoading}
                            className={`relative overflow-hidden text-sm ${isLoading ? "disabled" : ""}`}>
                            Log in
                        </Button>
                        {/* <Button
                                type='submit'
                                className={`relative overflow-hidden text-sm flex items-center gap-2 justify-center w-full !bg-transparent !text-mcNif-gray-2 !border !border-mcNif-gray-2 `}>
                                <Icons.GoogleIcon />  Sign in with Google
                            </Button> */}
                    </div>
                    <p className='text-sm md:text-base text-center text-mcNif-gray-2'>Don&apos;t have an account?&nbsp;
                        <span onClick={() => {
                            setVisibility(false)
                            setIsSignUpModalVisible(true)
                        }} className='text-primary cursor-pointer'>
                            Create one here
                        </span>
                    </p>
                </form>
            </div>
        </ModalWrapper>
    )
}

export default LoginModal