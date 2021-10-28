import type { NextPage } from 'next'
import Login from './../components/Login';
import Languages from './../components/Languages'

const Home: NextPage = () => {
    return (
      <div>
        <Login />
        <Languages></Languages>
      </div>
    ); 
}

export default Home
