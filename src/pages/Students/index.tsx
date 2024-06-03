import { FormRegisterStudent } from '../../components/FormRegisterStudent'
import { Content, StudentsContainer } from './styles'

export function Students() {
    return (
        <StudentsContainer>
            <Content>
                <FormRegisterStudent />
            </Content>
        </StudentsContainer>
    )
}