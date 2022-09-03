import React from 'react';

function ListadoTurnos(props) {
  console.log(props.listTurnos);
  return (
    <ul style={{ listStyle: 'none' }}>
      {props.listTurnos.map((element) => {
        return (
          <li key={element.id}>
            Turno: {element.id} - Correspondiente al paciente {element.nombre}{' '}
            {element.apellido} agendado exitosamente
          </li>
        );
      })}
    </ul>
  );
}

export default ListadoTurnos;
