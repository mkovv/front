import React, { createContext, useState } from "react";

const AppContext = createContext({

});

const AppContextProvider = (props) => {

    const [token, setToken] = useState(null);

    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;