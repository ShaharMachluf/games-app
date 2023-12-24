import { useState } from 'react'
import GameGrid from './components/GameGrid'
import { Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <Grid templateAreas={`"nav nav" "aside main"`}>
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <GridItem area="aside">Aside</GridItem>
        <GridItem area="main">Main</GridItem>
      </Grid>
    </>
  )
}

export default App
