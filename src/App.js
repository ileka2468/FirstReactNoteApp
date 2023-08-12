import Navbar from './Navbar';
import Notes from './Notes';
import Search from './Search';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="App">
      <div className="content">
        <Sidebar />
        <Search />
        <Navbar />
        <Notes />

      </div>
    </div>
  );
}

export default App;
