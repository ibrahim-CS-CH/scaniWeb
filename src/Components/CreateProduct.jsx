import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Book from './Book';
import Dvd from './Dvd';
import Furniture from './Furniture';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const CreateProduct = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    document.title="Product Add"
  },[]);
  const [inputs, setInputs] = useState({});
  const [opt, setOpt] = useState("");
  const handleType = (e) => {
      e.preventDefault();
      setOpt(e.target.value);
  }
  const handleSave = (e) =>{
    e.preventDefault();
    axios.post('http://127.0.0.1/index.php', inputs).then((res)=>{
      if(res.data.status == 1){

        console.log(res.data);
        navigate('/');
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.data.message,
          timer: 3000

        })
        console.log(res.data.message);
      }
    });
    
  }
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs((e)=> ({...e, [name]:value}))
  }
  return (
    <div>
      <form onSubmit={handleSave} id="product_form">
        <div className='create'>
          <h1 >product add</h1>
          <div className='save-cancel-container'>
            <button className='save'>save</button>
            <Link className='cancel' to={'/'}>cancel</Link>
          </div>
        </div>
        <div className='productForm' id='productForm'>
          <label htmlFor="sku">
            <span className='sku'>sku</span>
            <input type="text" name="sku" id="sku" onChange={handleChange} placeholder='Please, provide sku' required />
          </label>
          <label htmlFor="name">
            <span>name</span>
            <input type="text" name="name" id="name" onChange={handleChange} placeholder='Please, provide name' required />
          </label>
          <label htmlFor="price">
            price ($)
            <input type="number"name="price" id='price' min={1} onChange={handleChange} placeholder="Please, provide price" required />
          </label>
          <label htmlFor="productType" id='productType'>
            type switcher
            <select name="type" id="productType" required value={opt} onChange={handleType}>
              <option value={''} disabled>type Switcher..</option>
              <option value="dvd" id='DVD'>dvd</option>
              <option value="furniture" id="Furniture">furniture</option>
              <option value="weight" id='Book'>weight</option>
            </select>
          </label>
          <div className='typeModel'>
            {opt == 'dvd' && (
              <Dvd handleChange={handleChange}/>
            )}
            {opt == 'furniture' && (
              <Furniture handleChange={handleChange} />
            )}
            {opt == 'weight' && (
              <Book  handleChange={handleChange} />
            )}
          </div>  
        </div>  
      </form>
    </div>
  )
}

export default CreateProduct