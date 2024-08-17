import { Controller, useFormContext } from "react-hook-form";
import Error from "../UI/Error";
import Select from "react-select";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../redux/createUserSlice";

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    border: "0px solid #e7e4e4",
    boxShadow: "none",
    "&:hover": {
      border: "0px solid #e7e4e4",
    },
    padding: "2px 0",
    borderRadius: "5px",
    cursor:"pointer"
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#fff" : provided.backgroundColor,
    color: state.isSelected ? "#000" : provided.color,
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
    cursor:"pointer"
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
  }),
};

export default function StrikeSelect({ name, label, options }) {
  const dispatch = useDispatch()
  const {
    control,
    formState: { errors },
    watch
  } = useFormContext();

  const inputValue = watch(name);
  useEffect(()=>{
    inputValue && dispatch(addUserInfo({[name]:inputValue}))
  }, [inputValue, dispatch])

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            onChange={field.onChange}
            options={options}
            styles={customStyles}
            className={`rounded-md border-[1px] duration-300 ${
              errors[name]?.message ? "border-red-200" : "border-[#e7e4e4]"
            }`}
          ></Select>
        )}
      />
      {errors[name]?.message && <Error message={errors[name]?.message} />}
    </div>
  );
}
