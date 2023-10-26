import React from 'react'
import Title from './Title.jsx'
import '../Meme.css'
function Krsna()
{
    var  [q,c]=React.useState([]);
    var  [ans,changes]=React.useState(false);
    var [a,qq]=React.useState(0);
    function Change(){
        qq(prev=>prev+1);
        changes(false);
        c([]);
    }
    function solve()
    {
        changes(prev=>!prev);
    }
    
        React.useEffect(()=>{
            // fetch('https://api.api-ninjas.com/v1/quotes?category=https://api.api-ninjas.com/v1/quotes?category=fitness').then(data=>data.json).then(data=>)
    // Define your API key
    const apiKey = 'FoAGQHHxygYj1P0GjVW6SA==ycYMGUokY92t3Aun';

    // Define the URL and headers for the fetch request
    const url = 'https://api.api-ninjas.com/v1/riddles';
    const headers = {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response as JSON
      })
      .then( data=>c(data))
      .catch(error => {
        console.error('Error:', error);
      });
  }, [a])
  return (
    <div className='riddlecontainer'>
    <p className='questions'>
   {q && q.length > 0 && q[0].title ? " Riddle: "+q[0].question : "Loading..."}
      </p>
      <br />
      <div className={ans?"answers":""}>
     {ans&&q && q.length > 0 && q[0].title ? " Answer: "+q[0].answer:""}
      </div>
      <br />
      <button style={q && q.length > 0 &&ans?{backgroundColor:'green'}:{backgroundColor:'red'}} className='answer' onClick={solve}>
        {ans?"Hide Answer":"Show Answer"}
      </button>
      <br />
      <br />
      <button className='riddlechange' onClick={Change}>
        Next Riddle
      </button>
    </div>
    
  )
  
  
  // The empty dependency array ensures this effect runs only once

}


export default function App()
{
    return (
        <div>
         <Title/>
         <div>
         <Krsna/>
         </div>
         </div>
    )
}