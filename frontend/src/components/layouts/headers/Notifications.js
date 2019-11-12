import React, {Component} from 'react';


class Notifications extends Component {
     constructor(props){
         super(props);

         this.state= [
        
                       {
                 
                     user: "Jack",
                     type: "connection request",
                     date: new Date,
                     shown: false
                       }
                ]
     }
     
     render(){
         const notificationsCounter= 3;
       return(
        <div >
           Notifications  {notificationsCounter} 
        </div>   
   
        );
    }
}
export default Notifications;