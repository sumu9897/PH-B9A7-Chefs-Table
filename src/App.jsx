import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';

const App = () => {
  return (
    <div className='container mx-auto px-4'>
      <Header/>
      <Banner/>
      <OurRecipes/>
    </div>
  );
};

export default App;