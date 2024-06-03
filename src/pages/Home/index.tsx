import { BookBookmark, ChalkboardTeacher, FilePdf, Student } from 'phosphor-react'
import { Card } from '../../components/Card'
import { Content, HomeContainer } from './styles'
import { useAuth } from '../../context/AuthContext'

export function Home() {
    const { accessToken } = useAuth()

    return (
        <HomeContainer>
            <Content>
                <div className='cards-container'>
                    {accessToken ? null : <h1>Faça login ou crie uma conta para acessar os cards</h1>}
                    <div className="cards">
                        <Card
                            func='Cadastrar aluno'
                            href='/students'
                            icon={<Student size={100}/>}
                        />

                        <Card
                            func='Cadastrar sala'
                            href='/classrooms'
                            icon={<ChalkboardTeacher size={100}/>}
                        />

                        <Card
                            func='Biblioteca'
                            href='/'
                            icon={<BookBookmark size={100}/>}
                        />

                        <Card
                            func='Gerar relatório de alunos'
                            href='http://localhost:3333/students/report'
                            icon={<FilePdf size={100}/>}
                        />
                    </div>
                </div>
            </Content>
        </HomeContainer>
    )
}