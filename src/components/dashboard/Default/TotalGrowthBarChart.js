'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// project imports
import useConfig from 'hooks/useConfig';
import SkeletonTotalGrowthBarChart from 'components/ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { ThemeMode } from 'config';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// chart data
const chartOptions = {
  chart: {
    height: 480,
    type: 'bar',
    id: 'bar-chart',
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%'
    }
  },
  xaxis: {
    type: 'category',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  legend: {
    show: true,
    fontFamily: `'Roboto', sans-serif`,
    position: 'bottom',
    offsetX: 20,
    labels: {
      useSeriesColors: false
    },
    markers: {
      width: 16,
      height: 16,
      radius: 5
    },
    itemMargin: {
      horizontal: 15,
      vertical: 8
    }
  },
  fill: {
    type: 'solid'
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    show: true
  }
};

const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
  const [series] = useState([
    {
      name: 'Sungai Cengal Estate',
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
    },
    {
      name: 'Bebunga Factory',
      data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
    },
    {
      name: 'Berbunga Estate',
      data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
    },
    {
      name: 'Bakau Estate',
      data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
    }
  ]);

  const [value, setValue] = useState('today');
  const theme = useTheme();
  const { mode } = useConfig();

  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const divider = theme.palette.divider;
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  const [options, setOptions] = useState(chartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: divider
      },
      tooltip: {
        theme: mode
      },
      legend: {
        labels: {
          colors: grey500
        }
      }
    }));
  }, [mode, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, divider, isLoading, grey500]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1">1839 L</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                '& .apexcharts-menu.apexcharts-menu-open': {
                  bgcolor: mode === ThemeMode.DARK ? 'background.default' : 'background.paper'
                }
              }}
            >
              <ReactApexChart options={options} series={series} type="bar" height={480} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
