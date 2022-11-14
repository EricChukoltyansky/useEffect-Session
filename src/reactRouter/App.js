import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/animal'>Animal</Link>
    </div>
  );
}
function About() {
  return <h1>About</h1>;
}
function E404() {
  return <h1>404</h1>;
}

function Animal() {
  // fetch all animals names
  return (
    <div>
      <h1>Animal</h1>
      <Link to='/'>Home</Link>
      {/* //! ↓ */}
      <Link to='/animal/cat'>Cat</Link>
      <Link to='/animal/dog'>Dog</Link>
    </div>
  );
}
function SpecificAnimal() {
  const params = useParams();
  const displayData = () => {
    // Api call containing params.animalType
    // if error redirect to 404 page
    // else ↓
    return (
      <>
        <h1>SpecificAnimal</h1>
        <h1>{params.animalType}</h1>
      </>
    );
  };
  return <div>{displayData()}</div>;
}

function App() {
  return (
    <div>
      App NavBar
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/animal' element={<Animal />} />
        <Route path='/animal/:animalType' element={<SpecificAnimal />} />
        <Route path='*' element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;
