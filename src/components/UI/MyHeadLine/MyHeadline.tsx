import React, { FC, PropsWithChildren } from 'react';
import cl from "./MyHeadline.module.scss"

export enum HeadlineVariant {
	primary = 'primary',
	secondary = 'secondary'
}

interface MyHeadlineProps {
	variant: HeadlineVariant;
}

const MyHeadline: FC<PropsWithChildren<MyHeadlineProps>> = ({ children, variant }) => {

	if (variant === HeadlineVariant.secondary) {
		return <h1 className={cl.headline + ' ' + cl['have-image']}>{children}</h1>
	}
	return <h1 className={cl.headline}>{children}</h1>
};

export default MyHeadline;