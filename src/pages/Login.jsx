import { NavLink } from "react-router-dom";

function Login() {
    return (
        <>
            <h1 className=''>Log in</h1>
            <p>Profesionales</p>
            <p>Pacientes</p>
            <p>Aún no tienes una cuenta? <NavLink to="/signup">Sign up</NavLink></p>
        </>
    )
}

export default Login;