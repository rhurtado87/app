import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Shopping from './pages/ShoppingList'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <h1>Welcome to my Online Store</h1>
    <h4>Coming Soon!!!</h4>
      <Navbar />

    <Catalog />
    <About />

    <Shopping />

    <Footer />
    </div>
  );
}

export default App;
