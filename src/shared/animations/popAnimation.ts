import { animate, style, transition, trigger } from "@angular/animations";

export const popupAnimation = [
    trigger(
        'popupParent',
        [
            transition(
            ':enter', [
            style({ opacity: 0 }),
            animate('5s', style({ opacity: 1 }))
        ]
        ),
        transition(
            ':leave', [
            animate('5s', style({ opacity: 0 }))
        ]
        ),
    
    ]
    )
];