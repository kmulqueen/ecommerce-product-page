import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<"button">>;

export default function Button(props: ButtonProps) {
  return <button {...props}></button>;
}
