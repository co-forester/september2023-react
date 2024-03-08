const baseURL = 'https://rickandmortyapi.com/api';

const episodes = '/episodes';
const characters = '/characters';

const  urls = {
    episodes,
    characters:{
        byIds: (ids) => `${characters}/${ids}`
    }
}

export {baseURL, urls}