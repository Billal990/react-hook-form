import React from 'react'
import StrikeForm from '../components/Form/StrikeForm'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactInfoSchema } from '../schemas/contactInfoSchema'
import StrikePhone from '../components/Form/StrikePhone'
import StrikeInput from '../components/Form/StrikeInput'
import { useSelector } from 'react-redux'

export default function ContactInfo() {
  const navigate = useNavigate()
  const { phone, email } = useSelector((state) => state.createUser);
  const defaultValues = {
    email,
    phone
  }
  const handleSubmitContactInfo = (data)=>{
    console.log("Contact Info===> ", data)
    navigate("/personal-info")
  }
  return (
    <div className='flex justify-center items-center'>
      <StrikeForm onSubmit={handleSubmitContactInfo} resolver={yupResolver(contactInfoSchema)} defaultValues={defaultValues}>
      <h3 className="font-bold text-[2rem] my-2">Contact Informations</h3>
        <div className='space-y-[1rem]'>
        <StrikePhone name="phone" type="number" label="Mobile Number"/>
        <StrikeInput name="email" type="email" label="Email"/>
        <div className="flex justify-end gap-5 items-center">
          <button onClick={()=>navigate(-1)} type='button' className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold">
            Previous
          </button>
          <button type='submit' className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold">
            Next
          </button>
        </div>
        </div>
      </StrikeForm>
    </div>
  )
}
