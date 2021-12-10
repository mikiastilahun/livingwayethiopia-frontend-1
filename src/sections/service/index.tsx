
import React from 'react';
import { Title } from '../event/style';
import Image from "next/image";
import { CardContainer, InnerServiceContainer, ServiceContainer, } from './style';


interface ServiceDataType {
    title: string,
    detail: string,
}
const ServiceSection = () => {

    const ServiceData: ServiceDataType[] = [{
        title: "WEDNESDAYS FROM 6PM - 8PM",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        title: "SUNDAYS FROM 10AM TO 1:30PM", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        title: "SUNDAYS FROM 10AM TO 1:30PM", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    ]
    return (
        <ServiceContainer >
            <Title>
                Service Times
            </Title>
            <InnerServiceContainer>
                {ServiceData.map((data, index) => {
                    return <CardContainer>
                        <div className="left">
                            <Image src="/icons/calendar.svg" alt="calender" width={35} height={35} loading="eager" />
                        </div>
                        <div className="right">
                            <p className='top'>{data.title}</p>
                            <p className='bottom'>{data.detail}</p>
                        </div>
                    </CardContainer>
                })}

            </InnerServiceContainer>
        </ServiceContainer>
    );
}

export default ServiceSection;
