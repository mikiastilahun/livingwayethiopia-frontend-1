
import React, { useState } from 'react';
import Giving from './giving';
import PartnershipComponent from './partnerShip';
import { Container, TabContainer, } from './style';


const SupportUsContainer = () => {

    enum CurrentTabData {
        Giving,
        Partnership,
    }


    const [current, setCurrent] = useState<CurrentTabData>(CurrentTabData.Giving)
    return (
        <Container >

            <div className='topPart '>
                <div className='tabs'>
                    <TabContainer active={CurrentTabData.Giving === current} onClick={() => {
                        setCurrent(CurrentTabData.Giving)

                    }}>
                        <p>
                            Giving
                        </p>
                    </TabContainer>
                    <TabContainer active={CurrentTabData.Partnership === current} onClick={() => {
                        setCurrent(CurrentTabData.Partnership)

                    }}>
                        <p>
                            Partnership
                        </p>
                    </TabContainer>
                </div>
                <div className='divider' />
            </div>
            <div className='mb-10' />
            <div className='bottom'>
                {
                    CurrentTabData.Giving === current && <Giving />
                }  {
                    CurrentTabData.Partnership === current && <PartnershipComponent />
                }
            </div>
        </Container>
    );
}

export default SupportUsContainer;