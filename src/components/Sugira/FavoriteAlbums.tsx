import React from 'react';

interface Album {
  id: number;
  AlbumName: string;
  ArtistName: string;
}

interface FavoriteAlbumsProps {
  music: Album[];
}

const FavoriteAlbums: React.FC<FavoriteAlbumsProps> = ({ music }) =>{
  return (
    <div>



      <h1>Vincent's Favorite Fruits</h1>
      <ul>
        {music.map((music) => (
          <li key={music.id}>
            <strong>{music.AlbumName}</strong> - {music.ArtistName}
          </li>
        ))}
      </ul>
    </div>


  );


};

export default FavoriteAlbums;