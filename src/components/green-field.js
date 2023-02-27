import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import MovingIcon from "@mui/icons-material/Moving";
const GreenField = (props) => {
  const {
    color: colorProp = "primary",
    title,
    description,
    current_cost,
    plus_cost,
    sub_cost,
    isActive,
  } = props;
  const theme = useTheme();

  const color =
    colorProp === "primary"
      ? theme.palette.primary.main
      : colorProp === "black"
      ? "#1D262D"
      : "#FFFFFF";

  return (
    // <svg
    //   fill="none"
    //   height="100%"
    //   viewBox="0 0 24 25"
    //   width="100%"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     clipRule="evenodd"
    //     d="M20.8962 14.6031C22.7584 14.6031 23.97 16.5899 23.0899 18.2308C21.019 22.0913 16.8744 24.6739 12.1469 24.4908C5.99299 24.2526 0.981695 19.2348 0.750849 13.0807C0.496994 6.3132 5.90787 0.747423 12.6187 0.747423C17.132 0.747423 21.0588 3.26644 23.0674 6.97506C23.964 8.63081 22.7796 10.6443 20.8967 10.6443C19.9998 10.6443 19.1579 10.1676 18.7362 9.3758C17.4672 6.99312 14.844 5.4346 11.9012 5.73225C8.57113 6.06924 5.92891 8.81192 5.70648 12.1516C5.43778 16.1846 8.64214 19.5515 12.6187 19.5515C15.2538 19.5515 17.5513 18.0717 18.7207 15.9003C19.1517 15.1004 19.9877 14.6031 20.8962 14.6031Z"
    //     fill={color}
    //     fillRule="evenodd"
    //   />
    //   <path
    //     clipRule="evenodd"
    //     d="M16.5774 12.6237C16.5774 14.8102 14.8049 16.5825 12.6187 16.5825C10.4322 16.5825 8.65991 14.8102 8.65991 12.6237C8.65991 10.4372 10.4322 8.66495 12.6187 8.66495C14.8049 8.66495 16.5774 10.4372 16.5774 12.6237Z"
    //     fill={color}
    //     fillRule="evenodd"
    //     opacity="0.5"
    //   />
    // </svg>
    <>
      <div
        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1rms08z-MuiPaper-root-MuiCard-root"
        style={{ height: "100%" }}
      >
        <div
          style={{
            padding: "20px",
            height: "100%",
            display: "grid",
            backgroundColor: "#1d1d1d",
            borderRadius: ".4em",
          }}
        >
          <span
            style={{
              margin: "0",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "1.5",
              fontFamily: "Inter,sans-serif",
              color: "rgb(102, 112, 133)",
              textDecoration: "underline",
            }}
          >
            {title}
          </span>
          {description === null || description === "" ? null : (
            <div
              className="MuiPaper-rounded"
              style={{
                fontSize: "12px",
                background: "#3c3b3bcc",
                padding: "1em",
                borderRadius: "5px",
                margin: "1.5em 0",
                color: "#667085",
              }}
            >
              {description}
            </div>
          )}
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
                overflowWrap: "anywhere",
                color: isActive == true ? "#087055" : "",
              }}
            >
              {current_cost}
            </h6>
            {plus_cost && (
              <span
                style={{
                  fontSize: "10px",
                  margin: "auto",
                  marginLeft: "0px",
                  marginBottom: "0px",
                  padding: "1px 10px",
                  background: "#08705570",
                  color: "#087055",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MovingIcon sx={{ fontSize: "large", marginRight: "2px" }} />
                {plus_cost}
              </span>
            )}
            {sub_cost && (
              <span
                style={{
                  fontSize: "10px",
                  margin: "auto",
                  marginLeft: "0px",
                  marginTop: "5px",
                  color: "rgb(102, 112, 133)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {sub_cost}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

GreenField.propTypes = {
  color: PropTypes.oneOf(["black", "primary", "white"]),
};

export default GreenField;
