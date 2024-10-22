import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='container mx-auto px-4'>
      <Header/>
      <Banner/>
      <OurRecipes/>
      <section className='flex flex-col md:flex-row gap-6'>
        <Recipes/>
        <Sidebar/>
      </section>
    </div>
  );
};

export default App;