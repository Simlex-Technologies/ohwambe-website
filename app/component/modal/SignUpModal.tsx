import React, { FormEvent, useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { Icons } from '../ui/icons'
import Label from '../ui/label'
import Input from '../ui/input'
import Button from '../ui/button'
// import { useRegisterUser } from '@/app/api/apiClients'
// import { UserCreationRequest } from '@/app/models/IUser'
import { emailRegex } from '@/app/constants/emailRegex'
import { toast } from 'sonner'
import { UserCreationRequest } from '@/app/models/IUser'
// import { useUserContext } from '@/app/context/UserContext'

type Props = {
    visibility: boolean
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUpModal = ({ visibility, setVisibility }: Props) => {

    // const registerUser = useRegisterUser();
    // const { setIsLoginPromptVisible } = useUserContext();

    const [showPassword, setShowPassword] = useState(false);
    const [confirmationPassword, setConfirmationPassword] = useState<string>();
    const [formValues, setFormValues] = useState<UserCreationRequest>();
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [validationErrorsExist, setValidationErrorsExist] = useState(false);

    const onFormValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues as UserCreationRequest,
            [e.target.name]: e.target.value
        })
    };

    const validateForm = () => {
        if (
            !formValues?.firstName ||
            !formValues?.lastName ||
            !formValues?.email ||
            !formValues?.phoneNumber ||
            !formValues?.password
        ) {
            setValidationErrorsExist(true);
            return false;
        }

        if (!emailRegex.test(formValues.email)) {
            setValidationErrorsExist(true);
            return false;
        }

        setValidationErrorsExist(false);
        return true;
    };

    const handleRegisterUser = async (e: FormEvent<HTMLFormElement>) => {
        // Prevent default form submission
        e.preventDefault();

        if (!validateForm() || isCreatingAccount || !formValues) {
            toast.error('Please fill in all required fields correctly');
            return;
        }

        toast.loading('Processing your request...');

        setIsCreatingAccount(true);

        // await registerUser(formValues)
        //     .then((response) => {
        //         toast.success('Account created successfully');
        //         setVisibility(false);
        //         setIsLoginPromptVisible(true);
        //     })
        //     .catch((error) => {
        //         if (error.response?.data.errorCode == "Passwords must have at least one digit ('0'-'9').") {
        //             toast.error('Password must contain at least one digit');
        //             return;
        //         };

        //         // Error when user with the same email already exists
        //         if (error.response?.data.errorCode == 2019) {
        //             toast.error('An account with the same email already exists');
        //             return;
        //         };
        //         toast.error('An error occurred while creating your account. Please try again later');
        //     })
            // .finally(() => {
            //     setIsCreatingAccount(false);
            //     toast.dismiss();
            // })
    };

    return (
        <>
            <ModalWrapper visibility={visibility} setVisibility={setVisibility} modalWrapperClassName='!z-50'>
                <div className="bg-white p-5 shadow-lg w-full rounded-2xl min-w-[calc(100vw_-_20px)] md:min-w-[400px] max-h-[80vh] hideScrollbar overflow-y-auto flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex flex-col">
                            <h1 className='text-mcNif-gray-2 text-xl font-bold'>Create your Account</h1>
                            <p className='text-mcNif-gray-3 text-base'>Enter your details below</p>
                        </div>
                        <span className='ml-auto w-fit bg-primary/25 rounded-[4px] hover:rounded-sm hover:bg-primary/20 transition-all ease-in-out duration-300 flex mb-3 cursor-pointer'
                            onClick={() => setVisibility(false)}
                        >
                            <Icons.CloseIcon />
                        </span>
                    </div>
                    <form onSubmit={handleRegisterUser} className='flex flex-col gap-5'>
                        <div className='w-full flex flex-row gap-2'>
                            <div className="w-full flex flex-col gap-[2px]">
                                <Label text={<>First Name</>} />
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter first name"
                                    value={formValues?.firstName || ''}
                                    onChange={onFormValueChange}
                                    className="w-full border border-primary bg-white px-4 py-2 rounded-[10px!important] text-base placeholder:text-sm outline-none"
                                    hasError={validationErrorsExist && !formValues?.firstName}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-[2px]">
                                <Label text={<>Last Name</>} />
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter last name"
                                    value={formValues?.lastName || ''}
                                    onChange={onFormValueChange}
                                    className="w-full border border-primary bg-white px-4 py-2 rounded-[10px!important] text-base placeholder:text-sm outline-none"
                                    hasError={validationErrorsExist && !formValues?.lastName}
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[2px]">
                            <Label text={<>Email Address</>} />
                            <Input
                                type="text"
                                name="email"
                                placeholder="Enter email address"
                                value={formValues?.email || ''}
                                onChange={onFormValueChange}
                                className="w-full border border-primary bg-white px-4 py-2 rounded-[10px!important] text-base placeholder:text-sm outline-none"
                                hasError={validationErrorsExist && !formValues?.email}
                            />
                        </div>
                        <div className="w-full flex flex-col gap-[2px]">
                            <Label text={<>Phone Number</>} />
                            <Input
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                value={formValues?.phoneNumber || ''}
                                onChange={onFormValueChange}
                                className="w-full border border-primary bg-white px-4 py-2 rounded-[10px!important] text-base placeholder:text-sm outline-none"
                                hasError={validationErrorsExist && !formValues?.phoneNumber}
                            />
                        </div>

                        <div className="w-full flex flex-col gap-[2px]">
                            <Label text={<>Password</>} />
                            <div className="flex items-center justify-between bg-white !rounded-lg  border border-primary overflow-hidden">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder='************'
                                    onChange={onFormValueChange}
                                    className='!rounded-none !border-none !bg-transparent py-2 pl-4'
                                    id="password"
                                    hasError={validationErrorsExist && !formValues?.password}
                                />
                                <span className='cursor-pointer px-2' onClick={() => setShowPassword(!showPassword)} >
                                    {showPassword ? <Icons.EyeOpen /> : <Icons.EyeClosed />}
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[2px]">
                            <Label text={<>Confirm Password</>} />
                            <div className="flex items-center justify-between bg-white !rounded-lg  border border-primary overflow-hidden">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder='************'
                                    value={confirmationPassword}
                                    onChange={(e) => setConfirmationPassword(e.target.value)}
                                    className='!rounded-none !border-none !bg-transparent py-2 pl-4'
                                    id="password"
                                    hasError={validationErrorsExist && !confirmationPassword || formValues?.password !== confirmationPassword}
                                />
                                <span className='cursor-pointer px-2' onClick={() => setShowPassword(!showPassword)} >
                                    {showPassword ? <Icons.EyeOpen /> : <Icons.EyeClosed />}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button
                                type='submit'
                                disabled={isCreatingAccount}
                                className={`relative overflow-hidden text-sm`}>
                                Create account
                            </Button>
                            {/* <Button
                                type='button'
                                className={`relative overflow-hidden text-sm flex items-center gap-2 justify-center w-full !bg-transparent !text-mcNif-gray-2 !border !border-mcNif-gray-2 `}>
                                <Icons.GoogleIcon />  Sign in with Google
                            </Button> */}
                        </div>
                        <p className='text-sm md:text-base text-center text-mcNif-gray-2'>Already have an account?&nbsp;
                            <span className='text-primary cursor-pointer' onClick={() => {
                                setVisibility(false)
                                // setIsLoginPromptVisible(true)
                            }}>
                                Login here
                            </span>
                        </p>
                    </form>
                </div>
            </ModalWrapper>
        </>
    )
}

export default SignUpModal