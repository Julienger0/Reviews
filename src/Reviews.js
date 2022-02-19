import React from 'react';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import data from './data/data'

function Reviews() {
    const [index, setIndex] = useState(0);

    function checkNumber(number) {
        if (number > data.length - 1) {
            return 0;
        }
        if (number < 0) {
            return data.length - 1;
        }
        return number;

    }
    function nextPerson() {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    function prevPerson() {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    function randomPerson() {
        let randomNumber = Math.floor(Math.random() * data.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };
    return (
        <div className='Review'>
            <img className='img' src={data[index].image} alt={data[index].name} width="250px" height="200px" />
            <h3>{data[index].name}</h3>
            <h4>{data[index].job}</h4>
            <p>{data[index].text}</p>
            <button className='button' onClick={() => nextPerson()}><AiOutlineArrowLeft color="green" /></button>
            <button className='button' onClick={() => prevPerson()}><AiOutlineArrowRight color="green" /></button>


        </div>
    )
}
export default Reviews