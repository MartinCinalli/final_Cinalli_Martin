
import Card from '../Components/Card'
import { useGlobalState } from '../Context/context'


const Home = () => {

  const {state} = useGlobalState()

  return (
    <main className={state.theme === 'dark' ? 'dark' : 'light'} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.listOdon.map((item) => <Card key={item.id} item={item}/>)}
      </div>
    </main>
  )
}

export default Home