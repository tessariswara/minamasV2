'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import useConfig from 'hooks/useConfig';

// third-party
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// chart options
const pieChartOptions = {
  chart: {
    type: 'pie',
    width: 450,
    height: 450
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  legend: {
    show: true,
    fontFamily: `'Roboto', sans-serif`,
    offsetX: 10,
    offsetY: 10,
    labels: {
      useSeriesColors: false
    },
    markers: {
      width: 12,
      height: 12,
      radius: 5
    },
    itemMargin: {
      horizontal: 25,
      vertical: 4
    }
  },
  responsive: [
    {
      breakpoint: 450,
      chart: {
        width: 280,
        height: 280
      },
      options: {
        legend: {
          show: false,
          position: 'bottom'
        }
      }
    }
  ]
};

// ==============================|| PIE CHART ||============================== //

const ApexPieChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const divider = theme.palette.divider;
  const backColor = theme.palette.background.paper;

  const [series] = useState([44, 55, 13, 43, 22]);
  const [options, setOptions] = useState(pieChartOptions);

  const secondary = theme.palette.secondary.main;
  const primaryMain = theme.palette.primary.main;
  const successDark = theme.palette.success.dark;
  const error = theme.palette.error.main;
  const warningDark = theme.palette.warning.dark;
  const orangeDark = theme.palette.orange.dark;

  React.useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [secondary, primaryMain, successDark, error, warningDark, orangeDark],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary]
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
      legend: {
        labels: {
          colors: 'grey.500'
        }
      },
      stroke: {
        colors: [backColor]
      }
    }));
  }, [mode, primary, darkLight, divider, backColor, secondary, primaryMain, successDark, error, warningDark, orangeDark]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default ApexPieChart;
