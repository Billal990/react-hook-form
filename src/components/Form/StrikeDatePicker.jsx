import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Controller, useFormContext } from "react-hook-form";
import Error from "../UI/Error";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function StrikeDatePicker({ name, label }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label className="block" htmlFor={name}>
        {label}
      </label>
      <div
        className={`outline-none border-[1px] border-gray-300 px-2 py-2 cursor-pointer rounded-md w-full relative duration-300 ${
          errors[name]?.message ? "border-red-200" : "border-[#e7e4e4]"
        }`}
      >
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value }, field }) => {
            return (
              <Flatpickr
                {...field}
                onChange={onChange}
                className="outline-none cursor-pointer w-full"
              />
            );
          }}
        />
        <Icon
          className="absolute right-2 top-3 text-gray-500"
          icon="fontisto:date"
        />
      </div>
      {errors[name]?.message && <Error message={errors[name]?.message} />}
    </div>
  );
}
