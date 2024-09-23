import PropTypes from "prop-types";  



export const Child = (props) => {  

  const handleChangeName = ()  =>{
      const newName = prompt ("ingresa un nuevo nombre: ");
      if(newName){
        props.setName(newName);
      }
  }

    return (  
        <div>  
            <h1>child</h1>  
            <p>Nombre: {props.name}</p>  
            <button className="btn btn-primary" onClick={handleChangeName}>Cambiar Nombre</button>
        </div>  
    );  
}  

Child.propTypes = {  
    name: PropTypes.string,  
    setName: PropTypes.func
};