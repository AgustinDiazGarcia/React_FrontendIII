import React from 'react';

const Perro = (props) => {
  return (
    <div className="perro">
      <h2>Nombre: {props.nombre}</h2>
      <ul>
        <li>Edad: {props.edad}</li>
        <li>Sexo: {props.sexo}</li>
        <li>Raza: {props.raza}</li>
        <li>Tamaño: {props.tamanio}</li>
      </ul>
    </div>
  );
};

export default Perro;
