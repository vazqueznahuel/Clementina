function Input (props){
    return (
        <div>
            <input type={props.typeInput} name={props.nameInput} value={props.valueInput} placeholder={props.placeHolderInput}/>
        </div>
    );
}
export default Input;