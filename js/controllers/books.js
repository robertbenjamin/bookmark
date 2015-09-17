(function() {

angular
	.module('bookmark')
	.controller('mainController', function($firebaseArray, BookAdder, $rootScope) {
		var vm = this;

		var ref = new Firebase(firebaseURL);
		var data = $firebaseArray(ref);

		vm.books = data;

		vm.add = function(book) {
			vm.books.$add(book)
			vm.book = ""
		}

		$rootScope.$on('newBook', function() {
			vm.add( BookAdder.get() )
		})

	})

})()