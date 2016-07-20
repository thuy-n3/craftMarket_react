import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $

import AppView from './components/AppView.js'
import {MktCollection,ItemModel} from './models/etsyModels.js'


var AppRouter = Backbone.Router.extend({
	routes: {
		'itemListing/:listing_id':'showItemView',
		'search/:searchInput':"showSearchView",
		"market":"showMktView",
		'*default':'reDirectToMkt'
		
	},

	reDirectToMkt: function(){
		location.hash = 'market'
	}, 

	// showSearchView: function(searchInput){

	// 	var searchCollection = new MktCollection()
	// 		console.log("searchCollection", searchCollection)

	// 		searchCollection.fetch({
	// 			dataType: 'jsonp', 
	// 			data: {
	// 				api_key: searchCollection._key,
	// 				includes: 'Images,Shop',
	// 				keywords: searchInput
	// 			}
	// 		}).then(function(responseData){
	// 			console.log(searchCollection.url)
	// 			console.log("searchViewData", responseData)

	// 			ReactDOM.render(<AppView />, document.querySelector('.container'))

	// 		})
	// },

	// showItemView: function(itemId){

	// 	var singleItemView = new ItemModel(itemId)

	// 	singleItemModel.fetch({
	// 		dataType: 'jsonp',
	// 		data: {
	// 			includes: 'Images,Shop',
	// 			api_key: singleItemModel._key,
	// 			listing_id: itemId
	// 		}
	// 	}).then(function(){
	// 		console.log("singleItemURL", singleItemModel.url)
	// 		console.log("singleItemModel", singleItemModel)

	// 		ReactDOM.render(<AppView />, document.querySelector('.container'))


	// 	})
	// }, 

	showMktView: function(){

		var mktColl = new MktCollection()
		console.log("mktColl in showMktView in Router", mktColl)

		mktColl.fetch({
			dataType: 'jsonp',
			data: {
				includes: 'Images,Shop',
				api_key: mktColl._key
			}
		}).then(function(d){

			ReactDOM.render(<AppView bbMktColl={mktColl} currentRoute="mkt"/>, document.querySelector('.container'))

		})

		
	},

	showItemView: function(listing_id){

		var itemMod = new ItemModel(listing_id)
		// console.log("itemMod in showItemView in Router", itemMod)
		itemMod.fetch({
			dataType: 'jsonp', 
			data: {
				includes: 'Images,Shop',
				api_key: itemMod._key
			}
		}).then(function(d){
			console.log('fetched data', d)
			ReactDOM.render(<AppView bbItemMod={itemMod} currentRoute='item'/>, document.querySelector('.container'))
		})

	},

	showSearchView: function(searchInput){

		var searchColl = new MktCollection()


		searchColl.fetch({
			dataType: 'jsonp',
			data: {
				includes: 'Images,Shop',
				api_key: searchColl._key,
				keywords: searchInput
			}
		}).then(function(d){
			console.log('fetched data - showSearchView', d)

			ReactDOM.render(<AppView bbSearchColl={searchColl} currentRoute='search'/>, document.querySelector('.container'))

		})


	},

	initialize: function(){
		
	
		Backbone.history.start()
	},

	

})


new AppRouter()
