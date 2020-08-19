import React from "react";
import {Link} from 'react-router-dom'


class ThankYouPage extends React.Component {
    render(){
      return(
       <div>
           <p>ciao grazie per l'acquisto bell'acquisto</p>
            <Link to="/">
                torna alla home 
            </Link>
       </div>
       
       
      )
    }
  }
  
  
  export default ThankYouPage