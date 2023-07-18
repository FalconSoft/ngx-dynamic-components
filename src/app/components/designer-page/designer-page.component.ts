import { Component } from '@angular/core';
import { uIModel } from 'src/app/examples/contact-us.form.config';

@Component({
  selector: 'dc-designer-page',
  templateUrl: './designer-page.component.html',
  styleUrls: ['./designer-page.component.scss']
})
export class DesignerPageComponent {

  xmlUIModel = uIModel;
}
