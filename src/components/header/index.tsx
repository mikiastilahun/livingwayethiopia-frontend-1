
import React from 'react';
import { HeaderContainer, Logo, Detail, FullScreenComponent, MobileScreenComponent, NavLink, ButtonNav } from './style';
import { useNavBar } from '../../contexts/navbar';
import LogoContainer from '../logo';
import Image from "next/image";



const Header = ({ isSticky }: { isSticky: boolean }) => {
    const navbar = useNavBar();
    return (
        <HeaderContainer isSticky={isSticky}>
            <Logo>
                <LogoContainer />
            </Logo>
            <Detail>
                <FullScreenComponent center={true}>
                    {navbar.paths.map((data, index) => {
                        if (data.button) {
                            return <ButtonNav key={index} >
                                <div className="border" />
                                <button className='buttonContainer'>
                                    {data.name}
                                    <div style={{ width: 20, height: 20 }}>
                                        <Image width={20} height={20} src="/icons/live.svg" alt="live" />
                                    </div>
                                </button>
                            </ButtonNav>

                        } else
                            return <NavLink key={index} active={navbar.path === data.path} onClick={() => {
                                navbar.updateNavBar(data.path);
                            }}>
                                {data.name}
                            </NavLink>
                    })}
                </FullScreenComponent>
                <MobileScreenComponent>
                    <div>
                        <Image width={40} height={40} src="/icons/menu.svg" alt="Menu" onClick={() => {
                            navbar.updateDrawerView();
                        }} /></div>
                </MobileScreenComponent>
            </Detail>
        </HeaderContainer>
    );
}

export default Header;
