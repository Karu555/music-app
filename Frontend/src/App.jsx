import {Navbar} from "./Components/Navbar";
import { TopSong } from "./Components/TopSong";
import { Song } from "./Components/Song";
import TopArtist from "./Components/TopArtist";
import AddSong from "./Components/AddSong";
import AddArtist from "./Components/AddArtist";
import {Login} from "./Components/Login";
import {Signup} from "./Components/Signup";


function App() {
  return (
    <div>
      <Navbar />
      <TopSong />
      <Song />
      <TopArtist />
      <AddSong  />
      <AddArtist />
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
