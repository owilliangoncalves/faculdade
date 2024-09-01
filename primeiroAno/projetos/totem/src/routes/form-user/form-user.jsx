import './form-user.css';
import { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/nav/Menu';

export default function Form_user() {
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/Agradecimento');
  };

  const handlePhoneChange = (e) => {
    const element = e.target;
    const value = element.value;
    const length = value.replace(/\D/g, '').length;
    const converted = value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');

    if (length < 11) {
      element.setCustomValidity('Preencha o campo de número corretamente.');
    } else {
      element.setCustomValidity('');
    }
    setPhone(converted);
  };

  return (
    <>
      <Menu />
      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ height: '90vh' }}
      >
        <div className='box_form'>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate(-1)}>
              Voltar
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Identificação</Breadcrumb.Item>
          </Breadcrumb>

          <Form onSubmit={(e) => handleSubmit(e)}>
            <h1 className='text-start mb-4'>IDENTIFICAÇÃO</h1>
            <Form.Group className='mb-3'>
              <Form.Label>DIGITE SEU NOME COMPLETO:</Form.Label>
              <Form.Control required type='text' placeholder='nome completo' />
              <Form.Control.Feedback type='invalid'>
                Por favor, insira seu nome completo.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label className='label'>EMAIL:</Form.Label>
              <Form.Control required type='email' placeholder='@email.com' />
              <Form.Control.Feedback type='invalid'>
                Por favor, insira um email válido.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>CELULAR COM DDD:</Form.Label>
              <Form.Control
                required
                type='tel'
                placeholder='(xx) xxxxx-xxxx'
                value={phone}
                onChange={handlePhoneChange}
                maxLength={15}
              />
              <Form.Control.Feedback type='invalid'>
                Por favor, insira um número de celular válido.
              </Form.Control.Feedback>
            </Form.Group>
            <div>
              <Button
                variant='primary'
                type='submit'
                className='w-100'
                style={{ backgroundColor: 'var(--cor-azul)', height: '50px' }}
              >
                FINALIZAR COMPRA
              </Button>

              <p
                role='button'
                className='mt-4 text-center'
                onClick={(e) => handleSubmit(e)}
              >
                Continuar sem login...
              </p>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}
