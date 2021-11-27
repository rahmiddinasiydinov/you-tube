import './Main.scss';
import { Routes, Route } from 'react-router-dom';


//pages
import Navigate from '../Navigation/Navigation';
import Home from '../../Pages/Home/Home';
import Favourite from '../../Pages/Favourite';
import Games from '../../Pages/Games';
import History from '../../Pages/History';
import Library from '../../Pages/Library';
import Liked from '../../Pages/Liked';
import Music from '../../Pages/Music';
import Showmore from '../../Pages/Showmore';
import Subscribe from '../../Pages/Subscribe';
import Trend from '../../Pages/Trending';
import Watch from '../../Pages/Watch';
import Settings from '../../Pages/Settings';
import Channels from '../../Pages/Channel/Channel';
import Video from '../../Pages/Video/Video';




function Main(){
   return(
          <div className='container'>
               <div className="main">
               <div className="main__nav">
                <Navigate/>
               </div>
               <div className="main__pages">
                   <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/trending' element={<Trend/>} />
                        <Route path='/subscription' element={<Subscribe/>} />
                        <Route path='/library' element={<Library/>} />
                        <Route path='/history' element={<History/>} />
                        <Route path='/watch_later' element={<Watch/>} />
                        <Route path='/favourites' element={<Favourite/>} />
                        <Route path='/liked_videos' element={<Liked/>} />
                        <Route path='/music' element={<Music/>} />
                        <Route path='/games' element={<Games/>} />
                        <Route path='/show_more' element={<Showmore/>} />
                        <Route path='/settings' element={<Settings/>} />
                        <Route path='/channels/:id' element={<Channels/>} />
                        <Route path='/videos/:id' element={<Video/>} />
                        

                   </Routes>
               </div>
               </div>
          </div>
          )
}

export default Main;