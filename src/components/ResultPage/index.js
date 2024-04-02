import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";

class ResultPage extends Component {
  
  
  render() {
    const player=Cookies.get('name')
    const scoring=Cookies.get('score')
    const timeing=Cookies.get('time')
    let min=""
    let se=timeing
    if(timeing<=60){
      min=0
    }
    else{
      min=Math.floor(timeing/60)
      se=timeing%60

    }
    
    
    console.log(se)

    return (
      <div className="main-cont">
        <h1 className="main-head">React Tiles</h1>
        <div className="mini-cont-first" >
          <p className="para">Welcome {player}</p>
          <div className="mini-main-cont">
          <h1 className="main-head">Game Finished!</h1>
        <p className="spanT"><span className="coloring">Score:</span>  {scoring}</p>
          <p className="spanT"><span className="coloring">Time Taken:</span>  {min} min, {se} sec</p>
        </div>


        </div>
      </div>
    );
  }
}
export default ResultPage;
