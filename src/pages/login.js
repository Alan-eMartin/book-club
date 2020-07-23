import React, { useState, useContext} from "react";
import { FirebaseContext } from '../components/Firebase';
import { Form, Input, Button } from '../components/common';
// import SEO from "../components/seo"

const Login = () => {

  // state
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const {firebase} = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.login({
      email: formValues.email,
      password: formValues.password,
    })
  }

  const handleInputChange = (e) => {
    e.persist();
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        {/* email input */}
        <Input
          value={formValues.email}
          name='email' 
          onChange={handleInputChange} 
          placeholder='email' 
          type='email'
        />
        {/* password input */}
        <Input
          value={formValues.password}
          name='password' 
          onChange={handleInputChange} 
          placeholder='password' 
          type='password'
        />
        <Button type="submit" block >
          Login
        </Button>
      </Form>
    </section>  
  )
}

export default Login;
