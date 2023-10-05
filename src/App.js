import React, {useState, useEffect} from 'react';

import './App.css';
let documents = [
  {
    id:1,
    name:"healthcare license",
    path:"something",
    status:"Ready to Review",
    date:"10/10/2024"
  },
  {
    id:2,
    name:"BLS license",
    path:"something",
    status:"Ready to Review",
    date:"10/10/2024"
  },
  {
    id:3,
    name:"ID",
    path:"something",
    status:"Ready to Review",
    date:"10/10/2024"
  }
]
const options = [
  {
    label: "Ready to Review",
    value: "ready",
  },
  {
    label: "Approved",
    value: "approve",
  },
  {
    label: "Rejected",
    value: "reject",
  }
]
function App() {
  const [docs, setStatus] = useState(documents);
  const handleChange = (id,e) => {
    //setStatus(e.currentTarget.value);
    const objDoc = docs;
    objDoc.some((obj)=>{
        if(obj.id===id){
          obj.status=e.currentTarget.value;
        }
    });
    setStatus([...objDoc]);
  };
  const updateDocument = (e) => {
    e.preventDefault();
    console.log('update!!!!');
  }
  return (
    <div className="App">
     <table>
        <tr>
          <th>document name</th>
          <th>Expiration Date</th>
          <th>Status</th>
        </tr>
       
          {
            docs.map(document=>(
              <tr className="documentsList">
              <td className="documentName"><a href="#">{document.name}</a></td>
              <td className="documentDate">{document.date}</td>
              <td className="documentStatus">
              <select className={'documentSelect'+document.id} value={docs.status} onChange={(e) => handleChange(document.id,e)}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>

              </td>
              <td><button className="updateButton" onClick={updateDocument} disabled={document.status==="Ready to Review"}>Update</button></td>
              <td><span className="spanTatus">{document.status}</span></td>
              </tr>
            ))
          }
      </table>
    </div>
  );
}

export default App;
