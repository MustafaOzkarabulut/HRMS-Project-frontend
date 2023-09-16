import React from 'react'
import FeaturedCandidates from '../FeaturedCandidates/FeaturedCandidates'
import FindJob from '../FindJob/FindJob'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'
import Explore from '../Comments/Comments'
import SearchArea from '../SearchArea/SearchArea'
import {Helmet} from "react-helmet";
import Overlay from '../Overlay/Overlay'
import CreateAccount from '../CreateAccount/CreateAccount'

export default function Home() {
  return (
    <div>
      <Helmet>
            <title>Anasayfa | HRMS</title>
            <meta name="description" content="Nested component" />
        </Helmet>
      <Overlay></Overlay>
      <FindJob></FindJob>
      <FeaturedJobs></FeaturedJobs>
      <Explore></Explore>
      <CreateAccount></CreateAccount>
    </div>
  )
}
