"use client";

import AuthForm from "@/components/AuthForm";
import { singInSchema } from "@/lib/validations";
import { singInWithCredentials } from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={singInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={singInWithCredentials}
  />
);
export default Page;
