import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/img/logo.svg";
import Whatsapp from "../../../public/img/whatsapp.svg";
import Telegram from "../../../public/img/telegram.svg";
import { useEffect, useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, [active]);

  const [navActive, setNavActive] = useState(false);
  return (
    <header className={active ? "nav active" : "nav"}>
      <div className="container">
        <nav>
          <Link href="/">
            <Image src={Logo} alt="logo" height={50} />
          </Link>
          <div className={navActive ? "nav__template active" : "nav__template"}>
            <ul>
              <li>
                <Link
                  onClick={() => setNavActive(false)}
                  className="link"
                  href="#company"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavActive(false)}
                  className="link"
                  href="#works"
                >
                  Наши работы
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavActive(false)}
                  className="link"
                  href="/"
                >
                  Новости
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavActive(false)}
                  className="link"
                  href="#contacts"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <a href="tel:+79992385506" className="tel">
              +7 999 238 55 06
            </a>
            <div className="social">
              <Link href="https://wa.me/+79992385506">
                <Image src={Whatsapp} alt="whatsapp" height={25} />
              </Link>
              <Link href="/">
                <Image className="tg" src={Telegram} alt="" height={25} />
              </Link>
            </div>
          </div>
          <div
            onClick={() => setNavActive(!navActive)}
            className={navActive ? "burger active" : "burger"}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
