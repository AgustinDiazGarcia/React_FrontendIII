import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Rejuvenecedor = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const edad = event.target.edad.value;

    if (nombre.length < 1) {
      Swal.fire('Error', 'Debe tener al menos 1 caracter', 'error');
    }
    if (edad < 1) {
      Swal.fire('Error', 'Debe ser un numero entero positivo', 'error');
      //console.log(Number.isInteger(parseInt(edad)));
    }

    setNombre(nombre);

    const nuevaEdad = rejuvenecer(edad);
    setEdad(nuevaEdad);
  };

  const rejuvenecer = (edad) => {
    let nuevaEdad = 0;
    if (edad >= 10) {
      nuevaEdad = edad - 10;
    } else {
      nuevaEdad = 0;
    }
    return nuevaEdad;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Nombre: <input type="text" name="nombre" />
        </label>
        <label>
          Edad: <input type="number" name="edad" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <p>Nombre: {nombre}</p>
        <p>Edad: {edad}</p>
      </div>
    </div>
  );
};

export default Rejuvenecedor;
