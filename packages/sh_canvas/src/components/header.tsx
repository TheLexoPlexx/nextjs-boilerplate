import { ReactNode } from "react";
import { font } from "../lib/globals";

export function H1({ children }: { children: ReactNode }) {
  return <h1 className={font.HEADER}>{children}</h1>
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className={font.HEADER}>{children}</h2>
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className={font.HEADER}>{children}</h3>
}

export function H4({ children }: { children: ReactNode }) {
  return <h4 className={font.HEADER}>{children}</h4>
}

export function H5({ children }: { children: ReactNode }) {
  return <h5 className={font.HEADER}>{children}</h5>
}

export function H6({ children }: { children: ReactNode }) {
  return <h6 className={font.HEADER}>{children}</h6>
}