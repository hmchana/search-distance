const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // Texts and colors
              'primary-color': '#425FEC',
              'text-color': '#6E757D',
              'text-color-inverse': '#FFFFFF',

              'disabled-color': 'fade(#000, 25%)',
              'disabled-bg': '#C5CBEB',

              // Typography
              'font-family': 'Open Sans',
              'heading-color': '#383C40',
              'heading-1-size': '45px',
              'heading-2-size': '34px',
              'heading-3-size': '26px',
              'heading-4-size': '20px',
              'heading-5-size': '16px',

              // Buttons
              'btn-font-weight': '600',
              'btn-default-color': '#425FEC',
              'btn-default-bg': 'transparent',
              'btn-default-border': '#425FEC',

              'btn-shadow': 'none',
              'btn-primary-shadow': '0px 3px 14px rgba(66, 95, 236, 0.3)',
              'btn-text-shadow': 'none',

              'border-radius-base': '3px',
              'input-placeholder-color': 'gray',

              // Progress
              // --
              'progress-default-color': '#8381F9',
              'progress-remaining-color': '#F5F7FD',
              'progress-info-text-color': '#000',
              'progress-radius': '0px',
              'progress-steps-item-bg': ' #f3f3f3',
              'progress-text-font-size': '1em',
              'progress-text-color': '#000', // This is for circle text color, should be renamed better
              'progress-circle-text-font-size': '1.8em',
              //Input
              //--
              'input-color': '#5f5f5f',
              'input-hover-border-color': 'rgba(0, 0, 0, 0.2)',
              'input-disabled-bg': '#EFEFEF',
              //=======
              //Switch
              'switch-color': '#D5DCFC',
              'switch-bg': '#5973F2',

              //Checkbox
              'checkbox-color': '#706DFF',

              // Radio
              'radio-button-color': '#706DFF',

              //Select
              'select-selection-item-bg': '#5973F2',

              //Tag
              'tag-default-color': '#FFFFFF',
              'tag-default-bg': '#5973F2',

              //DatePicker
              /*"picker-time-panel-column-width": "56px",
              "picker-time-panel-column-height": "224px",
              "picker-time-panel-cell-height": "28px",
              "picker-panel-cell-height": "24px",
              "picker-panel-cell-width": "70px",
              "picker-text-height": "40px",*/

              //Rating
              'rate-star-color': 'yellow-6',
              'rate-star-bg': 'border-color-split',
              'rate-star-size': '80px',

              // Tables
              'table-padding-vertical': '8px',
              'table-padding-horizontal': '8px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
