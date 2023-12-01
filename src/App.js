import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState()
  async function fetch() {
    const res = await axios.get("https://demotrade.efintradeplus.com/ExamAPI/examdata")
    setList(res.data)
  }
  useEffect(() => {
    fetch()
  }, [])
  return (
    <div className="App">
      <nav style={{ background: "gray", display: "flex", height: "50px", alignItems: "center" }}>
        <div style={{ padding: "0px 30px" }}>
          <img src='https://i.pinimg.com/736x/6e/a9/d8/6ea9d8d5ac75d9c5d7a2a567c1e2bbdf.jpg' width={40} height="100%" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "15%" }}>
          <div>
            Menu 1
          </div>
          <div>
            Menu 2
          </div>
          <div>
            Menu 3
          </div>
        </div>
      </nav>
      <main>
        <div className='container'>
          <div className='box1'>
            <p>{list.data_1}</p>
          </div>
          <div className='box2'>
            <p>{list.data_2}</p>
          </div>
          <div className='box3'>
            <p>{list.data_3}</p>
          </div>
          <div className='box4'>
            <p>{list.data_4}</p>
          </div>
          <div className='box5'>
            <p>{list.data_6}</p>
          </div>
          <div className='box6'>
            <p>{list.data_5}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
