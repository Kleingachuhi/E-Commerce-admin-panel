import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    sku: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(() => {
      navigate('/products')
    })
  }

  return (
    <div>Add Products Page</div>
  )
}

