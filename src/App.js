import './App.css';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
  },
  topRow: {
    display: 'flex',
    height: '75px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    fontSize: 8,
    margin: theme.spacing(1),
    backgroundColor: 'blue',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  info: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  tableContainer: {
    width: '80%'
  }
}));



function App() {

  const classes = useStyles();

  const [accessKey, setAccessKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [instances, setInstances] = useState('');

  async function makeRequest(endpoint, data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessKeyId: accessKey, secretAccessKey: secretKey, ...data})
    };
    const response = await fetch(`https://minecraftbackend.herokuapp.com/${endpoint}`, requestOptions);
    return response.json();
  }

  async function getCurrentInfo() {
    const data = await makeRequest('instances', {});
    setInstances(data);
  }

  async function launchNewInstance() {
    if(Object.keys(instances).length == 0) {
      const data = await makeRequest('start-mc', {});
    }
  }

  async function terminateInstance(instanceId, instanceIp) {
    const data = await makeRequest('terminate', {instance_id: instanceId, instance_ip: instanceIp});
    console.log(data);
  }

  return (
    <div className="App">
      <div className={classes.title}> 
        Riley/Aquinn Minecraft Server Tool Website
      </div>
      <div className={classes.topRow}> 
        <TextField 
          size='small'
          className={classes.input}
          id="outlined-basic" 
          label="AccessKey" 
          variant="outlined" 
          InputLabelProps={{
              shrink: true,
          }}
          onChange={e => setAccessKey(e.target.value)}
        />
        <TextField 
          size='small'
          className={classes.input}
          id="outlined-basic" 
          label="SecretKey" 
          variant="outlined" 
          InputLabelProps={{
              shrink: true,
          }}
          onChange={e => setSecretKey(e.target.value)}
        />
        <Button size='small' className={classes.button} onClick={() => getCurrentInfo()}>Get/Refresh</Button> 
      </div>
      {instances ? 
      <>
        {Object.keys(instances).length === 0 ? <Button size='small' className={classes.button} onClick={() => launchNewInstance()}>Launch New Instance</Button> : null}
        <div className={classes.info}>
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell width="20%">ID</TableCell>
                  <TableCell width="20%">IP</TableCell>
                  <TableCell width="20%">Launch Time</TableCell>
                  <TableCell width="10%">Type</TableCell>
                  <TableCell width="15%">Backup</TableCell>
                  <TableCell width="15%">Stop</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(instances).map(instance => 
                  <TableRow key={instance}>
                    <TableCell width="20%">{instance}</TableCell>
                    <TableCell width="20%">{instances[instance]['Public IP']}</TableCell>
                    <TableCell width="20%">{instances[instance]['Launch Time']}</TableCell>
                    <TableCell width="10%">{instances[instance]['Type']}</TableCell>
                    <TableCell width="15%">
                      <Button size='large' className={classes.button} onClick={() => {}}>Backup</Button>
                    </TableCell>
                    <TableCell width="15%">
                      <Button size='large' className={classes.button} onClick={() => terminateInstance(instance, instances[instance]['Public IP'])}>Stop</Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
      :
      null
      }
    </div>
  );
}

export default App;
