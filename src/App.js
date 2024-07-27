import logo from './logo.svg';
import './App.css';
import { AddSubscriber } from './components/AddSubscriber';
import { ViewSubscribers } from './components/ViewSubscribers';
import { SearchSub } from './components/SearchSub';
import DeleteSub from './components/DeleteSub';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddSubscriber />} />
        <Route path='/view' element={<ViewSubscribers />} />
        <Route path='/search' element={<SearchSub />} />
        <Route path='/delete' element={<DeleteSub />} />
      </Routes>


    </BrowserRouter>




  );
}

export default App;
