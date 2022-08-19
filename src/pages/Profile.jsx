import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"

export const Profile = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const auth = getAuth();
        setUser(auth.currentUser)
    }, [])
  return (
    user && <div>{user.displayName}</div>
  )
}
