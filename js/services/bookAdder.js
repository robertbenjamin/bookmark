(function() {

angular
	.module('bookmark')
	.service('BookAdder', function($rootScope) {
		this.selectedBook = "";
		return {
			get: function () {
					return this.selectedBook;
			},
			set: function(value, list) {
					this.selectedBook = value;
					switch(list) {
							case "wantToRead":
								$rootScope.$broadcast('wantToRead', this.selectedBook)
								break;
							case "reading":
								$rootScope.$broadcast('reading', this.selectedBook)
								break;
							case "read":
								$rootScope.$broadcast('read', this.selectedBook)
								break; 
					}
			}
		}		
	})

})()