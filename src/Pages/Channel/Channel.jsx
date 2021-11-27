
import {useParams, NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';

  
// Import Swiper styles
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../../node_modules/swiper/swiper-bundle.css';


//local pages
import './Channel.scss';
import channelBack from '../../images/channel.png';
import bell from '../../images/bell2.svg';
import VideosCh from './Videos';
import ChannelsCh from './Channels2';
import Playlists from './Playlists';
import Discussion from './Discussion';
import About from './About';
import search from '../../images/search.svg'
import HomeCh from './Channel__home/HomeCh';
import Vid from '../../Components/Vid/Vid';

//COMPONENT

function Channels(){

   let winWidth = window.screen.width
   //remove class
    let links = document.querySelectorAll('.channel__sub-link')
    links = [...links]
  
    function removeClass(arr){
       arr.forEach(element => {
          element.classList.remove('active')
       });
    }

   

   // bringing  proper channel
    let {id} =useParams();
    id = Number(id);
    let [channel, setChannel] = useState([]);
    useEffect(()=>{
         fetch(`https://reqres.in/api/users?page=2`)
         .then(res => res.json())
         .then(data =>{
           let arr = data.data;
           let found = arr.filter(e=>e.id===id);
           setChannel(...found);
           
         })
    },[id]);
   //  bringing proper video sources
   let [source , setSource]= useState([])
     useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/photos')
       .then(res=>res.json())
       .then(data=>{
           let filtered = data.filter(e=> e.albumId === id)
         setSource(filtered)
       })
     }, [id])


      //handmade Route
       let x = Math.floor(Math.random()*source.length);
      let Home = []
      if(source[x]!==undefined){
        Home = <HomeCh
        id = {source[x].id}
        title = {source[x].title}
        url = {source[x].url}
        />
      }
          
      
  let Components = [
  Home,
   <VideosCh/>,<Playlists/>, <ChannelsCh/>, <Discussion/>, <About/>]
  let [section, setSection] = useState(0);


  //recommended Channels
     const [recom, setRecom] = useState([])

     useEffect(()=>{
       fetch('https://reqres.in/api/users?page=2')
       .then(res=>res.json())
       .then(data => setRecom(data.data))
     },[])







     //rendering channel videos

    return(
          <div className='channel'>
            <img src={channelBack} alt="" className="channel__img" />
            <div className="channel__header">
             <div className="channel__info">
             <img className='channel__avatar' src={channel.avatar} alt="" />
              <span className="channel__stat">
              <h2 className='channel__title'>{channel.first_name + ' ' +channel.last_name}</h2>
              <span className="channel__users">245K subscribed</span>
              </span>
             </div>
             <div className="channel__subs">
               <img className='channel__bell' src={bell} alt="" />
               <button className='channel__btn'>Subscribe 2.3m</button>
             </div>
            </div>
            <main className="channel__main">
                <div className="channel__video">
                  <div className="channel__links">
                  </div>
                   
                    <div className="channel__main-info">
                        <div className="channel__link-list">
                           <span className="channel__sub-link" onClick = {(e)=>{
                             removeClass(links)
                             e.target.classList.add('active'); setSection(0) 
                           }}>Home</span>
                           <span className="channel__sub-link" onClick = {(e)=>{
                             removeClass(links)

                             e.target.classList.add('active'); setSection(1) 
                           }}>Videos</span>
                           <span className="channel__sub-link" onClick = {(e)=>{
                             removeClass(links)

                             e.target.classList.add('active'); setSection(2) 
                           }}>Playlists</span>
                           <span className="channel__sub-link" onClick = {(e)=>{
                             removeClass(links)

                             e.target.classList.add('active'); setSection(3) 
                           }}>Channels</span>
                           <span className="channel__sub-link" onClick = {(e)=>{
                             removeClass(links)

                             e.target.classList.add('active'); setSection(4) 
                           }}>Discussion</span>
                           <span className="channel__sub-link" onClick = {(e)=>{
                             removeClass(links)

                             e.target.classList.add('active'); setSection(5) 
                           }}>About</span>
                           <button className="channel__sub-link search__btn"><img src={search} alt="" /></button>
                        </div>
                          <div className="channel__section">{Components[section]}</div>
                    </div>
                  
                  
                  </div>
                <div className="channel__recommend">
                  <h1 className="recommend">Recomended channels</h1>
                  <div className="recommend__wrapper">
                       {
                         recom.map(e=>{
                          return(
                            <div key ={e.id} className="recommend__link">
                                 <img src={e.avatar} alt="" className="recommend__avatar" />
                             <NavLink  to={`/channels/${e.id}`} className = 'recommend__link-text'>
                                 {e.first_name + ' ' + e.last_name}
                             </NavLink>
                            </div>
                         )
                         })
                       }
                  </div>

                </div>
            </main>
            <footer className='channel__footer'>
              <h3 className="channel__footer-title">{channel.first_name + " "+ channel.last_name} videos</h3>
                       <div className="channel__footer-videos">
                       <Swiper className = 'swiper'
      spaceBetween={50}
      slidesPerView={winWidth>400?4:1}
      loop= {true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
     
      {
        source.map(e=>{
          return(
       
            <SwiperSlide key={e.id}>
              <NavLink className='vid__link' to={`/videos/${e.id}`}><Vid
              img = {e.thumbnailUrl}
              title ={e.title}
              isBig = {false} /></NavLink>
              </SwiperSlide>

          )
        })
      }


    </Swiper>
                       </div>
            </footer>
             
          </div>
          )
}

export default Channels;