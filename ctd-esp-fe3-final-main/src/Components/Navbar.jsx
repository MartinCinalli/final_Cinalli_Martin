import { Link } from "react-router-dom"
import { routes } from "../utils/routes"
import { useGlobalState } from '../Context/context'


const Navbar = () => {
  const { state, dispatch } = useGlobalState();

  return (
    <nav className={state.theme === 'dark' ? 'dark' : 'light'}>
      <Link to={routes.home}><h4>HOME</h4></Link>
      <Link to={routes.contact}><h4>CONTACT</h4></Link>
      <Link to={routes.favs}><h4>FAVS</h4></Link>
      <button onClick={()=>dispatch({type: 'THEME'})}>{state.theme === 'dark' ? '☀️' : '🌙'}</button>
    </nav>
  )
}

export default Navbar