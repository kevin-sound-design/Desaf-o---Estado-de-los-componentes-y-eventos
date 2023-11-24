function SocialButton({icono}){
    return(
        <button className="socialButton">
            <i className={`${icono} icon`} style={{color: "#000000"}}></i>
        </button>
    )
}
export default SocialButton