function  Button (props){
    return(
    <div>
        <button type={props.typeButton} name={props.nameButton} value={props.valueButton}></button>
    </div>
    );
}
export default Button;