import { useContext, useState, useEffect } from 'react';
import { Col, Row, Container, Button, Form, Toast } from 'react-bootstrap';

import { Vehicle } from '../context/Vehicle';
import { useCart } from '../context/Cart';
import { ProdutoContext } from '../context/Produto';

import Menu from '../components/nav/Menu';
import FormSearch from '../components/form/form-search';

import fetchData from '../utils/Query.js';

function Shop() {
  const { vehicleData, setVehicleData } = useContext(Vehicle);
  const { produto } = useContext(ProdutoContext);

  const { addToCart } = useCart();

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('nomeProduto');
  const [message, setMessage] = useState(
    'Adicione sua placa e busque pelos itens disponíveis para o seu carro...',
  );
  const [showToast, setShowToast] = useState(false);
  const [toastPosition, setToastPosition] = useState({ top: 0, left: 0 });

  const filtrarItens = () => {
    return vehicleData.data.filter((item) => {
      if (filtro === 'nomeProduto') {
        return item.nomeProduto.toLowerCase().includes(busca.toLowerCase());
      } else if (filtro === 'marca') {
        return item.marca.toLowerCase().includes(busca.toLowerCase());
      }
      return false;
    });
  };

  const buscarVeiculo = async (placa) => {
    setMessage('Buscando...');

    if (placa.trim() !== '') {
      try {
        const data = await fetchData(placa, produto);
        setVehicleData(data.pageResult);
        setMessage('');
        return;
      } catch (error) {
        setMessage('Houve um erro ao buscar pelos itens, tente novamente...');
        console.error('Erro ao buscar placa:', error);
      }
    } else {
      setMessage('Digite um placa valida.');
    }

    setVehicleData();
  };

  const handleChangeFiltro = (e) => {
    setFiltro(e.target.value);
  };

  useEffect(() => {
    const updateToastPosition = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const toastWidth = 300;

      const top = (windowHeight - 50) / 2;
      const left = (windowWidth - toastWidth) / 2;

      setToastPosition({ top, left });
    };

    updateToastPosition();

    window.addEventListener('resize', updateToastPosition);

    return () => {
      window.removeEventListener('resize', updateToastPosition);
    };
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Ocultar o toast após 3 segundos
  };

  return (
    <>
      <Menu />
      <Container className='d-flex justify-content-between flex-column-reverse flex-md-row align-items-end mt-4'>
        <div>
          <FormSearch buscarVeiculo={buscarVeiculo} />
        </div>
        <div>
          <h2 style={{ color: '#023A5D' }}>Filtros</h2>
          <div className='d-flex gap-2'>
            <Form.Control
              type='text'
              name=''
              id=''
              value={busca}
              placeholder='Busque pelo item...'
              onChange={(e) => setBusca(e.target.value)}
              style={{
                width: '200px',
                borderColor: '#023A5D',
                boxShadow: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#023A5D')}
              onBlur={(e) => (e.target.style.borderColor = '#ced4da')}
            />
            <Form.Group controlId='filtro'>
              <Form.Control
                as='select'
                value={filtro}
                onChange={handleChangeFiltro}
                style={{
                  borderColor: '#023A5D',
                  boxShadow: 'none',
                }}
              >
                <option disabled selected>
                  Selecione a opção de filtro
                </option>
                <option value='nomeProduto'>Nome do Produto</option>
                <option value='marca'>Marca</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
      </Container>

      <Container>
        {vehicleData != undefined ? (
          <h1 className='mt-4' style={{ color: '#023A5D' }}>
            VEICULO:{' '}
            {vehicleData.vehicle.montadora + ' ' + vehicleData.vehicle.modelo}
          </h1>
        ) : (
          ''
        )}
        <Row className='overflow-auto' style={{ color: '#023A5D' }}>
          {vehicleData != undefined ? (
            filtrarItens().map((item, index) => (
              <Col
                sm={4}
                key={index}
                className='mb-3'
                style={{ textAlign: 'center' }}
              >
                <img
                  src={`https://catalogopdtstorage.blob.core.windows.net/imagens-prd/produto/${item.imagemReal}`}
                  alt={`Imagem do produto ${item.nomeProduto}`}
                  style={{
                    width: '200px',
                    height: '200px',
                    maxWidth: '200px',
                    maxHeight: '200px',
                  }}
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/200';
                  }}
                />
                <p>Produto: {item.nomeProduto}</p>
                <p>Marca: {item.marca}</p>
                <p>Valor Unitário R$: {((item.id / 100).toFixed(2)).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</p>
                <Button
                  variant='outline-danger'
                  onClick={() => handleAddToCart(item)}
                  className='mb-4'
                >
                  Adicionar ao carrinho
                </Button>
              </Col>
            ))
          ) : (
            <div className='mt-4'>
              <p>{message}</p>
            </div>
          )}
        </Row>
      </Container>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: 'fixed',
          top: toastPosition.top,
          left: toastPosition.left,
          backgroundColor: '#023A5D',
          color: '#ffffff',
          zIndex: 1,
        }}
        delay={3000}
        autohide
      >
        <Toast.Body>ITEM ADICIONADO AO CARRINHO!</Toast.Body>
      </Toast>
    </>
  );
}

export default Shop;
