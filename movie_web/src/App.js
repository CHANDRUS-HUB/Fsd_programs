


import './index.css'
import './App.css'


import Home from './components/homepage';
import View from './components/view';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path='/' element={ <Home/>}/>
            <Route path='/home' element={<Home />}  />
            <Route path='/view' element={<View />} />
            <Route path='/*' element={<h1>Not Found</h1>} />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;