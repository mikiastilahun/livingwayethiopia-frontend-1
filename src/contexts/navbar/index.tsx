import React, { useState, useContext } from "react";

type PathsType = {
    path: string;
    name: string;
    button?: boolean;
    action?: Function;
};

const initialValues: {
    path: string,
    isSticky: boolean,
    drawerView: boolean,
    paths: PathsType[],
    updateNavBar: Function,
    updateDrawerView: Function
    updateIsSticky: Function
} = {
    path: "",
    isSticky: true,
    drawerView: false,
    paths: [{
        "path": "/",
        "name": "Services",
    },],
    updateNavBar: () => { },
    updateDrawerView: () => { },
    updateIsSticky: () => { },
};


const NavBarContext = React.createContext(initialValues);

const useNavBar = () => useContext(NavBarContext);

const NavBarProvider: React.FC = ({ children }) => {
    const [path, setPath] = useState<string>("/");
    const [isSticky, setIsSticky] = useState<boolean>(true);
    const [drawerView, setDrawerView] = useState<boolean>(false);
    const [paths, setPaths] = useState<PathsType[]>([
        {
            "path": "/",
            "name": "HOME",
        },
        {
            "path": "/ministry",
            "name": "MINISTRY"
        },
        {
            "path": "/articles",
            "name": "ARTICLES"
        },
        {
            "path": "/sermon",
            "name": "SERMON"
        },
        {
            "path": "/about-us",
            "name": "ABOUT US"
        },
        {
            "path": "/support-us",
            "name": "SUPPORT US",

        },
        {
            "path": "/support us",
            "name": "LIVE",
            "button": true,
            "action": () => {

            }

        }
    ]);


    const updateNavBar = (data: string) => {
        setPath(data);
    };

    const updateIsSticky = (data: boolean) => {
        setIsSticky(data);
    };

    const updateDrawerView = () => {
        setDrawerView(!drawerView);
    };

    return (
        <NavBarContext.Provider
            value={{
                path,
                paths,
                isSticky,
                drawerView,
                updateNavBar,
                updateDrawerView,
                updateIsSticky
            }}
        >
            {children}
        </NavBarContext.Provider>
    );
};



export { NavBarProvider, useNavBar };

