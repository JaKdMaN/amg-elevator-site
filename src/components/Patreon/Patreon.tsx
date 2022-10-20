import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import cl from "./Patreon.module.scss"
import MyHeadline, {HeadlineVariant} from "../UI/MyHeadLine/MyHeadline";
import patreon from "@assets/images/Patreon.png"
import PatreonItem from "./PatreonItem/PatreonItem";
import {patreonData} from "../../data/Patreon";

const Patreon: FC = () => {
    return (
        <section id='patreon'>
            <Container className={cl.patreon}>
                <Row>
                    <Col xs={12} lg={6} className={cl.patreon__image} >
                        <img src={patreon} alt="" />
                    </Col>
                    <Col xs={12} lg={6} className={cl.patreon__text}>
                        <MyHeadline variant={HeadlineVariant.secondary}>AMG elevator</MyHeadline>
                        <p className='accent-text'>
                            Какими бы высокими ни были Ваши требования к оборудованию, мы найдем лучшее решение
                        </p>
                    </Col>
                </Row>
                <div className={cl.patreon__items}>
                    {patreonData.map(item => {
                        return <PatreonItem logo={item.logo} title={item.title} description={item.description} key={item.title}/>
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Patreon;
