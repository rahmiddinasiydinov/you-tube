
import './Home.scss';
import { NavLink } from 'react-router-dom';
import Vid from '../../Components/Vid/Vid';


//Hooks
import { useState, useEffect } from 'react';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../../node_modules/swiper/swiper-bundle.css';



function Home(){
      let [user, setUser ]= useState([])
      let [user2, setUser2] = useState([])
      let [user3, setUser3] = useState([])
      let [data, setData] = useState([])
      let [recom, setRecom] = useState([])
      let [chan, setChan] = useState([])
      
      let winWidth = window.screen.width;
      //user fetch
      useEffect(()=>{
            fetch(`https://reqres.in/api/users?page=2`)
            .then(res=>res.json())
            .then(data =>{
                  let x= Math.floor(Math.random()*4)
                  setUser(data.data[x])
                  setUser2(data.data[x+2])
                  setUser3(data.data[x+1])
            })
      }, []);
      //data fetch
      useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res=>res.json())
            .then(data=>{
                 
                  let filtered = data.filter(e=> e.albumId===user.id)
                  let filtered2 = data.filter(e=>e.albumId ===user2.id)
                  let filtered3 = data.filter(e=>e.albumId ===user3.id)
                  //user1
                  setData(filtered);
                  //recom
                  setRecom(filtered3);
                  //channel user2
                  setChan(filtered2);
                  
                  
            }) 
            
            
      }, [user, user2, user3])
      
      return(
            <div className ='home'>
            <div className="home__channel-header">
            <div className="home__channel">
            <img className='home__channel-img' src={user.avatar} alt="" />
            <h2 className="home__channel-title">{user.first_name+' '+user.last_name}</h2>         
            </div>
            <div className="home__channel-videos">
            <Swiper
            spaceBetween={50}
            slidesPerView={winWidth>400?5:1}
            loop= {true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
            {
                  data.map(e=>{
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
                  </div>
                  {/* Home recomended */}
                  <div className="home__recom">
                  <h2 className="home__channel-title">Recomended</h2>
                  <div className="home__recom-videos">
                  <Swiper
                  spaceBetween={50}
                  slidesPerView={winWidth>400?3:1}
                  loop= {true}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}
                  >
                  {
                        recom.map(e=>{
                              return(
                                    
                                    <SwiperSlide key={e.id}>
                                    <NavLink className='vid__link' to={`/videos/${e.id}`}><Vid
                                    img = {e.thumbnailUrl}
                                    title ={e.title}
                                    isBig = {true} /></NavLink>
                                    </SwiperSlide>
                                    
                                    )
                              })
                        }
                        </Swiper>
                        </div>
                        
                        </div> 
                        <div className="home__chan">
                    <div className="home__chan-header">
                        <div className="home__chan-user">
                        <div className="home__channel">
                        <img className='home__channel-img' src={user2.avatar} alt="" />
                        <h2 className="home__channel-title">{user2.first_name+' '+user2.last_name}</h2>   
                        <span className="home__chan-text">Recommended channel for you</span>      
                        </div>
                          <button className="home__chan-btn">Subscribe 2.3m</button>
                        </div>
                        </div>

                        <div className="home__chan-videos">
                        <Swiper
                  spaceBetween={50}
                  slidesPerView={winWidth>400?5:1}
                  loop= {true}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}
                  >
                  {
                        chan.map(e=>{
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
                        </div>
                        
                        
                        </div>
                        
                        )
                  }
                  
                  export default Home;