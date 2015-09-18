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
								console.log("want to read")
								break;
							case "reading":
								$rootScope.$broadcast('reading', this.selectedBook)
								console.log("reading")
								break;
							case "read":
								$rootScope.$broadcast('read', this.selectedBook)
								console.log("read!")
								break; 
					}
			}
		}		
	})

})()