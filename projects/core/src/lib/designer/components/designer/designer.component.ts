import { CdkDropList } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from '../../../services/core.service';
import { Categories, ComponentDescriptor, ComponentExample, UIModel } from '../../../models';
import { NGXDynamicDesignerComponent } from '../ngx-dynamic-designer-component';
import { DesignerRendererService } from '../../designer-renderer.service';
import { BaseDynamicComponent } from '../../../components/base-dynamic-component';

type ComponentsGroup = { name: string; components: ComponentDescriptor[] };
type Sample = { name: string; xmlModel: string };

@Component({
  selector: 'dc-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {
  @Input() template = '<div class="container h-100"></div>';

  selectedContainer$: Observable<BaseDynamicComponent>;
  selectedComponent$: Observable<BaseDynamicComponent>;
  @ViewChild(NGXDynamicDesignerComponent, { static: true }) dc?: NGXDynamicDesignerComponent;
  components: ComponentDescriptor[] = [];
  groups: ComponentsGroup[] = [];
  connected$: Observable<CdkDropList[]>;
  form = this.getForm();

  get designerRendererService(): DesignerRendererService {
    return this.dc?.rendererService as DesignerRendererService;
  }

  constructor() {}

  async ngOnInit() {
    this.components = this.getComponents(); // CoreService.getListOfComponents();
    this.groups = this.getCategories();
    this.connected$ = this.dc?.dropList$;

    this.selectedContainer$ = this.designerRendererService.selectedContainer$;
    this.selectedComponent$ = this.designerRendererService.selectedComponent$;
  }

  private getComponents(): ComponentDescriptor[] {
    return CoreService.getComponentsRegistryList().filter(([key, component]) => {
      if (component.category === Categories.HTML || key.includes('designer')) {
        return true;
      }
    }).map(([key, component]) => component);
  }

  getUIModel(component: ComponentDescriptor): UIModel {
    const xmlModel: UIModel | string = component.defaultModel ?? this.getUIModelFromExample(component.example);
    if (!xmlModel) {
      return null;
    }

    if (typeof xmlModel === 'string') {
      return CoreService.parseXMLModel(xmlModel);
    }
    return xmlModel;
  }

  getUIModelFromXML(xmlModel: string): UIModel {
    return CoreService.parseXMLModel(xmlModel);
  }

  getUIModelFromExample(example: ComponentExample | ComponentExample[]): UIModel | string {
    if (Array.isArray(example)) {
      return example[0].uiModel;
    }
    return example.uiModel;
  }

  getCategories(): ComponentsGroup[] {
    const map = new Map<string, ComponentsGroup>(
      [
        ['Containers', { name: 'Containers', components: [] }],
        ['Basic', { name: 'Basic', components: [] }],
      ]);
    this.components.forEach((c) => {
      if (!map.has(c.category)) {
        map.set(c.category, {
          name: c.category, components: []
        });
      }
      const category: ComponentsGroup = map.get(c.category);
      category.components.push(c);
    });
    return Array.from(map.values());
  }

  deleteComponent(component: BaseDynamicComponent): void {
    this.designerRendererService.deleteComponent(component);
  }

  saveComponent({
    component,
    properties
  }: {component: BaseDynamicComponent; properties: Record<string, string>}): void {
    this.designerRendererService.updateComponent(component, properties);
  }

  cancelSelection(): void {
    this.designerRendererService.deselectComponent();
  }

  selectComponent(component: BaseDynamicComponent): void {
    this.designerRendererService.selectComponent(component);
  }

  clear(): void {
    this.designerRendererService.clearDesigner(this.dc);
  }

  getForm(): { name: string; samples: Sample[] } {
    return {
      name: 'Form',
      samples: [{
        name: 'Container',
        xmlModel: `<div class="container"></div>`
      }, {
        name: 'Row',
        xmlModel: `<div class="row"></div>`
      }, {
        name: 'Column',
        xmlModel: `<div class="row flex-column"></div>`
      }, {
        name: 'Cell',
        xmlModel: `<div class="col"></div>`
      }, {
        name: 'Email',
        xmlModel: `
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input id="exampleInputEmail1" type="email" class="form-control" placeholder="Enter email" />
        </div>
        `
      }, {
        name: 'Password',
        xmlModel: `
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input id="exampleInputPassword1" type="password" class="form-control" placeholder="Password" />
        </div>`
      }, {
        name: 'Phone',
        xmlModel: `
        <div class="form-group">
          <label for="exampleInputPhone1">Phone</label>
          <input id="exampleInputPhone1" type="phone" class="form-control" placeholder="Phone" />
        </div>`
      }, {
        name: 'Address',
        xmlModel: `
        <div class="address-section">
        <div class="row">
          <div class="form-group col-4">
            <label for="exampleInputCountry1">Country</label>
            <input id="exampleInputCountry1" type="text" class="form-control" placeholder="Country" />
          </div>
          <div class="form-group col-4">
            <label for="exampleInputCity1">City</label>
            <input id="exampleInputCity1" type="text" class="form-control" placeholder="City" />
          </div>
          <div class="form-group col-4">
            <label for="exampleInputAddress1">Address</label>
            <input id="exampleInputAddress1" type="address" class="form-control" placeholder="Address" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-6">
            <label for="exampleInputEmail1">Email address</label>
            <input id="exampleInputEmail1" type="email" class="form-control" placeholder="Enter email" />
          </div>
          <div class="form-group col-6">
            <label for="exampleInputPhone1">Phone</label>
            <input id="exampleInputPhone1" type="phone" class="form-control" placeholder="Phone" />
          </div>
        </div>
        </div>
        `
      }, {
        name: 'Date',
        xmlModel: `
          <div class="form-group">
            <label for="exampleInputDate1">Date</label>
            <input id="exampleInputDate1" type="date" class="form-control" placeholder="Date" />
          </div>`
      }, {
        name: 'Actions',
        xmlModel: `
          <div class="row m-0 justify-content-between align-items-center">
            <button type="reset" class="btn btn-secondary col-auto">Reset</button>
            <button type="submit" class="btn btn-primary col-auto">Submit</button>
          </div>
          `
      }]
    };
  }
}
