/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input } from '@angular/core';
import { GnxAuthService } from "../gnx-auth.service";
export class GnxAuthComponent {
    /**
     * @param {?} service
     * @param {?} translatorService
     * @param {?} env
     */
    constructor(service, translatorService, env) {
        this.service = service;
        this.translatorService = translatorService;
        this.env = env;
        this.redirectToLoginPageIfUserNotLoggedIn = true;
        this.initialized = false;
        service.setTranslatorService(translatorService);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.service.getToken().subscribe((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (token) {
                this.userName = token.user_name;
                this.isLoggedIn = true;
                this.service.retrieveUserLanguageFromServer();
            }
            else {
                this.userName = null;
                this.isLoggedIn = false;
                this.service.setDefaultUserLanguage();
            }
            this.initialized = true;
        }));
    }
    /**
     * @return {?}
     */
    login() {
        this.service.redirectToLoginPage();
    }
    /**
     * @return {?}
     */
    signUp() {
        this.service.redirectToSignUpPage();
    }
    /**
     * @return {?}
     */
    logout() {
        this.service.logout();
        this.isLoggedIn = false;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    translate(text) {
        return this.translatorService.translate.instant(text);
    }
}
GnxAuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'gnx-auth',
                template: "<div class=\"header-wrapper\">\r\n  <div class=\"header-left-container\">\r\n    <div class=\"m-r-lg\">\r\n      <a [href]=\"env.accountsUrl\">\r\n        <img alt=\"image\"\r\n             src=\"data:image/png;base64,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\">\r\n      </a>\r\n    </div>\r\n    <div class=\"m-l\">\r\n      <a [href]=\"env.questionsUrl\" class=\"service-link\">Questions</a>\r\n    </div>\r\n    <div class=\"m-l\">\r\n      <a [href]=\"env.profilesUrl\" class=\"service-link\">Profiles</a>\r\n    </div>\r\n    <div class=\"m-l\">\r\n      <a [href]=\"env.rentalsUrl\" class=\"service-link\">Rentals</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"header-right-container\" *ngIf=\"initialized\">\r\n    <div>\r\n      <ng-container *ngIf=\"!isLoggedIn\">\r\n        <button (click)=\"login()\" class=\"btn btn-white btn-sm\" type=\"button\">\r\n          {{translate('Log in')}} <i class=\"fa fa-sign-in m-l-xs\"></i>\r\n        </button>\r\n        <button (click)=\"signUp()\" class=\"btn btn-success btn-sm m-l-xs\" type=\"button\">\r\n          {{translate('Sign Up')}} <i class=\"fa fa-sign-in m-l-xs\"></i>\r\n        </button>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"isLoggedIn\">\r\n        {{translate('Logged as')}}:\r\n        <a [href]=\"env.accountsUrl + '/me'\">\r\n          <label class=\"form-control-static\" style=\"cursor: inherit\">{{userName}}</label>\r\n        </a>\r\n        &nbsp;\r\n        <button (click)=\"logout()\" class=\"btn btn-success btn-sm\" type=\"button\">\r\n          {{translate('Log out')}} <i class=\"fa fa-sign-out m-l-xs\"></i>\r\n        </button>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".auth-buttons{display:inline-block;margin-left:15px}.lang-button-active{cursor:default}.header-wrapper{display:flex;justify-content:space-between;align-items:center;padding:12px;background-color:#2d2d2d;color:#ededed}.header-wrapper .btn,.header-wrapper a,.header-wrapper a:hover{color:#ededed}.header-wrapper .btn{background-color:#95fedf;border-color:#95fedf;color:#2d2d2d}.header-wrapper .btn:hover{background-color:#8ceccd;border-color:#8ceccd}.header-wrapper .service-link{font-size:larger;font-weight:600}.header-left-container{display:flex;justify-content:flex-start;align-items:center}.header-right-container{display:flex;justify-content:flex-end;align-items:center}"]
            }] }
];
/** @nocollapse */
GnxAuthComponent.ctorParameters = () => [
    { type: GnxAuthService },
    { type: undefined, decorators: [{ type: Inject, args: ['TranslatorService',] }] },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
GnxAuthComponent.propDecorators = {
    redirectToLoginPageIfUserNotLoggedIn: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GnxAuthComponent.prototype.redirectToLoginPageIfUserNotLoggedIn;
    /** @type {?} */
    GnxAuthComponent.prototype.isLoggedIn;
    /** @type {?} */
    GnxAuthComponent.prototype.userName;
    /** @type {?} */
    GnxAuthComponent.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    GnxAuthComponent.prototype.service;
    /** @type {?} */
    GnxAuthComponent.prototype.translatorService;
    /** @type {?} */
    GnxAuthComponent.prototype.env;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ254LWF1dGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ254LWF1dGgvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nbngtYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFRbkQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBUTNCLFlBQW9CLE9BQXVCLEVBQ0ssaUJBQWdDLEVBQzlDLEdBQUc7UUFGakIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDSyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWU7UUFDOUMsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQVI1Qix5Q0FBb0MsR0FBRyxJQUFJLENBQUM7UUFJckQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFLbEIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUN4QyxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDdkM7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIscWdNQUF3Qzs7YUFFekM7Ozs7WUFQTyxjQUFjOzRDQWlCUCxNQUFNLFNBQUMsbUJBQW1COzRDQUMxQixNQUFNLFNBQUMsS0FBSzs7O21EQVJ4QixLQUFLOzs7O0lBQU4sZ0VBQXFEOztJQUVyRCxzQ0FBb0I7O0lBQ3BCLG9DQUFpQjs7SUFDakIsdUNBQW9COzs7OztJQUVSLG1DQUErQjs7SUFDL0IsNkNBQW9FOztJQUNwRSwrQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHbnhBdXRoU2VydmljZX0gZnJvbSBcIi4uL2dueC1hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVhYmxlfSBmcm9tIFwiLi4vZ254LW1vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbngtYXV0aCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dueC1hdXRoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbngtYXV0aC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbnhBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcmVkaXJlY3RUb0xvZ2luUGFnZUlmVXNlck5vdExvZ2dlZEluID0gdHJ1ZTtcclxuXHJcbiAgaXNMb2dnZWRJbjogYm9vbGVhbjtcclxuICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gIGluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogR254QXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgQEluamVjdCgnVHJhbnNsYXRvclNlcnZpY2UnKSBwdWJsaWMgdHJhbnNsYXRvclNlcnZpY2U6IFRyYW5zbGF0ZWFibGUsXHJcbiAgICAgICAgICAgICAgQEluamVjdCgnZW52JykgcHVibGljIGVudikge1xyXG4gICAgc2VydmljZS5zZXRUcmFuc2xhdG9yU2VydmljZSh0cmFuc2xhdG9yU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2VydmljZS5nZXRUb2tlbigpLnN1YnNjcmliZSh0b2tlbiA9PiB7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB0b2tlbi51c2VyX25hbWU7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2UucmV0cmlldmVVc2VyTGFuZ3VhZ2VGcm9tU2VydmVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldERlZmF1bHRVc2VyTGFuZ3VhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVkaXJlY3RUb0xvZ2luUGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc2lnblVwKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlZGlyZWN0VG9TaWduVXBQYWdlKCk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRvclNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQodGV4dCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=