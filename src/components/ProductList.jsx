import { useState, useEffect } from "react";
import axios from "axios";
import ProductPreview from "./ProductPreview";
import Header from "./header";
import AddModal from "./AddModal";

export default function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [openPreview, setOpenPreview] = useState(false);
  const [product, setProduct] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/inventory/Products/"
      );
      setAllProducts(response.data);
      setProducts(response.data);
      console.log("Products fetched:", response.data);
    } catch (error) {
      console.error(
        "Error fetching products:",
        error.response?.status,
        error.message
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter((product) =>
      product.nom.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filtered);
  }, [searchQuery, allProducts]);

  const handleAddItemClick = () => {
    setIsAddModalOpen(true);
  };

  const handleDeleteClick = async () => {
    if (!product.id) return;
    try {
      await axios.delete(
        `http://127.0.0.1:8000/inventory/delete/${product.id}/`
      );
      const updated = allProducts.filter((p) => p.id !== product.id);
      setAllProducts(updated);
      setProducts(updated);
      setProduct(null);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleClick = (prod) => {
    if (!openPreview) {
      setOpenPreview(!openPreview);
      setProduct(prod);
    } else {
      setProduct(prod);
    }
  };

  return (
    <section className="w-full flex flex-row max-h-screen">
      <div className="flex w-full flex-col mt-4">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleAddItemClick={handleAddItemClick}
          handleDeleteClick={handleDeleteClick}
        />
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-2 items-center px-4 py-3 mt-4 border-b border-black text-lg font-normal text-black">
          <span>No ID</span>
          <span>Product</span>
          <span>name</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Category</span>
        </div>

        {/* Table Body */}
        <div className="flex flex-col overflow-y-scroll">
          {products.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4 items-center px-4 py-4 border-b border-gray-200 text-lg font-normal text-black hover:bg-gray-50"
              onClick={() => {
                handleClick(product);
              }}
            >
              <span>{product.id}</span>
              <img
                src={`http://127.0.0.1:8000${product.image}`}
                alt={product.nom}
                className="w-[90px] h-[90px] object-contain"
              />
              <span>{product.nom}</span>
              <span>{product.prix}</span>
              <span>{product.quantite}</span>
              <span>{product.categorie}</span>
            </div>
          ))}
        </div>
      </div>
      {openPreview && (
        <ProductPreview product={product} setProduct={setProduct} />
      )}
      {isAddModalOpen && (
        <AddModal
          onClose={() => setIsAddModalOpen(false)}
          fetch={fetchProducts}
        />
      )}
    </section>
  );
}
