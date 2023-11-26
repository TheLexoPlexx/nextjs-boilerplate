export interface ButtonProps {
  children: React.ReactNode;
}

export function Canvas({ children }: ButtonProps): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

Canvas.displayName = "Canvas";