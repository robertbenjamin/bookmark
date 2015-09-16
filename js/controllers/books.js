(function() {

angular
	.module('bookmark')
	.controller('mainController', function($firebaseArray) {
		var vm = this;

		var ref = new Firebase(firebaseURL);
		var data = $firebaseArray(ref);

		vm.books = data;

		vm.add = function(book) {
			console.log(book)
			vm.books.$add(book)
			vm.book = ""
		}
		
		 // Test code for searching from the Google Books API

		var search = $(".search");
		var submit = $(".submit");
		var searchResults = $(".search-results")

		submit.click(function() {
			searchResults.empty()
			var query = search.val().split(" ").join("+")

			$.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyDLhOKFqmBvr4XXHfoJfQFGevJR7cRekzQ" , function(data) {

				for(i = 0; i < 4; i++) {
					var currentItem = data.items[i].volumeInfo
					searchResults.append( "<h2>Result</h2>")
					searchResults.append( "<input ng-model='vm.book.title' value='" + currentItem.title + "'></input>" )
					searchResults.append( "<input ng-model='vm.book.author value='" + currentItem.authors[0] + "'></input>" )
					searchResults.append( "<img src='" + currentItem.imageLinks.thumbnail + "' ng-click='vm.add(vm.book)'>" )
					searchResults.append( "" )
				}
			})

			console.log(query)
		})

	})

})()