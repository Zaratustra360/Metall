import { Montserrat } from "@next/font/google";
import Layout from "@/Components/Layout/Layout";
import Carousel from "@/Components/UI/Carousel/Carousel";

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
import Awning1_1 from "@/../public/img/awning1_1.jpg";
import Awning1_2 from "@/../public/img/awning1_2.jpg";
import Awning1_3 from "@/../public/img/awning1_3.jpg";
import Awning1_4 from "@/../public/img/awning1_4.jpg";
import Awning2_1 from "@/../public/img/awning2_1.jpg";
import Awning2_2 from "@/../public/img/awning2_2.jpg";
import Awning3_1 from "@/../public/img/awning3_1.jpg";
import Awning3_2 from "@/../public/img/awning3_2.jpg";
import Awning3_3 from "@/../public/img/awning3_3.jpg";
import Awning3_4 from "@/../public/img/awning3_4.jpg";
import Awning2_3 from "@/../public/img/awning2_3.jpg";
import Man from "@/../public/img/man.png";
import Image from "next/image";
import Whatsapp from "@/../public/img/whatsapp.svg";
import Telegram from "@/../public/img/telegram.svg";
import Vk from "@/../public/img/vk.svg";

import PortfolioDesk from "@/Components/PortfolioDesc/PortfolioDesc";
import YandexMap from "@/Components/YandexMap/YandexMap";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal/Modal";
import axios from "axios";

const montserrat = Montserrat({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  async function sendForm() {
    try {
      await axios.post("https://metall-krovlya-spb.ru/api/send-request", {
        name,
        tel,
        height,
        width,
      });
      setName("");
      setTel("");
      setWidth("");
      setHeight("");
    } catch (error) {
      console.log(`Sending ERROR ${error}`);
    }
  }

  return (
    <div className={montserrat.className}>
      <Modal active={modalActive} setActive={setModalActive}>
        <form
          id="contact-form"
          className="modal"
          method="POST"
          action="send"
          enctype="multipart/form-data"
        >
          <div className="modal__inner">
            <div className="left">
              <h4>Вызвать замерщика</h4>
              <p>
                Оставьте свой номер телефона и имя, мы вам перезвоним и
                договоримся о замере
              </p>
              <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
              <input
                type="text"
                placeholder="Телефон"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required={true}
              />
              <button type="button" onClick={sendForm}>
                Отправить
              </button>
            </div>
            <div className="right">
              <div className="img__box">
                <Image src={Canopy6} alt={"img"} className="img2" />
              </div>
              <Image src={Man} className="man" />
            </div>
          </div>
        </form>
      </Modal>
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
                  <button onClick={() => setModalActive(true)}>
                    Вызвать замерщика
                  </button>
                  <p>Выезжаем в удобное для вас место и время</p>
                </div>

                <div className="right">
                  <div className="form" action="">
                    <h4>Расчет цены за 5 минут</h4>
                    <p className="p1">Заполните форму — мы сразу перезвоним</p>
                    <p className="p2">Укажите габариты навеса</p>
                    <form
                      id="contact-form"
                      className="modal"
                      method="POST"
                      action="send"
                      enctype="multipart/form-data"
                    >
                      <div className="top">
                        <input
                          type="text"
                          placeholder="Ширина"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Высота"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </div>
                      <div className="mid">
                        <input
                          type="text"
                          placeholder="Телефон"
                          value={tel}
                          onChange={(e) => setTel(e.target.value)}
                        />
                      </div>
                      <div className="bot">
                        <button type="button" onClick={sendForm}>
                          Получить расчет
                        </button>
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
                <div id="company" className="box">
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

                <div id="works" className="instance">
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
              <h2 id="works">
                С 2020 года мы изготовили и установили более 200 навесов
              </h2>
              <p className="desk">Вот некоторые из наших работ:</p>
              <div className="portfolio">
                <div className="portfolio__container">
                  <Carousel
                    img1={Awning1_1}
                    img2={Awning1_2}
                    img3={Awning1_3}
                    img4={Awning1_4}
                  />
                  <PortfolioDesk
                    title="Односкатный навес 7 x 7 из сотового поликарбоната"
                    t1="80х80х3мм, 8 шт."
                    t2="80х80х3мм, 2 шт."
                    t3="50х25х2мм, 7 шт."
                    t4="25х25х1,5мм, шаг 50см"
                    t5="Односкатный"
                    t6="Сотовый поликарбонат"
                    t7="На подпятники анкерами к бетонной площадке"
                    tp1="196 000 ₽ • 84 000 ₽"
                    tp2="280 000 ₽"
                    tp3="18 дней • 2 дня"
                  />
                </div>
                <div className="portfolio__container">
                  <Carousel
                    img1={Awning2_1}
                    img2={Awning2_2}
                    img3={Awning2_3}
                  />
                  <PortfolioDesk
                    title="Арочный навес 8 x 10 из сотового поликарбоната"
                    t1="100x100х3 мм, 8 шт."
                    t2="100x100х3 мм, 2 шт."
                    t3="30x30х2 мм, 20 шт"
                    t4="Арочный"
                    t5="Сотовый поликарбонат"
                    t6="белый"
                    t7="На подпятники анкерами к бетонной площадке"
                    tp1="312 900 ₽ • 134 100 ₽"
                    tp2="447 000 ₽"
                    tp3="19 дней • 2 дня"
                  />
                </div>
                <div className="portfolio__container">
                  <Carousel
                    img1={Awning3_1}
                    img2={Awning3_2}
                    img3={Awning3_3}
                    img4={Awning3_4}
                  />
                  <PortfolioDesk
                    title="Двускатный навес 6,8 х 6,6 из металлочерепицы"
                    t1="100х50x3 мм, 8 шт."
                    t2="100х50x3 мм, 2 шт."
                    t3="100х50x3 мм, 7 шт."
                    t4="40х25x2 мм, 20 шт."
                    t5="Двускатный"
                    t6="Металлочерепица"
                    t7="Заглубление в грунт на глубину 1200 мм"
                    tp1="199 500 ₽ • 85 500 ₽"
                    tp2="285 000 ₽"
                    tp3="	17 дней • 2 дня"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="contact">
            <div className="container">
              <h2 id="contacts">Контакты</h2>
              <p className="desc">
                Мы на связи каждый день <br /> с 9:00 до 21:00
              </p>
              <div className="box">
                <div className="map">
                  <YandexMap />
                </div>
                <div className="right">
                  <h5>Телефон:</h5>
                  <div className="tel__block">
                    <a href="tel:+79992385506" className="tel__number">
                      +7 999 238 55 06
                    </a>
                    <Link
                      className="wa__outer"
                      href="https://wa.me/+79992385506"
                    >
                      <Image
                        src={Whatsapp}
                        alt="whatsapp"
                        className="icon"
                        height={15}
                        width={15}
                      />
                      <p>Whatsapp</p>
                    </Link>
                  </div>
                  <div className="social">
                    <a href="https://vk.com/public220165897">
                      <Image
                        src={Vk}
                        alt="vk"
                        className="icon"
                        height={15}
                        width={15}
                      />
                    </a>
                    <a href="https://t.me/LeoFisher360">
                      <Image
                        src={Telegram}
                        className="icon"
                        height={15}
                        width={15}
                        alt="telegram"
                      />
                    </a>
                  </div>
                  <button className="btn" onClick={() => setModalActive(true)}>
                    Обратный звонок
                  </button>
                  <h5>Email:</h5>
                  <a className="mail" href="mailto:metallcrovlya.spb@yandex.ru">
                    metallcrovlya.spb@yandex.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
