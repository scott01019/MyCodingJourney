import { Component, OnInit } from '@angular/core';

import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faCircle } from "@fortawesome/free-solid-svg-icons"


@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    faTwitter = faTwitter
    faFacebookF = faFacebookF
    faCircle = faCircle

    constructor() { }

    ngOnInit() {
    }

}
