// tools
import './Video.scss';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Vid from '../../Components/Vid/Vid';
import { NavLink } from 'react-router-dom';

//pages
import VideoLeft from './VideoLeft';






function Video(){
    let {id}= useParams();
    id = Number(id)

    let [found, setFound] = useState([])
    let [user, setUser] = useState([])
    let [next, setNext] = useState([])



   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/photos')
       .then(res => res.json())
       .then(data=>{
           let found = data.find(e=>e.id === id)
           setFound(found)
           let userId = found.albumId;
           {
               fetch(`https://reqres.in/api/users?page=2`)
           .then(res => res.json())
           .then(data=>{
               let found =data.data.find(e=>e.id === userId)
               setUser(found)
           })
           }
         
       })
   }, [id])

   //next section
   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/photos')
       .then(res=>res.json())
       .then(data=>{
           let filtered = data.filter(e=>e.albumId ===user.id )
           setNext(filtered)
       })

   }, [user])
   return(
          <div className='video'>
             <div className="video__left">
                 <VideoLeft 
                 url = {found.url}
                 title = {found.title}
                 avatar = {user.avatar}
                 first_name = {user.first_name}
                 last_name = {user.last_name}
                 id= {id}/>
             </div>
             <div className="video__right">
                 <h4 className="next__title">Next</h4>
                 <div className="next__wrapper">
                 {next.map(e=>{
                    
                    return  <div className="next__video" key = {e.id}> 
                        <NavLink className='vid__link' to={`/videos/${e.id}`}><Vid
                              img = {e.thumbnailUrl}
                              title ={e.title}
                              isBig = {false} /></NavLink>
                    </div>
                })}
                 </div>
             </div>
          </div>
          )
}

export default Video;