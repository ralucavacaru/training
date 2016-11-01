var Training = angular.module('Training', ['ui.router']);

Training.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $urlRouterProvider.when('browse','browse.all');

  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: 'partials/home.html'
  }
  var browseState = {
    name: 'browse',
    url: '/browse',
    templateUrl: 'partials/browse.html',
    redirectTo: 'browse.all',
  }
  var allState = {
    name: 'browse.all',
    url: '',
    templateUrl: 'partials/all.html'
  }
  var strategyState = {
    name: 'browse.strategy',
    url: '/strategy',
    templateUrl: 'partials/strategy.html'
  }
  var contentState = {
    name: 'browse.content',
    url: '/content',
    templateUrl: 'partials/content.html'
  }
  var miscState = {
    name: 'browse.misc',
    url: '/misc',
    templateUrl: 'partials/misc.html'
  }
  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'partials/about.html'
  }

  $stateProvider
        .state(homeState)
        .state(browseState)
        .state(allState)
        .state(strategyState)
        .state(contentState)
        .state(miscState)
        .state(aboutState);
});
Training.controller('IndexCtrl', function($scope, MockDataFactory) {
  $scope.scrollTo = function (target) {
  };
});

Training.controller('HomeCtrl', function($scope, MockDataFactory) {
});

Training.controller('BrowseCtrl', function($scope, $state, MockDataFactory) {
  $scope.$state = $state;
  $scope.scrollTo = function (target) {
  };
});

Training.controller('AllCtrl', function($scope, MockDataFactory) {
    $scope.trainings = MockDataFactory.trainings;
});

Training.controller('StrategyCtrl', function($scope, MockDataFactory) {
    $scope.trainings = MockDataFactory.trainings;
});

Training.controller('ContentCtrl', function($scope, MockDataFactory) {
    $scope.trainings = MockDataFactory.trainings;
});

Training.controller('MiscCtrl', function($scope, MockDataFactory) {
    $scope.trainings = MockDataFactory.trainings;
});


// Factory to be injected in controllers for using mock data.
Training.factory('MockDataFactory', function () {
  return {
    trainings: [
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'strategy',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'misc',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'misc',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'strategy',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'strategy',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'strategy',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'misc',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'strategy',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'misc',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'misc',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'strategy',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'strategy',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'strategy',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'misc',
      },
      {
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, at sea augue dicant. Qui ut meis quodsi epicuri. Sed volumus accommodare ut. Eos ea dicta omnium consetetur, vim no fabellas periculis.',
        category: 'content',
      },
    ]
  }
});

// Provides logic for default nested scopes via redirectTo.
Training.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params)
      }
    });
}]);

// Directive for scroll-then-fixed main nav bar.
Training.directive('setClassWhenAtTop', function ($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                offsetTop = element.offset().top; // get element's top relative to the document

            $win.on('scroll', function (e) {
                if ($win.scrollTop() >= offsetTop + 90) {
                    element.addClass(topClass);
                } else {
                    element.removeClass(topClass);
                }
            });
        }
    };
})

// Directive for scroll-then-fixed browse nav bar.
Training.directive('setClassWhenAtTopBrowse', function ($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var topClass = attrs.setClassWhenAtTopBrowse, // get CSS class from directive's attribute value
                offsetTop = element.offset().top; // get element's top relative to the document

            $win.on('scroll', function (e) {
                if ($win.scrollTop() >= offsetTop - 40) {
                    element.addClass(topClass);
                } else {
                    element.removeClass(topClass);
                }
            });
        }
    };
})