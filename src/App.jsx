import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Calculator } from './pages/Calculator';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
