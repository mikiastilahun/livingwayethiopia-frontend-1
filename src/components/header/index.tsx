
import React from 'react';
import { HeaderContainer, Logo, Detail, FullScreenComponent, MobileScreenComponent, NavLink, ButtonNav } from './style';
import { useNavBar } from '../../contexts/navbar';
import LogoContainer from '../logo';


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
                            return <>
                                <div className='borderContainer' />
                                <ButtonNav>{data.name}
                                    <img src="/icons/live.svg" alt="live" />
                                </ButtonNav></>
                        } else
                            return <NavLink key={index} active={navbar.path === data.path} onClick={() => {
                                navbar.updateNavBar(data.path);
                            }}>
                                {data.name}
                            </NavLink>
                    })}
                </FullScreenComponent>
                <MobileScreenComponent>
                    <img src="/icons/menu.svg" alt="Menu" onClick={() => {
                        navbar.updateDrawerView();
                    }} />
                </MobileScreenComponent>
            </Detail>
        </HeaderContainer>
    );
}

export default Header;
