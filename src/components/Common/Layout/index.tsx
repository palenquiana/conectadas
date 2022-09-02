import { FC, ReactNode } from "react";
import { Header } from "..";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header>
        <nav></nav>
      </Header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
export { Layout };
