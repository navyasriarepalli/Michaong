import { Component } from "react";


import Cookies from "js-cookie";
import "./index.css";


class InputPage extends Component {
  state = { playerName: "" };

  
  
  onChangePlayerName = (event) => {
    this.setState({ playerName: event.target.value });
  };

  

  onSubmitForm=event=>{
    
    event.preventDefault()
    const { playerName } = this.state;
    Cookies.set("name", playerName);
    console.log(playerName);
    const {history}=this.props
    history.push('/game')

    
    
    

    
    
    
    
  }

  onClickPlay=()=>{
    const {history}=this.props
    history.push('/game')

  }

  renderInput = () => {
    const { playerName } = this.state;
    return (
      <>
        <input
          type="text"
          className="input-cont"
          id="username"
          value={playerName}
          onChange={this.onChangePlayerName}
        />
      </>
    );
  };
  render() {
    
    return (
      <div className="main-cont">
        <h1 className="main-head">React Tiles</h1>
        <div className="mini-main-cont">
          <h1 className="main-head">Enter Your Name</h1>
          <form onSubmit={this.onSubmitForm}>
          <div>{this.renderInput()}</div>
            <button type="submit" className="btn">Play
                
            </button>
          </form>

          
        </div>
      </div>
    );
  }
}
export default InputPage;
