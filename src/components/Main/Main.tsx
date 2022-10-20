import React, {FC} from 'react';
import {Col} from 'react-bootstrap';
import MyButton from '../UI/MyButton/MyButton';
import MyHeadline, {HeadlineVariant} from '../UI/MyHeadLine/MyHeadline';
import cl from "./Main.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Lazy} from 'swiper'

const Main: FC = () => {
    return (
        <main className={cl.main} id='main'>
            <Swiper
                className={cl.swiper}
                effect={'fade'}
                loop
                autoplay = {{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Lazy]}
            >
                <SwiperSlide className={cl.swiper__slide + ' ' + cl.block1}>
                    <Col xs={12} md={9} className={cl.swiper__block}>
                        <div className={cl.swiper__text}>
                            <MyHeadline variant={HeadlineVariant.primary}>amg elevator</MyHeadline>
                            <p className={cl.swiper__description}>Производство и поставка надежных
                                и безопасных лифтов для любой отрасли.
                                Индивидуальный дизайн</p>
                            <MyButton>Выбрать решение</MyButton>
                        </div>
                    </Col>
                </SwiperSlide>
                <SwiperSlide className={cl.swiper__slide + ' ' + cl.block2}>
                    <Col xs={12} md={9} className={cl.swiper__block}>
                        <div className={cl.swiper__text}>
                            <MyHeadline variant={HeadlineVariant.primary}>Новая панель вызовов <br/> AMG CP 007 Call
                                Panel</MyHeadline>
                            <p className={cl.swiper__description}>Стильная дизайнерская панель вызова накладного типа.
                                Сочетает эстетику
                                и надежность исполнения</p>
                            <MyButton>Выбрать решение</MyButton>
                        </div>
                    </Col>
                </SwiperSlide>
                <SwiperSlide className={cl.swiper__slide + ' ' + cl.block3}>
                    <Col xs={12} md={9} className={cl.swiper__block}>
                        <div className={cl.swiper__text}>
                            <MyHeadline variant={HeadlineVariant.primary}>Создавайте персональный <br/> дизайн кабины с
                                помощью <br/> нового Конфигуратора</MyHeadline>
                            <p className={cl.swiper__description}>Сочетайте любые материалы, фактуры и технические
                                возможности</p>
                            <MyButton>Выбрать решение</MyButton>
                        </div>
                    </Col>
                </SwiperSlide>
            </Swiper>
        </main>
    );
};

export default Main;