import { trigger, transition, style, query, animateChild, animate, state } from '@angular/animations';

// import { group } from 'console';

export const slideInAnimation =
trigger('openClose', [
    // ...
    state('open', style({
      // height: '200px',
      opacity: 1,
      backgroundColor: 'yellow',
      
    })),
    state('closed', style({
      // height: '100px',
      opacity: 1,
      backgroundColor: 'green'
    })),

    transition('open => close', [
      style({ transform: 'translateX(-100%)' , opacity: 0.2}),
      animate(10000)
    ]),
    
    transition(':enter', [
      style({ 
        transform: 'translateX(-100%)' , 
      }),
      animate(1000)
    ]),
    transition(':leave', [
     animate(1000, style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ]);