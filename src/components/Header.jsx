import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ClearIcon, Hamburger } from "./Icon";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="header-wrapper">
            <Link className="logo" href="/">
              <Image
                width={162}
                height={86}
                src={"/images/logo.svg"}
                alt={"logo"}
              />
            </Link>
            <div className="menu-wrapper">
              <ul className={`menu ${open ? "active" : ""}`}>
                <li className="clear-icon d-md-none">
                  <Link className="logo" href="/">
                    <Image
                      width={162}
                      height={86}
                      src={"/images/logo.png"}
                      alt={"logo"}
                    />
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="p-0 m-0 outline-0 border-0 bg-transparent"
                  >
                    <ClearIcon />
                  </button>
                </li>
                <li className="d-md-none">
                  <Link href="/" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                </li>
              </ul>
              <div className="right-icons ms-auto">
                <Link href="/login" className="login d-none d-md-block">
                  Login
                </Link>

                <div className="d-md-none">
                  <button
                    type="button"
                    className="p-0 m-0 border-0 outline-0 hamburger"
                    onClick={() => setOpen(true)}
                  >
                    <Hamburger />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
const langData = [
  {
    img: "/images/lang/en.png",
    title: "EN",
  },
  {
    img: "/images/lang/bd.png",
    title: "BN",
  },
];
export default Header;
