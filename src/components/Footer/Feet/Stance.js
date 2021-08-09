
import React, { Component } from 'react'

import './css/stance-style.css'






export default class Stance extends Component {
    
    constructor(props) {
        super(props);

        // set state - toggling just in case we want to Accountsize state within the handle_stance function. We can check state and set new states as needed.
        this.state = {
            anyStance: false,
            isToggleOnInventory: false,
            isToggleOnKit: false,
            isToggleOnAccount: false,
            isToggleOnContacts: false,
        }
    }

    // handle_stance checks the selected stance by state, and will display outputs based one whatever is in the stance's respective object. 
    handle_stance = (e) => {

        const stance = (this.props.stance)
        
        e.preventDefault()

        localStorage.setItem('Stance', stance)
        const currentStance = localStorage.getItem('Stance')

        // Displays a sample output in the DOM of the current selected stance. 
        if (currentStance === 'Inventory') {     
            window.location.href ='http://localhost:3000/inventory'
        } 

        if (currentStance === 'Kit') {                
            window.location.href ='http://localhost:3000/kit'
        }

        if (currentStance === 'Accounts') {         
           
            window.location.href ='http://localhost:3000/accounts'
        }
        if (currentStance === 'Contacts') {    
            window.location.href ='http://localhost:3000/contacts'            
        }
    

        // imports the selected_stance.  Might not need to have a toggle system in place, but I like to do both?
        this.props.selected_stance(this.props.stance)
    }

    render() {
        // import whatever props such as this.props.tag here to use below
        const stance = (this.props.stance)
        
        return (
            <div className='stance-container'>            
                <div className='stance-display hidden'>
                </div>       
                <div className='stance-btn-container'>
                    <button className='stance-btn' id={`${stance}-button`} onClick={this.handle_stance}>
                        {stance}
                    </button>
                </div>
            </div>
        )
    }
}
