"use client";

import AuthForm from "@/components/AuthForm";
import { singInSchema } from "@/lib/validations";

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={singInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={() => {}}
  />
);
export default Page;
