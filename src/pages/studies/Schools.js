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
                />
                <StudentCard
                    logo={eoi}
                    school={'Escuela Oficial de Idiomas'}
                    title={'Nivél Básico (A2) de Alemán'}
                />
                <StudentCard
                    logo={eoi}
                    school={'Escuela Oficial de Idiomas'}
                    title={'Exámen Avanzado (B2) de Inglés'}
                />
            </CardGroup>

            <br />
        </>
    );
}

export default Schools;