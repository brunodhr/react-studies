import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('Digite um e-mail'),
  password: Yup.string()
    .min(4, 'A senha deve ter no mínimo 4 dígitos')
    .required('Digite uma senha')
});

const SimpleForm = () => {
  function handleSubmit(data) {}

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Container>
        <Input name="email" />
        <Input name="password" type="password" />
        <button type="submit">Salvar</button>
      </Container>
    </Form>
  );
};

export default SimpleForm;
