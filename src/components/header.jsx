import { useState } from "react";

export default function Header({
  searchQuery,
  setSearchQuery,
  handleAddItemClick,
  handleDeleteClick,
}) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full mt-[29px] px-10 ">
      <div className="flex items-center gap-4 mr-[22px] ">
        <div className="flex-1 bg-white flex items-center px-6 py-3 rounded-lg shadow-sm border">
          <input
            type="search"
            placeholder="Search...."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-transparent outline-none text-lg text-black placeholder-gray-500"
            aria-label="Search products"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAddItemClick}
            className="bg-[rgba(41,41,41,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-lg text-white font-normal px-6 py-3 rounded-lg hover:bg-opacity-80"
            aria-label="Add new item"
          >
            Add Item
          </button>

          <button
            onClick={handleDeleteClick}
            className="bg-red-600 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-lg text-white font-normal px-6 py-3 rounded-lg hover:bg-red-700"
            aria-label="Delete selected items"
          >
            Delete
          </button>
        </div>
      </div>
    </header>
  );
}
