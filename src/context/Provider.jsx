"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { Provider } from "react-redux";
import { store } from "../../redux/Store"; // ✅ Corrected import
import { ourFileRouter } from "@/app/api/uploadthing/core";
 

 

function Providers({ children }) {
    return (
        <Provider store={store}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
                <Toaster position="top-center" reverseOrder={false} />
                {children}
            </ThemeProvider>
        </Provider>
    )
}

export default Providers