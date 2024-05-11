import React from "react";
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { FormLabel, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Contact = () => {
    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Example Textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
} 
export default Contact;