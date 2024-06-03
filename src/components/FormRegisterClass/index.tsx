import { useState } from 'react'
import { api } from '../../services/axios'
import { useAuth } from '../../context/AuthContext'
import { ButtonRegisterStudent, FormContainer, FormRegisterStudentContainer, Input } from './styles'
import { toast } from 'react-toastify'

export function FormRegisterClass() {
    const { accessToken } = useAuth()

    const [classroom, setClassroom] = useState('')

    async function createClass(event: React.FormEvent) {
        event.preventDefault()
        
        try {
            await api.post('/classrooms', 
                {
                    classroom
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
            
            toast.success(`Sala: ${classroom} registrada!`)
            setClassroom('')
        } catch (err: any) {
            console.log('Erro ao criar a sala: ', err)
            toast.error(`Erro ao tentar cadastrar a sala: ${err.message}`)
        }
    }

    return (
        <FormRegisterStudentContainer>
            <h2>Cadastre a sala</h2>

            <FormContainer onSubmit={createClass}>
                <div className='input-name'>
                    <label htmlFor="name">Sala:</label>
                    <Input 
                        type="text" 
                        placeholder='Ex: 1° A ou "Sala de informática"' 
                        id='name' 
                        value={classroom}
                        onChange={(e) => setClassroom(e.target.value)}

                    />
                </div>

                <ButtonRegisterStudent type="submit">Cadastrar</ButtonRegisterStudent>
            </FormContainer>
        </FormRegisterStudentContainer>
    )
}