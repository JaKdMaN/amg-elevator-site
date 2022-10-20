import React, {FC} from 'react';
import cl from "./industries.module.scss"
import industries from "@assets/images/Industries.png"
import { Col, Container, Row } from 'react-bootstrap';
import MyHeadline, { HeadlineVariant } from '../UI/MyHeadLine/MyHeadline';
import ForIndustries from './ForIndustries/ForIndustries';

const Industries: FC = () => {
	return (
		<section id='industries'>
			<Container className={cl.industries}>
				<Row>
					<Col md={12} lg={6} className={cl.industries__text}>
						<MyHeadline variant={HeadlineVariant.secondary}>reach up and touch the sky</MyHeadline>
						<p className='accent-text'>
							В основе наших решений лежат безграничные возможности разработки, производства
							и монтажа лифтового оборудования
						</p>
					</Col>
					<Col xs={12} md={6} className={cl.industries__image} >
						<img src={industries} alt=""/>
					</Col>
				</Row>
				<ForIndustries/>
			</Container>
		</section>
	);
};

export default Industries;