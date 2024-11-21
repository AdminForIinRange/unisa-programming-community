// Async/Await Requirement:

// When using await, the function containing it must be declared as async. Otherwise, JavaScript will throw a syntax error.
// Issue of Missing async:

// If you forget to declare a function as async but use await inside it, the function will not behave as expected. It may lead to runtime errors or unexpected behavior, like the function skipping the try block and going directly to the catch block.
// Catch Without Try:

// In your case, the issue seems to be that the lack of async caused the promise rejection to bypass normal flow, leading to confusion about why the function immediately hit the catch block.

import React from "react";



import "../globals.css";
import { redirect } from "next/navigation";
const Layout = async ({ children }: { children: React.ReactNode }) => {
 

  return (
   
        <div>{children}</div>
     
  );
};

export default Layout;