import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../Store/ProductReducer";
import { addToCart } from "../../Store/AddCart";
import { Link, useNavigate } from "react-router-dom";
import "./cardstyle.css";
import axios from "axios";

const Cards = ({ loginUser }) => {
  const [cartproduct, setCartProduct] = useState({
    userId: "",
    products: [
      {
        productId: "",
        quantity: "",
      },
    ],
  });
  const dispatch = useDispatch();

  const navagate = useNavigate();

  const product = useSelector((state) => state.productStore.Product);

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);
  const addtocardbtn = async (item, user) => {
    setCartProduct({
      userId: loginUser._id,
      products: [
        {
          productId: item._id,
          quantity: +1,
        },
      ],
    });

    await axios
      .post("http://localhost:5000/api/cart/cart/", cartproduct)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const cardhandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <div className="product d-flex container mb-5">
        {product.slice(0, 8).map((item) => {
          const { id, image, category, title, price } = item;

          return (
            <div className="card-items" key={id}>
              <Link to={`/${id}`}>
                <div className="card-images">
                  <img src={image} alt={title} />
                </div>
              </Link>
              <div className="card-text">
                <h4>{title.slice(0, 20)}</h4>
                <h5>${price}</h5>
                <button
                  className="card-btn"
                  onClick={() => {
                    cardhandler(item);
                  }}
                >
                  Add to Card
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
