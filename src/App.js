import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid">
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
