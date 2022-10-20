import React from 'react';
import cl from "./Questions.module.scss";
import {Container} from "react-bootstrap";
import MyHeadline, {HeadlineVariant} from "../UI/MyHeadLine/MyHeadline";
import DualTextBlock from "../Shared/DualTextSection/DualTextBlock";
import FormSection from "../Shared/FormSection/FormSection";

const Questions = () => {
    return (
        <Container className={cl.questions}>
            <MyHeadline variant={HeadlineVariant.primary}>
                Вопросы?
            </MyHeadline>
            <DualTextBlock
                firstPart='Чтобы узнать стоимость лифта, условия поставки или другую дополнительную информацию,
                           оставьте сообщение через форму обратной связи'

                secondPart='Или на info@amgelevator.com. Наши специалисты свяжутся с Вами в рабочее время.'
            />
            <FormSection/>
        </Container>
    );
};

export default Questions;
