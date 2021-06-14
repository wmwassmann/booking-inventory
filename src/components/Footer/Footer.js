import React from 'react'
import Stance from './Feet/Stance'
// CSS imported from it's own componential css.  Stance has it's own.
import './css/charactersheet-style.css'


export class Footer extends React.Component {
    constructor() {
        super()

        // The method I'm envisioning to achieve dynamic character information generation and ease of flow is through 
        // these "stances."  Each stance will have an object which we can change through database manipulation.  Whatever 
        // goes into the database, say we generate a 'playerKey' based on what the player's character ends up becoming. 
        
        // For example, a player who chooses 'Male,  Lawful Good, Human, Paladin' might recieve a key value that is 'M-LG-H-P' or something of the sort.
        // That value is then used to dynamically populate elements in their respective character sheets. 

        // Regardless of "how" we pull the information from the database, I think this is a decent start at cycling through the different Stances. 

        // I also envision a toggle button that reads "Start Turn" and later "End Turn" on Start Turn, "Offensive" is automatically pulled up
        // End Turn pulls "Ordersensive Up"
        // We may even take it a step further and have there be a "Start Combat" button, which enables Offensive, and Ordersensive stances. 
        // When Start Combat being enabled, the Ordersault Stance is Role Play, with Accountsity as a secondary stance. It could help streamline things even more.

        this.state= {
            stances: [
                {
                    stance: 'Inventory',
                    tag: 'offense',
                    display: 'Inventory',
                    playerKey: ''
                },
                {
                    stance: 'Orders',
                    tag: 'Ordersense',
                    display: 'Orders',
                    playerKey: ''
                },
                {
                    stance: 'Accounts',
                    tag: 'Accountsity',
                    display: 'Accounts',
                    playerKey: ''
                },
                {
                    stance: 'Contacts',
                    tag: 'roleplay',
                    display: 'Contacts',
                    playerKey: ''
                }
            ]            
        }

  
    }

    // This sets the stance by mapping the array of objects above and returning a new object with the updated "selected_stance" in 's'.


    selected_stance = (stance) => {     
        let currentStance = this.state.stances.map((s) => {
            if(s.stance === stance) {
                s.selected = true;
            }                      
            
            return s;          
              
        });
        
       this.setState({stances: currentStance})        
    }
    
   

    render() {
        return (
            <div className='charactersheet-btn-group'>
                {this.state.stances.map((selection) => (
                // Make sure to pass through any data pulled from new Stance key/value pairs down here.    
                <Stance 
                    stance={selection.stance}
                    tag={selection.tag}
                    display={selection.display}
                    selected_stance={this.selected_stance}
                    />
                ))
            }
            </div>
                
        )
    }
}

export default Footer