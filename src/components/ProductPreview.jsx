import { useEffect, useState } from "react";
import close from "../assets/close.svg";

export default function ProductPreview({ product, setProduct }) {
  if (!product) return null;

  const [open, setopen] = useState(true);

  const handleClose = () => {
    setopen(false);
    setProduct(null);
  };

  useEffect(() => {
    setopen(true);
  }, [product]);

  return (
    <>
      {open && (
        <aside
          className={`bg-[rgba(41,41,41,1)] flex grow flex-col text-xl text-white font-bold w-1/3 pt-[38px] pb-[612px] px-[23px] `}
        >
          <div className="flex justify-between">
            <h2 className="text-2xl ">Preview Product</h2>
            <img
              src={close}
              alt="close icon"
              className="w-5 h-5 mt-2 object-contain cursor-pointer"
              onClick={handleClose}
            />
          </div>

          <div className="flex flex-col items-center mt-[25px]">
            <img
              src={`http://127.0.0.1:8000${product.image}`}
              alt={`${product.nom} preview`}
              className="aspect-[0.99] object-contain w-[180px] self-center max-w-full"
            />

            <div className="mt-[15px] text-center">
              {product.id} - {product.nom}
            </div>

            <div className="self-stretch mt-2.5 text-center">
              Stock : {product.quantite} - {product.categorie}
            </div>

            <div className="mt-[11px] text-center">Price : {product.prix}</div>

            <div className="mt-[7px] text-center">
              description : {product.description}{" "}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
