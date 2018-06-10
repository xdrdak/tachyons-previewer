const TYPES = {
  SECTION: 'section',
  COMPONENT: 'component',
};

function section(title) {
  return {
    type: TYPES.SECTION,
    title,
  };
}

function component(filename, properName) {
  return {
    type: TYPES.COMPONENT,
    filename,
    properName,
  };
}

const componentMaps = [
  section('Basic Components'),
  component('button', 'Button'),
  component('cards', 'Cards'),
  component('alerts', 'Alerts'),
];

function getWhitelistedComponents() {
  return componentMaps
    .filter(item => item.type === TYPES.COMPONENT)
    .map(item => item.filename);
}

export { TYPES, componentMaps, getWhitelistedComponents };

export default ['button', 'small-profile-card'];
