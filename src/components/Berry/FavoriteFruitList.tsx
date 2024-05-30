
import React from 'react';

interface Fruit {
  id: number;
  name: string;
  color: string;
}

interface FavoriteFruitsProps {
  fruits: Fruit[];
}

const FavoriteFruits: React.FC<FavoriteFruitsProps> = ({ fruits }) => {
  return (
    <div>
      <h1>Beline's Favorite Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <strong>{fruit.name}</strong> - {fruit.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteFruits;
