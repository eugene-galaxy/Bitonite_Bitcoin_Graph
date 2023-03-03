import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { OverviewKpi } from "src/sections/overview/overview-kpi";
import { OverviewSummary } from "src/sections/overview/overview-summary";
import MovingIcon from "@mui/icons-material/Moving";
import GreenField from "../components/green-field";
import axios from "axios";
const Page = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState("0");
  const [btcValue, setBTCValue] = useState("1");
  const [usdValue, setUSDValue] = useState("0");
  const GetBitcoinPrice = () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price",
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
      headers: {
        "X-RapidAPI-Key": "d623fb23ecmshd386c906168f748p101ee6jsneb4c679123b9",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setBitcoinPrice((parseInt(response.data.data.price * 100) / 100).toFixed(2));
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    GetBitcoinPrice();
  }, []);
  useEffect(() => {
    setUSDValue((btcValue * bitcoinPrice).toString());
  }, [bitcoinPrice]);
  return (
    <>
      <Helmet>
        <title>BITONITE</title>
      </Helmet>
      <Box
        sx={{
          flexGrow: 2,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">BTC Stats</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid sm={12} md={3}>
                  <GreenField
                    title="Live Price"
                    description={null}
                    current_cost="$23.966.20"
                    plus_cost="+$102,90 (5.13%) today"
                  />
                </Grid>
                <Grid sm={12} md={3}>
                  <GreenField
                    title="Market Cap"
                    description=""
                    current_cost="$462,076,024,891"
                    plus_cost={null}
                    sub_cost={null}
                  />
                </Grid>
                <Grid sm={12} md={3}>
                  <GreenField
                    title="24h Volume"
                    description="A measure of how much of a cryptocurrency was traded in the last 24 hours."
                    current_cost="$30,987,456,006"
                    plus_cost={null}
                    sub_cost="1,292,892 BTC"
                  />
                </Grid>
                <Grid sm={12} md={3}>
                  <GreenField
                    title="Today's Change"
                    description={null}
                    current_cost="+$102,90"
                    plus_cost="(5.13%) today"
                    isActive={true}
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <div>
                <Typography variant="h4">BTC Chart</Typography>
              </div>
              <div>
                <div style={{ height: "100%", display: "grid" }}>
                  <span
                    style={{
                      margin: "0",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      fontFamily: "Inter,sans-serif",
                      color: "rgb(102, 112, 133)",
                    }}
                  >
                    Live Price
                  </span>
                  <div style={{ bottom: "0px", display: "grid", justifyContent: "flex-start" }}>
                    <h6
                      style={{
                        margin: "auto",
                        marginLeft: "0px",
                        marginBottom: "0px",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "1.5",
                        fontFamily: "Inter,sans-serif",
                      }}
                    >
                      {"$" + bitcoinPrice}
                    </h6>
                    <span
                      style={{
                        margin: "auto",
                        marginLeft: "0px",
                        marginBottom: "0px",
                        fontSize: "10px",
                        fontWeight: "600",
                        lineHeight: "1.5",
                        fontFamily: "Inter,sans-serif",
                        padding: "1px 10px",
                        background: "#08705570",
                        color: "#087055",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <MovingIcon sx={{ fontSize: "large", marginRight: "2px" }} />
                      {"+$102,90 (5.13%) today"}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: "24px" }}>
                <Grid container spacing={3}>
                  <Grid md={8}>
                    <OverviewKpi />
                  </Grid>
                </Grid>
              </div>
            </div>
            <div>{/* <Typography variant="h4">BTC to USD Converter</Typography> */}</div>
            <Grid container>
              <Grid xs={12} md={4}>
                <OverviewSummary
                  icon={""}
                  label="BTC"
                  value={btcValue}
                  bitcoinPrice={bitcoinPrice}
                  setBTCValue={setBTCValue}
                  setUSDValue={setUSDValue}
                />
              </Grid>
              <Grid
                xs={12}
                md={1}
                sx={{
                  display: "flex",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    padding: "0px",
                    margin: "auto",
                    borderRadius: "50%",
                    background: "#c6ff03",
                    display: "flex",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <span style={{ margin: "auto", color: "black" }}>=</span>
                </div>
              </Grid>
              <Grid xs={12} md={4}>
                <OverviewSummary
                  icon={""}
                  label="USD"
                  value={usdValue}
                  bitcoinPrice={bitcoinPrice}
                  setBTCValue={setBTCValue}
                  setUSDValue={setUSDValue}
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
