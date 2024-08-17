import { createBrowserRouter } from "react-router-dom";
import PersonalInfo from "../pages/PersonalInfo";
import App from "../App";
import Signup from "../pages/Signup";
import VerifyOTP from "../pages/VerifyOTP";
import ContactInfo from "../pages/ContactInfo";
import LocationInfo from "../pages/LocationInfo";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "verify-otp",
        element: <VerifyOTP />,
      },
      {
        path: "contact-info",
        element: <ContactInfo />,
      },
      {
        path: "personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "location-info",
        element: <LocationInfo />,
      },
    ],
  },
]);
