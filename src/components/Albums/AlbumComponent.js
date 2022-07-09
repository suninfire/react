export default function AlbumComponent({album}) {
    return (
        <div>
            <h4>{album.id} - {album.title}</h4>
        </div>
    );
}