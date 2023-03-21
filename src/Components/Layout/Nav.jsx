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
                  href="/"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavActive(false)}
                  className="link"
                  href="/"
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
                  href="/"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <a href="tel:+79112561849" className="tel">
              +7 911 256 18 49
            </a>
            <div className="social">
              <Link href="/">
                <Image src={Whatsapp} alt="" height={25} />
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
