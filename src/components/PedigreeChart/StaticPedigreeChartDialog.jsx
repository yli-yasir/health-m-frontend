import { Box, Typography, Dialog } from "@material-ui/core";
import StaticPedigreeChart from "./StaticPedigreeChart";

export default function StaticPedigreeChartDialog(props) {
  const { isOpen, onClose, chartData } = props;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <StaticPedigreeChart
        chartData={chartData}
        failComponent={
          <Box p={2}>
            <Typography variant="subtitle2">Not Available</Typography>
          </Box>
        }
      />
    </Dialog>
  );
}
