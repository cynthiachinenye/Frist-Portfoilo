import './Navbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';


export default function Navbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'> cynthia..</a>
          <div className='item-container'>
            <PersonIcon className='icon' />
            <span>+234 8097 407 765</span>
          </div>
          <div className='item-container'>
            <MailIcon className='icon' />
            <span>cynthiachiagu@gmail.com</span>
          </div>

        </div>

        <div className="right">
          <div className='menubar' onClick={()=>setMenuOpen(!menuOpen)}>

            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>

        </div>

      </div>

    </div>
  )
}
