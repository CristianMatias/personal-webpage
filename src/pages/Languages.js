import StudentCard from '../components/cards/StudentCard'
import CardGroup from 'react-bootstrap/CardGroup';

import spain from '../img/spain.png'
import german from '../img/german.png'
import uk from '../img/uk.png'

function Language() {
    return (
        <>
            <h5>Idiomas</h5>
            <CardGroup>
                <StudentCard
                    logo={spain}
                    title={'Nativo'}
                />
                <StudentCard
                    logo={uk}
                    title={'Avanzado (B2)'}
                    startDate={'2017'}
                />
                <StudentCard
                    logo={german}
                    title={'Básico (A2)'}
                    startDate={'2018'}
                    endDate={'2020'}
                />
            </CardGroup>
            <br />
        </>
    );
}

export default Language;