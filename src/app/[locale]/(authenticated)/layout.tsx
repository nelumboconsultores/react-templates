import { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

/*
 ** Se recomienda usar este Layout para las páginas que requieren autenticación.
 */

export default function AuthenticatedLayout({ children }: Props) {
  return children;
}
