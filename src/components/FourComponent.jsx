

export const FourComponent = () => {

    const handleClicked = (e, name) => {
        alert("Haz hecho un click en el siguiente boton. " + name);
    }

    const handleDoubleClicked = () =>{
        alert("Haz Hecho Doble Click");
    }

    const handleMouseEnter = (e) =>{
      alert("HAS ENTRADO A LA CAJA");
    }

    const handleMouseLeave = (e) => {
      alert("HAS SALIDO DE LA CAJA");
    }

    const handleMouse = (e, action) => {
      alert(`Has ${action} la caja`);
    }

    const handleInsideInput = (e) =>{
      console.log("Estas demtro del input, Escribe tu nombre");
    }
    const handleOutsideInput = (e) =>{
      console.log("Estas Fuera del Input, Adios")
    }

  return (
    <div> <h1>FourComponent</h1>
  {/*Evento Click*/}
  <div>
    <button  
    className="btn btn-danger"
    onClick={ () => {alert("Hola, Soy un evento click")}}
    >Haz Click Aqui
    </button>
    </div>
    <div>

    <button className="btn btn-success" 
    onClick={e => handleClicked (e, "Jefry Rojas")}>
        ¡Haz Click  Aca Tambien

    </button>
    </div>

<button className="btn btn-secondary"
onDoubleClick={handleDoubleClicked}>
    Haz Doble Click
    </button>
    <div id="box1" 
    onMouseEnter ={e => handleMouseEnter (e)}
    onMouseLeave ={e => handleMouseLeave (e)}
    >
     
        <p>Pasa el Mouse por encima!!</p>
    </div>
    <div id="box2" className="mt-4"
    onMouseEnter={e => handleMouse(e, "entrado a")}
    onMouseLeave ={e => handleMouse (e, "Saliendo De")}>
    </div>

    <div className="mt-4">
      <input type="text"
      onFocus={ e => handleInsideInput(e)} 
      onBlur={ e => handleOutsideInput(e)} 
      />
    </div>
    </div>
  )
}
