import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const FormSearch = ({ buscarVeiculo }) => {
  const [placa, setPlaca] = useState('');

  const handlerPlaca = (value) => {
    if (value.length <= 8) {
      setPlaca(value);
    } else {
      console.log('Limite de caracteres atingido...');
    }

    // Salva no localStore apenas as placas digitadas que tenha 7 ou mais caracteres
    if (value.length >= 7) {
      localStorage.setItem('placa', placa);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarVeiculo(placa);
  };

  useEffect(() => {
    const storedPlaca = localStorage.getItem('placa');

    if (storedPlaca) {
      setPlaca(storedPlaca);
    }
  }, []);

  return (
    <>
      <div className='d-flex gap-2'>
        <Form.Control
          value={placa}
          onChange={(e) => handlerPlaca(e.currentTarget.value)}
          type='text'
          placeholder='Digite a placa do seu veículo...'
          className='mt-4'
          style={{
            width: '200px',
            borderColor: '#023A5D',
            boxShadow: 'none',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#023A5D')}
          onBlur={(e) => (e.target.style.borderColor = '#ced4da')}
        />
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: '#023A5D', border: 'none' }}
          className='btn-bg mt-4'
        >
          Buscar
        </Button>
      </div>
    </>
  );
};

export default FormSearch;
