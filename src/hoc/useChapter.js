import {useContext} from "react";

import {Context} from "./ContextProvider";

const useChapter = () => {
    const [chapter, setChapter] = useContext(Context)
    return {
        chapter, setChapter
    }
}

export {
    useChapter
}