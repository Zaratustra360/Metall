import { Montserrat } from "@next/font/google";
import Layout from "@/Components/Layout/Layout";
import Carousel from "@/Components/UI/Carousel/Carousel";

import Button from "@/Components/UI/Button/Button";
import Checkbox from "@/../public/img/checkbox.svg";
import Muscles from "@/../public/img/muscles.svg";
import Contract from "@/../public/img/contract.svg";
import Broom from "@/../public/img/broom.svg";
import Canopy1 from "@/../public/img/canopy1.jpeg";
import Canopy2 from "@/../public/img/canopy2.jpeg";
import Canopy3 from "@/../public/img/canopy3.jpeg";
import Canopy4 from "@/../public/img/canopy4.jpeg";
import Canopy5 from "@/../public/img/canopy5.jpeg";
import Canopy6 from "@/../public/img/canopy6.jpeg";
import Canopy7 from "@/../public/img/canopy7.jpeg";
import Canopy8 from "@/../public/img/canopy8.jpeg";
import Canopy9 from "@/../public/img/canopy9.jpeg";
import Canopy10 from "@/../public/img/canopy10.jpeg";
import Canopy11 from "@/../public/img/canopy11.jpeg";
import Canopy12 from "@/../public/img/canopy12.jpeg";
import Image from "next/image";
import { Head } from "next/document";

const montserrat = Montserrat({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={montserrat.className}>
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
                  <div className="flag">
                    <Image
                      className="icon"
                      src={Muscles}
                      alt="image"
                      draggable={false}
                    />
                  </div>
                  <p>
                    Выдерживают нагрузку в соответствии с "СП 20.13330.2016.
                    Свод правил. Нагрузки и воздействия" и "СП 131.13330.2020.
                    Свод правил. Строительная климатология"
                  </p>
                </div>
                <div className="box">
                  <div className="flag">
                    <Image
                      className="icon"
                      src={Contract}
                      alt="image"
                      draggable={false}
                    />
                  </div>
                  <p>
                    Официальный договор <br />
                    Гарантия 12 месяцев <br /> Оплата наличными / картой / на
                    расчётный счет
                  </p>
                </div>
                <div className="box">
                  <div className="flag">
                    <Image
                      className="icon"
                      src={Broom}
                      alt="image"
                      draggable={false}
                    />
                  </div>
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
          <div className="catalog">
            <div className="container">
              <h2>Производим навесы для частных лиц и компаний</h2>
              <div className="box">
                <div className="instance">
                  <h3>Арочные навеcы</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy1}
                    alt={"image"}
                  />
                  <p>от 4500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Двускатные навесы</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy2}
                    alt={"image"}
                  />
                  <p>от 4500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Двухуровневые навесы</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy3}
                    alt={"image"}
                  />
                  <p>от 4500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Навесы для авто</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy4}
                    alt={"image"}
                  />
                  <p>от 3300 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Навесы для бассейнов</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy5}
                    alt={"image"}
                  />
                  <p>от 3300 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Навесы для беседок</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy6}
                    alt={"image"}
                  />
                  <p>от 3500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Навесы для зоны отдыха</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy7}
                    alt={"image"}
                  />
                  <p>от 3500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Навесы для летней кухни</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy8}
                    alt={"image"}
                  />
                  <p>от 3500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Навесы для печей-барбекю</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy9}
                    alt={"image"}
                  />
                  <p>от 3500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Козырьки из поликарбоната</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy10}
                    alt={"image"}
                  />
                  <p>от 3500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Навесы для террас</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy11}
                    alt={"image"}
                  />
                  <p>от 3500 руб. за м2</p>
                </div>

                <div className="instance">
                  <h3>Каркасы</h3>
                  <Image
                    draggable={false}
                    className="img"
                    src={Canopy12}
                    alt={"image"}
                  />
                  <p>от 3500 руб. за м2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="case">
            <div className="container">
              <h2>С 2020 года мы изготовили и установили более 200 навесов</h2>
              <p>Вот некоторые из наших работ:</p>
              <div className="portfolio">
                <Carousel />
                <h2>Размер:</h2>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
