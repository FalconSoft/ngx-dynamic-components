import { ProfileFormUIModel, ProfileCardUIModel, ProfileDataModel, ProfileWorkflowsMap } from './profile-page.config';
import { dashboardConfig } from './dashboard.config';
import { bsFormConfig } from './profile-bs.config';
import { itemsListConfig } from './items-list.config';

export const EXAMPLES_LIST = [{
  type: 'Form Controls',
  name: 'profile-form',
  uiModel: ProfileFormUIModel,
  dataModel: ProfileDataModel,
  workflowConfig: ProfileWorkflowsMap
}, {
  type: 'Form Controls',
  name: 'profile-form-card',
  uiModel: ProfileCardUIModel,
  dataModel: ProfileDataModel,
  workflowConfig: ProfileWorkflowsMap
}, dashboardConfig, bsFormConfig, itemsListConfig];

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
