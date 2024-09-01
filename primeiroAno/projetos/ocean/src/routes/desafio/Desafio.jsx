import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Desafio = () => {
  return (
    <>
      <Helmet>
        <title>OCEAN - Desafio</title>
        <meta
          name='description'
          content='Entenda um pouco sobre o desafio proposto'
        />
      </Helmet>
      <Card radius='none'>
        <CardHeader className='p-0 hidden md:contents '>
          <div className='relative  w-full md:h-[45vh] lg:h-[85vh]'>
            <div className='absolute inset-0 bg-image0 bg-cover backdrop-blur-2xl'></div>
            <div className='relative z-1 flex items-center justify-center h-full'>
              <h1 className='titulo'>Desafio</h1>
            </div>
          </div>
        </CardHeader>

        <CardBody>
          <div>
            <h2 className='text-3xl pt-3 mb-3 uppercase'>oceanos</h2>
          </div>

          <div className='container leading-loose text-lg'>
            <p>
              <span className='ml-10'>Desde</span> o início da nossa história,
              os oceanos possuem papel de destaque na vida humana. Há muito
              tempo, os oceanos já nos possibilitavam navegar entre países e
              continentes para descobrir novas terras e realizar a troca de
              mercadorias. Além disso, sempre foram fontes de alimento para a
              humanidade, pois já nos forneciam inúmeras espécies de peixes e
              demais frutos do mar para alimentação.
            </p>

            <p>
              <span className='ml-10'>Os</span> oceanos cobrem 71% da superfície
              do planeta e continuam exercendo grande relevância na vida do
              homem. Mais recentemente, passaram a ser reconhecidos como
              importantes áreas para o desenvolvimento do lazer e do turismo,
              além da produção de energia e promoção da comunicação,
              configurando-se como uma região fundamental para a economia do
              nosso país e do mundo. Tal fato pode ser melhor visualizado quando
              observamos que a economia dos oceanos representou 19% do Produto
              Interno Bruto (PIB) do Brasil em 2015.Os oceanos cobrem 71% da
              superfície do planeta e continuam exercendo grande relevância na
              vida do homem. Mais recentemente, passaram a ser reconhecidos como
              importantes áreas para o desenvolvimento do lazer e do turismo,
              além da produção de energia e promoção da comunicação,
              configurando-se como uma região fundamental para a economia do
              nosso país e do mundo. Tal fato pode ser melhor visualizado quando
              observamos que a economia dos oceanos representou 19% do Produto
              Interno Bruto (PIB) do Brasil em 2015.
            </p>
          </div>
        </CardBody>

        <CardBody>
          <div>
            <h2 className='text-3xl pt-3 mb-3 uppercase'>
              O Contexto Pós-revolução Industrial
            </h2>
          </div>

          <div className='container lg:grid lg:grid-cols-2 gap-3 md:items-middle'>
            <div className=' leading-loose text-lg md:mb-5 lg:mb-0'>
              <p>
                <span className='ml-10'>Após</span> a revolução industrial
                ocorrida no séc. XVIII, os níveis de produção de mercadorias
                aumentaram e, consequentemente, os níveis de consumo também.
                Isso ocorreu devido a mecanização das indústrias, ou seja,
                devido a substituição do uso de ferramentas manuais por
                máquinas. Essa substituição possibilitou a produção de maiores
                quantidades de mercadorias em um curto espaço de tempo e,
                também, contribuiu para um rápido crescimento nas taxas de
                consumo, fruto dos baixos preços oferecidos nas mercadorias.
                Diante disso Estima-se que 80% do lixo marinho tenha origem em
                terra, chegando aos oceanos por meio dos cursos d'água, o que
                indica uma necessidade de melhores gestões dos recursos hídricos
                e dos resíduos sólidos.
              </p>
            </div>
            <Link
              to='/solucao'
              className=' text-lg md:mt-8 py-2 px-4 border-1 border-black text-center  hover:bg-verdePrimario hover:border-verdePrimario place-self-center uppercase lg:col-start-1 '
            >
              veja Nossa Proposta de Solução
            </Link>
            <div className='hidden lg:flex  col-start-2 row-start-1 '>
              <Image
                radius='none'
                className=' object-cover    '
                src='/img/graficoplastico.png'
                alt=''
              />
            </div>
          </div>
        </CardBody>
        <CardBody>
          <div>
            <h2 className='text-3xl pt-3 mb-3 uppercase'>
              O Problema de lixo marinho
            </h2>
          </div>
          <div className='container leading-loose text-lg'>
            <p>
              <span className='ml-10'>O</span> lixo marinho é composto por
              materiais sólidos fabricados ou transformados (plásticos, filtros
              de cigarros, vidro, metal e madeira) que são jogados no ambiente
              marinho, constituindo grave ameaça à saúde dos nossos mares, rios
              e lagos, mas também à nossa economia e à sociedade. Nesse cenário,
              os plásticos são o principal detrito encontrado no ambiente
              marinho. Ao contrário dos materiais orgânicos, os plásticos
              concentram-se nos oceanos e podem levar 500 anos para se
              decomporem. Afetam diretamente a fauna marinha, pois são
              confundidos com alimentos e ingeridos pelos animais, causando sua
              morte e contaminando cadeias alimentares, com sérios impactos na
              saúde dos seres humanos.
            </p>
            <p>
              <span className='ml-10'>Segundo</span> o site G1 Pesquisadores
              holandeses conseguiram detectar, pela primeira vez, fragmentos de
              plástico no sangue de seres humanos. Eles analisaram amostras de
              22 pessoas. De tão pequenas, as partículas não podem ser vistas
              nem no microscópio. Os cientistas precisaram de uma máquina
              especial para transformá-las em gás. Um computador identificou a
              presença do plástico. Os tipos encontrados são principalmente
              aqueles usados nas garrafas pet, em embalagens de alimentos e em
              sacolas plásticas.
            </p>
          </div>
        </CardBody>
        <CardBody>
          <div>
            <h2 className='text-3xl pt-3 mb-3 uppercase lg:flex'>
              micropartículas de plástico no sangue de seres humanos
            </h2>
          </div>
          <div className='container leading-loose text-lg '>
            <p>
              <a href='https://g1.globo.com/jornal-nacional/noticia/2022/04/25/pesquisa-encontra-pela-1a-vez-microparticulas-de-plastico-no-sangue-de-seres-humanos.ghtml'>
                <span className='ml-10'>Pesquisadores</span> holandeses
                conseguiram detectar, pela primeira vez, fragmentos de plástico
                no sangue de seres humanos.
              </a>{' '}
              Eles analisaram amostras de 22 pessoas. De tão pequenas, as
              partículas não podem ser vistas nem no microscópio. Os cientistas
              precisaram de uma máquina especial para transformá-las em gás. Um
              computador identificou a presença do plástico. Os tipos
              encontrados são principalmente aqueles usados nas garrafas pet, em
              embalagens de alimentos e em sacolas plásticas.
            </p>
            <div className='hidden lg:flex justify-center lg:mt-5'>
              <Image
                radius='none'
                className='place-self-center object-contains col-start-2 h-[500px] w-full '
                src='/img/microplastico-sangue.jpg'
                alt=''
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default Desafio;
