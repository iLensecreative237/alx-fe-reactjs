import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addRecipe({
        id: Date.now(),
        title,
        description,
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        placeholder="Recipe Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        value={description}
        placeholder="Recipe Description"
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;