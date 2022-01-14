import React, { useState, useContext } from "react";


enum ActiveTabData {
    Podcasts,
    Videos,
    Audios,
}

const initialValues: {
    sermon: ActiveTabData,
    updateSermon: Function
} = {
    sermon: ActiveTabData.Podcasts,
    updateSermon: (value: ActiveTabData) => {
    }
};


const GlobalContext = React.createContext(initialValues);

const useGeneralData = () => useContext(GlobalContext);

const GeneralDataProvider: React.FC = ({ children }) => {

    const [sermon, setSermon] = useState<ActiveTabData>(ActiveTabData.Podcasts);

    const updateSermon = (value: ActiveTabData) => {
        setSermon(value);
    }
    return (
        <GlobalContext.Provider
            value={{
                sermon,
                updateSermon,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};



export { GeneralDataProvider, useGeneralData };

