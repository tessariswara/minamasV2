// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconMapPin,
  IconTable
} from '@tabler/icons-react';

// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconMapPin,
  IconTable
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const forms = {
  // id: 'ui-forms',
  // title: <FormattedMessage id="forms" />,
  // icon: icons.IconPictureInPicture,
  // type: 'group'
  // children: [
  //   {
  //     id: 'components',
  //     title: <FormattedMessage id="components" />,
  //     type: 'collapse',
  //     icon: icons.IconPictureInPicture,
  //     children: [
  //       {
  //         id: 'autocomplete',
  //         title: <FormattedMessage id="autocomplete" />,
  //         type: 'item',
  //         url: '/forms/components/autocomplete',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'button',
  //         title: <FormattedMessage id="button" />,
  //         type: 'item',
  //         url: '/forms/components/button',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'checkbox',
  //         title: <FormattedMessage id="checkbox" />,
  //         type: 'item',
  //         url: '/forms/components/checkbox',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'date-time',
  //         title: <FormattedMessage id="date-time" />,
  //         type: 'item',
  //         url: '/forms/components/date-time',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'radio',
  //         title: <FormattedMessage id="radio" />,
  //         type: 'item',
  //         url: '/forms/components/radio',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'slider',
  //         title: <FormattedMessage id="slider" />,
  //         type: 'item',
  //         url: '/forms/components/slider',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'switch',
  //         title: <FormattedMessage id="switch" />,
  //         type: 'item',
  //         url: '/forms/components/switch',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'text-field',
  //         title: <FormattedMessage id="text-field" />,
  //         type: 'item',
  //         url: '/forms/components/text-field',
  //         breadcrumbs: false
  //       }
  //     ]
  //   },
  //   {
  //     id: 'plugins',
  //     title: <FormattedMessage id="plugins" />,
  //     type: 'collapse',
  //     icon: icons.IconForms,
  //     children: [
  //       {
  //         id: 'frm-autocomplete',
  //         title: <FormattedMessage id="autocomplete" />,
  //         type: 'item',
  //         url: '/forms/plugins/frm-autocomplete',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'frm-mask',
  //         title: <FormattedMessage id="mask" />,
  //         type: 'item',
  //         url: '/forms/plugins/frm-mask',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'frm-clipboard',
  //         title: <FormattedMessage id="clipboard" />,
  //         type: 'item',
  //         url: '/forms/plugins/frm-clipboard',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'frm-recaptcha',
  //         title: <FormattedMessage id="recaptcha" />,
  //         type: 'item',
  //         url: '/forms/plugins/frm-recaptcha',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'frm-wysiwug',
  //         title: <FormattedMessage id="wysiwug-editor" />,
  //         type: 'item',
  //         url: '/forms/plugins/frm-wysiwug',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'frm-modal',
  //         title: <FormattedMessage id="modal" />,
  //         type: 'item',
  //         url: '/forms/plugins/frm-modal',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'frm-tooltip',
  //         title: <FormattedMessage id="tooltip" />,
  //         type: 'item',
  //         url: '/forms/plugins/frm-tooltip'
  //       },
  //       {
  //         id: 'frm-dropzone',
  //         title: <FormattedMessage id="dropzone" />,
  //         type: 'item',
  //         url: '/forms/plugins/frm-dropzone'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'layouts',
  //     title: 'Layouts',
  //     type: 'collapse',
  //     icon: icons.IconForms,
  //     children: [
  //       {
  //         id: 'frm-layouts',
  //         title: <FormattedMessage id="layouts" />,
  //         type: 'item',
  //         url: '/forms/layouts/layouts'
  //       },
  //       {
  //         id: 'frm-multi-column-forms',
  //         title: <FormattedMessage id="multi-column-forms" />,
  //         type: 'item',
  //         url: '/forms/layouts/multi-column-forms'
  //       },
  //       {
  //         id: 'frm-action-bar',
  //         title: <FormattedMessage id="action-bar" />,
  //         type: 'item',
  //         url: '/forms/layouts/action-bar'
  //       },
  //       {
  //         id: 'frm-sticky-action-bar',
  //         title: <FormattedMessage id="sticky-action-bar" />,
  //         type: 'item',
  //         url: '/forms/layouts/sticky-action-bar'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'tables',
  //     title: <FormattedMessage id="table" />,
  //     type: 'collapse',
  //     icon: icons.IconBorderAll,
  //     children: [
  //       {
  //         id: 'tbl-basic',
  //         title: <FormattedMessage id="table-basic" />,
  //         type: 'item',
  //         url: '/forms/tables/tbl-basic',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'tbl-dense',
  //         title: <FormattedMessage id="table-dense" />,
  //         type: 'item',
  //         url: '/forms/tables/tbl-dense',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'tbl-enhanced',
  //         title: <FormattedMessage id="table-enhanced" />,
  //         type: 'item',
  //         url: '/forms/tables/tbl-enhanced',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'tbl-data',
  //         title: <FormattedMessage id="table-data" />,
  //         type: 'item',
  //         url: '/forms/tables/tbl-data',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'tbl-customized',
  //         title: <FormattedMessage id="table-customized" />,
  //         type: 'item',
  //         url: '/forms/tables/tbl-customized',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'tbl-sticky-header',
  //         title: <FormattedMessage id="table-sticky-header" />,
  //         type: 'item',
  //         url: '/forms/tables/tbl-sticky-header',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'tbl-collapse',
  //         title: <FormattedMessage id="table-collapse" />,
  //         type: 'item',
  //         url: '/forms/tables/tbl-collapse',
  //         breadcrumbs: false
  //       }
  //     ]
  //   },
  //   {
  //     id: 'data-grid',
  //     title: <FormattedMessage id="data-grid" />,
  //     type: 'collapse',
  //     icon: icons.IconTable,
  //     children: [
  //       {
  //         id: 'data-grid-basic',
  //         title: <FormattedMessage id="data-grid-basic" />,
  //         type: 'item',
  //         url: '/forms/data-grid/data-grid-basic',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'data-grid-inline-editing',
  //         title: <FormattedMessage id="data-grid-inline-editing" />,
  //         type: 'item',
  //         url: '/forms/data-grid/data-grid-inline-editing',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'data-grid-column-groups',
  //         title: <FormattedMessage id="data-grid-column-groups" />,
  //         type: 'item',
  //         url: '/forms/data-grid/data-grid-column-groups',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'data-grid-save-restore',
  //         title: <FormattedMessage id="data-grid-save-restore" />,
  //         type: 'item',
  //         url: '/forms/data-grid/data-grid-save-restore',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'data-grid-quick-filter',
  //         title: <FormattedMessage id="data-grid-quick-filter" />,
  //         type: 'item',
  //         url: '/forms/data-grid/data-grid-quick-filter',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'data-grid-column-visibility',
  //         title: <FormattedMessage id="data-grid-column-visibility" />,
  //         type: 'item',
  //         url: '/forms/data-grid/data-grid-column-visibility',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'data-grid-column-virtualization',
  //         title: <FormattedMessage id="data-grid-column-virtualization" />,
  //         type: 'item',
  //         url: '/forms/data-grid/data-grid-column-virtualization',
  //         breadcrumbs: false
  //       },
  //       {
  //         id: 'data-grid-column-menu',
  //         title: <FormattedMessage id="data-grid-column-menu" />,
  //         type: 'item',
  //         url: '/forms/data-grid/data-grid-column-menu',
  //         breadcrumbs: false
  //       }
  //     ]
  //   },
  //   {
  //     id: 'charts',
  //     title: <FormattedMessage id="charts" />,
  //     type: 'collapse',
  //     icon: icons.IconChartDots,
  //     children: [
  //       {
  //         id: 'apexchart',
  //         title: <FormattedMessage id="apexchart" />,
  //         type: 'item',
  //         url: '/forms/charts/apexchart'
  //       },
  //       {
  //         id: 'organization-chart',
  //         title: <FormattedMessage id="organization-chart" />,
  //         type: 'item',
  //         url: '/forms/charts/orgchart'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'map',
  //     title: <FormattedMessage id="map" />,
  //     type: 'item',
  //     icon: icons.IconMapPin,
  //     url: '/forms/map'
  //   },
  //   {
  //     id: 'forms-validation',
  //     title: <FormattedMessage id="forms-validation" />,
  //     type: 'item',
  //     url: '/forms/forms-validation',
  //     icon: icons.IconClipboardCheck
  //   },
  //   {
  //     id: 'forms-wizard',
  //     title: <FormattedMessage id="forms-wizard" />,
  //     type: 'item',
  //     url: '/forms/forms-wizard',
  //     icon: icons.IconStairsUp
  //   }
  // ]
};

export default forms;
