import { useEffect, useState } from "react";
import api from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProducts } from "../featuries/ProductsSlice";
import ProductsList from "../components/Products/ProductsList";
import { fetchColors } from "../featuries/ColorsSlice";
import { fetchBrands } from "../featuries/BrandsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductsReducer.products);
  const colors = useSelector((store) => store.ColorsReducer.colors);
  const brands = useSelector((store) => store.BrandsReducer.brands);
  const [loading, setLoading] = useState(true);
  const [brandsLoading, setBrandsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");
        dispatch(fetchProducts(response.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();

    const getColors = async () => {
      try {
        const response = await api.get("/colors");
        dispatch(fetchColors(response.data));
      } catch (error) {
        console.error(error.message);
      }
    };
    getColors();

    const getBrands = async () => {
      try {
        const response = await api.get("/brands");
        dispatch(fetchBrands(response.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        setBrandsLoading(false);
      }
    };
    getBrands();
  }, [dispatch]);

  

  return (
    <>
      <div>
        <ProductsList
          products={products}
          colors={colors}
          loading={loading}
          brands={brands}
          brandsLoading={brandsLoading}
        />
      </div>
    </>
  );
};

export default Products;
