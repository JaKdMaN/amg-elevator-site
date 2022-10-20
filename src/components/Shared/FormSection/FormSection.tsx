import React from 'react';
import cl from "./FormSection.module.scss";
import MyButton from "../../UI/MyButton/MyButton";

const FormSection = () => {
    return (
        <form action="" className={cl.form}>
            <div className={cl.form_inner}>
                <div className={cl.form_inner_dual}>
                    <input type="text" placeholder="Ваше имя" className={cl.input + " " + cl.input_dual}/>
                    <input type="text" placeholder="Ваша почта" className={cl.input + " " + cl.input_dual}/>
                </div>
                <input type="text" placeholder="Комментарий" className={cl.input + " " + cl.input_single}/>
            </div>
            <MyButton className='d-flex justify-content-center mt-4'>Отправить</MyButton>
        </form>
    );
};

export default FormSection;
