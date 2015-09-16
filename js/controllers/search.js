(function() {

angular
	.module('bookmark')
	.controller('searchController', function($http) {
		var vm = this;

		vm.search = function(searchTerm) {
			var query = searchTerm.split(" ").join("+")

			$.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyDLhOKFqmBvr4XXHfoJfQFGevJR7cRekzQ" , function(data) {
				vm.searchResults = [];
				for(i = 0; i < 4; i++) {
					var currentItem = data.items[i].volumeInfo
					vm.searchResults.push({title: currentItem.title, 
																 author: currentItem.authors[0]})
					console.log(vm.searchResults)
				}

			})
		}

		vm.add = function(result) {
			console.log(result)
			vm.searchResults = [];
			return result
		}	
	})

})()