import React, {FC} from 'react';
import MyButton, {ButtonVariant} from '../../UI/MyButton/MyButton';
import MyHeadline, {HeadlineVariant} from '../../UI/MyHeadLine/MyHeadline';
import cl from "./ForIndustries.module.scss";
import {ForIndustriesList} from '../../../data/ForIndustriesList';
import {Icon} from '@mui/material';
import {useBreakPoint} from "../../../Hooks/useBreakPoint";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import DualTextBlock from "../../Shared/DualTextSection/DualTextBlock";


const ForIndustries: FC = () => {

    return (
        <div className={cl.forIndustries}>
            <MyHeadline variant={HeadlineVariant.primary}>Лифт для любой отрасли</MyHeadline>

            <DualTextBlock
                firstPart="В AMG Elevator Вы найдете решение для организации пассажиропотока в
                           любом типе здания: пассажирские и грузовые лифты, лифты для перевозки
                           лежачих больных, автомобильные лифты."

                secondPart="А также большой выбор панорамных лифтов для отелей, торговых и бизнес центров.
                            Вы можете купить лифт для частного дома или для высотного здания.Свяжитесь с нами,
                            для уточнения деталей."
            />

            {useBreakPoint() < 1300 ?
                <div className='mt-4'>
                    <Swiper
                        spaceBetween={60}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3
                            },
                            1200: {
                                slidesPerView: 5
                            }
                        }}
                        loop
                        modules={[Autoplay, Pagination]}
                    >
                        {ForIndustriesList.map((item) =>
                            <SwiperSlide key={item.id}>
                                <div className={cl.forIndustries__item}>
                                    <p className={cl.title}>{item.title}</p>
                                    <img className={cl.backUrl} src={item.backUrl} alt="backUrl"/>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <MyButton className='mt-4'>Выбрать лифт</MyButton>
                </div>
                :
                <div className={cl.forIndustries__items}>
                    {ForIndustriesList.map((item) =>
                        <div key={item.id} className={cl.forIndustries__item}>
                            <p className={cl.title}>{item.title}</p>
                            <img className={cl.backUrl} src={item.backUrl} alt="backUrl"/>
                        </div>
                    )}
                    <MyButton variant={ButtonVariant.WithArrow}>
                        <p>Выбрать</p>
                        <p className='mt-2'>лифт</p>
                        <Icon fontSize='small' className={cl.arrowsIcon}>double_arrow</Icon>
                    </MyButton>
                </div>
            }

        </div>
    );
};

export default ForIndustries;