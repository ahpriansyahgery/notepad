import { Container } from "react-bootstrap"
import Header from "./components/Header"
import From from "./components/Form"
import ListContent from "./components/ListContent"
import Footer from "./components/Footer"
import { useState } from "react"


const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];


function App() {
const [items, setItems] = useState(groceryItems)

function handleAddItem(item){

setItems([...items, item])

}

function handleDeleteItem(id){
  setItems((items) => items.filter((item) => item.id !== id  ) )
}

function handleToggleItem(id){
  setItems((items) => items.map((item) => (item.id === id ? {...item, checked : !item.checked } : item )  ) )
}

function handleClearItems(){
  setItems([]);
}  

  return (
    <div className="App" >
    <Container>
  <Header/>
    <From onAddItem={handleAddItem} />
    <ListContent items = {items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
    <Footer items={items} />
    </Container>
    </div>
  )
}

export default App
