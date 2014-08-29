// Wrapping your JavaScript in a closure ia a good habit
(function() {
    var app = angular.module('store', []);

    // Notice that controller is attached to (inside) our app
    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
      {
        name: 'Dodecahedron',
        price: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tortor id nulla consectetur porta. Etiam tempus blandit purus, ac sollicitudin ligula ornare ut. Vivamus commodo ornare vestibulum. Quisque tincidunt erat et augue porttitor, vitae efficitur velit mattis. Nam eu consectetur odio. Duis a tincidunt justo, eu tempor sem. Curabitur neque quam, pharetra at vehicula sit amet, pretium at turpis. Nam convallis massa ac vulputate lobortis. Vestibulum elementum elit non magna egestas, at placerat sem posuere. Maecenas cursus pulvinar lacus, laoreet eleifend mi consequat non. Vestibulum ultricies tincidunt molestie.',
      canPurchase: true,
      soldOut: false
    },
      {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Suspendisse mattis, dolor sed eleifend bibendum, nulla est hendrerit magna, sed hendrerit tortor felis vitae velit. Vestibulum auctor hendrerit metus ut tincidunt. Integer egestas vitae lectus quis fermentum. Donec non sapien aliquet, sollicitudin magna ut, porta odio. Morbi egestas vulputate sapien. Nulla ipsum nulla, porttitor ut finibus sed, lobortis id diam. Vestibulum eu neque eu magna porttitor feugiat. Mauris lectus ante, ornare et tristique ac, condimentum at quam. Nulla lorem justo, vulputate quis odio tincidunt, lacinia interdum eros. Sed lacinia est vestibulum, ullamcorper lacus at, aliquet neque.',
        canPurchase: true,
        soldOut: false
      }
      ];
})();

