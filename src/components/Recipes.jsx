import React, { useEffect, useState } from 'react';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [showAll, setShowAll] = useState(false); // Track if all recipes are shown

    useEffect(() => {
        fetch('./recipes.json')
            .then((response) => response.json())
            .then((data) => setRecipes(data));
    }, []);

    // Decide how many recipes to display based on the showAll state
    const displayedRecipes = showAll ? recipes : recipes.slice(0, 6);

    return (
        <div className='md:w-2/3'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {displayedRecipes.map((recipe) => (
                    <div key={recipe.recipe_id} className="card bg-base-100 border-2">
                        <figure className='px-8 pt-6 '>
                            <img
                                className='w-full md:h-52 rounded-xl'
                                src={recipe.image}
                                alt={recipe.recipe_name}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe.recipe_name}</h2>
                            <p className='text-gray-600 text-base'>{recipe.description}</p>
                            <h3 className='text-lg text-gray-800 font-medium'>Ingredients: {recipe.ingredients.length}</h3>
                            <hr />
                            <ul className='ml-8'>
                                {
                                    recipe.ingredients.map((item,index)=><li className='list-disc text-gray-600' key={index}>{item}</li>)
                                }
                            </ul>
                            <div className='flex gap-4'>
                                <div className='flex items-center'>
                                    <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                                    <p>{recipe.preparing_time} minute</p>
                                </div>
                                <div className='flex items-center'>
                                    <i className="fa-solid fa-fire mr-2 text-2xl"></i>
                                    <p>{recipe.calories} calories</p>
                                </div>
                            </div>
                            <div className="card-actions">
                                <button className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium hover:bg-green-800 hover:text-white">Want To Cook</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Conditionally render buttons based on the showAll state */}
            <div className='text-center mt-4'>
                {showAll ? (
                    <button className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium hover:bg-green-800 hover:text-white" onClick={() => setShowAll(false)}>
                        See Less
                    </button>
                ) : (
                    <button className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium hover:bg-green-800 hover:text-white" onClick={() => setShowAll(true)}>
                        See More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Recipes;
