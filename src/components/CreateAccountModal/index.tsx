import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'
import { useAuth } from '../../context/AuthContext'
import { FormEvent, useState } from 'react'

export function CreateAccountModal() {
    const { signUp } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    async function execute(e: FormEvent) {        
        e.preventDefault()

        await signUp({ username, password })
    }

    function clear() {
        setUsername('')
        setPassword('')
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Criar a conta</Dialog.Title>
                
                <CloseButton onClick={clear}>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={execute}>
                    <input 
                        type="text" 
                        placeholder='Username' 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />

                    <input 
                        type="password" 
                        placeholder='Senha' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button type='submit'>Entrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}