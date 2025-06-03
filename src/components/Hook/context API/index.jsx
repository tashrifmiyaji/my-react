import { createContext, useContext} from "react"

const BioContext = createContext()

export const BioProvider = ({children}) => {

    const myName = "tashrif";
    const myAge = 24

    return(
    <BioContext.Provider value={{myName, myAge}}>{children}</BioContext.Provider>
    )

}

// custom Hooks
export const useBioContext = () => {
    const context = useContext(BioContext)
    return context;
}