import './index.css'

const Each=props=>{
  const {numberDetails,clickEachItem}=props
  const {number,status,id}=numberDetails

  

  const onclickEachItem=()=>{
    clickEachItem(id,number)
    
  }

  


  const num= status==="InActive"  ? "" : number
  
  return(
    <div className="box" onClick={onclickEachItem}>
      <h1>{num}</h1>
    </div>
  )
}

export default Each
