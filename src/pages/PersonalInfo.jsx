import React from 'react'
import StrikeForm from '../components/Form/StrikeForm'
import StrikeFile from '../components/Form/StrikeFile'
import StrikeInput from '../components/Form/StrikeInput'
import StrikeSelect from '../components/Form/StrikeSelect'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup";
import { personalInfoSchema } from '../schemas/personalInfoSchema'
import { useSelector } from 'react-redux'

const genderOptions = [
  {
    label:'Male',
    value:'Male'
  },
  {
    label:'Female',
    value:'Female'
  },
  {
    label:'Other',
    value:'Other'
  },
]

export default function PersonalInfo() {
  const navigate = useNavigate()
 
  const {firstName, lastName, gender, file} = useSelector(state => state.createUser);
  const defaultValues = {
   firstName,
   lastName,
   gender,
   file
  }

  const handleSubmitPersonalInfo = (data)=>{
    console.log("Personal Data===> ", data);
    navigate("/location-info")
  }
  return (
    <div className='flex justify-center items-center'>
      <StrikeForm onSubmit={handleSubmitPersonalInfo} resolver={yupResolver(personalInfoSchema)} defaultValues={defaultValues}>
      <h3 className="font-bold text-[2rem] my-2">Personal Informations</h3>
        <div className='grid grid-cols-2 gap-5'>
        <StrikeInput type="text" name="firstName" label="First Name"/>
        <StrikeInput type="text" name="lastName" label="Last Name"/>
        <StrikeSelect options={genderOptions} name="gender" label="Gender"/>
        <StrikeFile name="file" type="file" label="Profile Photo"/>
        </div>
        <div className="flex justify-end gap-5 items-center mt-[2rem]">
          <button onClick={()=>navigate(-1)} type='button' className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold">
            Previous
          </button>
          <button type='submit' className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold">
            Next
          </button>
        </div>
      </StrikeForm>
    </div>
  )
}
