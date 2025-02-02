'use client';

import React from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

// project imports
import FriendsCard from 'components/ui-component/cards/FriendsCard';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { dispatch, useSelector } from 'store';
import { getFriends, filterFriends } from 'store/slices/user';

// assets
import { IconSearch } from '@tabler/icons-react';

// ==============================|| SOCIAL PROFILE - FRIENDS ||============================== //

const Friends = () => {
  const [friends, setFriends] = React.useState([]);
  const userState = useSelector((state) => state.user);

  React.useEffect(() => {
    setFriends(userState.friends);
  }, [userState]);

  React.useEffect(() => {
    dispatch(getFriends());
  }, []);

  let friendsResult = <></>;
  if (friends) {
    friendsResult = friends.map((friend, index) => (
      <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <FriendsCard {...friend} />
      </Grid>
    ));
  }

  const [search, setSearch] = React.useState('');
  const handleSearch = async (event) => {
    const newString = event?.target.value;
    setSearch(newString);

    if (newString) {
      dispatch(filterFriends(newString));
    } else {
      dispatch(getFriends());
    }
  };

  return (
    <MainCard
      title={
        <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
          <Grid item>
            <Typography variant="h3">
              Friends{' '}
              <Typography variant="h3" component="span" sx={{ color: 'grey.300', fontWeight: 500 }}>
                (463)
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <OutlinedInput
              size="small"
              id="input-search-user-profile"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              startAdornment={
                <InputAdornment position="start">
                  <IconSearch stroke={1.5} size="16px" />
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
      }
    >
      <Grid container direction="row" spacing={gridSpacing}>
        {friendsResult}
      </Grid>
    </MainCard>
  );
};

export default Friends;
