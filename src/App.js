import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardList from './components/CardList';
import Review from './components/CardList';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
/* 
 Routes 감싸주는 아이 Route 그 안에 내부에들어 가는 아이 
  Routes 라는 범위 안에 메인 리뷰 카드 리스트를 담았다. 
  기능이 원활 하게 돌아 갈려면  
  라우트라는 컴포넌트에 path 라는 프로퍼티와 element 프로퍼티 를 만들어 줘야 한다.  
   element는 클릭 했을때 보여주고 싶은 컴포넌트를 다루는 것으로써 이 자체가 하나의 기능임으로 
   변수로 넣어야 한다. 문자로 넣으면 안됨 
   패스는 메인으로 갈려면 최상단이니  / 

*/

function App() {
  const title = 'site';
  return (
    <div className="App">
      <BrowserRouter>
      <Header title={title} />

      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/cardList" element={<CardList />} />
         <Route path="/review" element={<Review />} />
      </Routes>
      
      <Footer title={title} />
      </BrowserRouter>
    </div>
  );
}

export default App;
/* npm i react-router-dom  */