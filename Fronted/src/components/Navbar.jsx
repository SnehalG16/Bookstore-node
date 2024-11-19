
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"darkblue",color:"#fff",padding:"10px 0px"}}>
      <Link to={"/product"}>Product</Link>
      <Link to="/addproduct">AddProduct</Link>
      {/* <Link>Product</Link> */}

    </div>
  )
}

export default Navbar
