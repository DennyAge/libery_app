"use client";

import AuthForm from "@/components/AuthForm";
import { singUpSchema } from "@/lib/validations";

const SingUpPage = () => (
  <AuthForm
    type="SING_UP"
    schema={singUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={() => {}}
  />
);
export default SingUpPage;
