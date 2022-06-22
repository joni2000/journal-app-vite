import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"

export const SideBar = ({ drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' //temporary, persistent
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Jonathan Ibarrola
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={ 'Lorem ipsum aldkjfa sldkjf a;lskdjf lskjd' }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
        
    </Box>
  )
}
