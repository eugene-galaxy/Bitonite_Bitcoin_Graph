import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Card, CardContent, CardHeader, Divider, Button, ButtonGroup } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import moment from "moment";
const useChartOptions = (chartCategory) => {
  const theme = useTheme();
  return {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      show: true,
    },
    colors: [theme.palette.primary.main],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    tooltip: {
      x: {
        format: "yyyy-MM-dd HH:mm",
      },
    },
    grid: {
      borderColor: theme.palette.divider,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      width: 3,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      // tickAmount: 10,
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: chartCategory,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: -12,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

let stats = [
  {
    label: "24h",
  },
  {
    label: "7d",
  },
  {
    label: "30d",
  },
  {
    label: "3m",
  },
  {
    label: "1y",
  },
];
export const OverviewKpi = (props) => {
  const [chartSeries, setChartSeries] = useState([]);
  const [chartCategory, setChartCategory] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const chartOptions = useChartOptions(chartCategory);
  const [period, setPeriod] = useState("24h");
  useEffect(() => {
    GetBitcoinPriceHistory(period);
  }, []);
  const GetBitcoinPriceHistory = (period) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: period },
      headers: {
        "X-RapidAPI-Key": "d623fb23ecmshd386c906168f748p101ee6jsneb4c679123b9",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.data.history);
        let bitPriceHistory = [],
          bitTimeHistory = [];
        for (let i = response.data.data.history.length - 1; i >= 0; i--) {
          bitPriceHistory.push(
            parseInt((response.data.data.history[i].price * 100).toFixed()) / 100
          );
          bitTimeHistory.push(response.data.data.history[i].timestamp * 1000);
        }
        setChartCategory(bitTimeHistory);
        setChartSeries([{ data: bitPriceHistory, name: "Bitcoin Price" }]);
        setLoading(false);
        setPeriod(period);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <Card>
      {!loading ? (
        <CardHeader title={"Bitcoin Price Changes in " + period} />
      ) : (
        <img
          src="assets/loading.gif"
          alt="loading..."
          style={{ width: "50px", height: "50px", marginLeft: "25px" }}
        />
      )}
      <Divider />
      <CardContent>
        <Box
          sx={{
            gap: 3,
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(5, 1fr)",
              sm: "repeat(2, 1fr)",
              xs: "repeat(1, 1fr)",
            },
          }}
        >
          <ButtonGroup>
            {stats.map((item, index) => (
              <Button key={index} onClick={() => GetBitcoinPriceHistory(item.label)}>
                {item.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Chart height="350" width="100%" options={chartOptions} series={chartSeries} type="area" />
      </CardContent>
    </Card>
  );
};
