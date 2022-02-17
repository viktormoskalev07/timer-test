import React from "react";

interface CardProps {
    t: string | number
}

export const Card: React.FC<CardProps> = ({t}) => {

    return (
        <div className={'card'}>
            <div className="timer">
                {t}
            </div>

            card
        </div>
    )
}