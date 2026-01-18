import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

export default function Jewellery() {
  const [products, setProducts] = useState([])
  const { search, sort } = useOutletContext()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  if (sort === "low") filtered.sort((a, b) => a.price - b.price)
  if (sort === "high") filtered.sort((a, b) => b.price - a.price)

  return (
    <>
      <h2>Jewellery Products</h2>
      {filtered.map(item => (
        <div key={item.id}>
          <Link to={`/productDetail/${item.id}`}>{item.title}</Link>
          <p>₹ {item.price}</p>
          <img src={item.image} height="100" />
        </div>
      ))}
    </>
  )
}
