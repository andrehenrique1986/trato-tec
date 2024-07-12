import { createStandaloneToast } from "@chakra-ui/toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriasService from "services/categorias";
import { resetarCarrinho } from "./carrinho";
import { duration } from "@mui/material";


const initialState = [];
const { toast } = createStandaloneToast();

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
   categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(
      buscarCategorias.fulfilled,
      (state, {payload}) => {
        toast({
          title: 'Sucesso !',
          description: 'Categorias carregadas com sucesso !',
          status: "success",
          duration: 2000,
          isCloseble: true
        });
        return payload;
      }
    )
    .addCase(
      buscarCategorias.pending,
      (state, {payload}) => {
        toast({
          title: 'Carregando',
          description: 'Carregando categorias',
          status: "loading",
          duration: 2000,
          isCloseble: true
        });
      }
    )
    .addCase(
      buscarCategorias.rejected,
      (state, {payload}) => {
        toast({
          title: 'Erro',
          description: 'Erro na busca de categoria',
          status: "error",
          duration: 2000,
          isCloseble: true
        });
      }
    )
    .addCase(
      resetarCarrinho.type,
      () => {
        toast({
          title: 'Sucesso!',
          description: 'Compra completada com sucesso!',
          status: 'success',
          duration: 2000,
          isCloseble: true
        })
      }
    )
  }
});



export default categoriasSlice.reducer;
