import SideBar from "../components/SideBar";
import ProductList from "../components/ProductList";

export default function Page() {
  return (
    <div className="bg-white flex items-stretch gap-4 min-h-screen">
      <SideBar />
      <ProductList />
    </div>
  );
}
