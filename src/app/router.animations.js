"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
function routerTransition() {
    return slideToRight();
}
exports.routerTransition = routerTransition;
function slideToRight() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%', top: '5%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%', top: '5%' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateX(-100%)' }),
            animations_1.animate('0.3s ease-out', animations_1.style({ transform: 'translateX(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateX(0%)' }),
            animations_1.animate('0.2s ease-in-out', animations_1.style({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateX(100%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateX(0%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateY(-100%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateY(0%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateY(100%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateY(0%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map