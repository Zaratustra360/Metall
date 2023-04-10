import style from "./Modal.module.sass";

export default function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? `${style.modal} ${style.active}` : style.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${style.modal__content} ${style.modal__content__active}`
            : style.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
