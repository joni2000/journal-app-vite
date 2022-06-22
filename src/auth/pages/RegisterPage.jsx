

import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>

                <form>
                    
                    <Grid container>

                        <Grid Item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label='Nombre completo'
                                type='text'
                                placeholder='Tu nombre completo'
                                fullWidth
                            />
                        </Grid>

                        <Grid Item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label='correo'
                                type='email'
                                placeholder='correo@google.com'
                                fullWidth
                            />
                        </Grid>

                        <Grid Item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label='Contraseña'
                                type='password'
                                placeholder='Contraseña'
                                fullWidth
                            />
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>
                            <Grid item xs={ 12 }>
                                <Button variant="contained" fullWidth>
                                    Crear cuenta
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direccion='row' justifyContent='end'>
                            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                            <Link component={ RouterLink } color='inherit' to='/auth/login'>
                                Ingresar
                            </Link>
                        </Grid>
                      
                    </Grid>
                </form>
                
        </AuthLayout>        

    )
}
