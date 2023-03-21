import { Montserrat } from "@next/font/google";
import Layout from "@/Components/Layout/Layout";
import Button from "@/Components/UI/Button/Button";
import Checkbox from "@/../public/img/checkbox.svg";
import Image from "next/image";
const inter = Montserrat({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={inter.className}>
      <Layout>
        <main className="home">
          <div className="video">
            <video
              style={{ width: "100%", height: "100%" }}
              autoPlay={true}
              muted={true}
              loop={true}
              src={"/img/video.mp4"}
              poster="https://naves-na-zakaz.ru/wp-content/uploads/2022/07/8.jpg"
            ></video>
            <div className="container">
              <div className="top">
                <div className="left">
                  <h1>
                    Изготовление и установка навесов под ключ в Санкт-Петербурге
                    и ЛО
                  </h1>
                  <p>Изготовление 14-30 дней. Установка 1-3 дня</p>
                  <button>Вызвать замерщика</button>
                  <p>Выезжаем в удобное для вас место и время</p>
                </div>

                <div className="right">
                  <div className="form" action="">
                    <h4>Расчет цены за 5 минут</h4>
                    <p className="p1">Заполните форму — мы сразу перезвоним</p>
                    <p className="p2">Укажите габариты навеса</p>
                    <form>
                      <div className="top">
                        <input type="text" placeholder="Ширина" />
                        <input type="text" placeholder="Высота" />
                      </div>
                      <div className="mid">
                        <input type="text" placeholder="Телефон" />
                      </div>
                      <div className="bot">
                        <button>Получить расчет</button>
                      </div>
                    </form>
                    <div className="accept">
                      <Image className="img" src={Checkbox} alt="image" />
                      <p>
                        Коммерческое предложение с перечнем работ и материалов
                      </p>
                    </div>
                    <div className="accept">
                      <Image className="img" src={Checkbox} alt="image" />
                      <p>Бесплатный выезд инженера на ваш участок</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot">
                <div className="box">
                  <p>
                    Выдерживают нагрузку в соответствии с "СП 20.13330.2016.
                    Свод правил. Нагрузки и воздействия" и "СП 131.13330.2020.
                    Свод правил. Строительная климатология"
                  </p>
                </div>
                <div className="box">
                  <p>
                    Официальный договор <br />
                    Гарантия 12 месяцев <br /> Оплата наличными / картой / на
                    расчётный счет
                  </p>
                </div>
                <div className="box">
                  <p>
                    Финальная уборка после работы — оставим после себя чистоту
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="about">
            <div className="container">
              <h2>Изготавливаем навесы с 2020 года</h2>
              <p>
                Наша компания уже более 10 лет создает и устанавливает навесы из
                поликарбоната различного назначения в Санкт-Петербурге. За это
                время мы собрали команду настоящих профессионалов, которые
                по-настоящему любят свое дело и получают удовольствие от работы:
                проектировщики, сварщики, кузнецы, монтажники, дизайнеры. <br />{" "}
              </p>
              <p>
                Мы придерживаемся высоких технических и эстетических стандартов
                при разработке каждого проекта, реализуем типовые и
                индивидуальные решения.
              </p>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
