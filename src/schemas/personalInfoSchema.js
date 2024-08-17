import * as yup from "yup";
import { fileValidationSchema } from "./fileValidationSchema";
import { requiredMsg } from "./requiredMsg";

export const personalInfoSchema = yup.object({
  firstName: yup.string().required(requiredMsg),
  lastName: yup.string().required(requiredMsg),
  gender: yup.object().required(requiredMsg),
  file: fileValidationSchema,
});
