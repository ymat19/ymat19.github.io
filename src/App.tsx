import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Template } from './components/Template' 
import { Box, Button, Flex } from '@chakra-ui/react'
import { HelloWorld } from './components/HelloWorld'
import { Home } from './components/Home'

function App() {
  return (
      <BrowserRouter>
        <Box>
          {/* ナビゲーションバー */}
          <Flex
            as="nav"
            bg="blue.500"
            p="4"
            justify="space-around"
            align="center"
          >
            <Button as={Link} to="/" colorScheme="teal" variant="ghost">
              Home
            </Button>
            <Button as={Link} to="/template" colorScheme="teal" variant="ghost">
              Template
            </Button>
            <Button as={Link} to="/hello" colorScheme="teal" variant="ghost">
              Hello
            </Button>
          </Flex>

          {/* 各ページを表示するエリア */}
          <Box p="4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/template" element={<Template />} />
              <Route path="/hello" element={<HelloWorld />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
  )
}

export default App
