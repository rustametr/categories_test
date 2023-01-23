import './App.css';
import SubCategorie from "./components/SubCategorie/SubCategorie"
import { useState } from 'react';


function App() {
  const [openedCategories, SetOpenedCategories] = useState([true, true, true]);

  const categorieHandler = (id: number) => {
    let buf_list = openedCategories;
    for(let i=0; i<buf_list.length; i++){
      buf_list[i] = true;
    }

    buf_list[id] = false;

    SetOpenedCategories([...buf_list]);
  }  

  return (
    <div className="App">
      <div className='categorie-container'>
        <div className='categorie' onClick={()=>categorieHandler(0)}>0</div>
        <SubCategorie closed={openedCategories[0]}/>
      </div>
      <div className='categorie-container'>
        <div className='categorie' onClick={()=>categorieHandler(1)}>1</div>
        <SubCategorie closed={openedCategories[1]}/>
      </div>
      <div className='categorie-container'>
        <div className='categorie' onClick={()=>categorieHandler(2)}>2</div>
        <SubCategorie closed={openedCategories[2]}/>
      </div>
    </div>
  );
}

export default App;
