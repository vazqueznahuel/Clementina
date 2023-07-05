import Label from '../label/label.jsx'
import Button from '../button/button.jsx'
import Input from '../input/input.jsx'
function Form(props) {
    return (
    <div>
        <form method="POST">
            <Label infoLabel="Ingrese su nombre"/>
            <Input typeInput="text" nameInput="Name-User" placeHolderInput="Lionel" />
            <Label infoLabel="Ingrese su Apellido"/>
            <Input typeInput="text" nameInput="LastName-User" placeHolderInput="Messi" />
            <Button typeButton="submit" nameButton="button-submit" valueButton="submit-form" contentButton="Enviar"/>
            <Button typeButton="reset" nameButton="button-reset" valueButton="reset-form" contentButton="Restablecer"/>
        </form>
    </div>
    );
    }
    export default Form;