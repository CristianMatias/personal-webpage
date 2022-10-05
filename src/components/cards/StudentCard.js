import Table from 'react-bootstrap/Table';

function ListGroupExample(props) {
    var hasSchool = props.school != null;
    var hasStartDate = props.startDate != null;
    var hasEndDate = props.endDate != null;

    return (
        <Table striped bordered hover>
        <tbody>
          <tr>
            <td width={300}>
                
                {hasSchool ? 
                    (<><img src={props.logo} height={50} width={50} alt='' />{props.school}</>) :
                    (<img src={props.logo} height={50} width={150} alt='' />) 
                }
            </td>
            <td>{props.title}</td>
            <td>
                {hasStartDate ? 
                    (hasEndDate ? 
                        (<>{props.startDate} - {props.endDate}</>) : 
                        (<>{props.startDate}</>)) : 
                (<></>)}            
            </td>
          </tr>
        </tbody>
      </Table>
    );
}

export default ListGroupExample;