import {Step1} from "./components/step1";
import {Step2} from "./components/step2";
import {Step3} from "./components/step3";
import {Step4} from "./components/step4";
import {Step5} from "./components/step5";
import {Step6} from "./components/step6";
import {Step7} from "./components/step7";

export const ROUTES = [

    {
        link: '/',
        Component: Step1
    },
    {
        link: 'step2',
        Component: Step2
    },
    {
        link: 'step3',
        Component: Step3
    },
    {
        link: 'step4',
        Component: Step4
    }
    ,
    {
        link: 'step5',
        Component: Step5
    },
    {
        link: 'step6',
        Component: Step6
    },
    {
        link: 'step7',
        Component: Step7
    }
]