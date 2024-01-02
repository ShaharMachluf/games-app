import { useState } from "react";
import GameGrid from "./components/GameGrid";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelect from "./components/PlatformSelect";
import { Platform } from "./hooks/useGames";
import SortSelect from "./components/SortSelect";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  filterText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid templateAreas={`"nav nav" "aside main"`}>
        <GridItem area="nav">
          <NavBar onFilter={(filterText) => setGameQuery({...gameQuery, filterText})}/>
        </GridItem>
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selecteGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>

        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelect
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelect sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
