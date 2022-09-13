import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/api';
import styles from '../styles/detail.module.css';

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  console.log(character);

  useEffect(() => {
    getCharacterById(id).then((response) => {
      setCharacter(response.data);
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{character.name}</h2>
      <img src={character.image} alt="Imagen" />
      <div className={styles.details}>
        <p>Genero: {character.gender}</p>
        <p>Origen: {character.origin?.name}</p>
        <p>Especie: {character.species}</p>
        {character.status === 'Alive' ? <p>Está vivo</p> : <p>Fallecio</p>}
      </div>
    </div>
  );
};
export default CharacterDetail;
