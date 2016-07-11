import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $

export var MktModel = Backbone.Model.extend({})

export var MktCollection = Backbone.Collection.extend({
	model: MktModel,

	url: "https://openapi.etsy.com/v2/listings/active.js",
	_key: "b6devysg94wdkfnin8lck4yb",

	parse: function(rawJSON){
		return rawJSON.results
		console.log("rawJSON results", rawJSON.results)
	},

	initialize: function(){

	}

})


export var ItemModel = Backbone.Model.extend({

	url: function(){
		return "https://openapi.etsy.com/v2/listings/" + this.itemId + ".js"	
	}, 

	_key: "b6devysg94wdkfnin8lck4yb",

	parse: function(rawJSON){
		console.log("rawJSON results @ 0", rawJSON.results)
		return rawJSON.results[0]
	}
	
})



