import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import UsersList from './components/Users/UsersList';
import UsersProfile from './components/Users/UsersProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' className='user-list' element={<UsersList />} />
        <Route path='/user/:id' className='user-profile' element={<UsersProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
