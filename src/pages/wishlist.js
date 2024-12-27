function Wishlist() {
  let wishLocalData = JSON.parse(localStorage.getItem("wishList"))

  console.log(wishLocalData)
    return ( 
        <>
        <div className="cart-page">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Add to Cart</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {wishLocalData.map((ty)=>
              <tr>
                <td>
                  <a href="#">
                    <img src={ty.thumbnail} alt="Image" />
                  </a>
                </td>
                <td>
                  <a href="#">{ty.title}</a>
                </td>
                <td>{ty.price}</td>
                <td>
                  <div className="qty">
                    <button className="btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                    <input type="text" defaultValue={1} />
                    <button className="btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </td>
                <td>
                  <button>Add to Cart</button>
                </td>
                <td>
                  <button>
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
             )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
     );
}

export default Wishlist;