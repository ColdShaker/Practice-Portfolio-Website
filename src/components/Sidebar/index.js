import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solids-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        {/*Link is from the react routerdom library */}
        <Link className='logo' to ="/">
            <img src ={LogoS} alt="logo" />
            <img src = {LogoSub} class="sub-logo" alt="logo subheader" />
        </Link>
        <nav>
            {/* 'exact' means that the link should only be considered active when the 
            current URL matches exactly to the 'to' string
            */}
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color = "4d4d4e" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar