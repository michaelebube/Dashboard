import React from 'react'
  import { ColorModeContext, useMode  } from './themes'
  import { CssBaseline, ThemeProvider } from '@mui/material'
  import { Routes, Route } from 'react-router-dom'
  import Topbar from './scenes/global/Topbar'
  import Sidebar from './scenes/global/Sidebar'
  import Dashboard from './scenes/dashboard/index'
  import Team from './scenes/Team'
  import Invoices from './scenes/Invoices'
  import Contacts from './scenes/Contacts'
  import Bar from './scenes/Bar'
  import Form from './scenes/Form'
  import Line from './scenes/Line'
  import Pie from './scenes/Pie'
  import FAQ from './scenes/FAQ'
  import Geo from './scenes/Geo'
  import Calendar from './scenes/Calendar'
  


const App = () => {
  const [theme, colorMode] = useMode()
  return (
  <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar/>
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/Team' element={<Team/>}></Route>
              <Route path='/invoices' element={<Invoices />}></Route>
              <Route path='/contacts' element={<Contacts/>}></Route>
              <Route path='/form' element={<Form />}></Route>
              <Route path='/bar' element={<Bar />}></Route>
              <Route path='/line' element={<Line/>}></Route>
              <Route path='/pie' element={<Pie />}></Route>
              <Route path='/faq' element={<FAQ/>}></Route>
              <Route path='/geography' element={<Geo/>}></Route>
              <Route path='/calendar' element={<Calendar />}></Route>

            </Routes>
          </main>
      </div>
      </ThemeProvider>
      

  </ColorModeContext.Provider>
    
  )
}

export default App