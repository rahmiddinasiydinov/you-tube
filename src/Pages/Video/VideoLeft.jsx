//tools
import './Video.scss';


// pictures
import dots from '../../images/3dots.svg';
import like from '../../images/like2.svg';
import dislike from '../../images/dislike.svg';
import share from '../../images/share.svg'


function VideoLeft(props){

 

   return(
          <div className='videoL'>
                <div className="videoL__video">
                <img src={props.url} alt="" className="videoL__img" />
                <div className="videoL__header">
                    <h2 className="videoL__title">{props.title}</h2>
                    <span className= 'videoL__view'>123k views</span>
                    <ul className="videoL__stats">
                        <li className="stat"> <img src={like} alt="" className="stat__img" />123k</li>
                        <li className="stat"> <img src={dislike} alt="" className="stat__img" />435k</li>
                        <li className="stat"> <img src={share} alt="" className="stat__img" />Share</li>
                        <li className='stat'> <img src={dots} alt="" className="stat__img" /></li>
                    </ul>
                </div>
                    
                    <div className="videoL__channel">
                        <img className = 'videoL__user' src={props.avatar} alt="" />
                        <div className="videoL__content">
                            <h3 className="videoL__subtitle">{props.first_name+' '+props.last_name}</h3>
                            <span className="videoL__date">Published on 14 Jun 2019</span>
                            <p className="videoL__text">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                        </div>
                        <button className="videoL__btn">Subscribe 2.3m</button>
                    </div>

                </div>

            
          </div>
          )
}


export default VideoLeft;