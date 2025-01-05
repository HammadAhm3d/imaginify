import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
