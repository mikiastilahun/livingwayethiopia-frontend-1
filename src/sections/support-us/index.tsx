
import React, { useState } from 'react';
import { SupportUsEntity } from '../../types/strapi';
import Giving from './giving';
import PartnershipComponent from './partnerShip';
import { Container, TabContainer, } from './style';


const SupportUsContainer = ({ supportUs }: { supportUs: SupportUsEntity }) => {

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
                    supportUs?.attributes?.Giving! &&
                    CurrentTabData.Giving === current && <Giving data={supportUs?.attributes?.Giving!} />
                }
                {
                    supportUs?.attributes?.partnership! &&
                    CurrentTabData.Partnership === current && <PartnershipComponent data={supportUs?.attributes?.partnership!} />
                }
            </div>
        </Container>
    );
}

export default SupportUsContainer;