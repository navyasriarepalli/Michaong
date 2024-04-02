import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from "js-cookie";
import Each from '../Each'
import './index.css'

const initialNumberList=[{number:12,id:1,status:"InActive"},{number:13,id:2,status:"InActive"},{number:10,id:3,status:"InActive"},{number:9,id:4,status:"InActive"},{number:15,id:5,status:"InActive"},{number:8,id:6,status:"InActive"},{number:14,id:7,status:"InActive"},{number:16,id:8,status:"InActive"},{number:4,id:9,status:"InActive"},{number:3,id:10,status:"InActive"},{number:5,id:11,status:"InActive"},{number:1,id:12,status:"InActive"},{number:2,id:13,status:"InActive"},{number:7,id:14, status:"InActive" },{number:11,id:15,status:"InActive"},{number:2,id:16,status:"InActive"},{number:13,id:17,status:"InActive"},{number:1,id:18,status:"InActive"},{number:9,id:19,status:"InActive"},{number:15,id:20,status:"InActive"},{number:8,id:21,status:"InActive"},{number:14,id:22,status:"InActive"},{number:11,id:23,status:"InActive"},{number:4,id:24,status:"InActive"},{number:3,id:25,status:"InActive"},{number:5,id:26,status:"InActive"},{number:10,id:27,status:"InActive"},{number:6,id:28,status:"InActive"},{number:12,id:29,status:"InActive"},{number:7,id:30,status:"InActive"},{number:16,id:31,status:"InActive"},{number:6,id:32,status:"InActive"}]

class Game extends Component{
  state={
    
    number_list:initialNumberList,
    time:0,
    
    count:0,
    score:0,
    
    inc:0,
    
  }

  componentDidMount(){
    this.timerId=setInterval(this.tick,1000)
    
  }
  componentWillUnmount(){
    
    clearInterval(this.timerId)
    const {history}=this.props
    
    history.push('/result')
    
  }

  
  
  

  clickEachItem=(id,number)=>{
    const {main,inc}=this.state
    this.setState({main:main+1,inc:inc+1})
    
    this.setState(prevState => ({
      number_list: prevState.number_list.map(each=> {
        if (id === each.id) {
          each.status = "Active"
          
      
      
          return {...each, status:"Active",second_number:each.number}
        }
        return each
      })
      }) ,)
    const {count,score}=this.state
    if(count===0){
      this.setState({count:number})
    }
    else if(count!==0) {
      if(count===number){
        this.setState({score:score+1})
        this.setState({count:0})
      }
      else if (count!==number  && score!==0){
        this.setState({score:score-1})
        this.setState({count:0})
        
      }
      
      
    }
    if(inc===31){
      this.componentWillUnmount()
    }
    
    


    

  
    
    
  }

  

  tick=()=>{
    const {time}=this.state
    
    this.setState({time:time+1})

    
    
  }
  mainGameList=()=>{
    const {number_list}=this.state
    return(
      <ul className="list-items">
        {number_list.map(number=>(
        <Each numberDetails={number} key={number.id} clickEachItem={this.clickEachItem} />
        ))}
      </ul>
      



    )

  }

  onClickBtn=event=>{
    const {score,time}=this.state 

    Cookies.set('score',score)
    Cookies.set('time',time)

    const {history}=this.props

    history.push('/result')

    
  }
  
  render(){
    const {time,score,inc}=this.state
    let Name=Cookies.get('name')
    if( inc===31 ){
      
        <Redirect to="/result"/>
        
      }
      
    
    

  
    

    
    
    
    
    return(
      <div className="main-cont">
        <h1 className="main-head">Mahajong Game</h1>
        <div className="space" >
        <p className="naming" >Score:{score}</p>
        <p className="naming">Time: {time} sec</p>
        </div>
        <div className="mini-cont-first" >
          <p className="game-para">Welcome {Name}   </p>
          <div>
            {this.mainGameList()}
          
          </div>
          <button className="btn" onClick={this.onClickBtn}>Game Over</button>
          


        </div>
      </div>
    )
  }
}

export default Game