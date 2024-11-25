import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Your go-to destination for stylish, high-quality clothing. Discover trendy and timeless collections for men, women, and kids, along with must-have accessories. Enjoy premium quality, affordable prices, and eco-friendly fashion with seamless shopping, fast shipping, and easy returns. Dress your best with us!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-212-456-7890</li>
                <li>contact@forclothingstore.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Clothingstore.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
