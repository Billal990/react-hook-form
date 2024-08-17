import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";
export const contactInfoSchema = yup.object({
  phone: yup
    .string()
    .required(requiredMsg)
    .min(10, "Phone number must be 10 digits"),
    email:yup.string()
    .required(requiredMsg)
    .email("Provide a valid email."),
});
