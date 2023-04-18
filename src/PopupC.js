import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';



function PopupC(props) {
    const [name ,setName] = useState();
    const [description ,setDescription] = useState();
    
    axios.defaults.withCredentials = true;



    function handleSubmit(event){
      event.preventDefault();

      console.log("alabala2");
      console.log(name);
      console.log(description);
      const formData = new FormData();

      
      

      axios
        .post('http://localhost:3000/posts',{
            'content':description
        })
        .then(res => console.log(res))
        .catch(err=> console.error(err));
        
    }
    
  return (
       <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Create Cours
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>


            <Form className=''>
              <Form.Group className="mb-3  " controlId="formBasicDescription">
                <Form.Label >Description</Form.Label>
                <Form.Control  type="text " placeholder="description" onChange={e => setDescription(e.target.value)} />
              </Form.Group>
          

              <Button variant="primary" type="submit" onClick={e=> handleSubmit(e)}>
                Submit
              </Button>
            </Form> </Modal.Body>
          <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
          </Modal>

  );
 
 
}

export default PopupC;