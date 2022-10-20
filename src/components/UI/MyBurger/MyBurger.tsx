import React, {FC, MouseEventHandler} from 'react';
import cl from "./MyBurger.module.scss"


interface IBurgerProps {
    isMenuActive: boolean;
    onCLick: MouseEventHandler;
    className?: string;
}

const MyBurger: FC<IBurgerProps> = ({onCLick, isMenuActive, className}) => {


    return (
        <div className={cl.wrapper + ' ' + className}>
            <div onClick={onCLick} className={isMenuActive ? cl.burgerActive : cl.burger}>
                <div id='topLine' className={cl.burger__line}></div>
                <div id='bottomLine' className={cl.burger__line}></div>
            </div>
        </div>

    );
};

export default MyBurger;
