import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardList from './components/CardList';
import Notice from './components/Notice';
import Event from './components/Event';
import EventToggle from './components/EventToggle';
import {Manual ,Rule, Policy, EtcInfo}  from './pages/FooterMenu'

function App() {
  const title = 'site'; 
  return (
    <div className='App'>
      <BrowserRouter>
        <Header title={title} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cardList' element={<CardList />} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/manual' element={<Manual />} />
            <Route path='/rule' element={<Rule />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/etcInfo' element={<EtcInfo />} />
            <Route path='/event' element={<Event />} />
            <Route path='/eventToggle' element={<EventToggle />} />
          </Routes>
        <Footer title={title} />
      </BrowserRouter>
    </div>
  );
}

export default App;
/* npm i react-router-dom  */