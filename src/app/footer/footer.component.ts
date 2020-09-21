import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent {
    public footer_message: any = {name: 'Biller - ', phrase: 'Todos los derechos reservados'};
}