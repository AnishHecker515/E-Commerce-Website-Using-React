import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFCountProducts from "./useCountProducts";

function SideBar() {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((c) => {
        setCategories(c); 
      })
  }, []);

  // const ab = async (n)=>{

  //   const [data] = await useFetch(`https://dummyjson.com/products/category/${n}`);
  //   //   console.log(data)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setCategories(data.products);
  //   });
  //   return useFCountProducts.data.length
  // }

  return (
   <>
     <div className="col-md-12">
        <div className="sidebar-widget category">
          <h2 className="title">Category</h2>
          <ul>
            {categories.map((ty,i) => (
              <li key={ty.slug}>
                <Link to={`/category/${ty.slug}`}>{ty.name}</Link>
                {/* <span>({ab(i)})</span>  */}
               </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-widget image">
          <h2 className="title">Featured Product</h2>
          <a href="#">
            <img src="img/category-1.jpg" alt="Image" />
          </a>
        </div>

        <div className="sidebar-widget brands">
          <h2 className="title">Our Brands</h2>
          <ul>
            <li>
              <a href="#">Nulla </a>
              <span>(45)</span>
            </li>
            <li>
              <a href="#">Curabitur </a>
              <span>(34)</span>
            </li>
            <li>
              <a href="#">Nunc </a>
              <span>(67)</span>
            </li>
            <li>
              <a href="#">Ullamcorper</a>
              <span>(74)</span>
            </li>
            <li>
              <a href="#">Fusce </a>
              <span>(89)</span>
            </li>
            <li>
              <a href="#">Sagittis</a>
              <span>(28)</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-widget tag">
          <h2 className="title">Tags Cloud</h2>
          <a href="#">Lorem ipsum</a>
          <a href="#">Vivamus</a>
          <a href="#">Phasellus</a>
          <a href="#">pulvinar</a>
          <a href="#">Curabitur</a>
          <a href="#">Fusce</a>
          <a href="#">Sem quis</a>
          <a href="#">Mollis metus</a>
          <a href="#">Sit amet</a>
          <a href="#">Vel posuere</a>
          <a href="#">orci luctus</a>
          <a href="#">Nam lorem</a>
        </div>
      </div>
    </>
  );
}

export default SideBar;