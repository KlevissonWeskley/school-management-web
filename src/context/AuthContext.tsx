import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../services/axios'

interface IData {
    username: string
    password: string
}

interface AuthContextType {
    accessToken: string | null
    username: string | null
    signUp: (data: IData) => Promise<void>
    login: (data: IData) => Promise<void>
    logout: () => void
}

const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const token = Cookies.get('token')
        const storedUsername = Cookies.get('username')
        if (token) {
            setAccessToken(token)
        }
        if (storedUsername) {
            setUsername(storedUsername)
        }
    }, [])

    async function signUp({ username, password }: IData) {
        try {
            const reply = await api.post('/users', {
                username,
                password
            })

            
            const { token } = reply.data

            Cookies.set('token', token, { expires: 7 })
            Cookies.set('username', username, { expires: 7 })
            setAccessToken(token)
            setUsername(username)

            toast.success('Conta criada com sucesso!')
        } catch (err: any) {
            console.log(err)
            toast.error(`Erro ao criar a conta: ${err}`)
        }
    }

    async function login({ username, password }: IData) {
        try {
            const reply = await api.post('/users/login', {
                username,
                password
            })

            const { token } = reply.data

            Cookies.set('token', token, { expires: 7 })
            Cookies.set('username', username, { expires: 7 })
            setAccessToken(token)
            setUsername(username)

            toast.success(`Bem-vindo de volta! ${username}.`)
        } catch (err: any) {
            console.log(err)
            toast.error(`Erro ao fazer login: ${err}`)
        }
    }

    function logout() {
        setAccessToken(null)
        setUsername(null)
        Cookies.remove('token')
        Cookies.remove('username')
        navigate('/')
        window.location.reload()
    }

    return (
        <AuthContext.Provider value={{ accessToken, username, signUp, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
