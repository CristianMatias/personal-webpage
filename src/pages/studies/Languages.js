import spain from '../../img/spain.png'
import german from '../../img/german.png'
import uk from '../../img/uk.png'
import Table from 'react-bootstrap/esm/Table';

function Language() {
    return (
        <>
            <h5>Idiomas</h5>
            <Table striped bordered hover>
                <tbody style={{textAlign: 'center', fontWeight: 'bold'}}>
                    <tr>
                        <td><img src={spain} alt='' /></td>
                        <td><img src={uk} alt='' /></td>
                        <td><img src={german} alt='' /></td>
                    </tr>
                    <tr>
                        <td>Nativo</td>
                        <td>Avanzado (B2)</td>
                        <td>Básico (A2)</td>
                    </tr>
                </tbody>
            </Table>
            <br />
        </>
    );
}

export default Language;