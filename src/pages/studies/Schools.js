import StudentCard from '../../components/cards/StudentCard'
import CardGroup from 'react-bootstrap/CardGroup';

import cesar from '../../img/cesar.png'
import eoi from '../../img/eoi.png'

function Schools() {
    return (
        <>
            <h5>Estudios Superiores</h5>
            <CardGroup>
                <StudentCard
                    logo={cesar}
                    school={'CIFP César Manrique'}
                    title={'Técnico Superior en Desarrollo Aplicaciones Multiplataforma'}
                    startDate={'2018'}
                    endDate={'2020'}
                />
                 <StudentCard
                logo={eoi}
                school={'Escuela Oficial de Idiomas'}
                title={'Nivél Básico (A2) de Alemán'}
                startDate={'2018'}
                endDate={'2020'}
            />
            </CardGroup>

            <br />
        </>
    );
}

export default Schools;