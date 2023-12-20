// Start coding here

export default function Alert(props) {
  return (
    <div className={`alert ${props.severity}`}>
      <img src={props.img} />
      <p>{props.children}</p>
    </div>
  );
}
