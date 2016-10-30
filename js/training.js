var Training = angular.module('Training', ['ui.router']);

Training.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: 'partials/home.html'
  }
  var browseState = {
    name: 'browse',
    url: '/browse',
    templateUrl: 'partials/browse.html',
    redirectTo: 'browse.all'
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

Training.controller('HomeCtrl', function($scope, MockDataFactory) {
});

Training.controller('BrowseCtrl', function($scope, MockDataFactory) {
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