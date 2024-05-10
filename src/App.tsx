import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar/NavBar";
import Home from "./paginas/home/Home";
import Footer from "./components/footer/Footer";
import ListaCategorias from "./components/categorias/listarCategorias/ListarCategorias";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import FormularioCategoria from "./components/categorias/formulariCategoria/FomularioCategoria";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;
