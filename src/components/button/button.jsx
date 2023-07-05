function  Button (props){
    return(
    <div>
        <button type={props.typeButton} value={props.valueButton}></button>
    </div>
    );
}
export default Button;