// import { List, Typography, Dialog } from "@material-ui/core";
// import InfoItem from "../../components/List/InfoItem";
// import { makeStyles } from "@material-ui/core/styles";
// import { useState } from "react";
// import { capitalizeFirstLetter } from "../../utils/stringUtils";
// import { MailOutline } from "@material-ui/icons";
// const useStyles = makeStyles((theme) => ({
//   infoList: {
//     width: "100%",
//   },
// }));

// export default function PatientInfoList({ patient }) {
//   const classes = useStyles();

//   const [isPedigreeChartDialogOpen, setPedigreeChartDialogOpen] = useState(
//     false
//   );
//     console.log(InfoItem)
//   return (
//     <List className={classes.infoList}>

//       {/* {Object.keys(patient).map(
//         (key) =>
//           fieldMeta[key] &&  (
//             <InfoItem
//               key={key}
//               icon={fieldMeta[key].icon}
//               title={fieldMeta[key].label}
//             ></InfoItem>
//           )
//       )}

//       {/* <InfoItem */}
//         icon={AccountTreeOutlined}
//         title="Pedigree Chart:"
//         content={
//           <Button
//             variant="outlined"
//             onClick={() => setPedigreeChartDialogOpen(true)}
//           >
//             View Chart
//           </Button>
//         }
//       />

//       <Dialog
//         open={isPedigreeChartDialogOpen}
//         onClose={() => {
//           setPedigreeChartDialogOpen(false);
//         }}
//       >
//         <StaticPedigreeChart
//           chartData={patient.pedigreeChart}
//           failComponent={
//             <Box p={2}>
//               <Typography variant="subtitle1">Not Available</Typography>
//             </Box>
//           }
//         />
//       </Dialog>

//       {Object.keys(patient.diagnosisTreatment).map((key) => (
//         <InfoItem
//           key={key}
//           icon={HealingOutlined}
//           title={key}
//           content={patient.diagnosisTreatment[key] || "No Treatment."}
//         />
//       ))} */}
//     </List>
//   );
// }
