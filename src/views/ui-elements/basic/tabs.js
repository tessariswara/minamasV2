'use client';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import SimpleTabs from 'components/ui-elements/basic/UITabs/SimpleTabs';
import ColorTabs from 'components/ui-elements/basic/UITabs/ColorTabs';
import DisabledTabs from 'components/ui-elements/basic/UITabs/DisabledTabs';
import IconTabs from 'components/ui-elements/basic/UITabs/IconTabs';
import VerticalTabs from 'components/ui-elements/basic/UITabs/VerticalTabs';

import SubCard from 'components/ui-component/cards/SubCard';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ================================|| UI TABS ||================================ //

const UITabs = () => (
  <MainCard title="Tabs" secondary={<SecondaryAction link="https://next.material-ui.com/components/tabs/" />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6}>
        <SubCard title="Basic">
          <SimpleTabs />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <SubCard title="Color Tab">
          <ColorTabs />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <SubCard title="Icon Tabs">
          <IconTabs />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <SubCard title="Disabled Tabs">
          <DisabledTabs />
        </SubCard>
      </Grid>
      <Grid item xs={12}>
        <SubCard title="Vertical Tabs">
          <VerticalTabs />
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default UITabs;
