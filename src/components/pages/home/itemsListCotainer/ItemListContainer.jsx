import { useEffect, useState } from "react";
import { products } from "../../../../productsMock";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
