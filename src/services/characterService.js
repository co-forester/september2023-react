import axios from "axios";

import {urls} from "../constants";
import {apiService} from "./apiService";

const  characterService = {
    getByIds: async (ids) => {
       let {data: characters} = await apiService.get(urls.characters.byIds(ids));
       const promises = [];

        for (const character of characters) {
            promises.push(axios.get(character.image, {responseType: "Blob"}))
        }

        const responses =  await Promise.all(promises);
        const res = responses.map(response => URL.createObjectURL(response.data));

        for (let i= 0; i < characters.length; i++){
            characters[i].image = res[i]
        }
        return characters
    }
}

export {characterService}

