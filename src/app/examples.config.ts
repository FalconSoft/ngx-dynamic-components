import { ProfileFormUIModel, ProfileCardUIModel, ProfileActionsMap, ProfileDataModel } from './profile-page.config';

export const EXAMPLES_LIST = [{
  type: 'Form Controls',
  name: 'profile-form',
  uiModel: ProfileFormUIModel,
  dataModel: ProfileDataModel,
  actionsMap: ProfileActionsMap
}, {
  type: 'Form Controls',
  name: 'profile-form-card',
  uiModel: ProfileCardUIModel,
  dataModel: ProfileDataModel,
  actionsMap: ProfileActionsMap
}];

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
