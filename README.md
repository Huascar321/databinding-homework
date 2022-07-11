This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

1. Create three new components: GameControl, Odd and Even.
2. The GameControl Component should have buttons to start and stop the game.
3. When starting the game, an event (holding a incrementing number) should get emmited each second (ref = setInterval()).
4. The event should be listenable from outside the component.
5. When stopping the game, no more events should get emitted (clearInterval(ref)).
6. A new Odd Component should get created for every odd number emitted, the same should happen for the Event Component (on even numbers).
7. Simpy output Odd - NUMBER or Even - Number in the two components.
8. Style the element (e.g. paragraph) holding your output text differently in both components.
