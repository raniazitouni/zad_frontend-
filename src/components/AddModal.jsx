import { useState } from "react";
import axios from "axios";

export default function AddModal({ onClose, fetch }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddProduct = async (formData) => {
    try {
      await axios.post("http://localhost:8000/inventory/add/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nom", name);
    formData.append("quantite", quantity);
    formData.append("categorie", category);
    formData.append("description", description);
    formData.append("prix", price);
    if (image) formData.append("image", image);

    await handleAddProduct(formData);
    await fetch();
    onClose();
    setName("");
    setQuantity("");
    setCategory("");
    setImage(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            className="w-full border rounded px-3 py-2"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
