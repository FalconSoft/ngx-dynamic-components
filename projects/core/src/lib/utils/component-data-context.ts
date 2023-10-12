import { Observable, Subject } from 'rxjs';

export type DataChanges = { propertyName: string; propertyValue: any }[];

export class ComponentDataContext {
    private readonly _uiValueChanged$ = new Subject<DataChanges>();
    readonly uiValueChanged$: Observable<DataChanges> =
      this._uiValueChanged$.asObservable();
    [name: string]: any;
  
    setUIValue(name: string | object, value?: object | undefined): void {
      if (typeof name === 'string') {
        this[name] = value;
        this._uiValueChanged$.next([{ propertyName: name, propertyValue: value }]);
      } else if (typeof name === 'object') {
        const flatObject = name as Record<string, any>;
        const entries = Object.entries(flatObject);
        entries.forEach(([propertyName, propertyValue]) => {
          this[propertyName] = propertyValue;
        });
        this._uiValueChanged$.next(entries.map(([propertyName, propertyValue]) => ({ propertyName, propertyValue })));
      }
    }
  }