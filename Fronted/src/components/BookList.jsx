import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const BookList = () => {

  const [booklist, setBooklist] = useState([]);

  const getBookData = () => {
    axios.get('http://localhost:8000/bookroute/getuser')
      .then((res) => {
        console.log(res.data);
        setBooklist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/bookroute/delete/${id}`)
      .then((res) => {
        console.log(res);
        alert('Product Deleted Successfully');
        getBookData(); // Refresh the list after deletion
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <div className="product">
      {booklist.map((item) => (
        <div key={item._id} style={{ border: '2px solid rgb(158, 132, 54)', margin: '5px', textAlign: 'center' }}>
          <Link to={`/description/${item._id}`}>
            <img
              src={item.img}
              height={200}
              width={200}
              style={{ marginTop: '10px' }}
              alt={item.title}
              onError={(e) => e.target.src = '/path_to_default_image.jpg'} // Fallback image
            />
          </Link>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <div>
            <button>
              <Link to={`/editproduct/${item._id}`} style={{ color: 'black' }}>Edit</Link>
            </button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BookList;    