import "./App.css";
import Header from './components/header';


function App() {
    let imgs = [
        'https://source.unsplash.com/gYl-UtwNg_I/1500x1500',
        'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
        'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d',
        'https://source.unsplash.com/ITjiVXcwVng/1500x1500',
        'https://source.unsplash.com/3MNzGlQM7qs/1500x1500'
    ]

  return (
    <div>
        <Header/>
        
        <div className="container-fluid">
            <div className="row m-0 p-0">
                <div className="image-card col-sm-12">
                    <img src={imgs[0]}/>
                    <div class="txt-on-img">HEY</div>
                </div>
                <div className="image-card col-sm-12">
                    <img src={imgs[1]}/>
                    <div class="txt-on-img">LET'S</div>
                </div>
                <div className="image-card col-sm-12">
                    <img src={imgs[2]}/>
                    <div class="txt-on-img">GIVE</div>
                </div>
                <div className="image-card col-sm-12">
                    <img src={imgs[3]}/>
                    <div class="txt-on-img">ALL</div>
                </div>
                <div className="image-card col-sm-12">
                    <img src={imgs[4]}/>
                    <div class="txt-on-img ll">YOU CAN</div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default App;