function Input (props){
    return (
        <div>
            <input type={props.typeInput} name={props.nameInput} value={props.valueInput} placeholder={props.placeHolderInput} required/>
        </div>
    );
}
export default Input;