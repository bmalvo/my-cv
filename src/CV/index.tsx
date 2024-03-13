import { Header } from '../Header';
import { Details } from '../Details';
import { Personal } from '../Personal';
import './CV.scss';



const CV = () => {
     return <main className='cv-main'>
         <Header />
         <Personal />
         <Details />
    
   </main>
}

export { CV }
