import React from 'react';
import './Card.css';
import classnames from "classnames";

function Card({ props, isSelected }) {
    const className = classnames("card", {
        selected: isSelected,
        unlimited300: props === 300,
        unlimited450: props === 450,
        unlimited550: props === 550,
        unlimited1000: props === 1000
    });
    return (
        <div className={className}>
            <div className='Card-header'>Безлимитный {props.rate}</div>
            <div className='card-body'>
                <div className='card-price'>
                    <div className='card-text1'>руб</div>
                    <div className='price-value'>{props.price}</div>
                    <div className='card-text2'>/мес</div>
                </div>
                <div className='card-speed'>до {props.speed} Мбит/сек</div>
                <div className='card-footer'>Объем включенного трафика не граничен</div>
            </div>
        </div>
    )
}

export default Card;
