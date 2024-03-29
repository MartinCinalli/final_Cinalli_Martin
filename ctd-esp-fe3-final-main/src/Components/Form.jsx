import React, { useState } from "react";


const Form = () => {

  const [usuario, setUsuario] = useState(
    {
      nombre : '',
      email : ''
    }
  )
  const [mostrar, setMostrar] = useState(false)
  const [error, setError] = useState(false)
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(usuario.nombre.length > 5 && regexEmail.test(usuario.email)){
      setMostrar(true)
      setError(false)
    }
    else{
        setError(true)
        setMostrar(false)
    }
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre completo" type="text" onChange={({target}) => setUsuario({...usuario, nombre : target.value})}/>
        <input placeholder="Email" role="email" type="email" onChange={({target}) => setUsuario({...usuario, email : target.value})} />
        <button>Enviar</button>
      </form>
    
      {mostrar && <h2 className="contact">Gracias {usuario.nombre}, te contactaremos cuando antes vía mail.</h2>}
      {error && <h2 className="contact" style={{color:'red'}}>Por favor verifique su información nuevamente.</h2>}
    </>
  );
};

export default Form;
