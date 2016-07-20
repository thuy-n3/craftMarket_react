import React from 'react'
import ReactDOM from 'react-dom'


//passing mvMktColl={this.props.bbMktColl} from AppView into _getMktListing on props

//CollElement is for the forEach... iterating through each element of the array 

//

var MktView = React.createClass({

	_getMktListing: function(collection){
		var mktArr = []

		collection.forEach(function(CollElement, i){
			mktArr.push(<MktListing key={CollElement.cid} mvColl={CollElement}/>)
		})
		return mktArr

	},


	render: function(){
		console.log("mktView render", this.props)
		return (
			<div className="mktListingContainer">
				{this._getMktListing(this.props.mvMktColl.models)}
			</div>
		)
	}

}) 


var MktListing = React.createClass({

	_navToItem: function(){
		location.hash = '/itemListing/' + this.props.mvColl.get('listing_id')
		
	},


	render: function(){
		// console.log("entire collection", this.props.mvColl)
		return (

			<div>
				<div className="mktContainer align-children">

					<div className="mktImgContainer">
						<img className="mktImg" src={this.props.mvColl.get('Images')[0].url_570xN} onClick={this._navToItem} />

					</div>

					<div className="mktDetails">
						<p>{this.props.mvColl.get('title')}</p>
						<p>{this.props.mvColl.get('Shop').shop_name}</p>
						<p>{this.props.mvColl.get('price')}</p>

					</div>

				</div>	
			</div>
		)
	}

})





export default MktView 