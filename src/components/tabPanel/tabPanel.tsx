import { Box } from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{height: '100%', paddingTop: 10}}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} style={{height: '100%', padding: 4}}>
                    {children}
                </Box>
            )}
        </div>
    );
}