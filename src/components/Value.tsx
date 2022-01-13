import { CopyIcon } from '@chakra-ui/icons'
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'

interface Props {
  gradient: Gradient
}

const Value = ({ gradient }: Props) => {
  const toast = useToast()
  const gradientCode = `linear-gradient(#${gradient.top}, #${gradient.bottom})`

  const copyGradient = () => {
    navigator.clipboard.writeText(gradientCode)

    toast({
      description: `${gradientCode} copied to clipboard.`,
      status: 'success',
      duration: 3000,
      isClosable: false
    })
  }

  return (
    <InputGroup my='4'>
      <Input value={gradientCode} isReadOnly pr='3.25rem' fontSize='sm' />
      <InputRightElement w='3.25rem'>
        <Button h='1.75rem' size='sm' onClick={() => copyGradient()}>
          <CopyIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default Value
