import { createContext} from "react"

export const BioContext = createContext()

export const BioProvider = ({children}) => {

    const myName = "tashrif";
    const myAge = 24

    return(
    <BioContext.Provider value={{myName, myAge}}>{children}</BioContext.Provider>
    )

}