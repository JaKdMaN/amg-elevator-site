import React, {FC} from 'react';
import cl from "./PatreonItem.module.scss"

export interface IPatreonItem {
    logo: string;
    title: string;
    description: string;
}

const PatreonItem: FC<IPatreonItem> = ({logo, title, description}) => {
    return (
        <div className={cl.item}>
            <div className={cl.item__mobile}>
                <div className={cl.item__logo}>
                    <img src={logo} alt=""/>
                </div>
                <p className={cl.item__title}>
                    {title}
                </p>
            </div>
            <p className={cl.item__description + ' accent-text'}>
                {description}
            </p>
        </div>
    );
};

export default PatreonItem;
