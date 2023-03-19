import Image from "next/image";
import Logo from "../../../public/img/logo.svg";
import Whatsapp from "../../../public/img/whatsapp.svg";
import Telegram from "../../../public/img/telegram.svg";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="nav">
        <div className="container">
          <nav>
            <Link href="/">
              <Image src={Logo} alt="logo" height={50} />
            </Link>
            <ul>
              <li>
                <Link className="link" href="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className="link" href="/">
                  О компании
                </Link>
              </li>
              <li>
                <Link className="link" href="/">
                  Наши работы
                </Link>
              </li>
              <li>
                <Link className="link" href="/">
                  Новости
                </Link>
              </li>
              <li>
                <Link className="link" href="/">
                  Контакты
                </Link>
              </li>
            </ul>
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
          </nav>
        </div>
      </header>
      {children}
      <footer>
        <div>Footer</div>
      </footer>
    </>
  );
}
