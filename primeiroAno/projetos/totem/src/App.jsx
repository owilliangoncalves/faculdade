import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Outlet } from 'react-router-dom';
import { Vehicle } from './context/Vehicle';
import { useState } from 'react';
import { ProdutoContext } from './context/Produto';
import { CartProvider } from './context/Cart';

function App() {
  const [vehicleData, setVehicleData] = useState();

  const [produto, setProduto] = useState();

  return (
    <>
      <div>
        <Vehicle.Provider value={{ vehicleData, setVehicleData }}>
          <ProdutoContext.Provider value={{ produto, setProduto }}>
            <CartProvider>
              <Outlet />
            </CartProvider>
          </ProdutoContext.Provider>
        </Vehicle.Provider>
      </div>
    </>
  );
}

export default App;
