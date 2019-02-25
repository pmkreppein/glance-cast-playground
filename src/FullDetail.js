import React from 'react'

export default function FullDetail(props) {
  console.log(props)
    if (props){
     return (
  
      <table className="table is-bordered is-striped is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>Data Point</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        
      
        {Object.keys(props).map(key => (
    <tr>
          <td>{key}</td>
          <td>{props[key]}</td>
        </tr>
 ))}

      </tbody>
    </table>
    
  )
}
return(<div>Loading...</div>)
}
