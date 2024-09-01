import { Card, CardHeader, Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className='preCard'>
      <Card className='card' radius='none'>
        <CardHeader className='cardHeader'>
          <p className='tituloCardHeader'>Desafio</p>
          <h4 className='text-white font-medium text-large'>
            Veja o desafio proposto
          </h4>
        </CardHeader>
        <Link to={'/desafio'}>
          <Image
            isZoomed
            removeWrapper
            radius='none'
            alt='Pessoas segurando papeis'
            className='z-0 w-full h-full object-cover'
            src='/img/turtle.jpg'
          />
        </Link>
      </Card>

      <Card className='card' radius='none'>
        <CardHeader className='cardHeader'>
          <p className='tituloCardHeader'>Estudos</p>
          <h4 className='text-white font-medium text-large'>
            Veja as referências
          </h4>
        </CardHeader>
        <Link to={'/estudos'}>
          <Image
            isZoomed
            removeWrapper
            radius='none'
            alt='Pessoas segurando papeis'
            className='z-0 w-full h-full object-cover'
            src='/img/referencias.jpg'
          />
        </Link>
      </Card>
      <Card className='card' radius='none'>
        <CardHeader className='cardHeader'>
          <p className='tituloCardHeader'>Problema</p>
          <h4 className='text-white font-medium text-large'>
            Entenda mais um pouco o problema
          </h4>
        </CardHeader>
        <Link to={'/problema'}>
          <Image
            isZoomed
            removeWrapper
            radius='none'
            alt='Garbage Background'
            className='z-0 w-full h-full object-cover'
            src='/img/problema.jpg'
          />
        </Link>
      </Card>

      <Card
        className='col-span-12 md:col-span-12 lg:h-[600px] md:h-[300px]'
        radius='none'
      >
        <CardHeader className='cardHeader'>
          <p className='tituloCardHeader'>Solução</p>
          <h4 className='text-white font-medium text-large'>
            Entenda mais um pouco da solução proposta
          </h4>
        </CardHeader>
        <Link to={'/solucao'}>
          <Image
            isZoomed
            removeWrapper
            radius='none'
            alt='Garbage Background'
            className='z-0 w-full h-full object-cover  '
            src='/img/solucao.jpg'
          />
        </Link>
      </Card>
    </div>
  );
};

export default Cards;
