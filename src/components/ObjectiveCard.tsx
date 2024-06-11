import * as React from "react";
import Grid from "@mui/material/Grid";

import Styles from "./ObjectiveCard.module.css";
type ObjectiveCardProps = {
 number: string;
 objective: string;
};

const ObjectiveCard = ({ number, objective }: ObjectiveCardProps) => {
 return (
  <>
   <div className={Styles.Container}>
    <div className={Styles.Card}>
     <Grid container spacing={2}>
      <Grid item xs={12}>
       <div className={Styles.Number}>{number}</div>
      </Grid>
      <Grid item xs={12}>
       <div className={Styles.Objective}>{objective}</div>
      </Grid>
     </Grid>
    </div>
   </div>
  </>
 );
};

export default ObjectiveCard;
