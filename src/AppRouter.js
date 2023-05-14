import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"

import HomePage from './home/HomePage'
import Comittee from './comittee/Comittee'
import CallForPapers from './callforpaper/CallForPapers'
import ImportantDates from './dates/ImportantDates'
import Workshops from './workshops/Workshops'
import Registration from './registration/Registration'
import Contact from './contact/Contact'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comittee" element={<Comittee />} />
        <Route path="/callforpapers" element={<CallForPapers />} />
        <Route path="/importantdates" element={<ImportantDates />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter