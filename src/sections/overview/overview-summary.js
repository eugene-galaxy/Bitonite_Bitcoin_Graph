import PropTypes from "prop-types";
import { Card, Stack, Typography } from "@mui/material";

export const OverviewSummary = (props) => {
  const { icon, label, value, bitcoinPrice, setUSDValue, setBTCValue } = props;
  const onChange = (e) => {
    if (label === "BTC") {
      setBTCValue(e.target.value);
      setUSDValue((e.target.value * bitcoinPrice).toFixed(2));
    } else {
      setUSDValue(e.target.value);
      setBTCValue((parseInt((e.target.value / bitcoinPrice) * 1000000) / 1000000).toString());
    }
  };
  return (
    <Card>
      <Stack alignItems="center" direction="row" spacing={2} sx={{ p: 1 }}>
        {icon}
        <div style={{ width: "100%" }}>
          <Typography color="text.secondary" variant="overline">
            {label}
          </Typography>
          <Typography variant="h6">
            <input
              type="number"
              value={value}
              onChange={onChange}
              style={{
                background: "transparent",
                border: "transparent",
                color: "white",
                fontSize: "20px",
                width: "100%",
              }}
            />
          </Typography>
        </div>
      </Stack>
    </Card>
  );
};

OverviewSummary.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  setBTCValue: PropTypes.func.isRequired,
  setUSDValue: PropTypes.func.isRequired,
  bitcoinPrice: PropTypes.string.isRequired,
};
