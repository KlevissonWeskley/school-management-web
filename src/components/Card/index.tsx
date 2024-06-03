import { ReactElement } from 'react'
import { ButtonExecute, CardContainer } from './styles'
import { useAuth } from '../../context/AuthContext'
import { NavLink } from 'react-router-dom'

interface CardProps {
    func: string
    href: string
    icon: ReactElement<any, any>
}

export function Card({ func, href, icon }: CardProps) {
    const { accessToken } = useAuth()

    const isExternalLink = href?.startsWith('http');

    return (
        <CardContainer className={!accessToken ? 'logged-out' : ''}>
            <div className='icon'>{icon}</div>

            <ButtonExecute 
                disabled={!accessToken}
            >
                {accessToken ? (
                    isExternalLink ? (
                        <a href={href} target='_blank'>{func}</a>
                    ) : (
                        <NavLink to={href}>{func}</NavLink>
                    )
                ) : (
                    <span>{func}</span>
                )}
            </ButtonExecute>
        </CardContainer>
    )
}
