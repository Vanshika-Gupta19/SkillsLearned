## Observable:
- An observable streams the data . It sends the data in packets or chunks, i.e, it does not send all the data once.
- they are used for handling asynchronous data streams.
  ## creation:
- we create an observable using the (new observable) constructer.
- this constructor takes a single argument : a function that receieves an (observer).
  ## observer:
  - it implements 3 methods:
  - 1. next(): called by observable whenever new value is emitted.
  - 2. error(): called whenever the observable throws an error.
  - 3. complete(): it is called whenever the observable is done.
  ## Subscription:
  - we use it basically to get the data from the observable.
    ### examples:
  - // Create an observable that emits values 1, 2, and 3
  -  const myObservable = new Observable(observer => {
   -                    observer.next(1);
   -                    observer.next(2);
    -                   observer.next(3);
    -                   observer.complete();
     -             });

     - // Subscribe to the observable
   -  myObservable.subscribe({
    - next: value => console.log(`Received: ${value}`),
   -  complete: () => console.log('Observable completed'),
  -  });
    - output: Received: 1
    -          Received: 2
    -         Received: 3
    -          Observable completed

