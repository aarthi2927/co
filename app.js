import React ,{useState,useEffect} from 'react';

function App() {
  const [message,setmessage]=useState("");
  useEffect(()=>{
    fetch('/displaydata')
    .then((res)=>res.json())
    .then((data)=>setmsg(data.message));
  },[]);
  return (
    <div className="App">
     <h1>{message}</h1>
    </div>
  );
}

export default App;

/*
method -1
 fetch('http://localhost:8000/displaydata')

 method-2 proxy
 using : npm i proxy
 before dependencies in package.json (fend)
"proxy": "http://localhost:8080",

*/
