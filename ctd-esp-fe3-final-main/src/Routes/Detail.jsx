import axios from 'axios'
import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalState } from '../Context/context'


const Detail = () => {
  
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  const {state, dispatch} = useGlobalState()
  const {detailOdon} = state

  useEffect(()=>{
    axios(url)
    .then(res => dispatch({type: 'GET_DETAIL', payload: res.data}))
  },[])

  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Detail Dentist {detailOdon.id}</h1>
      { <ul className='li-detail'>
          <div className='tabla-detail'>
            <h2>Name</h2>
            <li>{detailOdon.name}</li>
          </div>
          <div className='tabla-detail'>
            <h2>Email</h2>
            <li>{detailOdon.email}</li>
          </div>
          <div className='tabla-detail'>
            <h2>Phone</h2>
            <li>{detailOdon.phone}</li>
          </div>
          <div className='tabla-detail'>
            <h2>WebSite</h2>
            <li>{detailOdon.website}</li>
          </div>
        </ul>
        }
    </div>
  )
}

export default Detail