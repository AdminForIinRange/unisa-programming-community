import React from "react";
// This export statement forces the layout to be dynamic, meaning it will not be statically optimized by Next.js

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
