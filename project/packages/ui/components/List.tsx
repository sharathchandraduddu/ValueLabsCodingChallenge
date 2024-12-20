// import React from 'react';
import { useDispatch } from 'react-redux';
import { removePokemon } from '../../../apps/app/src/store/pokemonSlice'; // Adjusted path

interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  const dispatch = useDispatch();

  const handleRemove = (pokemon: string) => {
    dispatch(removePokemon(pokemon));
  };

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '15px',
        listStyleType: 'none',
        padding: 0,
      }}
    >
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            fontSize: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}
        >
          <button
            onClick={() => handleRemove(item)}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              border: 'none',
              fontSize: '10px',
              color: 'black',
              cursor: 'pointer',
            }}
          >
            &#10005;
          </button>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
