import { Menu, Slider, Switch, styled } from "@mui/material";

export const SidebarContainer = styled("div")(({ theme }) => ({
  // flexBasis: "27%",
  width: "100%",
  display: "flex",
  flexDirection: "column",

  "& h1": {
    fontSize: "2.0625rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "2.6875rem",
    marginBottom: "2rem",
  },
}));

export const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  paddingBottom: "0.69rem",
  marginBottom: "1.5rem",
  justifyContent: "space-between",

  "& input": {
    outline: "none",
    border: "none",
    "&::placeholder": {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "1.375rem",
    },
  },

  "& svg": {
    fill: "#000000",
    cursor: "pointer",
  },
}));

export const DropDownContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  border: `1px solid ${theme.palette.grayColor2}`,
  borderRadius: "0.25rem",
  padding: "1rem",
  marginTop: "1rem",
  cursor: "pointer",

  "& p": {
    fontSize: " 0.875rem",
    lineHeight: " 1.375rem",
  },
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "*": {
    boxShadow: "none",
  },
  // width: "100%",

  "& .MuiPaper-root": {
    border: `1px solid ${theme.palette.grayColor2}`,
    width: "188px",
    boxShadow: "none",
  },

  ul: {
    padding: "0",
  },

  "& li": {
    padding: "12px 8px",
    "&.active": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
}));

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: "#000",

  "& .MuiSlider-thumb": {
    borderRadius: "0",
    width: "0.5rem",
    height: "1rem",
    "&:hover": {
      boxShadow: "none",
    },
  },

  "& .MuiSlider-track": {
    height: "0.3rem",
  },

  "& .MuiSlider-rail": {
    height: "0.3rem",
    borderRadius: "0",
  },
}));

export const SliderText = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "0.75rem 0",
  alignItems: "center",

  "& p": {
    fontSize: " 1.2rem",
    lineHeight: " 1.375rem",
    color: theme.palette.grayColor,
  },

  "& button": {
    border: "none",
    backgroundColor: "transparent",
    fontSize: " 1.2rem",
    lineHeight: " 1.375rem",
    color: theme.palette.grayColor,
    cursor: "pointer",
    outline: "none",
  },
}));

export const SwitchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2.5rem",
}));

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  // "& .MuiSwitch-track": {
  //   height: 20,
  // },

  // "& .MuiSwitch-thumb": {
  //   height: 20,
  //   width: 20,
  // },
  width: 30,
  height: 18,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 17,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 14,
    height: 14,
    borderRadius: "50%",
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
