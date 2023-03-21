export default function Button({ children, width }) {
  return (
    <button style={{ width: width }} className="btn1" type={"submit"}>
      {children}
    </button>
  );
}
