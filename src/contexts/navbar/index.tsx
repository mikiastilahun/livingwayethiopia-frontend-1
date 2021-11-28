import React, { useState, useContext } from "react";

type PathsType = {
    path: string;
    name: string;
    button?: boolean;
    action?: Function;
};

const initialValues: {
    path: string,
    drawerView: boolean,
    paths: PathsType[],
    updateNavBar: Function,
    updateDrawerView: Function
} = {
    path: "",
    drawerView: false,
    paths: [{
        "path": "/",
        "name": "Services",
    },],
    updateNavBar: () => { },
    updateDrawerView: () => { },
};


const NavBarContext = React.createContext(initialValues);

const useNavBar = () => useContext(NavBarContext);

const NavBarProvider: React.FC = ({ children }) => {
    const [path, setPath] = useState<string>("/");
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
            "path": "/sermon",
            "name": "SERMON"
        },
        {
            "path": "/about-us",
            "name": "ABOUT US"
        },
        {
            "path": "/support us",
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

    const updateDrawerView = () => {
        setDrawerView(!drawerView);
    };

    return (
        <NavBarContext.Provider
            value={{
                path,
                paths,
                drawerView,
                updateNavBar,
                updateDrawerView,
            }}
        >
            {children}
        </NavBarContext.Provider>
    );
};



export { NavBarProvider, useNavBar };

