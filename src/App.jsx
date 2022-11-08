import React,{useState} from "react";

function App() {

 const color='red';
 const text='Click Me';
 const [bg,updbg]=useState(color);
 const [tx,updtxt]=useState(text);
 const changebg = () =>{
   let color2='yellow';
   updbg(color2);
   let text2="Opps!!😮"
   updtxt(text2);
 }

 const previous = () =>{
    updbg(color);
    updtxt(text+'😺');
 }

  return (
    <>
     <div style={{backgroundColor:bg}}>
      <button onClick={changebg} onDoubleClick={previous}>{tx}</button>
     </div>
    </>
  );
}

export default App;
