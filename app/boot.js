System.register(['angular2/platform/browser', 'angular2/router', "./app.component", 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, app_component_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [core_1.provide(Window, { useValue: window }), router_1.ROUTER_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLGNBQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBRSx5QkFBZ0IsQ0FBQyxDQUFFLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW3Byb3ZpZGUoV2luZG93LCB7dXNlVmFsdWU6IHdpbmRvd30pLCBST1VURVJfUFJPVklERVJTXSApOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
