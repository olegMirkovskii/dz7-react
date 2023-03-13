
import './App.css';
import {Button} from "@mui/material";
import {useState} from "react";

function App() {
  const [none, setNone] = useState(false)

  const click = () => {
    setNone(!none)
  }

  return (
      <div className="App">
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
          <div>
            <Button onClick={click} sx={none ? {display: 'block'} : {display: 'none'}} variant="outlined" color="error">red</Button>
          </div>
          <div>
            <Button onClick={click} sx={!none ? {display: 'block'} : {display: 'none'}} variant="contained" color="success">green</Button>
          </div>
        </div>
      </div>
  );
}

export default App;