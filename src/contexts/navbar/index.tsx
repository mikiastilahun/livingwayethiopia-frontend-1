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
    about: boolean;
    paths: PathsType[],
    updateNavBar: Function,
    updateAbout: Function,
    updateDrawerView: Function
    updateIsSticky: Function
} = {
    path: "",
    isSticky: true,
    drawerView: false,
    about: false,
    paths: [{
        "path": "/",
        "name": "Services",
    },],
    updateNavBar: () => { },
    updateDrawerView: () => { },
    updateIsSticky: () => { },
    updateAbout: () => { },
};


const NavBarContext = React.createContext(initialValues);

const useNavBar = () => useContext(NavBarContext);

const NavBarProvider: React.FC = ({ children }) => {
    const [path, setPath] = useState<string>("/");
    const [isSticky, setIsSticky] = useState<boolean>(true);
    const [about, setAbout] = useState<boolean>(true);
    const [drawerView, setDrawerView] = useState<boolean>(false);
    const [paths, setPaths] = useState<PathsType[]>([
        {
            "path": "/",
            "name": process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "HOME" : "amharic",
        },
        {
            "path": "/ministry",
            "name": process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "MINISTRY" : "amharic"
        },
        {
            "path": "/articles",
            "name": process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "ARTICLES" : "amharic"
        },
        {
            "path": "/sermon",
            "name": process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "SERMON" : "amharic"
        },
        {
            "path": "/about-us",
            "name": process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "ABOUT US" : "amharic"
        },
        {
            "path": "/support-us",
            "name": process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "SUPPORT US" : "amharic",

        },
        {
            "path": "/support us",
            "name": process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "LIVE" : "amharic",
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
    const updateAbout = () => {
        setAbout(!about);
    };

    return (
        <NavBarContext.Provider
            value={{
                about,
                path,
                paths,
                isSticky,
                drawerView,
                updateAbout,
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

