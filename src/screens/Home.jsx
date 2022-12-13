import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "./home.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItems(response.data);
    });
  }, []);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <Header />
      <div className="shop">
        {items.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
