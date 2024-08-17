import React from 'react'
import StrikeForm from '../components/Form/StrikeForm'
import StrikeInput from '../components/Form/StrikeInput'
import StrikeSelect from '../components/Form/StrikeSelect'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup";
import { personalInfoSchema } from '../schemas/personalInfoSchema'
import { locationSchema } from '../schemas/locationSchema'
import { useSelector } from 'react-redux'

const countryOptions = [
  {
    label:'Bangladesh',
    value:'Bangladesh'
  },
  {
    label:'Pakistan',
    value:'Pakistan'
  },
  {
    label:'India',
    value:'India'
  },
  {
    label:'Nepal',
    value:'Nepal'
  },
]

const cityOptions = [
  {
    label:'Dhaka',
    value:'Dhaka'
  },
  {
    label:'Korachi',
    value:'Korachi'
  },
  {
    label:'Mumbai',
    value:'Mumbai'
  },
  {
    label:'Kathmundo',
    value:'Kathmundo'
  },
]

export default function LocationInfo() {
  const navigate = useNavigate()
  const { country, city, pinCode } = useSelector((state) => state.createUser);
  const defaultValues = {
    country,
    city,
    pinCode
  }
  const handleSubmitLocationInfo = (data)=>{
    console.log("Location Data===> ", data);
  }
  return (
    <div className='flex justify-center items-center'>
      <StrikeForm onSubmit={handleSubmitLocationInfo} resolver={yupResolver(locationSchema)} defaultValues={defaultValues}>
      <h3 className="font-bold text-[2rem] my-2">Location Informations</h3>
        <div className='grid grid-cols-2 gap-5'>
        <StrikeSelect options={countryOptions} name="country" label="Country"/>
        <StrikeSelect options={cityOptions} name="city" label="City"/>
        <StrikeInput name="pinCode" label="Pin Code" type="number"/>
        </div>
        <div className="flex justify-end gap-5 items-center mt-[2rem]">
          <button onClick={()=>navigate(-1)} type='button' className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold">
            Previous
          </button>
          <button type='submit' className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold">
            Submit
          </button>
        </div>
      </StrikeForm>
    </div>
  )
}

