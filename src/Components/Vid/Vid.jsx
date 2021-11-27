import './Vid.scss';


function Vid(props){
   return(
          <div className='vid'>
              <img width={props.isBig?400:200 } height={props.isBig?200:120} src={props.img} alt="" className="vid__img"/>
              <h4 className="vid__about">{props.title}</h4>
              <span className="vid__stats">40k views  ·  4 months ago</span> 

          </div>
          )
}

export default Vid;