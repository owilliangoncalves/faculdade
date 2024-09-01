import React from 'react';
import ReactDOM from 'react-dom'; // Changed import statement
import App from './App';

// Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home/Home';
import Shop from './routes/shop';
import Form_User from './routes/form-user/form-user';
import Agradecimento from './routes/Agradecimento/Agradecimento';
import About from './routes/about/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/form_user',
        element: <Form_User />,
      },
      {
        path: '/agradecimento',
        element: <Agradecimento />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
