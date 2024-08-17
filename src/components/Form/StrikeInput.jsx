import React, { useEffect } from "react";
import Error from "../UI/Error";
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../../redux/createUserSlice";


export default function StrikeInput({ type, name, label }) {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    watch
  } = useFormContext();
  const inputValue = watch(name);
  useEffect(()=>{
    inputValue && dispatch(addUserInfo({[name]:inputValue}))
  }, [inputValue, dispatch])

  return (
    <div>
      <label className="block" htmlFor={name}>
        {label}
      </label>
      <input
        className={`outline-none border-[1px] rounded-md py-2 px-3 w-full duration-300 ${
          errors[name]?.message ? "border-red-200" : "border-[#e7e4e4]"
        }`}
        type={type}
        {...register(name)}
        id={name}
        placeholder={`Enter ${label}`}
      />
      {errors[name]?.message && <Error message={errors[name].message} />}
    </div>
  );
}
