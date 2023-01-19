import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';  

function App() {
  const initNotes = [ 
    {text: 'notes1', isEdit: false}, 
    {text: 'notes2', isEdit: false},
    {text: 'notes3', isEdit: false}, 
  ]
  const [notes, setNotes] = useState(initNotes); 

  function startEdit(index) {
    const copy = Object.assign([], notes); 
    copy[index].isEdit = true;
    setNotes(copy); 
  }

  function endEdit(index) {
    const copy = Object.assign([], notes); 
    copy[index].isEdit = false;
    setNotes(copy);
  }

  function changeNote(index, event) {
    const copy = Object.assign([], notes); 
    copy[index].text = event.target.value;
    setNotes(copy);
  }

  const result = notes.map((note, index) => {
    let elem;

    if (!note.isEdit) {
      elem = <span onClick={() => startEdit(index)}>
        {note.text}
      </span>;
    } else {
      elem = <input 
      value={note.text}
      onChange={event => changeNote(index, event)}
      onBlur={() => endEdit(index)}
      />;
    }

    return <li key={index}>{elem}</li>;
  });

  return <ul>
    {result}
  </ul>;

}



export default App;
