function Input (props){
    return (
        <div>
            <input type={props.typeInput} name={props.nameInput} value={props.valueInput} />
        </div>
    );
}
export default Input;