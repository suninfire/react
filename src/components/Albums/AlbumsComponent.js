import {useEffect, useState} from "react";

import {getAlbums} from "../../services/AlbumsService";
import AlbumComponent from "./AlbumComponent";

export default function AlbumsComponent() {

    const [albums,setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(({data}) => setAlbums([...data]));
    },[]);

    return (
        <div>
            {
                albums.map(album => <AlbumComponent album={album} key={album.id}/>)
            }
        </div>
    );
}