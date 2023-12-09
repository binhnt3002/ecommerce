import { useState } from 'react'
import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import Recommend from "../Recommend/Recommend";
import Sidebar from "../Sidebars/Sidebar";
import '../index.css'

//Database
import products from "../db/data";
import Card from '../components/Card';

function Store() {
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [query,setQuery] = useState("")

  //input filter
  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase())!== -1
  );



  //Radio filter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //buttons filter
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filterData(products,selected, query) {
    let filterShoeProducts = products

    //filtering input items
    if (query) {
      filterShoeProducts = filteredItems
    }

    //selected filter
    if (selected) {
      filterShoeProducts = filterShoeProducts.filter(({category,color,company,newPrice,title}) =>
      category === selected || 
      color === selected || 
      company === selected || 
      newPrice === selected || 
      title === selected) 
    }

    return filterShoeProducts.map(({img,title,star,reviews,newPrice,prevPrice}) =>
    (
      <Card key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ))
  }

  const result = filterData(products,selectedCategory,query)


    return <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommend handleClick={handleClick}/>
      <Products result={result}/>
    </>
}


export default Store