"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input, Select } from "./formelements"
import Image from "next/image"


const schema = yup
  .object({
    fullname: yup.string().required(),
    phone:yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits'),
    address: yup.string().required(),
    area:yup.string().required().notOneOf(['select area'], 'option choose kar na be')
  })
  .required()


export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => alert(JSON.stringify(data))


  return (

    <div className="flex flex-col lg:flex-row justify-center items-center bg-white shadow-xl rounded-xl md:px-10">
       <div className="flex flex-row lg:flex-col justify-start items-center bg-white">
       <Image src="/Logo.png" alt="Image" width={500} height={500} className=" w-24 lg:w-64"/>
       <h1 className=" text-xl text-center font-semibold">Tiffin Service</h1>
       </div>
       <form onSubmit={handleSubmit(onSubmit)} className="form flex flex-col p-10 bg-white min-h-fit max-w-xl min-w-[290px] sm:min-w-[400px]"> 
         <Input label={'FullName'} name={'fullname'} register={register} errors={errors} autoComplete="on" className="input "/>
         <Input label={'Phone'} name={'phone'} register={register} errors={errors} type="number" autoComplete="on" className="input" />
         <Input label={'Address'} name={'address'} register={register} errors={errors} autoComplete="on" className="input" />
         <Select label={'Area'} name={'area'} register={register} errors={errors} options={['select area','Bhawarkua','IT park','Geeta bhawan']} autoComplete="off" className="select"/>
         <Select label={'Plan'} name={'plan'} register={register} errors={errors} options={['select plan','₹70/- one Meal','₹2999/- Lunch + Dinner ','₹1599/- only Lunch','₹1599/- only Dinner']} autoComplete="off" className="select"/>
         <input type="submit" className="bg-green-400 p-2 rounded mt-10" />
       </form>
    </div>
    
  )
}