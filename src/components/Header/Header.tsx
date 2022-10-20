import React, {FC, MouseEventHandler, useState} from 'react';
import {Container} from 'react-bootstrap';
import logo from '@assets/images/logo.svg';
import phone from "@assets/images/mobile_phone.svg"
import cl from "./Header.module.scss"
import MyButton from '../UI/MyButton/MyButton';
import MyBurger from "../UI/MyBurger/MyBurger";
import {useBreakPoint} from "../../Hooks/useBreakPoint";

const Header: FC = () => {

    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu: MouseEventHandler = (): void => {
        if (isMenuActive) {
            setIsMenuActive(false)
            document.body.style.overflow = '';
        } else {
            setIsMenuActive(true);
            document.body.style.overflow = 'hidden';
        }
    }

    return (
        <header className={cl.header + ' ' + (isMenuActive ? cl.headerActive: '')}>
            <Container>
                <div className={cl.header__inner}>
                    {useBreakPoint() <= 998 ? <MyBurger className={cl.burger} onCLick={toggleMenu} isMenuActive={isMenuActive}/> : ''}
                    <div className={cl.header__left}>
                        <div className='position-relative'>
                            <a href="#main" className={cl.header__logo}>
                                <img src={logo} alt="logo"/>
                            </a>
                            {useBreakPoint() <= 998 ?
                                <div className={cl.header__languages_mobile}>
                                    <a href="#">En</a>
                                    <span className={cl.header__line}>|</span>
                                    <a href="#">Ru</a>
                                </div> : ''
                            }
                        </div>
                        <nav className={cl.header__nav + ' ' + (isMenuActive ? cl.toggle_nav : '')}>
                            <a href="#" className={cl.header__link}>Лифты</a>
                            <a href="#industries" className={cl.header__link}>Отрасли</a>
                            <a href="#gallery" className={cl.header__link}>Дизайн</a>
                            <a href="#options" className={cl.header__link}>Сервис</a>
                            <a href="#patreon" className={cl.header__link}>О нас</a>
                        </nav>
                    </div>
                    <div className={cl.header__right}>
                        {useBreakPoint() <= 998 ? '' :
                            <div className={cl.header__languages}>
                                <a href="#">En</a>
                                <span className={cl.header__line}>|</span>
                                <a href="#">Ru</a>
                            </div>
                        }

                        {useBreakPoint() <= 1200 ?
                            <img src={phone} alt=""/> :
                            <MyButton>
                                Заказать звонок
                            </MyButton>
                        }

                    </div>
                </div>

            </Container>
        </header>
    );
};

export default Header; 