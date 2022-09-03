import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.registro}>
      <p>
        Nombre: <input type="text" name="name" />
      </p>
      <p>
        Apellido: <input type="text" name="lastName" />
      </p>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Form;
