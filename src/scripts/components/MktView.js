import React from 'react'
import ReactDOM from 'react-dom'


//passing mvMktColl={this.props.bbMktColl} from AppView into _getMktListing on props

//CollElement is for the forEach... iterating through each element of the array 

//

var MktView = React.createClass({

	_getMktListing: function(collection){
		var mktArr = []

		collection.forEach(function(CollElement, i){
			mktArr.push(<MktListing mvColl={CollElement}/>)
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

	render: function(){
		return (
			<div>
				<div class="introBlock">
					<div class="giantFlower">
						<img src={this.props.mvColl.get('Images')[0].url_570xN} />
					</div>
					<h1 class="introText">Whoever you are, find whatever you are into</h1>
				</div>
			</div>
		)
	}


})





	// _buildTemplate: function(modelArr){
	// 	var htmlStr = ""

	// 	htmlStr += '<div class="introBlock">'
	// 	htmlStr += 		'<div class="giantFlower">'
	// 	htmlStr += 			'<img src="https://s-media-cache-ak0.pinimg.com/564x/d7/d0/b0/d7d0b0652b9ad14e4da2cfc45cd7b90c.jpg" />'
	// 	htmlStr += 		'</div>'
	// 	htmlStr +=		'<h1 class="introText">Whoever you are, find whatever you are into</h1>'
	// 	htmlStr += '</div>'
	
	// 	htmlStr += '<div class="mktContainer align-children">'

	// 	for(var i=0; i<modelArr.length; i++){
	// 		console.log("modelArr", modelArr[i])
	// 		var mArr = modelArr[i]
	// 		console.log("Model Arr", mArr)
			
	// 		htmlStr += '<div class="itemContainer " id='+mArr.get('listing_id')+'>'
	// 		htmlStr += 		'<div class="mktImgContainer">'
	// 		htmlStr +=			'<img class="listingImg" src="' + mArr.get('Images')[0].url_570xN + '">'
	// 		htmlStr += 		'</div>'
			
	// 		htmlStr += 			'<p>' + mArr.get('title') + '</p>'
	// 		htmlStr += 		'<div class="itemInfo">'
	// 		htmlStr += 			'<p class="shopName">' + mArr.attributes.Shop.shop_name + '</p>'
	// 		htmlStr += 			'<p class="price">' + "$" + mArr.get('price') + '</p>'
	// 		htmlStr += 		'</div>'
	// 		htmlStr += '</div>'	

	// 	}

	// 	htmlStr += '</div>'

	// 	return htmlStr

	// }, 








export default MktView 