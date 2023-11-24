import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa"

function Registro({mensaje, setMensaje}){
    return(
        <div className="registro">
            <h1>Crea una cuenta</h1>
            <div className="registro-socialButtons">
                <SocialButton icono="fa-brands fa-facebook fa-2xl"/>
                <SocialButton icono="fa-brands fa-github fa-2xl"/>
                <SocialButton icono="fa-brands fa-linkedin-in fa-2xl"/>
            </div>
            <h4>O usa tu email para registrarte</h4>
            <Formulario setMensaje={setMensaje}/>
            <Alert mensaje = {mensaje}/>
        </div>
        
    )
}

export default Registro