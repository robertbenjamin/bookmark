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
					for(var i = 0; i < 7; i++) {
						var currentItem = response.data.items[i].volumeInfo
						vm.searchResults.push({title: currentItem.title, 
																	 author: currentItem.authors[0]})
					}
					$(".search-form").val("")
			})
		}

		vm.wantToRead = function(result) {
			vm.searchResults = [];
			BookAdder.set(result, "wantToRead")
		}
		vm.reading = function(result) {
			vm.searchResults = [];
			BookAdder.set(result, "reading")
		}
		vm.read = function(result) {
			vm.searchResults = [];
			BookAdder.set(result, "read")
		}
	})

})()