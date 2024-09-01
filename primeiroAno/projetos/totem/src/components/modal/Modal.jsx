import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useCart } from '../../context/Cart';
import defaultImage from '../../img/gear.jpg';
import { useNavigate } from 'react-router-dom';
import './Modal.css';
import Cart from '../../img/cart.svg';

function ModalLogin() {
  const [show, setShow] = useState(false);
  const { cart, addToCart, removeFromCart, decrementQuantity, calculateTotal } =
    useCart();

  const navigate = useNavigate();

  const IMAGE_URL = (image) =>
    image ? import.meta.env.VITE_IMAGE_URL + image : defaultImage;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='danger' onClick={handleShow}>
        <img
          src={Cart}
          style={{ width: '33px', stroke: 'white' }}
          className='cart-icon'
        />{' '}
        {cart.reduce((total, item) => total + item.quantity, null)}
      </Button>

      <Modal show={show} size='lg' onHide={handleClose}>
        <div className='cart'>
          <div className='cart-title'>
            <h2>CARRINHO</h2>
            <p>
              {cart.length > 1 ? `${cart.length} items` : `${cart.length} item`}
            </p>
          </div>

          <hr />
          {cart.map((produto) => (
            <div key={produto.id} className='cart-content'>
              <div className='cart-content-img'>
                <img
                  src={IMAGE_URL(produto.imagemReal)}
                  alt='Produto-Escolhido'
                  style={{
                    width: '100px',
                    height: '80px',
                  }}
                />
              </div>

              <div className='cart-content-description'>
                <p className='cart-content-description-name'>
                  {produto.nomeProduto}
                </p>
                <p className='cart-content-description-brand'>
                  {produto.marca}
                </p>
              </div>

              <div className='cart-content-action'>
                <Button
                  variant='outline-danger'
                  onClick={() => decrementQuantity(produto)}
                >
                  -
                </Button>
                <p>{produto.quantity}</p>
                <Button
                  variant='outline-primary'
                  onClick={() => addToCart(produto)}
                >
                  +
                </Button>
              </div>

              <div className='cart-content-price'>
                <p>
                  {' '}
                  {new Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(produto.id / 100)}{' '}
                  (unitario)
                </p>
                <p>
                  {new Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format((produto.id * produto.quantity) / 100)}
                </p>
              </div>

              <div className='cart-content-remove'>
                <Button
                  variant='outline-danger'
                  onClick={() => removeFromCart(produto)}
                >
                  x
                </Button>
              </div>
            </div>
          ))}

          <div className='cart-total'>
            <div className='cart-total-continue'>

              <Button variant='primary' onClick={() => handleClose()}>
                Continuar comprando
              </Button>
            </div>
            <div>
              <p>
                Total:{' '}
                <span>
                  {' '}
                  {new Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(calculateTotal() / 100)}{' '}
                </span>
              </p>
              <Button
                variant='danger'
                onClick={() => navigate('/Form_User')}
              >
                Finalizar Compra
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalLogin;
