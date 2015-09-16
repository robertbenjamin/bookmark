/*(function() {

angular
	.module('bookmark')
	.config(router)

function router($routeProvider) {
	$routeProvider
	.when("/books", {
		templateUrl: "views/index.html",
		controller: "booksController",
		controllerAs: "vm"
	})
	.when("/books/new", {
		templateUrl: "views/books/new.html",
		controller: "newBookController",
		controllerAs: "vm"
	})
	.when("/books/:id", {
		templateUrl: "views/books/show.html",
		controller: "bookController",
		controllerAs: "vm"
	})
	.when("/books/:id/edit", {
		templateUrl: "views/books/edit.html",
		controller: "editBookController",
		controllerAs: "vm"
	})
	.otherwise({
		redirectTo: "/books"
	})
}

})();*/