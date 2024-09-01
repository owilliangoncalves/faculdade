import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Desafio from './routes/desafio/Desafio.jsx';
import ErrorPage from './routes/errorPage/ErrorPage.jsx';
import Problema from './routes/problema/Problema.jsx';

import Solucao from './routes/solucao/Solucao.jsx';
import Home from './Home.jsx';
import Estudos from './routes/Estudos.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/estudos',
        element: <Estudos />,
      },
      {
        path: '/problema',
        element: <Problema />,
      },
      {
        path: '/desafio',
        element: <Desafio />,
      },
      {
        path: '/solucao',
        element: <Solucao />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
);
