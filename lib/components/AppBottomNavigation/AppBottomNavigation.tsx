import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CropSquareIcon from "@material-ui/icons/CropSquare";
import LayersIcon from "@material-ui/icons/Layers";
import PersonIcon from "@material-ui/icons/Person";
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

const _AppBottomNavigation: React.FC<{
  location: { pathname: string };
}> = props => {
  const [nav, setNav] = useState(0);

  useEffect(() => {
    if (location.pathname.startsWith("/game")) {
      return setNav(1);
    }
    if (location.pathname.startsWith("/scene")) {
      return setNav(2);
    }
    if (location.pathname.startsWith("/dice")) {
      return setNav(3);
    } else {
      return setNav(0);
    }
  }, [location.pathname]);

  return (
    <BottomNavigation
      value={nav}
      onChange={(event, newValue) => {
        setNav(newValue);
      }}
      showLabels
      style={{
        zIndex: 1,
        position: "fixed",
        bottom: "0",
        width: "100%",
        left: "0",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
      }}
    >
      <BottomNavigationAction
        label=""
        component={Link}
        to="/"
        style={{ display: "none" }}
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="Characters"
        component={Link}
        to="/games"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="Scenes"
        component={Link}
        to="/scenes"
        icon={<LayersIcon />}
      />
      <BottomNavigationAction
        label="Dice"
        component={Link}
        to="/dice"
        icon={<CropSquareIcon />}
      />
    </BottomNavigation>
  );
};

export const AppBottomNavigation = withRouter(_AppBottomNavigation as any);