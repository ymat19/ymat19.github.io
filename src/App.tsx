import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Template } from './components/Template' 
import { Box, Flex } from '@chakra-ui/react'
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
            <Link to="/" color="white">
              Home
            </Link>
            <Link to="/template" color="white">
              Template
            </Link>
            <Link to="/hello" color="white">
              Hello
            </Link>
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
