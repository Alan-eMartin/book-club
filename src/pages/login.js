import React, {useState} from "react"
import { Link } from "gatsby";
import {useAuth} from '../components/Firebase'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {

  // state
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const {firebase} = useAuth();

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
    <Layout>
      <form onSubmit={handleSubmit}>
        {/* email input */}
        <input
          value={formValues.email}
          name='email' 
          onChange={handleInputChange} 
          placeholder='email' 
          type='email'
        />
        {/* password input */}
        <input
          value={formValues.password}
          name='password' 
          onChange={handleInputChange} 
          placeholder='password' 
          type='password'
        />
        <button type="submit">
          Login
        </button>
      </form>
    </Layout>  
  )
}

export default SecondPage
