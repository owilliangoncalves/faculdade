import { Container } from 'react-bootstrap';
import Menu from '../../components/nav/Menu';

export default function Agradecimento() {
  return (
    <>
      <Menu />
      <Container
        className='d-flex justify-content-center align-items-center flex-column'
        style={{ height: '82.6vh', gap: '20px' }}
      >
        <h1
          style={{
            backgroundColor: '#023a5d',
            color: 'white',
            padding: '15px',
            borderRadius: '10px',
          }}
        >
          PEDIDO Nº 0000
        </h1>
        <h1>OBRIGADO!</h1>
        <h2>Aguarde, seu pedido sera impresso.</h2>
      </Container>
    </>
  );
}
