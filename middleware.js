import withAuth from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: '/login',
        //error: '/error',
    }
})
//match the pages in mildware

export const config = { matcher : ["/dashboard","/dashboard/profile"]}