(function() {

angular
	.module('bookmark')
	.service('BookAdder', function($rootScope) {
		this.selectedBook = "";
		return {
            get: function () {
                return this.selectedBook;
            },
            set: function(value) {
                this.selectedBook = value;
								$rootScope.$broadcast('newBook', this.selectedBook)
            }
        }
	})

})()