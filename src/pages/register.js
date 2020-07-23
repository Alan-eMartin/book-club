import React, { useState, useContext } from 'react';
import { Form, Input, Button } from '../components/common';
import { FirebaseContext } from '../components/Firebase';

const Register = () => {

  const{ firebase } = useContext(FirebaseContext);

  const [ formValues, setFormValues ] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {

    e.persist();

    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name] : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.password === formValues.confirmPassword) {
      firebase.register({
        email: formValues.email,
        password: formValues.password,
      })
    }

    console.log(formValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleInputChange}
        value={formValues.email}
        placeholder='enter email' 
        type='email'
        name="email" 
        required
        />

      <Input 
        onChange={handleInputChange}
        value={formValues.password}
        placeholder='create password' 
        type='password' 
        name="password" 
        minLength={3}
        required 
        />

      <Input 
        onChange={handleInputChange}
        value={formValues.confirmPassword}
        placeholder='confirm password' 
        type='password' 
        name="confirmPassword" 
        minLength ={3}
        required 
      />
      <Button 
        block
        type="submit"
      >
        Register
      </Button>
    </Form>  
  );
};

export default Register;