import styled from 'styled-components'

export const FormRegisterStudentContainer = styled.div`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: #121214;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .input-name {
        display: flex;
        flex-direction: column;
    }
`

export const Input = styled.input`
    border-radius: 6px;
    border: 0;
    background: transparent;
    border: 1px solid #A740DE;
    color: #c4c4c4;
    padding: 1rem;

    &::placeholder {
        color: #A740DE;
    }
`

export const ButtonRegisterStudent = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    border: 0;
    background: #A740DE;
    color: #efefef;
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: opacity 0.2s;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        opacity: 0.8;
    }
`