import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Button,
    Row,
    Col,
    Form
} from 'react-bootstrap';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSignupClick = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        console.log("Sign up", userData);
    };
    
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>Sign up</h1>

                        <Form>
                            <Form.Group controlId="usernameId" className="mt-3">
                                <Form.Label>User name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Enter user name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <Form.Control.Feedback type="invalid" />
                            </Form.Group>

                            <Form.Group controlId="passwordId" className="mt-3">
                                <Form.Label>Your password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <Form.Control.Feedback type="invalid" />
                            </Form.Group>
                        </Form>

                        <Button 
                            variant="primary"
                            onClick={this.onSignupClick}
                            className='mt-3'
                        >
                            Sign up
                        </Button>

                        <p className="mt-2">
                            Already have account? <Link to="/login">Login</Link>
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signup;
