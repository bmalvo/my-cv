import { Header } from '../Header';
import { Details } from '../Details';
import { Personal } from '../Personal';
import { CVData } from '../types';
import './CV.scss';

export const CV = () => {
    const cvData: CVData = {
        personal: {
            photo: 'https://i.ibb.co/SPNmMT9/loco-photo.jpg',
            name: 'Patryk',
            lastName: 'Skonieczny',
            position: 'Junior React Developer',
        },
        details: {
            experience: [
                {year: 2020, description: 'Lorem ipsum'},
                {year: 2023, description: 'Dolor sit amet'},
            ],
            education: [
                'Lorem ipsum',
                'Dolor sit amet',
                'Ala kota ma'
            ]
        }
    }

     return <main className='cv-main'>
         <Header data={ cvData.personal} />
         <Personal data={ cvData.personal} />
         <Details data={ cvData.details } />
    
   </main>
}
