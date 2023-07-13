import React from "react";
import {
  DropDownContainer,
  SearchContainer,
  SidebarContainer,
  SliderText,
  StyledMenu,
  StyledSlider,
  StyledSwitch,
  SwitchContainer,
} from "./Sidebar.styled";
import { Search, KeyboardArrowDown } from "@mui/icons-material";
import { MenuItem } from "@mui/material";

// function valueText(value) {
//   return `${value}°C`;
// }

const minDistance = 1;

const Sidebar = ({
  searchText,
  setSearchText,
  categories,
  category,
  setCategory,
  sortBy,
  setSortBy,
  lowestPrice,
  highestPrice,
  value1,
  setValue1,
}) => {
  const elementRef1 = React.useRef(null);
  const dropDownWidth1 = elementRef1?.current?.offsetWidth;

  const elementRef2 = React.useRef(null);
  const dropDownWidth2 = elementRef2?.current?.offsetWidth;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  // const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <>
      <SidebarContainer>
        <h1>Shop</h1>
        <SearchContainer>
          <input
            type="text"
            placeholder="Search.."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Search />
        </SearchContainer>
        <DropDownContainer onClick={handleClick} ref={elementRef1}>
          <p>Shop By</p>
          <KeyboardArrowDown />
        </DropDownContainer>
        <StyledMenu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            "& .MuiPaper-root": {
              width: dropDownWidth1,
            },
          }}
        >
          {/* <MenuItem onClick={handleClose}>Phones</MenuItem>
          <MenuItem onClick={handleClose}>Cars</MenuItem> */}
          {categories?.map((myCategory, i) => {
            return (
              <MenuItem
                key={i}
                onClick={(e) => {
                  if (category === myCategory) {
                    setCategory(undefined);
                  } else {
                    setCategory(myCategory);
                  }
                  handleClose();
                }}
                className={category === myCategory ? "active" : ""}
              >
                {myCategory}
              </MenuItem>
            );
          })}
        </StyledMenu>

        <DropDownContainer onClick={handleClick2} ref={elementRef2}>
          <p>Sort By</p>
          <KeyboardArrowDown />
        </DropDownContainer>
        <StyledMenu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          sx={{
            "& .MuiPaper-root": {
              width: dropDownWidth2,
            },
          }}
        >
          <MenuItem
            onClick={() => {
              if (sortBy === "price") {
                setSortBy(undefined);
              } else {
                setSortBy("price");
              }
              handleClose2();
            }}
            className={sortBy === "price" ? "active" : ""}
          >
            Price
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (sortBy === "rating") {
                setSortBy(undefined);
              } else {
                setSortBy("rating");
              }
              handleClose2();
            }}
            className={sortBy === "rating" ? "active" : ""}
          >
            rating
          </MenuItem>
        </StyledMenu>
        <div
          style={{
            marginTop: "3rem",
            marginBottom: "5rem",
          }}
        >
          <StyledSlider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            // getAriaValueText={valueText}
            min={lowestPrice}
            max={highestPrice}
            // step={1}
            disableSwap
          />
          <SliderText>
            <p>
              Price: ${value1[0]} - ${value1[1]}
            </p>
            <button>Filter</button>
          </SliderText>
        </div>
        <SwitchContainer>
          <p> On Sale</p>
          <StyledSwitch
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </SwitchContainer>
        <SwitchContainer>
          <p>On Stock</p>
          <StyledSwitch
            // checked={checked}
            // onChange={handSleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </SwitchContainer>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
