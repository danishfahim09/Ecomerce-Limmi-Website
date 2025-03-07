import {withAuth} from 'next-auth/middleware'

export default withAuth({
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized: ({ token, req }) => {
            console.log("✅ Middleware Triggered:", req.nextUrl.pathname);
            console.log("🔑 Token:", token);
            return !!token;  // اگر token ہے تو allow, ورنہ login پر redirect
        },
    },
});

export const config = {
    matcher: [
        "/back-office/dashboard/:path*",
        "/checkout"
    ]
};
