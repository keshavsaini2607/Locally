import React from 'react';
import {Box, Button, Image, Text} from 'native-base';

const Card = () => {
  return (
    <Box borderRadius={10} width="full" shadow={2} bg="white" mb={5}>
      <Box width="full">
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt="Alternate Text"
          size="xl"
          width="full"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        />
      </Box>
      <Box p={2}>
        <Text fontSize="lg" fontWeight="600" mt={2}>
          The Lokals
        </Text>
        <Text>
          The authentic delhi taste in your own city jaipur now with exciting
          offers.
        </Text>
        <Button mt={2} variant="subtle">
          Check latest offers
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
