// Start coding here

export default function Alert(props) {
  const severity = props.severity ? props.severity : "";
  return (
    <div className={`alert-box ${severity}`}>
      {<img src={props.icon} />}
      {props.children}
    </div>
  );
}
