import React from "react";
import Marvel_card from "@/componets/Marvel-card/Marvel-card";
import './page.cards.scss';
import Find_input from "@/componets/Find-input/Find-input";


const Cards = () =>{
    return(
        <div className="container">
            <p className="verh-p">Marvel characters</p>
            <Find_input></Find_input>
            <div className="flex">
                <Marvel_card>3-D Man</Marvel_card>
                <Marvel_card>3-D Man</Marvel_card>
                <Marvel_card>3-D Man</Marvel_card>
                <Marvel_card>3-D Man</Marvel_card>
                <Marvel_card>3-D Man</Marvel_card>
                <Marvel_card>3-D Man</Marvel_card>
            </div>
        </div>
    );
};

export default Cards;