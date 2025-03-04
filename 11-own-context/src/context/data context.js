import { useContext, createContext } from "react";

export const Data = createContext({
    apicall: () => { },
})
export const Dataprovider = Data.Provider;

export const Usedata = () => {
    return useContext(Data);
}