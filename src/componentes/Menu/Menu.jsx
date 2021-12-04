import {Link} from "react-router-dom"



const Menu = () => {
    return(
        <ul>
            <li className='lis'>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/Lista">Lista de Tarefas</Link>
            </li>
        </ul>
    )

}

export default Menu 