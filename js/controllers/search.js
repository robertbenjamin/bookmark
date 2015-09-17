(function() {

angular
	.module('bookmark')
	.controller('searchController', function($http, BookAdder) {
		var vm = this;
		vm.searchResults = [];

		vm.search = function(searchTerm) {
			var query = searchTerm.split(" ").join("+")

			$http.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyDLhOKFqmBvr4XXHfoJfQFGevJR7cRekzQ")
				.then(function(response) {
					vm.searchResults = [];
					for(var i = 0; i < 4; i++) {
						var currentItem = response.data.items[i].volumeInfo
						vm.searchResults.push({title: currentItem.title, 
																	 author: currentItem.authors[0]})
					}
					$(".search-form").val("")
			})
		}

		vm.add = function(result) {
			vm.searchResults = [];
			BookAdder.set(result)
		}	
	})

})()