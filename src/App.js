import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';
import logo from './book-gallery-logo.jpg';
import {AiOutlinePlus} from 'react-icons/ai';
import EditBookCard from './components/pages/edit-book-card/EditBookCard';
import AddBook from './components/pages/add-book/AddBook';
import BuyBook from './components/pages/reading/BuyBook';
import NotFound from './components/pages/error/NotFound';

const Header = () => {
  return (
    <header className="App-header">
        <Link to='/home' className='r-link'><img src={logo} className="App-logo" alt="logo" /></Link> 
        <h1>Book Gallery</h1>
        <Link to='/add' className='r-link'><div className='btn-addBook'><AiOutlinePlus className='outline-plus' /></div></Link>
    </header>
  )
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/edit' element={<EditBookCard />} />
            <Route path='/buy' element={<BuyBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}


// // // // // // // // // // // // // // // // // // // // // // // // // // //


export default App;
