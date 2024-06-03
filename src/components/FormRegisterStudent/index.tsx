import { useEffect, useState } from 'react'
import { api } from '../../services/axios'
import { useAuth } from '../../context/AuthContext'
import { ButtonRegisterStudent, FormContainer, FormRegisterStudentContainer, Input } from './styles'
import { toast } from 'react-toastify'

interface ClassroomsProps {
    classroom: string
    id: number
}

export function FormRegisterStudent() {
    const { accessToken } = useAuth()

    const [classrooms, setClassrooms] = useState<ClassroomsProps[]>([])
    const [name, setName] = useState('')
    const [registration, setRegistration] = useState('')
    const [selected, setSelected] = useState('')

    useEffect(() => {
        if (accessToken) {
            getClassrooms()
        }
    }, [accessToken])

    async function getClassrooms() {
        try {
             const reply = await api.get('/classrooms', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
             })

             setClassrooms(reply.data.classrooms)
        } catch (err) {
            console.log('Erro ao buscar salas: ', err)
        }
    }

    async function createStudent(event: React.FormEvent) {
        event.preventDefault()
        
        console.log('Creating student with data:', { name, registration, classroomId: selected })

        try {
            await api.post('/students', 
                {
                    name,
                    registration,
                    classroomId: Number(selected)
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
            
            toast.success(`O aluno ${name} foi cadastrado com sucesso!`)
            clear()
        } catch (err: any) {
            console.log('Erro ao criar aluno: ', err)
            toast.error(`Erro ao tentar cadastrar o aluno: ${err.message}`)
        }
    }

    function clear() {
        setName('')
        setRegistration('')
        setSelected('')
    }

    return (
        <FormRegisterStudentContainer>
            <h2>Cadastre o aluno</h2>

            <FormContainer onSubmit={createStudent}>
                <div className='input-name'>
                    <label htmlFor="name">Nome:</label>
                    <Input 
                        type="text" 
                        placeholder='Ex: Nome Sobrenome' 
                        id='name' 
                        value={name}
                        onChange={e => setName(e.target.value)}

                    />
                </div>

                <div className='registration-class'>
                    <div>
                        <label htmlFor="registration">Matrícula:</label>
                        <Input 
                            type="text" 
                            placeholder='Ex: 2024125-ADF'
                            value={registration}
                            onChange={e => setRegistration(e.target.value)}
                            id='registration'
                        />
                    </div>

                    <div>
                        <label htmlFor="classroom">Sala:</label>
                        <span className='select-class'>
                            <select 
                                id="classroom"
                                value={selected}
                                onChange={e => setSelected(e.target.value)}
                            >
                                <option value="">Selecione uma sala</option>
                                {classrooms.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>
                                            {item.classroom}
                                        </option>
                                    )
                                })}
                            </select>
                        </span>
                    </div>
                </div>

                <ButtonRegisterStudent type="submit">Cadastrar</ButtonRegisterStudent>
            </FormContainer>
        </FormRegisterStudentContainer>
    )
}