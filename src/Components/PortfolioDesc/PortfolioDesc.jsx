import style from "./PortfolioDesc.module.sass";

export default function PortfolioDesk(props) {
  const { t1, t2, t3, t4, t5, t6, t7, tp1, tp2, tp3, title } = props;
  return (
    <>
      <div className={style.right}>
        <h3>{title}</h3>
        <p className={style.title}>Характерстики</p>
        <div className={style.details}>
          <div className={style.row}>
            <div className={style.text}>Металлические столбы</div>
            <div className={style.text}> {t1}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>Силовые боковые балки</div>
            <div className={style.text}>{t2}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>Металлические фермы</div>
            <div className={style.text}> {t3}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>Обрешетка (лаги)</div>
            <div className={style.text}> {t4}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>Форма крыши</div>
            <div className={style.text}> {t5}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>Материал кровли</div>
            <div className={style.text}> {t6}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>Монтаж к земле</div>
            <div className={style.text}>{t7}</div>
          </div>
        </div>
        <div className={style.price}>
          <p className={style.title}>Цена и сроки</p>
          <div className={style.row}>
            <div className={style.text}>Материалы • Работа</div>
            <div className={style.text}> {tp1}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>Итого</div>
            <div className={style.text}> {tp2}</div>
          </div>
          <div className={style.row}>
            <div className={style.text}>Изготовление • Установка</div>
            <div className={style.text}> {tp3}</div>
          </div>
        </div>
      </div>
    </>
  );
}
