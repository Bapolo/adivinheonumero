import { setDoc,doc } from 'firebase/firestore'
import { bancoDeDados } from './firebase'

export async function adicionarPontuacaoNoBancoDeDados(colecao, idDocumento, pontos)
{
    try
    {
        const referenciaAoDocumento = doc(bancoDeDados, colecao, idDocumento)
        await setDoc(referenciaAoDocumento, {pontos: pontos})
        console.log("Pontos adicionados com sucesso")

        return 

    } catch (error) {
        console.error("Erro ao adicionar a pontuação: ", error)
    }
}
