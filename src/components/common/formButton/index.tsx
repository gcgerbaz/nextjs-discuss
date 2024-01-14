'use client';

import { useFormStatus } from "react-dom";

import { Button, ButtonVariantProps } from '@nextui-org/react';

interface FormButtonProps {
  children: React.ReactNode,
  buttonConf?: ButtonVariantProps,  
};

export default function FormButton({ children, buttonConf }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isLoading={pending}
      {...buttonConf}
    >
      {children}
    </Button>
  );
}
