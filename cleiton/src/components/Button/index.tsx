import { ReactNode } from "react";

import * as S from "./styles";

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <S.Container>{children}</S.Container>;
}
