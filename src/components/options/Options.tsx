import React, {FC} from 'react';
import MyHeadline, {HeadlineVariant} from "../UI/MyHeadLine/MyHeadline";
import {Col, Container, Row} from "react-bootstrap";
import img from "@assets/images/options.png"
import cl from "./Options.module.scss"
import MyButton from "../UI/MyButton/MyButton";
import DualTextBlock from "../Shared/DualTextSection/DualTextBlock";

const Options: FC = () => {
    return (
        <section id='options'>
            <div className={cl.options}>
                <Container>
                    <MyHeadline variant={HeadlineVariant.primary}>
                        Дополнительные опции
                    </MyHeadline>
                    <DualTextBlock
                        firstPart="Чтобы сделать пассажиропоток более безопасным и эффективным,
                         мы предлагаем воспользоваться рядом дополнительных опций."

                        secondPart="А также большой выбор панорамных лифтов для отелей, торговых
                         и бизнес центров. Вы можете купить лифт для частного дома или для высотного
                          здания. Свяжитесь с нами, для уточнения деталей."
                    />
                    <Row className={cl.options__variants}>
                        <Col xs={12} lg={6} className={cl.options__image}>
                            <img src={img} alt="options"/>
                        </Col>

                        <Col xs={12} lg={6} className={cl.options__items}>
                            <p className={cl.options__item}>
                                Подача воздуха (стандартная функция)
                            </p>
                            <p className={cl.options__item}>
                                Устраняет PM2.5 (удаление пыли и очистка воздуха).
                            </p>
                            <p className={cl.options__item}>
                                Уничтожает вирусы и бактерии (включая коронавирус, вирус гриппа и Staphylococcus albus)
                                благодаря УФ излучению.
                            </p>
                            <p className={cl.options__item}>
                                Устранение неприятных запахов благодаря
                                непрерывной циркуляции воздуха.
                            </p>
                            <MyButton>Все опции</MyButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Options;