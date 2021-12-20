import type { NextPage } from 'next'
import Layout from '../components/layout';
import BackgroundInfo from '../sections/ministry/background';
import Community from '../sections/ministry/community';
import StaffMember from '../sections/ministry/staff';
const Ministry: NextPage = () => {

    return (
        <Layout>
            <StaffMember />
            <BackgroundInfo />
            <Community />
        </Layout>
    )
}

export default Ministry
