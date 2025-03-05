const { signOut } = require("next-auth/react")
const { useRouter } = require("next/navigation")


export default async function handleLogOut(){
    const router = useRouter();
    await signOut()
    router.push("/")
}