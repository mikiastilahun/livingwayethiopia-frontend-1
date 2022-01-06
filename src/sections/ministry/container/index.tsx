
import React, { useState } from 'react';
import Image from "next/image";
import { Container, TabContainer, } from './style';
import { theme } from '../../../styles/theme';
import StaffMember from '../staff';
import BackgroundInfo from '../background';
import Community from '../community';
import { MinistryEntity } from '../../../types/strapi';


const MinistryContainer = ({ ministryData }: { ministryData: MinistryEntity }) => {

    enum CurrentTabData {
        Youth,
        Children,
        Senior,
    }

    const [ministry, setMinistry] = useState({
        staff: ministryData.attributes?.youth?.staffMember,
        background: {
            image: ministryData.attributes?.youth?.InfoImage?.data?.attributes?.url,
            text: ministryData.attributes?.youth?.BackgroundInfo
        },
        communityOutReach: ministryData.attributes?.youth?.communityOutReach,
    })

    const [current, setCurrent] = useState<CurrentTabData>(CurrentTabData.Youth)
    return (
        <Container >

            <div className='topPart '>
                <div className='tabs'>
                    <TabContainer active={CurrentTabData.Youth === current} onClick={() => {
                        setCurrent(CurrentTabData.Youth)
                        setMinistry({
                            staff: ministryData.attributes?.youth?.staffMember,
                            background: {
                                image: ministryData.attributes?.youth?.InfoImage?.data?.attributes?.url,
                                text: ministryData.attributes?.youth?.BackgroundInfo
                            },
                            communityOutReach: ministryData.attributes?.youth?.communityOutReach,
                        })
                    }}>
                        <p>
                            Youth
                        </p>
                    </TabContainer>
                    <TabContainer active={CurrentTabData.Children === current} onClick={() => {
                        setCurrent(CurrentTabData.Children)
                        setMinistry({
                            staff: ministryData.attributes?.children?.staffMember,
                            background: {
                                image: ministryData.attributes?.children?.InfoImage?.data?.attributes?.url,
                                text: ministryData.attributes?.children?.BackgroundInfo
                            },
                            communityOutReach: ministryData.attributes?.children?.communityOutReach,
                        })
                    }}>
                        <p>
                            Children
                        </p>
                    </TabContainer>
                    <TabContainer active={CurrentTabData.Senior === current} onClick={() => {
                        setCurrent(CurrentTabData.Senior)
                        setMinistry({
                            staff: ministryData.attributes?.senior?.staffMember,
                            background: {
                                image: ministryData.attributes?.senior?.InfoImage?.data?.attributes?.url,
                                text: ministryData.attributes?.senior?.BackgroundInfo
                            },
                            communityOutReach: ministryData.attributes?.senior?.communityOutReach,
                        })
                    }}>
                        <p>
                            Senior
                        </p>
                    </TabContainer>
                </div>
                <div className='divider' />
            </div>
            <div className='mb-10' />
            <StaffMember staff={ministry.staff!} />
            <BackgroundInfo background={ministry.background} />
            <Community communityOutReach={ministry.communityOutReach!} />
        </Container>
    );
}

export default MinistryContainer;