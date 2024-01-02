import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-crop';

interface Props {
    game:Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={12} overflow='hidden'>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
          <HStack height='70px' alignItems='start'>
            <Heading fontSize='2xl'>{game.name}</Heading>
          </HStack>
            
            <HStack justifyContent={'space-between'}>
                <PlatformIconList platforms={game.platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard