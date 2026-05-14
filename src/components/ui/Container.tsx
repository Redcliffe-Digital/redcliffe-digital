import type { HTMLAttributes, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div className={`container-x ${className}`} {...rest}>
      {children}
    </div>
  );
}
