import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  return (
    <div>
      <h1>Product</h1>

      <Link to="jewellery">Jewellery</Link> |{" "}
      <Link to="men">Men</Link>

      <br /><br />

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      <Outlet context={{ search, sort }} />
    </div>
  )
}
