import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tablelist from './Tablelist';
import Notanswered from './Notanswered';
import Nochannel from './Nochannel';
import Noinput from './Noinput';
import Busy from './Busy';
import Nocredit from './Nocredit';
import Unavailable from './Unavailable';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Answered" {...a11yProps(0)} />
                    <Tab label="Not Answered" {...a11yProps(1)} />
                    <Tab label="No channel" {...a11yProps(2)} />
                    <Tab label="No input" {...a11yProps(3)} />
                    <Tab label="Busy" {...a11yProps(4)} />
                    <Tab label="No Credit" {...a11yProps(5)} />
                    <Tab label="Unavailable" {...a11yProps(6)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Tablelist />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Notanswered/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <Nochannel/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Noinput/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <Busy/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <Nocredit/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
                <Unavailable/>
            </CustomTabPanel>
        </Box>
    );
}