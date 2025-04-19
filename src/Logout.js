import { signOut } from 'firebase/auth'
import { auth } from './firebase'

export const logout = async () =>
{
    try 
    {
        await signOut(auth)
        console.log("Usuario deslogado com sucesso!")
        
        return true
    } catch (error) {
        console.error("Erro ao deslogar: ", error)
    }
}