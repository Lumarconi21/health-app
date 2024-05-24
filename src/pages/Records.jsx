import { NavLink } from "react-router-dom";

function Records() {
    return (
        <>
            <p>Mis registros</p>
            <p>Añadir nuevo registro</p>
            <NavLink to="/addrecord"></NavLink>
        </>
    )
}

export default Records;