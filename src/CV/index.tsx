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
                {
                    year: 2017, description: 'Prymat- "Warehouse Worker/ Forklift Operator"'
                },
                {
                    year: 2012, description: 'Prodesk- "Forklift Operator/Driver"'
                },
            ],
            education: [
                `Nov 2021 - Jun 2022 : Software Development Academy
                * Python * GIT * TDD * Alorithms * SQL * Django`,
                `Jan 2024 - Dec 2024 : Kurs Frontowcy
                * JS * NodeJS * React * Angular * React Native * `,
            ]
        }
    }

     return <main className='cv-main'>
         <Header data={ cvData.personal} />
         <Personal data={ cvData.personal} />
         <Details data={ cvData.details } />
    
   </main>
}
