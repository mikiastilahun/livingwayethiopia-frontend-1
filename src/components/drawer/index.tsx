
import React from 'react';
import Link from 'next/link';
import { MainContainer, DrawerContainerLeft, DrawerContainer, TopDrawerContainer, MidDrawerContainer, BottomDrawerContainer, } from './style';
import { useNavBar } from '../../contexts/navbar';
import LogoContainer from '../logo';



const Drawer = () => {
    const navbar = useNavBar();
    return (
        <MainContainer view={navbar.drawerView}>
            <DrawerContainerLeft onClick={() => {
                navbar.updateDrawerView();
            }} />
            <DrawerContainer onClick={() => {
                console.log("inhere")
            }} >
                <TopDrawerContainer>
                    <LogoContainer />
                    <img src="/assets/icons/x.svg" alt="close" onClick={() => {
                        navbar.updateDrawerView();
                    }} />
                </TopDrawerContainer>
                <MidDrawerContainer />
                <BottomDrawerContainer />
            </DrawerContainer>
        </MainContainer>
    );
}

export default Drawer;
