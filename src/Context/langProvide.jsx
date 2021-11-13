import { createContext, useState } from "react";

const Context = createContext()

function LangProvider({children}){
    const [lang, setLang] = useState('eng')

    return (
        <Context.Provider value={{lang, setLang}}>{children}</Context.Provider>
    )
}

export {Context, LangProvider}