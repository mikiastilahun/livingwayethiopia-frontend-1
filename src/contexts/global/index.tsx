import React, { useState, useContext } from "react";

type LanguageList = {
    path: string;
    name: string;
    button?: boolean;
    action?: Function;
};

const languageData = {
    "home": {
        en: "Home",
        am: ""
    }
}

const initialValues: {
    language: any,
    footer: any,
} = {
    language: {

    },
    footer: {

    },
};


const GlobalContext = React.createContext(initialValues);

const useGlobal = () => useContext(GlobalContext);

const GlobalProvider: React.FC = ({ children }) => {
    const [language, setLanguage] = useState<string>("/");

    const [footer, setFooter] = useState<string>("/");


    return (
        <GlobalContext.Provider
            value={{
                language,
                footer,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};



export { GlobalProvider, useGlobal };

