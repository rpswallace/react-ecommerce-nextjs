import React from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import {signInWithGoogle} from '../../../firebase/firebase.utils'

import styles from './sign-in.module.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className={styles.sign_in}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className={styles.buttons}>
            <CustomButton
              type="submit"
              value="Submit Form"
            >
              Sign Up
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn