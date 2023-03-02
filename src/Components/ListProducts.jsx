import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ListProducts = () => {
  const x = document.getElementsByName('deleteItem');
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const handleDelete = (e)=>{
    e.preventDefault();


     
    console.log( x);
    
    if (checked.length >0 ){
      axios.post('https://scaniwebtask.000webhostapp.com/inde.php', JSON.stringify(checked)).then((res)=>{
      if (res.data.status == 1 ) {
        console.log("deleted");
        setProducts(products.filter(el => !checked.includes(el.sku)));
        for(var i=0; i < x.length; i++){  
          if(x[i].type=='checkbox')  
              x[i].checked=false;  
        } 
      }
      })
    }
  }
  const handleChange = (e)=> {
    let isChecked = e.target.checked;    
     if(isChecked == true) {
      setChecked([...checked, e.target.id])
     }else {
      setChecked((z) => z.filter((x) => x !=e.target.id));
     }
     
  }
  useEffect(()=>{
    fetchData()
  }, [])
  const fetchData = ()=>{
    axios.get('https://scaniwebtask.000webhostapp.com/index.php').then((res)=>{
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
        {products.length == 0 ? (<>No Product Founded</>):(
          products.map((e, i) => (
            <div className="cart" key={i} >
              <input
                type="checkbox"
                className="delete-checkbox"
                name="deleteItem"
                id={e.sku}
                onChange={e => handleChange(e)}
              />
              <div>
              <h3>{e.sku}</h3>
              <h3>{e.name}</h3>
              <h3>{e.price} $</h3>
              {e.size !=null && (<h3>size: {e.size} MB</h3>)}
              {e.weight !=null && (<h3>weight: {e.weight}KG</h3>)}
              {e.width !=null && (<h3>Dimensions: {e.height}x{e.width}x{e.length}x</h3>)}
              </div>
            </div>
          ))
        )}
        
      </div>
    </div>
  );
};

export default ListProducts;
