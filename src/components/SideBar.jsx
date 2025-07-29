import zad from "../assets/zad.svg";

export default function SideBar() {
  const menuItems = [{ name: "Products", icon: null, active: true }];

  return (
    <nav
      className={`bg-[rgba(41,41,41,1)] flex flex-col items-stretch text-lg text-white font-normal pt-[27px] pb-[337px] pr-2 border-black`}
    >
      <header className="flex flex-col items-center">
        <img
          src={zad}
          alt="zad Logo"
          className="aspect-[1.14] object-contain w-14"
        />
      </header>

      <ul className="flex flex-col mt-[108px] max-md:mt-10">
        {menuItems.map((item, index) => (
          <li key={index} className="mt-[19px]">
            <div
              className={`${
                item.active && "bg-white text-black rounded-[0px_50px_50px_0px]"
              } flex items-stretch gap-10  pl-[35px] pr-[17px] py-[17px]`}
            >
              <span>{item.name}</span>
              {item.active && (
                <div className="bg-[rgba(41,41,41,1)] flex w-[15px] shrink-0 h-[15px] my-auto rounded-[50%]" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
