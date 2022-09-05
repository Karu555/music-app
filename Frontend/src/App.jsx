import {Navbar} from "./Components/Navbar";
import { TopSong } from "./Components/TopSong";
import { Song } from "./Components/Song";
import TopArtist from "./Components/TopArtist";
import AddSong from "./Components/AddSong";
import AddArtist from "./Components/AddArtist";
import {Login} from "./Components/Login";
import {Signup} from "./Components/Signup";
import {AllRoutes} from "./routes/AllRoutes"


function App() {
  return (
    <div>
      <Navbar />
     <AllRoutes/>
     {/* <Signup/>
     <Login/> */}

     
    </div>
  );
}

export default App;
