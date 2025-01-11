"use client";

import AuthForm from "@/components/AuthForm";
import { singInSchema } from "@/lib/validations";

const SingInPage = () => (
  <AuthForm
    type="SING_IN"
    schema={singInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={() => {}}
  />
);
export default SingInPage;
