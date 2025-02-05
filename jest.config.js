const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/angular-test-app',
    '<rootDir>/libs/angular-components/core',
    '<rootDir>/libs/angular-components/global-search',
    '<rootDir>/libs/angular-components/popover',
    '<rootDir>/libs/angular-components/scroll-to-top',
    '<rootDir>/libs/angular-components/table',
    '<rootDir>/libs/angular-components/filter/filter-tags',
    '<rootDir>/libs/angular-components/filter/filter-tree',
    '<rootDir>/libs/angular-components/filter/multiselect-tags',
    '<rootDir>/libs/angular-components/repeater',
    '<rootDir>/libs/angular-components/vector-map',
    '<rootDir>/libs/angular-components/wizard',
    '<rootDir>/libs/angular-components/skeleton-text',
    '<rootDir>/libs/angular-components/chart',
    '<rootDir>/libs/angular-components/filter/filter-group',
    '<rootDir>/libs/angular-components/filter/filter-toggle',
    '<rootDir>/libs/angular-components/global-nav',
    '<rootDir>/libs/angular-components/avatar',
    '<rootDir>/libs/angular-components/banner',
    '<rootDir>/libs/angular-components/user-profile-menu',
    '<rootDir>/libs/angular-components/expandable-table',
    '<rootDir>/libs/angular-components/entity-menu',
    '<rootDir>/libs/angular-components/cards/account-card',
    '<rootDir>/libs/angular-components/toaster',
    '<rootDir>/libs/angular-components/video-thumbnail',
    '<rootDir>/libs/angular-components/status-steps'
  ]
};
