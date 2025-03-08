import './lib/fontawesome/css/all.min.css';
import './App.css';

function Background({children}){
  return (
    <div id='background'>
      {children}
    </div>
  );
}

function Body({children}){
  return (
    <div id='body'>
      {children}
    </div>
  );
}

function Header(){
  return (
    <div id='header'>
      <h3 id='topic'>Todo</h3>
      <div id="add_button_area">
        <button id="add"><i class="fas fa-plus"></i></button>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <Background>
      <Body>
        <Header />
      </Body>
    </Background>
  );
}



