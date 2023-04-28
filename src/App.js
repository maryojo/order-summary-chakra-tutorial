import { Box, Image, Text, Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgImage="https://ik.imagekit.io/fsa8lvz/pattern-background-desktop_c1sCdWgC2.svg?updatedAt=1682615938152"
        bgPosition="top"
        bgRepeat="no-repeat"
        className="background-pattern"
      >
        <Box
          borderRadius="10px"
          w={{ base: "20rem", lg: "25rem" }}
          bg="white"
          display="flex"
          textAlign="center"
        >
          <Box w="100%" h="40%">
            <Image
              src="https://ik.imagekit.io/fsa8lvz/illustration-hero_7kWxMTVtg.svg?updatedAt=1682617465708"
              h="full"
              w="full"
              objectFit="cover"
              borderTopRadius="10px"
            />
            <Box padding="30px" display="flex" flexDir="column" gap="10px">
              <Text fontSize="lg" textTransform="uppercase" fontWeight="bold">
                Order summary
              </Text>
              <Text fontSize="sm">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </Text>
              <Box
                display="flex"
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                p="20px"
                bgColor="hsl(225, 100%, 98%)"
                borderRadius="20px"
              >
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                  fontSize="sm"
                >
                  <Image src="https://ik.imagekit.io/fsa8lvz/icon-music_lF1sUio8n.svg?updatedAt=1682617465398" />
                  <Box display="flex" flexDir="column" >
                    <Text fontWeight="bold" >Annual plan</Text>
                    <Text>$59.99/year</Text>
                  </Box>
                </Box>

                <Text fontSize="sm" fontWeight="medium" as="u" color="hsl(245, 75%, 52%)" cursor="pointer">Change</Text>
              </Box>
              <Button bgColor="hsl(245, 75%, 52%)" color="white">Proceed to payment</Button>
              <Text fontWeight="bold" color="gray">Cancel order</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
