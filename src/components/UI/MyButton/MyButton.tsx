import React, { FC, PropsWithChildren } from 'react';
import cl from "./MyButton.module.scss";

export enum ButtonVariant {
	WithArrow = 'WithArrow'
}


interface ButtonProps {
	variant?: ButtonVariant;
	width?: string,
	className?: string,
	onClick?:  () => void;
}

const MyButton: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick, className, variant, width }) => {
	return (
		<div style={{width: width}} className={className}>
			<button onClick={onClick} style={{width: width}} className={(cl.button__inner) + ' ' + (variant === 'WithArrow' ? cl.WithArrow : '')}>
				{children}
			</button>
		</div>
	);
};

export default MyButton;