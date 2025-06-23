import type { ComponentProps, ElementType, PropsWithChildren } from "react";

type ContainerProps<T extends ElementType> = PropsWithChildren<
  {
    as?: T;
  } & ComponentProps<T>
>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
