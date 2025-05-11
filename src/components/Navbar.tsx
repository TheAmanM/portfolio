import { useState } from "react";

export default function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerIsOpen((val) => !val);
  };

  const linksData = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Get in touch", href: "#contact" },
  ];
  return (
    <div className="flex px-12 max-md:px-6 py-6 items-center justify-between fixed w-screen z-1">
      <a href="/">
        <h1 className="text-2xl max-md:text-xl font-bold ">Aman Meherally</h1>
      </a>
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        className="size-6 md:hidden"
        onClick={toggleDrawer}
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <ul
        className={`text-lg max-md:absolute max-md:inset-0 max-md:left-[25%] max-md:bg-white max-md:h-screen max-md:flex max-md:flex-col max-md:py-6 transition ${
          drawerIsOpen && "max-md:translate-x-[100%]"
        }`}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          onClick={toggleDrawer}
          className="size-8 mr-6 ml-auto mb-4 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M368 368 144 144m224 0L144 368"
          ></path>
        </svg>
        {linksData.map((item) => {
          return (
            <li className="float-left ml-12 max-md:ml-6 max-md:mt-4">
              <a
                href={item.href}
                onClick={() => {
                  alert("Currently under construction!");
                }}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
