import { buttonDocs } from './button';
import { inputDocs } from './input';

export function getComponentDocs(componentName: string) {
  switch (componentName) {
    case 'button':
      return buttonDocs;
    case 'input':
      return inputDocs;
    default:
      // Return a default structure for unknown components
      return {
        title: componentName.charAt(0).toUpperCase() + componentName.slice(1),
        description: `Documentation for ${componentName} component.`,
        overview: { examples: [] },
        api: { props: '', variants: [], sizes: [] },
        guide: { whenToUse: [], bestPractices: [], accessibility: [] }
      };
  }
}