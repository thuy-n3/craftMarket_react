import React from 'react'
import ReactDOM from 'react-dom'


var ItemView = React.createClass({

	
	render: function(){
		console.log("ItemView rendering", this.props)
		console.log('rendering from ItemView',this.props.oneItemMod)

		return (
			<div className="itemListingContainer">
				<ItemListing oneItemMod={this.props.oneItemMod} />
			</div>	
		)

	}

})

var ItemListing = React.createClass({



	render: function(){
		console.log('rendering from itemListing', this.props.oneItemMod)
		return (
			<div>
				<div className="itemContainer">
					<div className="imgContainer">
						<img src={this.props.oneItemMod.get('Images')[0].url_570xN} />
					</div>
					<div className="otherpicContainer">
						<img src={this.props.oneItemMod.get('Images')[1].url_170x135} />
						<img src={this.props.oneItemMod.get('Images')[2].url_170x135} />
						<img src={this.props.oneItemMod.get('Images')[3].url_170x135} />
	
					</div>
					<div className="itemDetails">
						<p>{this.props.oneItemMod.get('title')}</p>
						<p>{this.props.oneItemMod.get('description')}</p>
						<p>{this.props.oneItemMod.get('Shop').shop_name}</p>
						<p>{this.props.oneItemMod.get('price')}</p>
						
					</div>
				</div>
			</div>
		)
	}

})





export default ItemView