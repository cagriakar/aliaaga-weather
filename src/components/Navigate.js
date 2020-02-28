import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TodayIcon from "@material-ui/icons/Today";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import EventIcon from "@material-ui/icons/Event";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

let today = new Date();
let tomorrow = new Date();
let otherDay = new Date();

tomorrow.setDate(today.getDate() + 1);
otherDay.setDate(tomorrow.getDate() + 1);

function Navigate() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="nav my-2">
      <BottomNavigation showLabels="true" value={value} onChange={handleChange}>
        <BottomNavigationAction
          className="link"
          label="Today"
          value="today"
          icon={<TodayIcon />}
          component={Link}
          to="/"
        ></BottomNavigationAction>
        <BottomNavigationAction
          className="link"
          label="Tomorrow"
          value="tomorrow"
          icon={<CalendarTodayIcon />}
          component={Link}
          to="/yarin"
        ></BottomNavigationAction>
        <BottomNavigationAction
          className="link"
          label={`${otherDay.toLocaleDateString()}`}
          value={`${otherDay.toLocaleDateString()}`}
          icon={<EventIcon />}
          component={Link}
          to="/ertesi-gün"
        ></BottomNavigationAction>
      </BottomNavigation>
    </Container>
  );
}

export default Navigate;