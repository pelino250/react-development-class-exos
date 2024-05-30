import React from 'react';

interface Phones {
  name: string;
  id: number;
  color: string;
}


interface FavoritePhonesProps {
  phones: Phones[];
}

const FavoritePhones: React.FC<FavoritePhonesProps> = ({ phones }) => {
  return (
    <div>
      <h2>My Favorite Phones</h2>
      <ol>
        {phones.map(phone => (
          <li key={phone.id}>
            {phone.name} - {phone.color}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FavoritePhones;
