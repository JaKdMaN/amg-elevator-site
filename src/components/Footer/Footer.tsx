import React from 'react';
import cl from "./Footer.module.scss"
import logo from "@assets/images/footer-logo.svg"
import {Container} from "react-bootstrap";
import {footerIcons} from "../../data/Footer";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <Container>
                <div className={cl.footer__inner}>
                    <div>
                        <p className={cl.footer__text}>
                            No. 37, West Road, Huanshi, Liwan district
                        </p>
                        <p className={cl.footer__text}>
                            Guangzhou city, China
                        </p>
                        <p className={cl.footer__text}>
                            Tel. +86 18575725404
                        </p>
                        <p className={cl.footer__text}>
                            info@amgelevator.com
                        </p>
                    </div>
                    <div className={cl.footer__logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <div className={cl.footer__input}>
                            <input type="text" placeholder="Поиск"/>
                            <img src={footerIcons.search} alt="" className={cl.footer__input_icon}/>
                        </div>
                        <div className={cl.footer__contacts}>
                            <a href="https://www.twitter.com" className={cl.footer__link}>
                                <img src={footerIcons.twitter} alt=""/>
                            </a>
                            <a href="https://www.facebook.com" className={cl.footer__link}>
                                <img src={footerIcons.facebook} alt=""/>
                            </a>
                            <a href="https://www.youtube.com" className={cl.footer__link}>
                                <img src={footerIcons.youtube} alt=""/>
                            </a>
                            <a href="https://www.pinterest.com" className={cl.footer__link}>
                                <img src={footerIcons.pinterest} alt=""/>
                            </a>
                            <a href="https://www.LinkedIn.com" className={cl.footer__link}>
                                <img src={footerIcons.linkedIn} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
