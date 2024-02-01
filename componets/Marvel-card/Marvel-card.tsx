import React from "react";
import "./marvel-card.scss";
import Image from 'next/image'

interface CardProps{
    children: React.ReactNode;
}

const Marvel_card = ({children}: CardProps) =>{
    return(
        <div className="bgr">
            <div> <Image 
            src="/card-hero.png"
            alt="hero card"
            width={156}
            height={140}
            priority></Image> 
            <p className="pp">{children}</p>
            </div>
        </div>
    );
};

export default Marvel_card;