import {useEffect, useState} from "react";
import {albumService} from "../../../services/AlbumService";
import {Album} from "../Album/Album";


const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        albumService.getAll().then(({data})=>setAlbums(data))
    }, [])
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};