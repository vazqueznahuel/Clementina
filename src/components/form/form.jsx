import Label from '../label/label.jsx'
import Button from '../button/button.jsx'
function Form(props) {
    return (
    <div>
        <form method="POST">
            <Label infoLabel="Ingrese su nombre"/>
            <Button typeButton="submit" nameButton="button-submit" valueButton="hola"/>
        </form>
    </div>
    );
    }
    export default Form;