import React from 'react'
import { useGlobalState } from '../Context/context'

const Footer = () => {
  
  const {state} = useGlobalState()

  return (
    <footer className={state.theme === 'dark' ? 'dark' : 'light'}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
