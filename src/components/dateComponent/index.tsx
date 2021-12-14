import React from "react";
import Image from "next/image";
import { DateContainer } from './style';

const DateComponent = () => {
    return <DateContainer>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6667 36.6667H8.33333C6.49238 36.6667 5 35.1743 5 33.3334V10C5 8.15909 6.49238 6.66671 8.33333 6.66671H11.6667V3.33337H15V6.66671H25V3.33337H28.3333V6.66671H31.6667C33.5076 6.66671 35 8.15909 35 10V33.3334C35 35.1743 33.5076 36.6667 31.6667 36.6667ZM8.33333 16.6667V33.3334H31.6667V16.6667H8.33333ZM8.33333 10V13.3334H31.6667V10H8.33333ZM21.6667 30H11.6667V20H21.6667V30Z" />
        </svg>
        <p>
            September 8th 2020
        </p>
    </DateContainer>


}

export default DateComponent;