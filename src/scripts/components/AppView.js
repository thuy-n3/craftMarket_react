import React from 'react'
import ReactDOM from 'react-dom'

import MktView from './MktView.js'


//passed in from app.js bbMktColl={mktColl}/> to MktView 
//it is passed into MktView on to the props as mvMktColl 

var AppView = React.createClass({

	render: function(){
		console.log("AppView", this.props)

		return (
			<div>
				<div>
					{/* <h1>hi this is react view </h1>*/}

					<MktView mvMktColl={this.props.bbMktColl} />
					{/*<ItemView />
					<SearchView />*/}

				</div>				
			</div>
		)
	}
})



export default AppView