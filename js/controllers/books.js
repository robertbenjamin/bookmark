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

	})

})()