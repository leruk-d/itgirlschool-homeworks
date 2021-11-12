import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className={`card ${isSelected ? 'selected' : ''}`}>
            <div className='card-header'>Безлимитный {props.rate}</div>
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
