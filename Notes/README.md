## Observable:
- An observable streams the data . It sends the data in packets or chunks, i.e, it does not send all the data once.
- so ,an Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.
- but a Promise is a computation that may (or may not) eventually return a single value.
  
  ## creation:
- we create an observable using the (new observable) constructer.
- this constructor takes a single argument : the subscribe function.
- example:
-           import { Observable } from 'rxjs';
-          const observable = new Observable(function subscribe(subscriber) {
-             const id = setInterval(() => {
-          subscriber.next('hi');
-            }, 1000);
-         });
  
  ## observer:
  - it implements 3 methods:
  - 1. next(): called by observable whenever new value is emitted.
  - 2. error(): called whenever the observable throws an error.
  - 3. complete(): it is called whenever the observable is done.
       
  ## Subscription:
  - we use it basically to get the data from the observable.
  - observable.subscribe((x) => console.log(x));
    
  ## Zen-Observables:

  ### observable.forEach(callback):
  - Subscribes to the observable and returns a Promise for the completion value of the stream. The callback argument is called once for each value in the stream.
  ### observable.filter(callback):
  - Returns a new Observable that emits all values which pass the test implemented by the callback argument.
  ### observable.reduce(callback [,initialValue]):
  - Returns a new Observable that applies a function against an accumulator and each value of the stream to reduce it to a single value.
  ### observable.concat(...sources):
  - Merges the current observable with additional observables.
  ### observable.all():
  - Returns a Promise for an array containing all of the values produced by the observable. 

