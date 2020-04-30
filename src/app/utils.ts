import * as mat from '@ngx-dynamic-components/material';
import * as bs from '@ngx-dynamic-components/bootstrap';
import * as core from '@ngx-dynamic-components/core';

export function getSlugFromStr(str: string): string {
  return str.replace(/ /g, '-').toLocaleLowerCase();
}

export const COMPONENTS_LIST = [...core.COMPONENTS_LIST, ...bs.COMPONENTS_LIST, ...mat.COMPONENTS_LIST];

export function getCategories(): any[] {
  return [...core.getCategories(), ...bs.getCategories(), ...mat.getCategories()];
}

export function getPackageCategories(): any[] {
  return [{
    packageName: 'Core',
    categories: core.getCategories()
  }, {
    packageName: 'Bootstrap',
    categories: bs.getCategories()
  }, {
    packageName: 'Material',
    categories: mat.getCategories()
  }];
}
