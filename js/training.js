var Training = angular.module('Training', ['ngRoute']);


Training.config(['$routeProvider', function ($routeProvider) {
$routeProvider
  .when("/", {
    templateUrl: "partials/home.html",
    controller: "HomeCtrl",
  })
  .when("/strategy", {
    templateUrl: "partials/strategy.html", 
    controller: "StrategyCtrl",
  })
  .when("/content", {
    templateUrl: "partials/content.html", 
    controller: "ContentCtrl",
  })
  .when("/misc", {
    templateUrl: "partials/misc.html", 
    controller: "MiscCtrl",
  })
  // else 404
  // .otherwise("/404", {templateUrl: "partials/404.html", <span class="highlight">controller: "PageCtrl"</span>});
}]);

Training.controller('IndexCtrl', function($scope) {
});

Training.controller('HomeCtrl', function($scope, MockDataFactory) {
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