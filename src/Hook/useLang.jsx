import { useContext } from "react";
import { Context } from "../Context/langProvide";

function useLang(){
    const {lang, setLang} = useContext(Context)

    return [lang, setLang]
}

export default useLang