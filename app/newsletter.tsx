"use client";
import { useState } from 'react';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email to server)
    console.log('Email:', email);
  };

  return (
    <div className="w-full mx-auto py-28 px-8 text-primary bg-black flex flex-col items-center">
      <h4 className="text-3xl md:text-4xl font-bold mb-4 text-center">Subscribe to our newsletter</h4>
      <p className="font-sm md:font-normal mb-6 text-lg text-center max-w-[600px]">Get all the update of the grants, funding opportunity and latest news in the campus for you.</p>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className="flex items-center justify-center bg-primary p-2 rounded-full mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="min-w-[300px]  md:w-1/2 px-4 py-2 rounded-md focus:outline-none font-normal  text-black bg-primary"
          />
          <button type="submit" className="hidden sm:block text-xl font-normal px-6 py-4 bg-black rounded-full">
            Subscribe
          </button>
        </div>
        <button type="submit" className='bg-primary mt-4 text-black p-4 px-10 rounded-full w-full sm:hidden font-semibold font-xl'>
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterSubscription;