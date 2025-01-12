"use client";

import AuthForm from "@/components/AuthForm";
import { singUpSchema } from "@/lib/validations";
import {signUp} from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={singUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={signUp}
  />
);
export default Page;
