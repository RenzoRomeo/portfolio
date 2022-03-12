import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  Stack,
  Badge
} from '@chakra-ui/react';

import HoverBox from './hoverbox';

const Project = ({ title, thumbnail, link, tags }) => (
  <LinkBox cursor="pointer">
    <Link passHref href={link}>
      <LinkOverlay>
        <HoverBox
          scale={1.05}
          w="100%"
          borderColor={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
          overflow="hidden"
          bg="blackAlpha.200"
          borderRadius={5}
        >
          <Image
            unoptimized
            src={thumbnail}
            alt={title}
            loading="lazy"
            placeholder="blur"
            width={1920}
            height={1080}
          />
          <Box p={6} align="center">
            <Box display="flex" flexDir="column">
              <Box fontSize={30} fontWeight="bold">
                {title}
              </Box>
              <Stack direction="row" justify="center" mt="1rem">
                {tags && tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </Stack>
            </Box>
          </Box>
        </HoverBox>
      </LinkOverlay>
    </Link>
  </LinkBox>
);

export default Project;
