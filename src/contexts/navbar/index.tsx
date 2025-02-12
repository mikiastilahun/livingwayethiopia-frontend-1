import React, { useState, useContext } from "react";

type PathsType = {
    path: string;
    name: string;
    button?: boolean;
    action?: Function;
    detail?: string;
};

type aboutUsData = {
    path: string;
    name: string;
    iconData: Function;
};

const initialValues: {
    path: string,
    isSticky: boolean,
    drawerView: boolean,
    about: boolean;
    aboutUs: aboutUsData[];
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
    aboutUs: [],
    paths: [],
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
    const [aboutUs] = useState<aboutUsData[]>([
        {
            name: 'Our History',
            path: '/our-history',
            iconData: historyIcon,
        },
        {
            name: 'Why This Church was Created',
            path: '/why',
            iconData: creationIcon,
        },
        {
            name: 'Main Purpose',
            path: '/main-purpose',
            iconData: honorIcon,
        },
        {
            name: 'Church Staff',
            path: '/staff',
            iconData: staffIcon,
        },
        {
            name: 'Member Ship Info',
            path: '/member-ship',
            iconData: memberShipIcon,
        },
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
                aboutUs,
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



const historyIcon = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" width="48" height="48" rx="5" fill="#FFEDD5" />
            <path d="M15 25H33V33.002C33 33.553 32.555 34 32.007 34H15.993C15.8623 33.9997 15.7328 33.9737 15.6122 33.9234C15.4915 33.8731 15.3819 33.7995 15.2897 33.7068C15.1974 33.6141 15.1244 33.5042 15.0747 33.3832C15.025 33.2623 14.9996 33.1328 15 33.002V25ZM15 14.998C15 14.447 15.445 14 15.993 14H32.007C32.555 14 33 14.446 33 14.998V23H15V14.998ZM21 17V19H27V17H21ZM21 28V30H27V28H21Z" fill="#FDBA74" />
        </svg>

    )
}

const staffIcon = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" width="48" height="48" rx="5" fill="#FFEDD5" />
            <path d="M13 14H29.005C30.107 14 31 14.898 31 15.99V32.01C31 33.109 30.107 34 29.005 34H13V14ZM17 16H15V32H17V16ZM19 32H29V16H19V32ZM21 28C21 27.2044 21.3161 26.4413 21.8787 25.8787C22.4413 25.3161 23.2044 25 24 25C24.7956 25 25.5587 25.3161 26.1213 25.8787C26.6839 26.4413 27 27.2044 27 28H21ZM24 24C23.4696 24 22.9609 23.7893 22.5858 23.4142C22.2107 23.0391 22 22.5304 22 22C22 21.4696 22.2107 20.9609 22.5858 20.5858C22.9609 20.2107 23.4696 20 24 20C24.5304 20 25.0391 20.2107 25.4142 20.5858C25.7893 20.9609 26 21.4696 26 22C26 22.5304 25.7893 23.0391 25.4142 23.4142C25.0391 23.7893 24.5304 24 24 24ZM32 18H34V22H32V18ZM32 24H34V28H32V24Z" fill="#EF9410" />
        </svg>


    )
}

const memberShipIcon = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" width="48" height="48" rx="5" fill="#FFEDD5" />
            <path d="M24 23C25.3261 23 26.5979 23.5268 27.5355 24.4645C28.4732 25.4021 29 26.6739 29 28V34H27V28C27 27.2348 26.7077 26.4985 26.1827 25.9417C25.6578 25.385 24.9399 25.0499 24.176 25.005L24 25C23.2348 25 22.4985 25.2923 21.9417 25.8173C21.385 26.3422 21.0499 27.0601 21.005 27.824L21 28V34H19V28C19 26.6739 19.5268 25.4021 20.4645 24.4645C21.4021 23.5268 22.6739 23 24 23ZM17.5 26C17.779 26 18.05 26.033 18.31 26.094C18.139 26.603 18.0378 27.1328 18.009 27.669L18 28V28.086C17.8851 28.0449 17.7655 28.018 17.644 28.006L17.5 28C17.1271 28 16.7676 28.1389 16.4916 28.3896C16.2156 28.6403 16.0428 28.9848 16.007 29.356L16 29.5V34H14V29.5C14 28.5717 14.3687 27.6815 15.0251 27.0251C15.6815 26.3687 16.5717 26 17.5 26V26ZM30.5 26C31.4283 26 32.3185 26.3687 32.9749 27.0251C33.6313 27.6815 34 28.5717 34 29.5V34H32V29.5C32 29.1271 31.8611 28.7676 31.6104 28.4916C31.3597 28.2156 31.0152 28.0428 30.644 28.007L30.5 28C30.325 28 30.157 28.03 30 28.085V28C30 27.334 29.892 26.694 29.691 26.096C29.95 26.033 30.221 26 30.5 26ZM17.5 20C18.163 20 18.7989 20.2634 19.2678 20.7322C19.7366 21.2011 20 21.837 20 22.5C20 23.163 19.7366 23.7989 19.2678 24.2678C18.7989 24.7366 18.163 25 17.5 25C16.837 25 16.2011 24.7366 15.7322 24.2678C15.2634 23.7989 15 23.163 15 22.5C15 21.837 15.2634 21.2011 15.7322 20.7322C16.2011 20.2634 16.837 20 17.5 20V20ZM30.5 20C31.163 20 31.7989 20.2634 32.2678 20.7322C32.7366 21.2011 33 21.837 33 22.5C33 23.163 32.7366 23.7989 32.2678 24.2678C31.7989 24.7366 31.163 25 30.5 25C29.837 25 29.2011 24.7366 28.7322 24.2678C28.2634 23.7989 28 23.163 28 22.5C28 21.837 28.2634 21.2011 28.7322 20.7322C29.2011 20.2634 29.837 20 30.5 20V20ZM17.5 22C17.3674 22 17.2402 22.0527 17.1464 22.1464C17.0527 22.2402 17 22.3674 17 22.5C17 22.6326 17.0527 22.7598 17.1464 22.8536C17.2402 22.9473 17.3674 23 17.5 23C17.6326 23 17.7598 22.9473 17.8536 22.8536C17.9473 22.7598 18 22.6326 18 22.5C18 22.3674 17.9473 22.2402 17.8536 22.1464C17.7598 22.0527 17.6326 22 17.5 22ZM30.5 22C30.3674 22 30.2402 22.0527 30.1464 22.1464C30.0527 22.2402 30 22.3674 30 22.5C30 22.6326 30.0527 22.7598 30.1464 22.8536C30.2402 22.9473 30.3674 23 30.5 23C30.6326 23 30.7598 22.9473 30.8536 22.8536C30.9473 22.7598 31 22.6326 31 22.5C31 22.3674 30.9473 22.2402 30.8536 22.1464C30.7598 22.0527 30.6326 22 30.5 22ZM24 14C25.0609 14 26.0783 14.4214 26.8284 15.1716C27.5786 15.9217 28 16.9391 28 18C28 19.0609 27.5786 20.0783 26.8284 20.8284C26.0783 21.5786 25.0609 22 24 22C22.9391 22 21.9217 21.5786 21.1716 20.8284C20.4214 20.0783 20 19.0609 20 18C20 16.9391 20.4214 15.9217 21.1716 15.1716C21.9217 14.4214 22.9391 14 24 14V14ZM24 16C23.4696 16 22.9609 16.2107 22.5858 16.5858C22.2107 16.9609 22 17.4696 22 18C22 18.5304 22.2107 19.0391 22.5858 19.4142C22.9609 19.7893 23.4696 20 24 20C24.5304 20 25.0391 19.7893 25.4142 19.4142C25.7893 19.0391 26 18.5304 26 18C26 17.4696 25.7893 16.9609 25.4142 16.5858C25.0391 16.2107 24.5304 16 24 16V16Z" fill="#EF9410" />
        </svg>


    )
}
const honorIcon = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" width="48" height="48" rx="5" fill="#FFEDD5" />
            <path d="M33 16V30.721C33.0001 30.818 32.972 30.913 32.9191 30.9943C32.8662 31.0756 32.7908 31.1398 32.702 31.179L24 35.03L15.298 31.18C15.2089 31.1407 15.1333 31.0762 15.0804 30.9945C15.0274 30.9128 14.9995 30.8174 15 30.72V16H13V14H35V16H33ZM20 24V26H28V24H20ZM20 20V22H28V20H20Z" fill="#FDBA74" />
        </svg>
    )
}
const creationIcon = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" width="48" height="48" rx="5" fill="#FFEDD5" />
            <path d="M26.121 22.48C25.9335 22.2925 25.6792 22.1872 25.414 22.1872C25.1488 22.1872 24.8945 22.2925 24.707 22.48L24 23.186C23.8155 23.377 23.5948 23.5294 23.3508 23.6342C23.1068 23.739 22.8444 23.7942 22.5788 23.7965C22.3132 23.7988 22.0499 23.7482 21.8041 23.6476C21.5583 23.5471 21.335 23.3986 21.1472 23.2108C20.9594 23.023 20.8109 22.7997 20.7103 22.5539C20.6098 22.3081 20.5592 22.0447 20.5615 21.7792C20.5638 21.5136 20.619 21.2512 20.7238 21.0072C20.8286 20.7632 20.981 20.5425 21.172 20.358L26.802 14.726C28.1349 14.4228 29.5295 14.5476 30.7874 15.0826C32.0454 15.6175 33.1026 16.5355 33.8089 17.7059C34.5151 18.8763 34.8344 20.2395 34.7213 21.6018C34.6082 22.9641 34.0685 24.2561 33.179 25.294L31.071 27.429L26.121 22.479V22.48ZM15.161 16.468C16.1957 15.4334 17.5492 14.778 19.0026 14.6078C20.4559 14.4375 21.9242 14.7625 23.17 15.53L19.757 18.944C19.0178 19.6817 18.5964 20.6793 18.5829 21.7235C18.5694 22.7678 18.9649 23.7759 19.6848 24.5325C20.4047 25.2891 21.3919 25.7341 22.4355 25.7725C23.4792 25.8109 24.4965 25.4396 25.27 24.738L25.414 24.601L29.657 28.843L25.414 33.086C25.0389 33.4609 24.5303 33.6716 24 33.6716C23.4697 33.6716 22.961 33.4609 22.586 33.086L15.16 25.66C13.9411 24.441 13.2564 22.7878 13.2564 21.064C13.2564 19.3402 13.9411 17.687 15.16 16.468H15.161Z" fill="#FDBA74" />
        </svg>

    )
}

export { NavBarProvider, useNavBar };

