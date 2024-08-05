import { useState } from "react";
import Item from "./Item";


export default function ListContent({items,onDeleteItem,onToggleItem,onClearItems}){

  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if(sortBy== 'input'){
    sortedItems = items
  }
  if(sortBy== 'name'){
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name) )
  }
  if(sortBy== 'checked'){
    sortedItems = items.slice().sort((a, b) => b.checked - a.checked )
  }

    return(
       <>
        <div className="list-content">
        <ul>
         {
          sortedItems.map((item) =>
          <Item item ={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          )
         }
        </ul>
      </div>


      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value) }  >
            <option value="input"> based on input </option>
            <option value="name"> based on name </option>
            <option value="checked">based on the checklist</option>
        </select>
        <button onClick={onClearItems} >clear the list</button>
      </div>
       </>
    )
}