import React, {FC} from 'react';
import cl from "./Gallery.module.scss"
import {Container} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Icon} from "@mui/material";
import {gallery} from "../../data/Gallery";
import {Autoplay, Pagination} from "swiper";

import {useBreakPoint} from "../../Hooks/useBreakPoint";

import MyHeadline, {HeadlineVariant} from "../UI/MyHeadLine/MyHeadline";
import MyButton from "../UI/MyButton/MyButton";
import DualTextBlock from "../Shared/DualTextSection/DualTextBlock";

const Gallery: FC = () => {
    return (
        <section id='gallery'>
            <div className={cl.gallery}>
                <Container>
                    <MyHeadline variant={HeadlineVariant.primary}>
                        Дизайн определяет впечатление
                    </MyHeadline>

                    <DualTextBlock
                        firstPart='Лифт – продолжение общей концепции здания. AMG elevator
                                   предлагает более 1000 готовых вариантов дизайна кабины и
                                   возможность разработки индивидуального решения.'

                        secondPart='Привлекательный дизайн создает настроение и дарит атмосферу
                                    комфорта. Пассажиры оценят приятные и безопасные материалы интерьеров кабин.'
                    />
                </Container>
                {useBreakPoint() <= 1350 ?
                    <div>
                        <Swiper
                            autoHeight
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                1000: {
                                    slidesPerView: 3
                                }
                            }}
                            modules={[Autoplay, Pagination]}
                        >
                            <SwiperSlide className={cl.gallery__slide}>
                                <div>
                                    <img src={gallery.img1} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={cl.gallery__slide}>
                                <div className={cl.gallery__column}>
                                    <img src={gallery.img2} alt="" className='mb-2'/>
                                    <img src={gallery.img3} alt="" className='mt-2'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={cl.gallery__slide}>
                                <div>
                                    <img src={gallery.img4} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={cl.gallery__slide}>
                                <img src={gallery.img5} alt=""/>
                            </SwiperSlide>
                            <SwiperSlide className={cl.gallery__slide}>
                                <img src={gallery.img6} alt=""/>
                            </SwiperSlide>
                        </Swiper>
                        <MyButton className='mt-4'>Выбрать лифт</MyButton>
                    </div> :
                    <div className={cl.gallery__photo}>
                        <div>
                            <img src={gallery.img1} alt=""/>
                        </div>
                        <div className={cl.gallery__column}>
                            <img src={gallery.img2} alt=""/>
                            <img src={gallery.img3} alt=""/>
                        </div>
                        <div>
                            <img src={gallery.img4} alt=""/>
                        </div>
                        <div className={cl.gallery__column}>
                            <MyButton width={'100%'}>
                                Выбрать дизайн кабины
                                <Icon fontSize='small' className={cl.arrowsIcon + ' mt-2'}>double_arrow</Icon>
                            </MyButton>
                            <img src={gallery.img5} alt=""/>
                        </div>
                        <div>
                            <img src={gallery.img6} alt=""/>
                        </div>
                    </div>
                }

            </div>
        </section>

    );
};

export default Gallery;
