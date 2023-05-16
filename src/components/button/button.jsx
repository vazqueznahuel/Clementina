export function Button(props) {
    return (
        <div className="button">
        <button style={
            {
                backgroundColor: props.bgColor,
            }
        }>{props.text}</button>
        </div>
    )
  }
  