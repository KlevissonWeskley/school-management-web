import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 15rem;
    height: 15rem;
    background-color: #40DEAE;
    color: #DE40A7;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.logged-out {
        opacity: 0.5;
    }
`

export const ButtonExecute = styled.button`
    background: transparent;
    border: 0;
    position: absolute;
    margin-top: 10rem;
    font-weight: bold;

    a {
        text-decoration: underline;
        color: #121212;
        font-size: 1rem;
        transition: 0.3s ease;
    }

    
    &:hover a {
        color: #A740DE;
    }
    
    span {
        text-decoration: underline;
        color: #121212;
        font-size: 1rem;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:disabled a {
        color: #121212;
        text-decoration: none;
        cursor: not-allowed;
    }
`
