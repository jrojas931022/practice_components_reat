

export const MyFirstComponent = () => {

const name ="Jefry Julian Rojas Urrea";

const github_profile ="https://github.com/jrojas931022/practice_components_reat";

const student = {
  name: "Jefry",
 last_name: "Rojas",
 mobile: "3008882662",
 Linkedin_profile: "https://www.linkedin.com/home?originalSubdomain=es" 

};

  return (
    <>
    <div>MyFirstComponent</div>
    <div className="container">
        <h1>Temas De React</h1>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados Hooks</li>
            <li>Props</li>
            
        </ul>
        </div>

        <div className="container">
        <h1>Datos del Docente</h1>
        <p>
          Nombre: <strong>{ name }</strong>
        </p>

        <p>
          GitHub: { github_profile }
        </p>
        </div>


        <div className="container">
        <h1>Datos del Estudiante</h1>
        <p>Nombre:{student.name}</p>
        <p>Apellido:{student.last_name}</p>
        <p>Celular:{student.mobile}</p>
        <p>Linkedin<a href= {student.Linkedin_profile}> {student.Linkedin_profile}</a></p>
        </div>

        <div className="container ">
          <h1>Objeto Completo</h1>
          <pre>{JSON.stringify(student)}</pre>
        </div>


        
    </>
  )

}
