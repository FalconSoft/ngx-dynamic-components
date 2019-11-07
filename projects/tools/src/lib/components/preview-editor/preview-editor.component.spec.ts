import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { MatTabsModule, MatIconModule, MatTooltipModule, MatCardModule, MatDividerModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CoreModule, UIModel } from '@ngx-dynamic-components/core';
import { MaterialModule } from '@ngx-dynamic-components/material';
import { ProfileFormUIModel, ProfileDataModel, ProfileScripts } from 'src/app/examples/profile-page.config';
import { PreviewEditorComponent } from './preview-editor.component';
import { DebugElement } from '@angular/core';

describe('PreviewEditorComponent', () => {
  let component: PreviewEditorComponent;
  let fixture: ComponentFixture<PreviewEditorComponent>;
  let editorEl: HTMLElement;

  const TITLE = 'Unit test profile form';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEditorComponent ],
      imports: [
        CoreModule, MaterialModule, FlexLayoutModule, FormsModule, ReactiveFormsModule,
        MatCardModule, MatTabsModule, MatIconModule, MatTooltipModule, MatDividerModule,
        MatListModule,
        MonacoEditorModule.forRoot({baseUrl: './assets'})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEditorComponent);
    component = fixture.componentInstance;
    component.scripts = ProfileScripts;
    component.initUiModel = ProfileFormUIModel;
    component.initDataModel = ProfileDataModel;
    component.title = TITLE;
    fixture.detectChanges();
    const editorDE: DebugElement = fixture.debugElement;
    editorEl = editorDE.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const title = editorEl.querySelector('mat-card-header span');
    expect(title.textContent).toEqual(TITLE);
  });

  it('should toggle code section', () => {
    // Open code section.
    toggleCodeSection();
    const codeEditorTabs = editorEl.querySelector('mat-tab-group') as HTMLElement;
    expect(codeEditorTabs).toBeTruthy();

    // Verify existing tabs.
    const labels = codeEditorTabs.querySelectorAll('mat-tab-header .mat-tab-label-content');
    expect(labels[0].textContent).toEqual('UI Model');
    expect(labels[1].textContent).toEqual('Scripts');
    expect(labels[2].textContent).toEqual('Data Model');
    // Verify layout button appear.
    const layoutBtn = getBtnByIcon(editorEl.querySelector('mat-card-header'), 'vertical_split');
    expect(layoutBtn).toBeTruthy();
    // Verify layout toggle.
    layoutBtn.click();
    fixture.detectChanges();
    expect(getBtnByIcon(editorEl.querySelector('mat-card-header'), 'vertical_split')).toBeFalsy();
    expect(getBtnByIcon(editorEl.querySelector('mat-card-header'), 'horizontal_split')).toBeTruthy();


    // Close code section.
    toggleCodeSection();
    expect(editorEl.querySelector('mat-tab-group')).toBeFalsy();
  });

  it('should code section', fakeAsync(() => {
    // Open code section.
    toggleCodeSection();
    const codeEditorTabs = editorEl.querySelector('mat-tab-group') as HTMLElement;

    // Verify existing tabs.
    const tabs = codeEditorTabs.querySelectorAll('mat-tab-body');
    expect(tabs.length).toEqual(3);

    // Verify existing tabs.
    const labels = codeEditorTabs.querySelectorAll('mat-tab-header .mat-tab-label-content') as NodeListOf<HTMLElement>;
    for (let i = 0; i < labels.length; i++) {
      labels[i].click();
      fixture.detectChanges();
      // Wait a tick while monaco editor render.
      tick();
      // Verify monaco editor was rendered for the first tab.
      expect(tabs[i].querySelector('ngx-monaco-editor .editor-container')).toBeTruthy();
    }
  }));

  it('should render Profile Form', () => {
    const previewEl = editorEl.querySelector('div.preview') as HTMLElement;
    expect(previewEl).toBeTruthy();
    // Verify preview container exist.
    verifyRenderedTree(previewEl, ProfileFormUIModel);
  });

  /**
   * Verifies component tree is rendered based on UI Model.
   * @param container - Container element.
   * @param uiModel - UI model.
   * @param index - index of element type in container.
   */
  function verifyRenderedTree(container: HTMLElement, uiModel: UIModel, index: number = 0) {
    const componentEl = container.getElementsByTagName(getTagFromType(uiModel.type))[index] as HTMLElement;
    expect(componentEl).toBeTruthy();
    if (uiModel.children) {
      const typeGroup = {};
      uiModel.children.forEach(uiM => {
        typeGroup[uiM.type] = (typeGroup[uiM.type] || 0) ;
        verifyRenderedTree(componentEl, uiM, typeGroup[uiM.type]++);
      });
    }
  }

  function getTagFromType(type: string): string {
    const TYPE_MAP = {
      'material:text-input': 'dc-ui-input',
      'material:select': 'dc-ui-select'
    };
    return TYPE_MAP[type] || `dc-ui-${type.replace('material:', '')}`;
  }

  function toggleCodeSection() {
    const codeBtn = getBtnByIcon(editorEl.querySelector('mat-card-header'), 'code') as HTMLButtonElement;
    codeBtn.click();
    fixture.detectChanges();
  }

  function getBtnByIcon(container: HTMLElement, icon: string): HTMLButtonElement {
    const buttons = container.querySelectorAll('button');

    for (const btn of Array.from(buttons)) {
      if (btn.textContent === icon) {
        return btn;
      }
    }
  }
});
