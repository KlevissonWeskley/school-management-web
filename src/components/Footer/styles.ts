import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    background-color: #40DE63;
    color: #efefef;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    li {
        transition: 0.3s ease;
    }

    li:hover {
        transform: scale(1.10);
    }
`