import './App.css';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import FormControl from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
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
  middleRow: {
    display: 'flex',
    height: '75px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalMain: {
    backgroundColor: 'rgb(0,0,0,0.25)',
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none', // so modal click close works
  },
  modalContent: {
    backgroundColor: 'white',
    display: 'flex',
    height: '250px',
    width: '250px',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'auto', // so modal click close works
    flexDirection: 'column'
  },
  horizontalLine: {
    height: '1px',
    width: '100%',
    backgroundColor: 'black',
    margin: '20px 20px 20px 20px'
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

  const [secretKey, setSecretKey] = useState('');
  const [optionsModalOpen, setOptionsModalOpen] = useState(false);
  const [instances, setInstances] = useState('');
  const [instanceType, setInstanceType] = useState('t2.large');
  const [instanceLocation, setInstanceLocation] = useState('us-east-2');


  async function makeRequest(endpoint, data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          accessKeyId: 'AKIA4HDL62RVEJ4ZNRSW', 
          secretAccessKey: secretKey, 
	        instanceLocation: instanceLocation,
          ...data
        })
    };
    const response = await fetch(`https://minecraftbackend.herokuapp.com/${endpoint}`, requestOptions);
    return response
  }

  async function getCurrentInfo() {
    const data = await makeRequest('instances', {});
    setInstances(await data.json());
  }

  async function launchNewInstance() {
    if (Object.keys(instances).length == 0) {
      const data = await makeRequest('start-mc', {
        instanceType: instanceType,
      });
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
          label="SecretKey" 
          variant="outlined" 
          InputLabelProps={{
              shrink: true,
          }}
          onChange={e => setSecretKey(e.target.value)}
        />
      </div>
      <Button size='small' className={classes.button} onClick={() => getCurrentInfo()}>Get/Refresh</Button> 
      {instances ? 
      <>	
        {Object.keys(instances).length === 0 ? 
          <div className={classes.middleRow}> 
            <Button size='small' className={classes.button} onClick={() => setOptionsModalOpen(true)}>Instance Options</Button>
            <Button size='small' className={classes.button} onClick={() => launchNewInstance()}>Launch New Instance</Button> 
            <Modal
              keepMounted
              open={optionsModalOpen}
              onClose={() => setOptionsModalOpen(false)}
            >
              <div className={classes.modalMain}>
                <div className={classes.modalContent}>
                  <strong>Instance Type</strong>
                  <FormControl>
                    <Select value={instanceType} onChange={(e) => setInstanceType(e.target.value)}>
                      <MenuItem value={"t2.xlarge"}>t2.xlarge (16 GB RAM)</MenuItem>
                      <MenuItem value={"t2.large"}>t2.large (8 GB RAM)</MenuItem>
                      <MenuItem value={"t2.medium"}>t2.medium (4 GB RAM)</MenuItem>
                    </Select>
                  </FormControl>
                  <div className={classes.horizontalLine}/>
                  <strong>Instance Location</strong>
                  <FormControl>
                    <Select value={instanceLocation} onChange={(e) => setInstanceLocation(e.target.value)}>
                      <MenuItem value={"us-east-2"}>Ohio</MenuItem>
                      <MenuItem value={"eu-west-3"}>Paris</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Modal>
          </div> 
          : 
          null
        }
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
