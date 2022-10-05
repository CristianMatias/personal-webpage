import StudentCard from '../components/cards/StudentCard'
import cesar from '../img/cesar.png'

function Schools() {
    return (
        <>
            <h5>Estudios Superiores</h5>
            <StudentCard
                logo={cesar}
                school={'CIFP César Manrique'}
                title={'Técnico Superior en Desarrollo Aplicaciones Multiplataforma'}
                startDate={'2018'}
                endDate={'2020'}
            />
            <br />
        </>
    );
}

export default Schools;