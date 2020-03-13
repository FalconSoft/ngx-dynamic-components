import { ProfileFormUIModel, ProfileCardUIModel, ProfileDataModel, ProfileScripts } from './profile-page.config';
import { dashboardConfig } from './dashboard.config';
import { bsFormConfig } from './profile-bs.config';
import { itemsListConfig } from './items-list.config';
import { itemsTableConfig } from './items-table.config';
import * as flex from './flex.config';

export const EXAMPLES_LIST = [{
  type: 'Flex panels',
  name: 'flex-panels',
  uiModel: flex.uIModel,
  dataModel: flex.dataModel,
  scripts: flex.scripts
}, {
  type: 'Form Controls',
  name: 'profile-form',
  uiModel: ProfileFormUIModel,
  dataModel: ProfileDataModel,
  scripts: ProfileScripts
}, {
  type: 'Form Controls',
  name: 'profile-form-card',
  uiModel: ProfileCardUIModel,
  dataModel: ProfileDataModel,
  scripts: ProfileScripts
}, dashboardConfig, bsFormConfig, itemsListConfig, itemsTableConfig];

export function getGroupedExamples(): {name: string, examples: []}[] {
  const groups = EXAMPLES_LIST.reduce((map, ex) => {
    map[ex.type] = map[ex.type] || [];
    map[ex.type].push(ex);
    return map;
  }, {});

  return Object.entries(groups).map(([key, val]: [string, []]) => {
    return {
      name: key,
      examples: val
    };
  });
}
