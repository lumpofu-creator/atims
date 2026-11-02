import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        ATIMS by
        <a href="http://www.perigee.co.za" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">
        Perigee Digital</a>
    </div>`
})
export class AppFooter {}
