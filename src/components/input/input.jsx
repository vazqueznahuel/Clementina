import '../../App.css'

function Input (props){
    return (
        <div>
            <input  className={props.className} type={props.typeInput} name={props.nameInput} placeholder={props.placeHolderInput} required/>
        </div>
    );
}
export default Input;