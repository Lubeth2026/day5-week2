

import { useState } from "react";
import Names from "./Names"
import pets from "./pets"


function App() {
   const [count, setCount] = useState(0);
   const handleClick = ()=> {
    setCount(count + 1)
   }

  const allPets = pets.map((pet) => <Names key={pet.id} name={pet.name} />);
  return (
    <>
     {allPets}
     <h1>Count: {count}</h1>
     <button onClick={handleClick}>Add 1</button>
    </>
  )
}

export default App
