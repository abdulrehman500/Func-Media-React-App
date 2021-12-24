import React from 'react'
import Banner from '../Components/Banner'
import FuncSection from '../Components/FuncSection'
import Digital from '../Components/Digital'
import RecentWork from '../Components/RecentWork'
import Words from '../Components/Words'
import Footer from '../Components/Footer'
import Conversation from '../Components/Conversation'

export default function Home() {
    return (
        <div>
            <Banner></Banner>
              <FuncSection></FuncSection>
              <Digital></Digital>
              <RecentWork></RecentWork>
              <Words></Words>
          <Conversation></Conversation>
              <Footer></Footer>
        </div>
    )
}
