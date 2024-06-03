import { GithubLogo, InstagramLogo, LinkedinLogo, TiktokLogo } from 'phosphor-react'
import { FooterContainer } from './styles'

export function Footer() {
    return (
        <FooterContainer>
            <strong>Created by Klevisson</strong>
            <ul>
                <li>
                    <a style={{ color: '#010101' }} href="https://www.tiktok.com/@klevisson.ws" target='_blank'>
                        <TiktokLogo size={30} />
                    </a>
                </li>
                <li>
                    <a style={{ color: '#F58529' }} href="https://www.instagram.com/klevisson.ws/" target='_blank'>
                        <InstagramLogo size={30} />
                    </a>
                </li>
                <li>
                    <a style={{ color: '#181717' }} href="https://github.com/KlevissonWeskley" target='_blank'>
                        <GithubLogo size={30} />
                    </a>
                </li>
                <li>
                    <a style={{ color: '#0077B5' }} href="https://www.linkedin.com/in/klevisson-weskley-76a76b244/" target='_blank'>
                        <LinkedinLogo size={30} />
                    </a>
                </li>
            </ul>
        </FooterContainer>
    )
}