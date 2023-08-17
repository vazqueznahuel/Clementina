import '../../App.css'

function  Button (props){
    return(
    <div>
        <button className={props.className} type={props.typeButton} name={props.nameButton} value={props.valueButton}>{props.contentButton}</button>
    </div>
    );
}
export default Button;