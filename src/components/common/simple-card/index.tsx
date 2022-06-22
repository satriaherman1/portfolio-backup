import { Box, Heading, Image } from "@chakra-ui/react";

export default function SimpleCard(props: ISimpleCard) {
  const { image, title, bottomAction } = props;
  return (
    <Box rounded="lg" padding="24px 20px" bg="white" boxShadow="0px 0px 15px #cdcdcda3">
      <Image boxSize="100%" height="270px" objectFit="cover" src={image} rounded="lg" />
      <Heading as="h3" size="md" marginTop={3}>
        {title}
      </Heading>
      {bottomAction}
    </Box>
  );
}
