import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from '@/pages/Home'
import { Works } from '@/pages/Works'
import { Work } from '@/pages/WorkDetail'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/work/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  )
}
