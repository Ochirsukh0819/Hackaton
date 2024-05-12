"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Documents from "../Documents";
import { CarouselSpacing } from "../Carousel";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function LectureTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 350,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Лекц 1" {...a11yProps(0)} />
          <Tab label="Лекц 2" {...a11yProps(1)} />
          <Tab label="Лекц 3" {...a11yProps(2)} />
          <Tab label="Лекц 4" {...a11yProps(3)} />
          <Tab label="Лекц 5" {...a11yProps(4)} />
          <Tab label="Лекц 6" {...a11yProps(5)} />
          <Tab label="Лекц 7" {...a11yProps(6)} />
          <Tab label="Лекц 8" {...a11yProps(6)} />
          <Tab label="Лекц 9" {...a11yProps(6)} />
          <Tab label="Лекц 10" {...a11yProps(6)} />
          <Tab label="Лекц 11" {...a11yProps(6)} />
          <Tab label="Лекц 12" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div>
            {" "}
            <CarouselSpacing />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </div>
  );
}
