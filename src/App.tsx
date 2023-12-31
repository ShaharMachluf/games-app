import { useState } from 'react'
import GameGrid from './components/GameGrid'
import { Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid templateAreas={`"nav nav" "aside main"`}>
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
