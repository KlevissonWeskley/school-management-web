import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: #121214;
    color: white;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        input {
            border-radius: 6px;
            border: 0;
            background: transparent;
            border: 1px solid #A740DE;
            color: #c4c4c4;
            padding: 1rem;

            &::placeholder {
                color: #A740DE;
            }
        }

        button[type='submit'] {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 58px;
            border: 0;
            background: #A740DE;
            color: #c4c4c4;
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

            img {
                width: 10rem;
            }

            &.loading {
                opacity: 0.7;
            }
        }
}
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: #fff;
`