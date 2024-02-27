import React, { useState }  from 'react';
import Navbar from './Navbar';
import { Container, Box, Typography, Paper, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { AccessTime, AccountBalanceWallet, SwapHoriz } from '@mui/icons-material';


const Dashboard = () => {
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openTransfer, setOpenTransfer] = useState(false);

  const handleDepositOpen = () => {
    setOpenDeposit(true);
  };

  const handleDepositClose = () => {
    setOpenDeposit(false);
  };

  const handleTransferOpen = () => {
    setOpenTransfer(true);
  };

  const handleTransferClose = () => {
    setOpenTransfer(false);
  };


  return (
    <main >
      <Container maxWidth="sm" sx={{ bgcolor: "#00324d", height: "55vh", marginTop: "100px", my: -1 }} >
        <Navbar />
        <Box component="section" sx={{ p: 1, my: 1 }}>
          <Typography variant="subtitle1" sx={{ textAlign: "center", color: "secondary.contrast" }}>
            Welcome, Michael Garcia
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" sx={{ textAlign: "center", color: "secondary.light" }}>
            0000 SAVINGS xxxx3366-00
          </Typography>
        </Box>

        <Box sx={{ p: 1 }}>
          <Typography variant="h1" sx={{ my: 1, textAlign: "center", color: "secondary.contrast" }}>
          $105,999.00
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          '& > :not(style)': {
            width: 600,
            height: 30,
          },
        }} >
          <Typography variant="subtitle2" sx={{ textAlign: "center", color: "secondary.light" }}>
            AVAILABLE BALANCE
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt:-1 }}>
          <Typography variant="h6" sx={{ textAlign: "center", color: "secondary.light" }}>
            Current Balance 
          </Typography>
        
          <Typography variant="h6" sx={{ textAlign: "left", color: "secondary.contrast", ml: 5}}>
         $0.00
          </Typography>
        </Box>

      </Container>

      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: -5 }}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '20px', mr: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton color="primary" aria-label="deposit" onClick={handleDepositOpen}>
              <AccountBalanceWallet />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center", color: "primary.main" }}>Deposit</Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '20px', ml: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton color="primary" aria-label="transfer" onClick={handleTransferOpen}>
              <SwapHoriz />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center", color: "primary.main" }}>Transfer</Typography>
          </Paper>
        </Box>

        {/* Deposit Modal */}
<Dialog open={openDeposit} onClose={handleDepositClose}>
  <DialogTitle sx={{ textAlign: "center", color: "secondary.red"}}>Alert!!</DialogTitle>
  <DialogContent sx={{ textAlign: "center", color: "Secondary.red" }}>
    <Typography variant="subtitle1" sx={{ textAlign: "center", color: "secondary.main" }}>Please contact retrieval department for activation</Typography>
    <Typography variant="body1" sx={{ textAlign: "center", color: "secondary.main", fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }} onClick={() => window.location.href = 'inheritanceretrieval@protonmail.com'}>inheritanceretrieval@protonmail.com</Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleDepositClose} sx={{fontWeight: "bold"}}>Close</Button>
  </DialogActions>
</Dialog>


      {/* Transfer Modal */}
      <Dialog open={openTransfer} onClose={handleTransferClose}>
      <DialogTitle sx={{ textAlign: "center", color: "secondary.red"}}>Alert!!</DialogTitle>
  <DialogContent sx={{ textAlign: "center", color: "Secondary.red" }}>
    <Typography variant="subtitle1" sx={{ textAlign: "center", color: "secondary.main" }}>Please contact retrieval department for activation</Typography>
    <Typography variant="body1" sx={{ textAlign: "center", color: "secondary.main", fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }} onClick={() => window.location.href = 'mailto:inheritanceretrieval@protonmail.com'}>inheritanceretrieval@protonmail.com</Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleTransferClose} sx={{fontWeight: "bold"}}>Close</Button>
  </DialogActions>
      </Dialog>

        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 5 }}>
        <Typography variant="h6" sx={{ textAlign: "left", color: "primary.main" }}>
           Pending
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>
        <AccessTime/>
        <Typography variant="h5" sx={{ textAlign: "left", color: "primary.main", ml:2 }}>
            Check Hold
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "right", color: "primary.main", ml: 8 }}>
           $105,999.00
          </Typography>

        </Box>

 <Box sx={{ display: 'flex', justifyContent: 'left', mt: 0 }}>
          <Typography variant="subtitle2" sx={{ textAlign: "left", color: "primary.main", ml: 6 }}>
           Feb 27, 2024
          </Typography>

        </Box>


        
        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 5 }}>
        <Typography variant="h6" sx={{ textAlign: "left", color: "primary.main" }}>
          Activity
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>

        <Typography variant="subtitle1" sx={{ textAlign: "left", color: "primary.main", ml:1 }}>
            Deposit by Check
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "right", color: "primary.main", ml: 11 }}>
          Check hold
          </Typography>

        </Box>

 <Box sx={{ display: 'flex', justifyContent: 'left', mt: 0 }}>
          <Typography variant="subtitle1" sx={{ textAlign: "left", color: "primary.main", ml: 1 }}>
          Release date 
          </Typography>

          <Typography variant="subtitle1" sx={{ textAlign: "left", color: "primary.main", ml: 15}}>
          03/27/2025
          </Typography>

        </Box>

   

        

      </Container>
    </main>
  )
}

export default Dashboard;
