import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

const options ={
    edit:true,
}
const Product = ({product}) => {
  return (
    <Link className='productCard' to={product._id}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <Box>
            <ReactStars {...options}/><span>(256 Reviews)</span>
        </Box>
        <span>{product.price}</span>
    </Link>
  )
}

export default Product;
