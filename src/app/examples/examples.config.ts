
import * as contactUs from './contact-us.form.config';

export const EXAMPLES_LIST = [{
  type: 'contact-us',
  name: 'contact-us',
  uiModel: contactUs.uIModel,
  dataModel: contactUs.dataModel,
  scripts: contactUs.scripts
}];

export function getGroupedExamples(): { name: string, examples: [] }[] {
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
