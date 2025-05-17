import Register from "@/components/Register";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Page | Frequency",
  description: "This is Register Page for Frequency club",
};

const RegisterPage = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
