import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import cl from "./DualTextBlock.module.scss"
import MyVerticalLine from "../../UI/MyVerticalLine/MyVerticalLine";

interface IDualTextBlock {
    firstPart: string;
    secondPart: string;
}

const DualTextBlock: FC<IDualTextBlock> = ({firstPart, secondPart}) => {
    return (
        <div className={cl.text}>
            <div>
                <p className={'accent-text ' + cl.text__description}>
                    {firstPart}
                </p>
            </div>
                <MyVerticalLine/>
            <div>
                <p className={'accent-text ' + cl.text__description}>
                    {secondPart}
                </p>
            </div>
        </div>
    );
};

export default DualTextBlock;
