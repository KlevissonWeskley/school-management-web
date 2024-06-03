import { Button, HeaderContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { LoginModal } from '../LoginModal'
import { useAuth } from '../../context/AuthContext'
import { NavLink } from 'react-router-dom'
import { CreateAccountModal } from '../CreateAccountModal'

export function Header() {
    const { accessToken, username, logout } = useAuth()

    return (
        <HeaderContainer>
            <NavLink to='/' style={{ color: '#121214' }}>
                <h1>Gerenciamento Escolar</h1>
            </NavLink>

            <nav>
                <ul>
                    {accessToken ? (
                        <>
                            <li>
                                <span>Olá, {username}</span>
                            </li>
                            <li>
                                <Button onClick={logout}>Sair</Button>
                            </li>
                        </>
                    ) : (
                        <>
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <li>
                                        <Button>Fazer login</Button>
                                    </li>
                                </Dialog.Trigger>

                                <LoginModal />
                            </Dialog.Root>

                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <li>
                                        <Button>Criar conta</Button>
                                    </li>
                                </Dialog.Trigger>

                                <CreateAccountModal />
                            </Dialog.Root>
                        </>
                    )}
                </ul>
            </nav>
        </HeaderContainer>
    )
}
