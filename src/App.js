import './App.css';
import DateTime from './DateTime';
import { Work } from './Work';
import imageTime from './time.jpg'
import imageList from './slist.jpg'
 
function App() {
  return (
    <div className='app'>
   <div className="container">
  <img src={imageList} alt="foto1" width="400px" height="120px" />
  </div>
      <div>
<h1 className='heading'>ПЛАНИРОВЩИК ДЕЛ</h1>
      </div>
      <div>
  <DateTime />
  <Work />    
     </div>
<div className="container">
  <img src={imageTime} alt="foto1" width="400px" />
  </div>
     </div>
  );
}

export default App;
