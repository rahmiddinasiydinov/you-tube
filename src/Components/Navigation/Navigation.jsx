import {NavLink} from 'react-router-dom';
import './Navigation.scss';
import { useState, useEffect } from 'react';

//images

import home from '../../images/home.svg';
import trend from '../../images/trending.svg';
import subscription from '../../images/subscription.svg';
import library from '../../images/library.svg';
import like from '../../images/like.svg';
import history from '../../images/history.svg';
import games from '../../images/games.svg';
import settings from '../../images/settings.svg';
import star from '../../images/star.svg';
import showmore from '../../images/showmore.svg';
import music from '../../images/music.svg';
import clock from '../../images/clock.svg';


function Navigate(){

      const [data, setData] = useState([]);
       


      useEffect(
          ()=>{
              fetch('https://reqres.in/api/users?page=2')
              .then(res=> res.json())
              .then(data => setData(data.data))
          }, []
      )




    return(
        <div className='nav'>
        <div className="nav__menu">
        <NavLink className='nav__link' to='/'><img className='nav__icon' src={home} alt="" /> <span className="nav__text">Home</span></NavLink> 
        <NavLink className='nav__link' to='/trending'><img className='nav__icon' src={trend} alt="" /> <span className="nav__text">Trending</span></NavLink>
        <NavLink className='nav__link' to='/subscription'><img className='nav__icon' src={subscription} alt="" /> <span className="nav__text">Subscription</span></NavLink>
        <NavLink className='nav__link library' to='/library'><img className='nav__icon ' src={library} alt="" /> <span className="nav__text">Library</span></NavLink>
        <NavLink className='nav__link' to='/history'><img className='nav__icon' src={history} alt="" /> <span className="nav__text">History</span></NavLink> 
        <NavLink className='nav__link' to='/watch_later'><img className='nav__icon' src={clock} alt="" /> <span className="nav__text">Watch later</span></NavLink> 
        <NavLink className='nav__link' to='/favourites'><img className='nav__icon' src={star} alt="" /> <span className="nav__text">Favourites</span></NavLink> 
        <NavLink className='nav__link' to='/liked_videos'><img className='nav__icon' src={like} alt="" /> <span className="nav__text">Liked videos</span></NavLink> 
        <NavLink className='nav__link' to='/music'><img className='nav__icon' src={music} alt="" /> <span className="nav__text">Music</span></NavLink> 
        <NavLink className='nav__link' to='/games'><img className='nav__icon' src={games} alt="" /> <span className="nav__text">Games</span></NavLink> 
        <NavLink className='nav__link' to='/show_more'><img className='nav__icon' src={showmore} alt="" /> <span className="nav__text">Show more</span></NavLink> 

        </div>
        <div className="nav__subs">
              <h2 className="subs__title">Subscriptions</h2>
              <div className="channel__list">
                  {
                      data.map(e=>{
                           return(
                              <div key ={e.id} className="channel__link">
                                   <img src={e.avatar} alt="" className="user__avatar" />
                               <NavLink  to={`/channels/${e.id}`} className = 'channel__link-text'>
                                   {e.first_name + ' ' + e.last_name}
                               </NavLink>
                              </div>
                           )
                      })
                  }
              </div>
        </div>


       <NavLink className='nav__link settings' to='/settings'><img className='nav__icon' src={settings} alt="" /> <span className="nav__text">Settings</span></NavLink> 
        
        </div>
        )
    }
    
    export default Navigate;