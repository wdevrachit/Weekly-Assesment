import React from "react";
class ClosedTicket extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="rounded w-50 bg-info m-auto p-2">
                <h1  className="justify-content-center d-flex text-warning">ClosedTicket</h1>
                {
                    this.props.data.map((item)=>(
                        <div  className="my-1 border border-primary justify-content-center d-flex p-2">
                            <h2 className="mx-4 p-1">{item.id} {item.priority}</h2>
                            <h3>{item.timestamp} {item.description}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default ClosedTicket;