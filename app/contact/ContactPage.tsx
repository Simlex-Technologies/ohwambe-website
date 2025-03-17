"use client";
import images from "@/public/images";
import { sectionPadding } from "../styles/styles";
import HeroBanner from "../reusables/HeroBanner";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";


export default function ContactPage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission
  //   console.log(formData)
  // }

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
    <main className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        text="Contact Us"
        image={images.contact_image}
      />

      {/* Contact Content */}
      <div className={` py-12 ${sectionPadding}`}>
      <div className="grid md:grid-cols-[350px_1fr] gap-14">
        {/* Left Section */}
        <div className="md:w-[350px] bg-[#f9f9f9] p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <h2 className="text-xl font-semibold mb-2">We&apos;d love to hear from you</h2>
          <p className="text-sm text-gray1 mb-8">Send us a message and we&apos;ll respond as soon as possible</p>

          <div className="mb-8">
            <h3 className="text-lg mb-2 font-semibold">
              Need <span className="text-[#B88746]">Help?</span>
            </h3>
            <p className="text-sm text-gray1 mb-2">
              Get in touch with our team for assistance.
              <br />
              We&apos;re here to help!
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold">Call Us</h4>
           <div className="flex flex-col ">
           <Link href="tel:2349087866000" className="text-[#B88746] text-sm">+234 908 786 6000</Link>
           <Link href="tel:2349087866009" className="text-[#B88746] text-sm">+234 908 786 6009</Link>
           </div>
          </div>

          <div className="mt-4 text-gray1 flex gap-1">
            <h4 className="text-sm font-bold">Mail Us:</h4>
            <Link href={"mailto:events@ohwambe.com"} className="text-sm hover:text-[#B88746]">events@ohwambe.com</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8">
          <p className="text-lg text-gray1 mb-6 font-semibold">
            Please fill out the form below, and a member of our team will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-[#E7DCC8] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#B88746]"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-[#E7DCC8] rounded-xl text-sm  focus:outline-none focus:ring-1 focus:ring-[#B88746]"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-[#E7DCC8] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#B88746]"
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-[#E7DCC8] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#B88746]"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-[#E7DCC8] rounded-xl text-sm h-32 resize-none focus:outline-none focus:ring-1 focus:ring-[#B88746]"
                placeholder="Write us a message"
              />
            </div>

            <button
            onClick={handleSubmit}
              type="submit"
              className="bg-[#B88746] text-white px-6 py-2 rounded-xl text-sm hover:bg-[#a77a3d] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </main>
  )
}

