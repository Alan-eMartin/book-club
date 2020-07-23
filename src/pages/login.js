import React, { useState, useContext} from "react";
import { FirebaseContext } from '../components/Firebase';
import { Form, Input, Button, ErrorMessage } from '../components/common';
// import SEO from "../components/seo"

const Login = () => {

  // state
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [ errorMessage, setErrorMessage ] = useState('')

  const {firebase} = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.login({
      email: formValues.email,
      password: formValues.password,
    }).catch(error => {
      console.log(error);
      setErrorMessage(error.message);
    })
  }

  const handleInputChange = (e) => {
    e.persist();
    setErrorMessage('');
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
          required
        />
        {/* password input */}
        <Input
          value={formValues.password}
          name='password' 
          onChange={handleInputChange} 
          placeholder='password' 
          type='password'
          required
        />
        {/* error message with display if email and pass are invalid */}
        {!!errorMessage &&
          <span>
            <ErrorMessage>
              {errorMessage}
            </ErrorMessage>
          </span>
        }
        <Button type="submit" block >
          Login
        </Button>
      </Form>
    </section>  
  )
}

export default Login;
