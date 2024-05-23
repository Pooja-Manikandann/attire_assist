import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import Gender from './containers/Gender/Gender';
import Selection from './containers/Selection/Selection';
import Attiretype from './containers/Attiretype/Attiretype';
import FinalOutput from './containers/final-output/finalOutput';

function App() {
  const [type,setType] = useState("image");
  const [bodyType, setBodyType] = useState("");
  const [gender, setGender] = useState("man");
  const [dressType,setDressType] = useState('');
  const [page, setPage] = useState(1);

  const handleNextClick = (num) => {
    setPage(num);
  }

  const handleAttireSelect = (attireType)=>{
    setDressType(attireType);
  }

  console.log('page', page)
  return (
    <div className="App">
      <Header />      
      
      {page===1?
      <Gender gender={gender} setGender={setGender} handleNextClick={handleNextClick}  />: 
      page===2? <Selection gender={gender} setBodyType={setBodyType} type={type} setType={setType} handleNextClick={handleNextClick} />:
      page ===3? <Attiretype gender={gender} handleAttireClick={handleAttireSelect} handleNextPage={handleNextClick}/> :
      page===4? <FinalOutput attire={dressType} fit={bodyType}/> : <></>}
      <div>

      </div>
    </div>
  );
}

export default App;
