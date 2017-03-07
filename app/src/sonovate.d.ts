// libraries
///<reference path="../../typings/index.d.ts"/>
///<reference path="../../rx.all.d.ts"/>

// Core references - THESE ARE IN ORDER OF LOADING
///<reference path="ApplicationModule.ts"/>
///<reference path="Application.ts"/>
///<reference path="core/BaseController.ts"/>
///<reference path="mainPage/mainPageModule.ts"/>
///<reference path="mainPage/mainPageController.ts"/>
///<reference path="weather/weatherModule.ts"/>

declare module Sonovate {

    interface IScopeObserver<T> {
        newValue: T,
        oldValue: T
    }

}

