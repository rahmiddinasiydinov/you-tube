import logo from '../../images/logo.svg';
import menu from '../../images/menu.svg';
import video from '../../images/video.svg';
import dots from '../../images/dots.svg';
import bell from '../../images/bell.svg';
import profile from '../../images/profile.png';
import search from '../../images/search.svg';
import './Header.scss';





function Header(){
   return(
          <div className='container'>
              <div className="header">
                  <div className="header__right">
                        <button className="header__menu"><img src={menu} alt="" /></button>
                        <span className="header__logo"><img src={logo} alt="" /></span>
                        <form className="header__input">
                        <input type="text" className="header__search" placeholder='Search'/>
                        <button className = 'header__btn'>
                            <img  src={search} alt="" />
                        </button>
                        </form>
                  </div>
                  <div className="header__left">
                        <img className='left__img' src={video} alt="" />
                        <img className='left__img' src={dots} alt="" />
                        <img className='left__img' src={bell} alt="" />
                        <img className='search' src={search} alt="" />
                        <img className='left__img' src={profile} alt="" />
                  </div>
              </div>
            
          </div>
          )
}

export default Header;