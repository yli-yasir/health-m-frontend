import boySvg1 from '../assets/boy1.svg';
import boySvg2 from '../assets/boy2.svg';
import boySvg3 from '../assets/boy3.svg';
import girlSvg1 from '../assets/girl1.svg';
import girlSvg2 from '../assets/girl2.svg';
import girlSvg3 from '../assets/girl3.svg';

const boySvgs = [boySvg1,boySvg2,boySvg3];
const girlSvgs = [girlSvg1,girlSvg2,girlSvg3];

export function getRandomBoySvg(){
    return getRandomElement(boySvgs);
}

export function getRandomGirlSvg(){
    return getRandomElement(girlSvgs);
}

function getRandomElement(arr){
    return arr[Math.floor((Math.random()*arr.length))] ;
}