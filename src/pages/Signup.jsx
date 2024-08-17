import React from "react";
import StrikeForm from "../components/Form/StrikeForm";
import StrikeInput from "../components/Form/StrikeInput";
import { signupSchema } from "../schemas/signupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Signup() {
  const navigate = useNavigate();
  const { email, referalCode } = useSelector((state) => state.createUser);
  const defaultValues = {
    email,
    referalCode
  }
  const handleNext = (data) => {
    console.log("Signup data===> ", data);
    navigate("/verify-otp");
  };
  return (
    <div className="flex justify-center items-center">
      <StrikeForm onSubmit={handleNext} resolver={yupResolver(signupSchema)} defaultValues={defaultValues}>
        <h3 className="font-bold text-[2rem] my-2">Signup</h3>
        <div className="space-y-[1rem]">
          <StrikeInput type="email" name="email" label="Email" />
          <StrikeInput type="number" name="referalCode" label="Referal Code" />
          <div className="flex justify-end gap-5 items-center">
            <button
              type="submit"
              className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold"
            >
              Next
            </button>
          </div>
        </div>
      </StrikeForm>
    </div>
  );
}
