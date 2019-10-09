import React from 'react';

import {Card, CardContent, Typography, Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: { 
    width: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

function App() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h2" component="h2">
          Totally a card
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Keyboard mashing:
          </Typography>
          <Typography variant="body2" component="p">
          skdjgdfjfgsd dffgadjhg aeiot li.aesljtg aiwu tpserita;sej ldzjg ;akjwet oaweit itlkdgj lrak tj;ru guporartu akrrjflaksgj ;agja;srjtgoag;adjtgiwiJRAPT JAE AEITRHJ POAESIT APEWEIP TAIWJTR OWIT POAERITPOUwr oritO JPu tilj tpiajrt oai  roptjerakltgnep pitawe[it poaerut eraiut oparit opaerit poaerit aeroit[apwr.sdfg ear-]t wertjweoptuae o;tr au e,mfng st o;awi[-t wlktjwr;ot jepog erlrkjg ope tjpeorgj eorptu 
          </Typography>
        </CardContent>
      </Card>

      <Button color="primary" className={classes.button}>
      I am a button
      </Button>

      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value="Enter keyboard spam"
        margin="normal"
        variant="outlined"
      />
    </div>
  );
}

export default App;
