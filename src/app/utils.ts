import * as mat from '@ngx-dynamic-components/material';
import * as bs from '@ngx-dynamic-components/bootstrap';
// import * as bs from 'projects/bootstrap/src/public-api';

export function getSlugFromStr(str: string): string {
  return str.replace(/ /g, '-').toLocaleLowerCase();
}

export const COMPONENTS_LIST = [...bs.COMPONENTS_LIST, ...mat.COMPONENTS_LIST];

export function getCategories() {
  return [...bs.getCategories(), ...mat.getCategories()];
}

export function getPackageCategories() {
  return [{
    packageName: 'Bootstrap',
    categories: bs.getCategories()
  }, {
    packageName: 'Material',
    categories: mat.getCategories()
  }];
}
