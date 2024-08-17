import React from "react";
import StrikeForm from "../components/Form/StrikeForm";
import StrikeOTPInput from "../components/Form/StrikeOTPInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { verifyOTPSchema } from "../schemas/verifyOTPSchema";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const { otp } = useSelector((state) => state.createUser);
  const defaultValues = { otp };
  const handleVarifyOTP = (data) => {
    console.log("OTP Data==> ", data);
    navigate("/contact-info");
  };
  return (
    <div className="flex justify-center items-center mt-[3rem]">
      <StrikeForm
        onSubmit={handleVarifyOTP}
        resolver={yupResolver(verifyOTPSchema)}
        defaultValues={defaultValues}
      >
        <h3 className="font-bold text-[2rem] my-2">Verify OTP</h3>
        <div className="flex justify-between items-center">
          <h3>Verify OTP</h3>
          <button>Send Again</button>
        </div>
        <StrikeOTPInput name="otp" />
        <div className="flex justify-end gap-5 items-center">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold"
          >
            Previous
          </button>
          <button
            type="submit"
            className="py-2 rounded-md bg-gray-500 text-white w-[100px] font-bold"
          >
            Next
          </button>
        </div>
      </StrikeForm>
    </div>
  );
}
