import { useState } from "react";
import './App.css'
import { Child } from './components/child'
import { FourComponent } from "./components/FourComponent";
/*import { MyFirstComponent } from './components/MyFirstComponent'*/
/*import { NewComponent } from './components/NewComponent'*/
/*import { ThirdComponent } from './components/ThirdComponent'*/
function App() {

  const[name, setName]=useState("Jefry julian Rojas Urrea");

  return (
    <>
      <div className="App">
      <header className="App-header">
        <FourComponent />
      
        {/*<MyFirstComponent />*/}
  
        {/*<NewComponent />*/}
 
     {/*<ThirdComponent 
        name="Jefry "
        last_name="Rojas"
        age={30}/>*/}
      <hr  className='white-hr'/>
        <Child name={name}
        setName={setName}  />
     <hr  className='white-hr'/>
     
        </header>      
        </div>      
    </>
  )
}

export default App
