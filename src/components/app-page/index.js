import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';
import AppRoot from "../../views/app-root";


export default class AppPage extends PolymerElement {
    static get is() { return 'app-page' }

    static get template() { return createTemplate(view)(css) }

    static get template() {
        return html([`<style>${css}</style>${template}`]);
    }

    constructor() {
        super();
    }

}

window.customElements.define('app-page', AppPage);
