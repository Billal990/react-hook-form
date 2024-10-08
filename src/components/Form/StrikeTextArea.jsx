import React from "react";
import { useFormContext } from "react-hook-form";
import Error from "../UI/Error";

export default function StrikeTextArea({ name, label }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="md:col-span-2">
      <label className="block" htmlFor="firstName">
        {label}
      </label>
      <textarea
        className={`outline-none border-[1px] border-gray-300 rounded-md min-h-[100px] p-2 w-full duration-300 ${
          errors[name]?.message ? "border-red-200" : "border-[#e7e4e4]"
        }`}
        placeholder=" "
        {...register(name, { required: true })}
      ></textarea>
      {errors[name]?.message && <Error message={errors[name].message} />}
    </div>
  );
}
