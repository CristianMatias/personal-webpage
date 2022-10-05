import Card from 'react-bootstrap/Card';
import cristian from '../../img/cristian.png'

function EmployeeCard() {
  return (
    <Card style={{ width: '10em', height: '10em', float: 'right' }}>
      <Card.Img variant="top" src={cristian} />
      <Card.Body>
        <Card.Text>Cristian David Martín Matías</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EmployeeCard;