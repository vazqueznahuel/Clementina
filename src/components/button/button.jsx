export function Adrianvazquez(props) {
    return (
        <div className="button">
        <button style={
            {
                backgroundColor: props.colorfondo,
                fontFamily: props.fuente,
            }}>
            {props.textoBoton}
        </button>
            <p> {props.textP} </p>
        </div>
    )
  }