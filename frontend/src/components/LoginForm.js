import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import useForm from "./useForm";
const RegisterForm = () => {
  const { handleChange, handleSubmit, formInfo } = useForm();

  return (
    <Container>
      <Row>
        <div>
          <h2>Welcome</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                onChange={handleChange}
                id="username"
                value={formInfo.username}
                placeholder="Enter username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                id="email"
                value={formInfo.email}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                id="password"
                value={formInfo.password}
                placeholder="Enter password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                id="confirmPassword"
                value={formInfo.confirmPassword}
                placeholder="Confirm password"
              />
            </FormGroup>
            <Button color="primary">Sign up</Button>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default RegisterForm;
