/// <reference path="../../typings/index.d.ts"/>

module Sonovate {
    export interface IDictionary<T> {
        [key: string]: T;
    }
    
    export interface ILocalisationData {
        addPerson: IDictionary<string>;
        activitystream: IDictionary<string>;
        addorganisation: IDictionary<string>;
        addaddress: IDictionary<string>;
        address: IDictionary<string>;
        assignments: IDictionary<string>;
        bankaccount: IDictionary<string>;
        companyuser: IDictionary<string>;
        confirmations: IDictionary<string>;
        customersupport: IDictionary<string>;
        errorredirect: IDictionary<string>;
        facetconfirmation: IDictionary<string>;
        general: IDictionary<string>;
        invoices: IDictionary<string>;
        maintainemailaddress: IDictionary<string>;
        maintainphonenumber: IDictionary<string>;
        mediaobject: IDictionary<string>;
        menu: IDictionary<string>;
        organisation: IDictionary<string>;
        personsettings: IDictionary<string>;
        profileheader: IDictionary<string>;
        proposal: IDictionary<string>;
        proposals: IDictionary<string>;
        Timesheet: IDictionary<string>;
        timesheets: IDictionary<string>;
        userdetails: IDictionary<string>;
        templateterms: IDictionary<string>;
        terms: IDictionary<string>;
        signup: IDictionary<string>;
        status: IDictionary<string>;
        verification: IDictionary<string>;
        oauth: IDictionary<string>;
        changepassword: IDictionary<string>;
        personoptions: IDictionary<string>;
    }
}

module Sonovate.Models {

    export interface IFormError {
        isValid:boolean; 
        message:string;
    }
 
    export interface IStateSkeleton {
        errors: IDictionary<IFormError>;
    }

    export interface IKpiContainer {
        id: string;
        kpi: IKpi;
        colSpans: IColSpans;
        secondLevelItemCount: number;
        hasSecondLevelLabels: boolean;
        thirdLevelItemCount: number;
        hasThirdLevelLabels: boolean;
        childChartTypeLevel1: string;
        childChartTypeLevel2: string;
    }

    export interface IKpi {
        kpis: IKpi[];
        label: string;
        value: number;
        unit: string;
        priority: string;
        link: string;
        childChartType: string;
        dougnutData?: IDoughnutData;
        lineChartData?: ILineChartData;
        color: string;
    }

    export interface IChartOptions {
        onClick: () => void;
        cutoutPercentage?: number;
        segmentShowStroke: boolean;
        legend: IDictionary<boolean>;
        elements: IChartElementsOptions;
    }

    export interface IChartElementsOptions {
        arc?: ChartArcOtpions;
        line?: ILineChartOptions;
        point?: ChartPointOptions;
    }

    export interface ILineChartOptions extends ChartLineOptions {
        fill: boolean;
    }

    export interface IDoughnutData {
        colors: string[];
        values: number[];
        units: string[];
        labels: string[];
        links: string[];
    }

    export interface ILineChartData {
        labels: string[];
        datasets: ILineChartDataSet[];
    }

    export interface ILineChartDataSet {
        label: string;
        color: string;
        value: number;
        unit: string;
        dataPointUnits: string[];
        data: number[];
        legendLink: string;
        dataPointLinks: string[];
        dataPointColors: string[];
    }

    export interface IKpiGraphData {
        labels: string[];
        values: number[];
        priorities: string[];
    }

    export interface IColSpans {
        col1: number;
        col2: number;
        col3: number;
        col4: number;
    };
    

   
}