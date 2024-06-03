import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10rem;
    background-color: #40DE63;
    color: #efefef;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50rem;

    h1 {
        text-align: center;
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    span {
        font-weight: bold;
    }
`

export const Button = styled.button`
    width: 8rem;
    height: 3rem;
    background: transparent;
    border: 1px solid #efefef;
    border-radius: 6px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        text-decoration: underline;
    }
`