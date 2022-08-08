import React from "react";
import data from "./data";

import OpenTicket from "./OpenTicket";
import ClosedTicket from "./ClosedTicket";

class Ticket extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:data,
            id:1,
            timestamp:'10:00 am',
            priority:1,
            description:"",
            status:true,
        }
    }
    openTicket=()=>{
        const result = this.state.data.filter((item)=>
        item.status===true)
        console.log(result);
        return result;
        // this.setState({data:result})
    }
    closedTicket=()=>{
        const result = this.state.data.filter((item)=>
        item.status===false)
        console.log(result);
        return result;
        // this.setState({data:result})
    }

    changeCompletionStatus=(itemId,desc)=>{
        const temp=[...this.state.data];
        console.log("temp",temp);
        console.log("desc=",desc);
        let k = temp.find((item)=>
        item.id===itemId);
        console.log("k=",k);
        k.status = false;
        k.description = desc;
        this.setState({data:temp})

    }

    render(){
        // console.log(this.state.data);
        return(
            <div>
                <h1>Hello ticket</h1>
                
                <OpenTicket
                changeCompletionStatus={this.changeCompletionStatus}  
                data = {this.openTicket()}></OpenTicket>
                <ClosedTicket data={this.closedTicket()}></ClosedTicket>
                
            </div>
        )
    }
}
export default Ticket;