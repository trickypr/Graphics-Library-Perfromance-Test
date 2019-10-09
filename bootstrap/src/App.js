import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, InputGroup, Card, CardBody, CardTitle, CardText } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Card style={{ width: 300 }}>
        <CardBody>
          <CardTitle>
          Totally a card
          </CardTitle>
          <CardText>Keyboard mashing:</CardText>
          <CardText>skdjgdfjfgsd dffgadjhg aeiot li.aesljtg aiwu tpserita;sej ldzjg ;akjwet oaweit itlkdgj lrak tj;ru guporartu akrrjflaksgj ;agja;srjtgoag;adjtgiwiJRAPT JAE AEITRHJ POAESIT APEWEIP TAIWJTR OWIT POAERITPOUwr oritO JPu tilj tpiajrt oai  roptjerakltgnep pitawe[it poaerut eraiut oparit opaerit poaerit aeroit[apwr.sdfg ear-]t wertjweoptuae o;tr au e,mfng st o;awi[-t wlktjwr;ot jepog erlrkjg ope tjpeorgj eorptu </CardText>
        </CardBody>
      </Card>

      <Button color="primary">I am a button</Button>

      <InputGroup>
        <Input placeholder="Enter keyboard spam" />
      </InputGroup>
    </div>
  );
}

export default App;
