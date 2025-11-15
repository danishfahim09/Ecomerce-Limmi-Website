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
                <Toaster 
                    position="top-center" 
                    reverseOrder={false}
                    toastOptions={{
                        className: '!bg-background !text-foreground !border !border-border !shadow-lg dark:!shadow-xl',
                        success: {
                            iconTheme: {
                                primary: 'rgb(34, 197, 94)',
                                secondary: 'white',
                            },
                            className: '!bg-lime-50 dark:!bg-lime-900/20 !text-lime-900 dark:!text-lime-100 !border-lime-200 dark:!border-lime-800',
                        },
                        error: {
                            iconTheme: {
                                primary: 'rgb(239, 68, 68)',
                                secondary: 'white',
                            },
                            className: '!bg-red-50 dark:!bg-red-900/20 !text-red-900 dark:!text-red-100 !border-red-200 dark:!border-red-800',
                        },
                        loading: {
                            className: '!bg-muted !text-foreground !border-border',
                        },
                    }}
                />
                {children}
            </ThemeProvider>
        </Provider>
    )
}

export default Providers