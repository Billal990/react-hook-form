import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";

export const locationSchema = yup.object({
    country:yup.object().required(requiredMsg),
    city:yup.object().required(requiredMsg),
    pinCode:yup.string().required(requiredMsg)
})