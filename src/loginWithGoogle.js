import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'

const provider = new GoogleAuthProvider()

export const loginWithGoogle = async () =>
{
    try
    {
        const result = await signInWithPopup(auth, provider)

        const user = result.user

        sessionStorage.setItem("logado", true)
        sessionStorage.setItem("userName", user.displayName)
        sessionStorage.setItem("userUid", user.uid)

        return user
    } catch (error)
    {
        console.error("Erro no login: ", error)
    }
}