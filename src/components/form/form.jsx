import Label from '../label/label.jsx'
import Button from '../button/button.jsx'
function Form(props) {
    return (
    <div>
        <form method="POST">
            <Label infoLabel="Ingrese su nombre"/>
            <Label infoLabel="Ingrese su Apellido"/>
            <Button typeButton="submit" nameButton="button-submit" valueButton="submit-form" contentButton="Enviar"/>
            <Button typeButton="reset" nameButton="button-reset" valueButton="reset-form" contentButton="Restablecer"/>
        </form>
    </div>
    );
    }
    export default Form;