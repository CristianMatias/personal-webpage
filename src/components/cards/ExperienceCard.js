import Card from 'react-bootstrap/Card';

function BodyOnlyExample(props) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header>
        <Card.Title><a href={props.link}>{props.companyName}</a></Card.Title>
        <Card.Img variant="top" className='companyLogo' src={props.logo} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Start: {props.startDate} <br/> End: {props.endDate}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;