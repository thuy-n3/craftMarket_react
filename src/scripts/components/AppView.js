import React from 'react'
import ReactDOM from 'react-dom'

import MktView from './MktView.js'
import ItemView from './ItemVIew.js'


//passed in from app.js bbMktColl={mktColl}/> to MktView 
//it is passed into MktView on to the props as mvMktColl 

var AppView = React.createClass({



	render: function(){
		console.log("AppView", this.props)
		var theViewJSX = <p>...no page for that route </p>

		if (this.props.currentRoute === 'mkt') { 
			theViewJSX = <MktView mvMktColl={this.props.bbMktColl} /> 
		}

		if (this.props.currentRoute === 'item') { 
			theViewJSX = <ItemView oneItemMod={this.props.bbItemMod} />
		}

		return (
			<div>
				<div>
					{/* <h1>hi this is react view </h1>*/}
					
					{theViewJSX}
					

					{/*<SearchView />*/}

				</div>				
			</div>
		)
	}
})

//you can't have two routes returning in the render function at the same time. 
//theViewJSX will only pass the collection or model to the props will that route is access 


export default AppView

	{/*<Header />   need to make header component */}

