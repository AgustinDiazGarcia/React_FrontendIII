import React from 'react';
import Perro from './Perro';

const Veterinaria = () => {
  return (
    <div className="veterinaria">
      <h1>Clientes caninos de Veterinaria</h1>
      <Perro
        nombre="Firulais"
        edad="11"
        sexo="Macho"
        raza="Pastor Alemán"
        tamanio="Grande"
      />
      <Perro nombre="Maya" edad="13" sexo="Hembra" raza="Pug" tamanio="Chico" />
      <Perro
        nombre="Pipo"
        edad="5"
        sexo="Macho"
        raza="Schnauzer"
        tamanio="Mediano"
      />
      <Perro
        nombre="Pacha"
        edad="2"
        sexo="Hembra"
        raza="Mestizo"
        tamanio="Chico"
      />
    </div>
  );
};

export default Veterinaria;
