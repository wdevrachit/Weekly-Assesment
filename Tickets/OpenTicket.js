import React from "react";
class OpenTicket extends React.Component{
    constructor(props){
        super(props);
        this.state={
            desc:""
        }
    }
    colorChange=()=>{
        
    }
    captureDescription=(e)=>{
        e.preventDefault();
        this.setState({desc:e.target.value})
        console.log(this.state.desc);
    }
    render(){
        return(
            <div className="rounded w-50 bg-light m-auto p-2">
                <h1  className="justify-content-center d-flex text-warning">OpenTicket Component</h1>
                {
                    this.props.data.map((item)=>(
                        <div>
                        {
                        item.priority===1?
                        <div className= "bg-info my-1 border border-primary justify-content-center d-flex p-2">
                            <h2 className="mx-4 p-1">{item.id} {item.priority}</h2>
                            <h3>{item.timestamp}</h3>
                            <input placeholder="Enter Description" onChange={this.captureDescription}></input>
                            {
                                this.state.desc===""
                                ?
                                <button onClick={()=>this.props.changeCompletionStatus(item.id,this.state.desc)} 
                                className="btn btn-primary m-1 " disabled>Done</button>
                                :
                                <button onClick={()=>this.props.changeCompletionStatus(item.id,this.state.desc)} 
                                className="btn btn-primary m-1" >Done</button>
                            }
                            {/* <button onClick={()=>this.props.changeCompletionStatus(item.id,this.state.desc)}
                            // className="btn btn-primary m-1 ">Done</button> */}
                            {/* <button onClick={()=>this.props.deleteTask(item.id)} 
                            className="btn btn-primary m-1 ">Trash</button> */}
                        </div>
                        :
                        <div className= "bg-primary my-1 border border-primary justify-content-center d-flex p-2">
                        <h2 className="mx-4 p-1">{item.id} {item.priority}</h2>
                        <h3>{item.timestamp}</h3>
                        <input onChange={this.captureDescription}></input>
                        <button onClick={()=>this.props.changeCompletionStatus(item.id,this.state.desc)} 
                        className="btn btn-primary m-1 ">Done</button>
                        {/* <button onClick={()=>this.props.deleteTask(item.id)} 
                        className="btn btn-primary m-1 ">Trash</button> */}
                        </div>
                        }
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default OpenTicket;