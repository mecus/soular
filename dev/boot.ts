///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import {AppComponent} from "./app.component";
import { provide } from 'angular2/core';

bootstrap(AppComponent, [provide(Window, {useValue: window}), ROUTER_PROVIDERS] );