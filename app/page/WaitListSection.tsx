import React, { useState } from 'react';
import { sectionPadding } from '../styles/styles';
import Image from 'next/image';
import images from '@/public/images';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

const WaitListSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  
    if (!email) {
      setError('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
  
    setIsLoading(true);
  
    fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(async response => {
        const result = await response.json();
        if (result.success) {
          toast.success('Successfully added to the waitlist!');
          setEmail('');
        } else {
          setError('Failed to join waitlist. Try again later.');
          toast.error('Failed to join waitlist. Try again later.');
        }
      })
      .catch(() => {
        setError('Error submitting form. Please try again.');
        toast.error('Error submitting form. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  return (
    <section className={`${sectionPadding} mb-20`}>
      <ToastContainer />
      <div className="flex items-center justify-center p-4">
        <div className="relative w-full rounded-3xl overflow-hidden">
          {/* Background Image with Overlay */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="absolute inset-0 z-0"
          >
            <Image
              src={images.wait_list}
              alt="Palm trees background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10">
            {/* Top Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="flex justify-center items-center mb-8"
            >
              <button className="py-2 px-4 rounded-full text-sm font-semibold shadow-lg text-black bg-white hover:bg-white/90">
                Join Our Waitlist
              </button>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="max-w-2xl mx-auto text-center space-y-6"
            >
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-2xl md:text-4xl font-bold text-secondary"
              >
                Be the First to Experience Ohwambe!
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-white/90 text-sm md:text-base md:w-[600px] m-auto"
              >
                We're working hard to bring you the ultimate platform for planning and celebrating life's most memorable
                events. By joining our waitlist, you'll get exclusive early access and updates before anyone else.
              </motion.p>

              {/* Form */}
              <motion.form
                initial="hidden"
                animate="visible"
                variants={textVariants}
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center sm:flex-row gap-3 max-w-xl mx-auto mt-8 w-full"
              >
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white border border-[#BABABA] outline-none px-4 py-2.5 rounded-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto text-nowrap px-6 py-2.5 rounded-full bg-secondary text-black font-medium hover:bg-[#F6B84B]/90 transition-colors duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Join Waitlist'}
                </button>
              </motion.form>
              {error && <p className="text-red-500">{error}</p>}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitListSection;