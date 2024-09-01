import Cards from './components/cards/Cards.jsx';
import Grupo from './routes/grupo/Grupo.jsx';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Global Solution - OCEAN</title>
        <meta name='descricao' content='Página inicial da Global Solution' />
      </Helmet>
      <Cards />
      <Grupo />
    </>
  );
}
