import './App.css'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import InstagramLikes from './pages/instagram-likes';
import InstagramFollowers from './pages/instagram-followers';
import InstagramReelViews from './pages/instagram-reel-views';
import TiktokViews from './pages/tiktok-views';
import Success from './pages/success';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/success' render={(props) => <Success {...props} />} />
        <Route path='/tiktok-views' render={(props) => <TiktokViews {...props} />} />
        <Route path='/instagram-reel-views' render={(props) => <InstagramReelViews {...props} />} />
        <Route path='/instagram-followers' render={(props) => <InstagramFollowers {...props} />} />
        <Route path='/instagram-likes' render={(props) => <InstagramLikes {...props} />} />
        <Route path='/' render={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  )
}

export default App
