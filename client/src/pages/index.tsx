import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ControlledTextInput } from "components";
import { LogoCITi } from "../assets";
import { FormContainer, FormDescription, HomeContainer } from "./style";

const formSchema = z.object({
  name: z.string().min(3).max(255),
  username: z.string().min(3).max(255),
  email: z.string().email(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: any) {
    const formData = formSchema.parse(data);
    console.log(formData);
  }

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Image src={LogoCITi} alt="Logo CITi" />
        <FormDescription>
          Cadastre-se para ver fotos e vídeos dos seus amigos.
        </FormDescription>
        <ControlledTextInput
          name="name"
          control={control}
          error={!!errors.name?.message}
        />
        <ControlledTextInput
          name="username"
          control={control}
          error={!!errors.username?.message}
        />
        <ControlledTextInput
          name="email"
          control={control}
          error={!!errors.email?.message}
        />
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </HomeContainer>
  );
}
