import React from 'react'
import { Form } from '@unform/web'
import { Input } from 'components'

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input name='email' type='email' />
      <Input name='password' type='password' />
      <button type='submit'>Sign in</button>
    </Form>
  )
}
