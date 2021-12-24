import React from 'react'
import Banner from '../Components/Banner'
import FuncSection from '../Components/FuncSection'
import Digital from '../Components/Digital'
import RecentWork from '../Components/RecentWork'
import Words from '../Components/Words'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <div>
            <Banner></Banner>
              <FuncSection></FuncSection>
              <Digital></Digital>
              <RecentWork></RecentWork>
              <Words></Words>
              <Footer></Footer>
        </div>
    )
}
