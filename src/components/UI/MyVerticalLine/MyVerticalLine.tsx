import React, {FC} from 'react';
import cl from "./MyVerticalLine.module.scss";

const MyVerticalLine: FC = () => {
    return (
            <div className={cl['vertical-line']}></div>
    );
};

export default MyVerticalLine;
