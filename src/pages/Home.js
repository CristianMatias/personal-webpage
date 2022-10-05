import './Home.css';
import Experience from './Experience';
import Studies from './studies/Studies';
import EmployeeCard from '../components/cards/EmployeeCard';


function App() {
  return (
    <div className="home">
      <h3>Introducción</h3>

      <EmployeeCard />

      Ingeniero de APIs, listo para tomar nuevas experiencias, aplicar mis conocimientos y adquirir otras 
      nuevas. 
      <br/><br/>

      Tengo un título de Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, también he 
      ampliado mis habilidades con diferentes cursos donde he aprendido diferentes lenguajes de programación 
      como C #, Python, Javascript, etc. 
      <br/><br/>
      Gracias a mi ciclo superior tengo un alto conocimiento en Java, MySQL, PostgreSQL, diferentes 
      archivos como json, csv, dat, buenas prácticas de programación (Clean Code), programación 
      multihilo, desarrollo móvil y más. También tengo un nivel avanzado de inglés (B2) y un nivel 
      básico de alemán (A2), ambos reconocidos por la Escuela Oficial de Idiomas.
      <br/><br/><br />

      <Studies />
      <Experience />
      
      <br/><br/>
    </div>

  );
}

export default App;
