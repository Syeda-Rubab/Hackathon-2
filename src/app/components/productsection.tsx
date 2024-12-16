"use client"
import React from 'react'
import ProductCard from '../cards/ProductCard'
import Button from './Btn'

function productsection() {
  return (
    <div>
      <ProductCard/>
      <div className="flex justify-center mt-4">
            <Button
            onClick={() => alert("clicked!!")}
            text="Show More"
            className=" px-16 py-2 text-customBrown border-2 border-customBrown"/>
            </div>
    </div>
  )
}

export default productsection
