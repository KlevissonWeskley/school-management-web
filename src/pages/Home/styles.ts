import styled from 'styled-components'

export const HomeContainer = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;  
`

export const Content = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .cards-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h1 {
        color: #121214;
    }

    .cards {  
        flex: 1; 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
`