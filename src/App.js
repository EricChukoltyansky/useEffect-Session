 import { useState, useEffect } from "react";

 const App = () => {
   const [resourceType, setResourceType] = useState("posts");

   useEffect(()=>{
    console.log("Renders on every render - No Dependencies");
  })
   useEffect(()=>{
    console.log("Renders only once - Empty Dependencies Array");
  },[])
   useEffect(()=>{
    console.log("Renders only when resourceType changes");
  },[resourceType])

   return (
     <>
       <div>
         <button onClick={() => setResourceType("posts")}>Posts</button>
         <button onClick={() => setResourceType("Users")}>Users</button>
         <button onClick={() => setResourceType("Comments")}>Comments</button>
       </div>
       <h1>{resourceType}</h1>
     </>
   );
 };

 export default App;