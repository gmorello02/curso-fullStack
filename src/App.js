import "./App.css"
import TarjetaPaciente from './TarjetaPaciente/TarjetaPaciente';

function App() {
  return (
    <div className="App">
      <TarjetaPaciente
      imgPaciente="https://via.placeholder.com/150"
      nombre="Gabriel Morello Regalini"
      edad={28}
      sexo="Masculino"
      />
      <TarjetaPaciente
      imgPaciente="https://via.placeholder.com/150"
      nombre="Pablo Lescano"
      edad={30}
      sexo="Masculino"
      />
      <TarjetaPaciente
      imgPaciente="https://via.placeholder.com/150"
      nombre="Fulanita de Tal"
      edad={31}
      sexo="Femenino"
      />
    </div>
    
  );
}

export default App;
