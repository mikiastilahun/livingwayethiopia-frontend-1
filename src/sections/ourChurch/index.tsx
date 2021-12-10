
import React from 'react';
import { Title } from '../event/style';
import Image from "next/image";
import { InnerOurCurchContainer, OurCurchContainer, } from './style';


const OurCurchSection = () => {
    return (
        <OurCurchContainer >
            <Title>
                Our Church
            </Title>
            <InnerOurCurchContainer>
            </InnerOurCurchContainer>
        </OurCurchContainer>
    );
}

export default OurCurchSection;
