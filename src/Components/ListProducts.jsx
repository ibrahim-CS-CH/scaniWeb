import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const handleDelete = (e)=>{
    e.preventDefault();
    axios.post('http://127.0.0.1/index2.php', checked).then((res)=>{
    console.log(res.data);
    fetchData();
    })
  }
  const handleChange = (e)=> {
    let isChecked = e.target.checked;     
     if(isChecked == true) {
      setChecked([...checked, e.target.id])
     }else {
      setChecked((z) => z.filter((x) => x !=e.target.id))
     }
  }
  useEffect(()=>{
    fetchData()
  }, [])
  const fetchData = ()=>{
    axios.get('http://127.0.0.1/index.php').then((res)=>{
      setProducts(res.data);
    })
  }
  useEffect(()=>{
    document.title="Product List"
  },[])
  return (
    <div>
      <div id="productList">
        <h1>product list</h1>
        <div id="delete-add-container">
          <Link to={"/addproduct"} id="add-btn">
            ADD
          </Link>
          <button id="delete-btn" onClick={handleDelete}>MASS DELETE</button>
        </div>
      </div>
      <div className="products">
        {products.length == 0?(<>No Product Founded</>):(
          products.map((e, i) => (
            <div className="cart" key={i} id={e.sku}>
              <input
                type="checkbox"
                className="delete-checkbox"
                name="deleteItem"
                id={e.sku}
                onChange={e => handleChange(e)}
              />
              <h3>{e.sku}</h3>
              <h3>{e.name}</h3>
              <h3>{e.price} $</h3>
              {e.size !=null && (<h3>size: {e.size} MB</h3>)}
              {e.weight !=null && (<h3>weight: {e.weight}KG</h3>)}
              {e.width !=null && (<h3>Dimensions: {e.height}x{e.width}x{e.length}x</h3>)}
            </div>
          ))
        )}
        
      </div>
    </div>
  );
};

export default ListProducts;
