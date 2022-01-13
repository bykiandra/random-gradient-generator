import { Flex, Box, Text, Link } from '@chakra-ui/react'
import { useState } from 'react'

import GenerateButton from './components/GenerateButton'
import Value from './components/Value'

function App() {
  const getRandomHex = () => {
    let hex = ''
    for (let i = 0; i < 6; i++) {
      const random = Math.random()
      const bit = (random * 16) | 0
      hex += bit.toString(16)
    }
    return hex
  }

  const startLeft = getRandomHex()
  const startRight = getRandomHex()

  const [gradient, setGradient] = useState({
    top: startLeft,
    bottom: startRight,
  })

  const handleClick: HandleClick = () => {
    const randomLeft = getRandomHex()
    const randomRight = getRandomHex()
    setGradient({ top: randomLeft, bottom: randomRight })
  }

  return (
    <div className='App'>
      <Flex
        minH='100vh'
        bgGradient={
          'linear(to-b, #' + gradient.top + ', #' + gradient.bottom + ')'
        }
        align='center'
        justify='center'
      >
        <Box bgColor='white' p={4} rounded='xl' minW='350px'>
          <GenerateButton handleClick={handleClick} />
          <Value gradient={gradient} />
          <Text fontSize='xs' align='center'>
            See the code on{' '}
            <Link
              href='https://github.com/crownedfoxes/random-gradient-generator'
              color='blue.400'
              isExternal
            >
              GitHub
            </Link>
            .
          </Text>
        </Box>
      </Flex>
    </div>
  )
}

export default App
