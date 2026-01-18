import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  return (
    <div>
      <h1>{product.title}</h1>
      <p>₹ {product.price}</p>
      <img src={product.image} height="200" />
    </div>
  )
}
