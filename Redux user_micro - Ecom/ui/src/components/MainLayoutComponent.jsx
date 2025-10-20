import { Header } from "./header";

export function MainLayoutComponent({ children }) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
