import { Table,Button, Stack } from "react-bootstrap";
const Product = () =>{
    return(
      <div style={{padding:20}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>   
                </thead>
                <tbody>
                        <tr>
                            <td>101</td>
                            <td>101</td>
                            <td>101</td>
                            <td>101</td>
                            <td style={{width: 200, textAlign:"center"}}>
                             
                                  <Button variant="outline-info">Edit</Button>{' '}
                                  <Button variant="outline-danger">Delete</Button>
                              
                            </td>
                        </tr>
                        
                    </tbody>
            </Table>
      </div>
     
    )
  }
  export default Product