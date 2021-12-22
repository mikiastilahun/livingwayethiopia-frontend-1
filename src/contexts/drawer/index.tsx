import React, { useState, useContext, useEffect } from "react";

const initialValues = {
    opened: false,
    updateDrawer: () => { },
};

const DrawerContext = React.createContext(initialValues);

const useDrawer = () => useContext(DrawerContext);

const DrawerProvider: React.FC = ({ children }) => {
    const [opened, setOpened] = useState<boolean>(false);


    const updateDrawer = () => {
        setOpened(!opened);
    };

    return (
        <DrawerContext.Provider
            value={{
                opened,
                updateDrawer,
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
};



export { DrawerProvider, useDrawer };

