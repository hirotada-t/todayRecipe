import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { edamamResType, Recipe } from './type/apiResponse';
import InputMaterial from './components/common/inputMaterial'

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [material, setMaterial] = useState();

  const getRecipe = async () => {
    try {
      const res = await axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=chicken,tomato&app_id=f9771e1a&app_key=1bc1e115c5e717dbd1510265d090b8a9");
      const convertRecipe = convertRes(res.data.hits);
      console.log(res.data.hits)
      setRecipes(convertRecipe);
    } catch (e) {
      console.error(e);
    }
  };

  const convertRes = (res: edamamResType[]): Recipe[] => {
    return res.map((item, index) => {
      return {
        id: index,
        label: item.recipe.label,
        img: item.recipe.image
      }
    })
  }

  const addInput = () => { }
  const deleteInput = () => { }

  return (
    <>
      <button type="button" onClick={getRecipe}>検索</button>
      <InputMaterial />
      <div className="grid grid-cols-4 gap-y-6 gap-x-3">
        {recipes.map((r) => {
          return (
            <div className="col-span-1" key={r.id}>
              {r.label}
              <img src={r.img} alt="" />
            </div>
          )
        })}
      </div>
    </>
  );
}


export default App
