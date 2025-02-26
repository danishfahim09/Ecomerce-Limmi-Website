"use client";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/redux/Store"; // ✅ Corrected import
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  return (

    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <Toaster position="top-center" reverseOrder={false} />
      <SessionProvider>
        <Provider store={store}>
          {children}
        </Provider></SessionProvider>;
    </ThemeProvider>



  );
}
