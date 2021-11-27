import './HomeCh.scss'
import { NavLink } from 'react-router-dom';
function HomeCh(props){
   return(
          <div className='channel__home'> 
          <NavLink to={`/videos/${props.id}`} className="channel__home-img-wrapper"><img width='450' height='200' className='channel__home-img' src={props.url} alt="" /></NavLink>
            <div className="channel__home-info">
            <h1 className='channel__home-title'>{props.title}</h1>
            <p className="channel__home-text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups.</p>
            <span className="channel__home-stats">11k views  ·  6 months ago</span>
            </div>
          </div>
          )
}

export default HomeCh;