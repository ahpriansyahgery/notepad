import { useState } from "react"

export default function From({onAddItem}){

  const quantityNum = [...Array(10)].map((_, i) => (
    <option value={i + 1} key={i + 1} > {i + 1} </option>
  ) )

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);


  function handleSubmitItem(e){
    e.preventDefault()
     
    const newItem = {name, quantity, checked: false, id: Date.now()}

 onAddItem(newItem)

  setName('');
  setQuantity(1);
  }


    return(
        <form className="addNew" onSubmit={handleSubmitItem} >
      <label> what will you note ? </label>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}  > 
       {quantityNum}
         </select>
         <input type="text" placeholder="Enter your note"  value={name} onChange={(e) => setName(e.target.value) } />
         <button type="submit">Add Note</button>
    </form>
    )
}