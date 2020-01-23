import React from 'react';
import logo from '../../assets/logo-iapar.png';
import './Cadastro.css';
import { Select, Grid, FormControl, InputLabel, Input, FormGroup, Container, MenuItem, Button } from '@material-ui/core';

export default function Cadastro() {

    return (
        <Grid container direction="column" justify="space-evenly" alignItems="center">
            <img src={logo} alt="iapar-logo" className="img-logo" />
            <Container maxWidth="sm" className="container-form-cadastro">
                <FormControl margin="dense" fullWidth="true">
                    <InputLabel htmlFor="nome-completo">Nome completo</InputLabel>
                    <Input id="nome-completo" aria-describedby="my-helper-text" />
                </FormControl>
                <FormGroup row="true">
                    <FormControl margin="dense" className="input-lg">
                        <InputLabel htmlFor="cpf">CPF</InputLabel>
                        <Input id="cpf" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense" className="input-md">
                        <InputLabel htmlFor="telefone">Telefone</InputLabel>
                        <Input id="telefone" aria-describedby="my-helper-text" />
                    </FormControl>
                </FormGroup>
                <FormGroup row="true">
                    <FormControl margin="dense" className="input-lg">
                        <InputLabel htmlFor="cidade">Cidade</InputLabel>
                        <Input id="cidade" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense" className="input-md">
                        <InputLabel htmlFor="cep" >Cep</InputLabel>
                        <Input id="cep" aria-describedby="my-helper-text" />
                    </FormControl>
                </FormGroup>
                <FormControl margin="dense" fullWidth="true">
                    <InputLabel htmlFor="rua">Rua</InputLabel>
                    <Input id="rua" aria-describedby="my-helper-text" />
                </FormControl>
                <FormGroup row="true">
                    <FormControl margin="dense" className="input-lg">
                        <InputLabel htmlFor="bairro">Bairro</InputLabel>
                        <Input id="bairro" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense" className="input-md">
                        <InputLabel htmlFor="numero" >Número</InputLabel>
                        <Input id="numero" aria-describedby="my-helper-text" />
                    </FormControl>
                </FormGroup>
                <FormControl margin="dense" fullWidth="true">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl margin="dense" fullWidth="true">
                    <InputLabel htmlFor="senha">Senha</InputLabel>
                    <Input id="senha" aria-describedby="my-helper-text" />
                </FormControl>
                <FormGroup row="true">
                    <FormControl margin="dense" className="input-md">
                        <InputLabel htmlFor="numero-registro" >Número do Registro</InputLabel>
                        <Input id="numero-registro" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense" className="input-md ml-input-md">
                        <InputLabel htmlFor="tipo-registro" >Tipo Registro</InputLabel>
                        <Select id="tipo-registro" aria-describedby="my-helper-text">
                            <MenuItem value="CREA">CREA</MenuItem>
                            <MenuItem value="CRMV">CRMV</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="dense" className="input-md ml-input-md">
                        <InputLabel htmlFor="ano-formatura" >Ano Formatura</InputLabel>
                        <Input id="ano-formatura" aria-describedby="my-helper-text" />
                    </FormControl>
                </FormGroup>
                <Button variant="contained" color="secondary" fullWidth="true" className="btn-form">
                    Cadastrar
                </Button>
            </Container>
        </Grid>
    );
}
