import './about.css';

import Pedro from '../../img/pedro.jpeg';
import Will from '../../img/willian.jpeg';
import Gui from '../../img/guilherme.jpeg';
import Lucas from '../../img/lucas.jpeg';

import Header from '../../components/header/Header';
import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <div className='about__container'>
      <Header />

      <Container className='mb-5'>
        <iframe
          id='pitch'
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/7uqeUXpKYls'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </Container>

      <section className='container mb-5'>
        <h2> Objetivo do Projeto: </h2>
        <p>
          O principal objetivo deste projeto é oferecer aos usuários uma
          experiência de compra online intuitiva e eficiente. Para isso,
          desenvolvemos uma aplicação web que permite aos usuários buscar e
          filtrar itens de compra com base no nome ou marca do produto.{' '}
        </p>
        <h2>Tecnologias Utilizadas:</h2>
        <p>
          React: Utilizamos o React como framework principal para o
          desenvolvimento da aplicação. Sua arquitetura baseada em componentes
          nos permitiu criar uma interface de usuário modular e fácil de manter.
        </p>{' '}
        <p>
          React Bootstrap: Para garantir uma experiência visualmente atraente e
          responsiva, integramos o React Bootstrap à nossa aplicação. Com ele,
          conseguimos utilizar uma variedade de componentes pré-construídos para
          agilizar o desenvolvimento.
        </p>
        <p>
          React Router DOM: Implementamos o React Router DOM para gerenciar a
          navegação dentro da aplicação. Isso nos permitiu criar rotas dinâmicas
          e proporcionar uma experiência de usuário mais fluída e organizada.
        </p>
        <p>
          API da Empresa Parceira: Para obter os dados dos produtos, integramos
          a API da nossa empresa parceira. Essa integração nos permitiu acessar
          um amplo catálogo de produtos em tempo real, garantindo que os
          usuários tenham sempre acesso às informações mais atualizadas.
        </p>{' '}
        <h2>Funcionalidades Principais:</h2>
        <p>
          Busca de Produtos: Os usuários podem pesquisar produtos utilizando
          palavras-chave relacionadas ao nome ou à marca do produto. A busca é
          realizada de forma instantânea, proporcionando resultados rápidos e
          precisos.
        </p>
        <p>
          Filtragem Avançada: Além da busca, os usuários têm a opção de filtrar
          os produtos por nome ou marca. Isso permite uma navegação mais
          personalizada e eficiente, permitindo que os usuários encontrem
          exatamente o que estão procurando.
        </p>
        <p>
          Interface Intuitiva: Criamos uma interface intuitiva e fácil de usar,
          com elementos visuais claros e intuitivos. Isso garante que mesmo os
          usuários menos experientes possam navegar na aplicação sem
          dificuldades.
        </p>
        <h2>Conclusão:</h2>
        <p>
          Em suma, o projeto que desenvolvemos utilizando React, React
          Bootstrap, React Router DOM e a API da nossa empresa parceira
          representa um passo importante na direção de oferecer uma experiência
          de compra online mais simples, rápida e eficiente. Estamos confiantes
          de que nossa aplicação será bem recebida pelos usuários e contribuirá
          significativamente para o sucesso do nosso empreendimento.
        </p>
      </section>

      <footer
        className='d-flex flex-column'
        style={{
          backgroundColor: 'rgba(2, 58, 93,1)',
          color: 'white',
        }}
      >
        <ul className='d-flex justify-content-center gap-3 gap-md-5 m-0 mt-5'>
          <li>
            <div className='dev__container'>
              <img src={Lucas} alt='' />
              <h3>Lucas Henrique</h3>
              <p>RM: 552726</p>
            </div>
          </li>
          <li>
            <div className='dev__container'>
              <img src={Gui} alt='' />
              <h3>Guilherme Nunes</h3>
              <p>RM: 554327</p>
            </div>
          </li>
          <li>
            <div className='dev__container'>
              <img src={Will} alt='' />
              <h3>Willian Gonçalves</h3>
              <p>RM: 553417</p>
            </div>
          </li>
          <li>
            <div className='dev__container'>
              <img src={Pedro} alt='' />
              <h3>Pedro Ernesto</h3>
              <p>RM: 553679</p>
            </div>
          </li>
        </ul>

        <p className='text-center mt-5'>
          Todos atuaram como desenvolvedores Full Stack, contribuindo unicamente
          com o projeto.
          <a
            style={{
              display: 'block',
              textAlign: 'center',
              textDecoration: 'none',
            }}
            href='https://github.com/owilliangoncalves/rarap'
          >
            Github - Link do projeto
          </a>
        </p>
      </footer>
    </div>
  );
}
