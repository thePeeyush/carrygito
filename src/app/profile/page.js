'use client'
import Plans from '@/components/Plans';
import userData from '@/store/userdata';
import Image from 'next/image';
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { TbFocusAuto } from "react-icons/tb";
import { BsBoxSeamFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import ourPlans from "@/data/ourPlans.json";
import Order from '@/components/Order';
import useProfile from '@/hooks/useProfile';

const Profile = () => {
  useProfile()
  const {profile} = userData(s=>s);
  const handleLogOut = () =>{
    alert('You want to Logout')
  }
  return (
    <div className='p-4 max-w-2xl mx-auto' >
      <div className='flex flex-col py-6 md:flex-row items-center  gap-4 rounded-xl rounded-b-none justify-center md:justify-start'>
        <button onClick={handleLogOut} className='text-3xl text-red-600 bg-red-100 rounded-lg p-1 mr-auto' ><CiLogout/></button>
        <Image
          src='/Logo-light.png'
          alt='profile'
          width={100}
          height={100}
          className='rounded-full w-20 h-20 md:w-12 md:h-12'
        />
        <h1 className='font-bold text-3xl whitespace-nowrap text-ellipsis overflow-hidden max-w-full'>{profile?.name}</h1>
        <p className='text-gray-700 text-3xl font-thin'>{profile?.phone}</p>
      </div>

      <div className='flex flex-col md:flex-row gap-4  lg:items-center border border-green-600 bg-green-200  p-6 rounded-xl'>
        <FaLocationDot className='text-green-600' />
        <p className='text-gray-800'><span className='font-bold text-green-600'>Address :</span> {profile.address}</p>
        <p className='text-gray-800'><span className='font-bold text-green-600'>Area :</span> {profile.area}</p>
      </div>
      <div className='mt-6 flex flex-col gap-4 rounded-xl border border-yellow-600'>
        <div className='flex gap-4 items-center p-6 pb-2 rounded-xl rounded-b-none'>
          <BsBoxSeamFill className='text-yellow-700 text-xl' />
          <p className='text-gray-700'><span className='font-bold text-yellow-700'>Orders :</span> {profile?.orders?.length || 'No Orders'}</p>
        </div>
        {profile?.orders?.length > 0 && (
          <div className="flex flex-col gap-6 items-center p-6 pt-0">
            {profile?.orders?.map((order) => {
              return <Order key={order.$id} orderID={order.$id} orderStatus={order.status}/>
            })}
          </div>
        )}
      </div>

      <div className='mt-6 flex flex-col gap-4 rounded-xl border border-red-600'>
        <div className='flex gap-4 items-center p-6 pb-2 border-b border-red-600 rounded-xl rounded-b-none'>
          <TbFocusAuto className='text-red-700 text-xl' />
          <p className='text-gray-700'><span className='font-bold text-red-700'>Active Plan :</span> {profile?.plans || 'No Plan'}</p>
        </div>

      </div>
    </div>
  )
}

export default Profile