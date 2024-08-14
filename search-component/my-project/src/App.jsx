import { useState, useMemo, useEffect } from 'react'
import './App.css'
import debounce from 'lodash.debounce'

function App() {
  const [fruits, setCount] = useState(""); 
  
  const data = [
    { title: "Apple" },
    { title: "Orange" },
    { title: "Banana" },
    { title: "Pear" },
    { title: "Grapefruit" },
    { title: "Peach" },
    { title: "Apricot" },
    { title: "Nectarine" },
    { title: "Plum" },
    { title: "Mango" },
    { title: "Strawberry" },
    { title: "Blueberry" },
    { title: "Kiwi" },
    { title: "Passionfruit" },
    { title: "Raspberry" },
    { title: "Watermelon" }
  ];

  const SelectFruits = async (fruit) => {
    try {
      if (fruit) {
        const selectedFruit = data.filter((item) => {
          return item.title.includes(fruit);
        });
        console.log(selectedFruit);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    setCount(e.target.value);
    SelectFruits(e.target.value); 
    e.preventDefault();
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 3000); 
   },[] )
  useEffect(() => {
    return () => {
      debouncedResults;
    };
  });

  return (
    <>
      <input type="text"  onChange={debouncedResults} />
    </>
  )
}

export default App;
