
import React, { Component } from 'react'
import './css/stance-style.css'






export default class Stance extends Component {
    
    constructor(props) {
        super(props);

        // set state - toggling just in case we want to utilize state within the handle_stance function. We can check state and set new states as needed.
        this.state = {
            anyStance: false,
            isToggleOnOffense: false,
            isToggleOnDefense: false,
            isToggleOnUtility: false,
            isToggleOnRolePlay: false,
        }
    }

    // handle_stance checks the selected stance by state, and will display outputs based one whatever is in the stance's respective object. 
    handle_stance = (e) => {

        const stance = (this.props.stance)
     
        e.preventDefault()

        localStorage.setItem('Stance', stance)
        const currentStance = localStorage.getItem('Stance')

        // Displays a sample output in the DOM of the current selected stance. 
        if (currentStance === 'Atk') {
            console.log('Atk')
        } 

        if (currentStance === 'Def') {
            console.log('Def')
        }

        if (currentStance === 'Util') {
            console.log('Util')
        }

        if (currentStance === 'RP') {
            console.log('RP')
            const roleplayAnswers = document.getElementById('roleplay-answers')
            roleplayAnswers.classList.remove('hidden')
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
