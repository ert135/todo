// libraries
/// <reference path="../typings/index.d.ts"/>
/// <reference path="../node_modules/rxjs/ts/rx.all.d.ts"/>

// Core references

declare var tinymce: TinyMce.ITinyMceInstance;

declare module Sonovate {

    type IEmptyObservable = any;

    interface IScopeObserver<T> {
        newValue: T,
        oldValue: T
    }

    interface IRxScope extends ng.IScope {
        $createObservableFunction<T>(name: string): Rx.Observable<T>;
    }

    interface IActions<intents, httpResults, subjects> {
        requestSubjects: intents,
        resultSubjects: httpResults,
        subjects?: subjects
    }

    interface IErrorUtilitiesService {
        formatErrors(errorResponse: any, replaceString: any): IErrors;
    }
    interface IErrors {
        form: IDictionary<string>,
        general: IDictionary<string>
    }

    interface IAjaxSubjects<TSuccess> {
        onBegin: Rx.ReplaySubject<number>;
        onSuccess: Rx.ReplaySubject<TSuccess>;
        onFail: Rx.ReplaySubject<string>;
    }

    interface IMetadata {
        autofill?: any;
        totalRowCount?: number;
        context?: string;
        totalResults?: number;
        pageNumber?: number;
        size?: number;
        unreadNotificationCount?: number;
    }

    interface ISonovateResponse<T> {
        result: T;
        links: Array<string>;
        metadata: IMetadata;
    }

    interface IResponse<T> {
        data: ISonovateResponse<T>;
        status: number;
    }

}

