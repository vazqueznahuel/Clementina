import '../../App.css'

function Label(props) {
    return (
    <div>
    <label className={props.className}> {props.infoLabel} </label>
    </div>
    );
    }
    export default Label;