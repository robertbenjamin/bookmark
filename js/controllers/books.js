(function() {

angular
  .module('bookmark')
  .controller('mainController', function($firebaseArray, BookAdder, $rootScope) {
    var vm = this;

    var wantToRead = new Firebase(firebaseURL + "/books/wantToRead");
    var reading = new Firebase(firebaseURL + "/books/reading");
    var read = new Firebase(firebaseURL + "/books/read");


    var wantArray = $firebaseArray(wantToRead);
    var readingArray = $firebaseArray(reading);
    var readArray = $firebaseArray(read);

    vm.wantToRead = wantArray
    vm.reading = readingArray
    vm.read = readArray

    $rootScope.$on('wantToRead', function() {
      vm.wantToRead.$add( BookAdder.get() )
    })
    $rootScope.$on('reading', function() {
      vm.reading.$add( BookAdder.get() )
    })
    $rootScope.$on('read', function() {
      vm.read.$add( BookAdder.get() )
    })

    vm.nowReading = function(book) {
      vm.wantToRead.$remove(book)
      vm.reading.$add(book)
    }

    vm.finishedReading = function(book) {
      vm.reading.$remove(book)
      vm.read.$add(book)
    }

    vm.addNote = function(book, note) {
      updatedBook = book;
      updatedBook.note = note
      vm.read.$save(updatedBook)
      vm.note = ""
    }

  })

})()