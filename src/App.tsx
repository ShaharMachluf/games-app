import { useState } from 'react'
import GameGrid from './components/GameGrid'
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelect from './components/PlatformSelect'
import { Platform } from './hooks/useGames'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;

}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid templateAreas={`"nav nav" "aside main"`}>
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <GridItem area="aside" paddingX={5}>
          <GenreList selecteGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
        <GridItem area="main">
          <PlatformSelect selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})} />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
