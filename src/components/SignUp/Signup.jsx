import { useState } from "react"
import { Formik, Form } from "formik"
import { useHistory } from 'react-router-dom'
import { validationSchema, defaultValues } from './formikConfig'
import { FormField } from 'components'
import { fb } from 'service'

export const Signup = () => {
  const history = useHistory()
  const [serverError] = useState('')

  const signup = ({ email, userName, password }, { setSubmitting }) => {
    fb.auth
      .createUserWithEmailAndPassword(email, password).then(res => {
        console.log(res)

        // if (res?.user?.uid) {

        // }
      })
  }


  return (
    <div className='auth-form'>
      <h1>Sign Up</h1>
      <Formik
        onSubmit={signup}
        validatorOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {/* where the actual html of the website goes */}
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name='email' label='E-Mail' type='email' />
            <FormField name='userName' label='Username' />
            <FormField name='password' label='Password' type='password' />
            <FormField type='password' name='verifyPassword' label='Confirm Password' />

            <button disabled={isSubmitting || !isValid} type='submit'>Sign Up</button>

            <div className="auth-link-container">
              Already have an account?{' '}
              <span className="auth-link" onClick={() => history.push('login')}>
                Log In!
              </span>
            </div>
          </Form>
        )}
      </Formik>

      {!!serverError && <div className='error'>{serverError}</div>}
    </div >
  )
}
