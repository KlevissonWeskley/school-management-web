import { FormRegisterClass } from '../../components/FormRegisterClass'
import { ClassroomsContainer, Content } from './styles'

export function Classrooms() {
    return (
        <ClassroomsContainer>
            <Content>
                <FormRegisterClass />
            </Content>
        </ClassroomsContainer>
    )
}