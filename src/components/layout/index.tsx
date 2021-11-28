import React, { useState } from "react";
import Sticky from "react-stickynode";
import Header from "../header";
// import Footer from "./footer";
import { Waypoint } from "react-waypoint";
import Drawer from '../drawer';
import { LayoutContainer } from './style';
// import { useDrawer } from '../../contexts/drawer';

export default function Layout({ children }: any) {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    // const drawer = useDrawer();
    const onWaypointPositionChange = ({ currentPosition }: any) => {
        if (currentPosition === "above")
            setIsSticky(true);

        if (currentPosition === "inside")
            setIsSticky(false);

    };

    return (
        <React.Fragment>
            <LayoutContainer>
                <Sticky enabled={isSticky} innerZ={1000}>
                    <Header isSticky={isSticky} />
                </Sticky>

                <Drawer />
                <Waypoint
                    onEnter={() => {
                        setIsSticky(false);
                    }}
                    onPositionChange={onWaypointPositionChange}
                />
                <main>
                    {children}
                </main>
                {/* <Footer /> */}
            </LayoutContainer>
        </React.Fragment>
    );
}
