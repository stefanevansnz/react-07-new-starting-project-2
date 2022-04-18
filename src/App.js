import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';

function App() {
  return <div>
    <Switch>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetups'>
        <NewMeetupsPage />
      </Route>
      <Route path='/favourites'>
        <FavouritesPage />
      </Route>
    </Switch>    
  </div>;
}

export default App;
