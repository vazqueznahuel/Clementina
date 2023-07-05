import Label from '../label/label.jsx'
import Button from '../button/button.jsx'
function Form(props) {
    return (
    <div>
        <form method="POST">
            <Label infoLabel="Ingrese su nombre"/>
            <Label infoLabel="Ingrese su Apellido"/>
            <Button typeButton="submit" nameButton="button-submit" valueButton="submit-form" contentButton="Enviar"/>
        </form>
    </div>
    );
    }
    export default Form;