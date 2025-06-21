const { signOut } = require("next-auth/react")
const { useRouter } = require("next/navigation")


export default async function handleLogOut() {
    await signOut()
}