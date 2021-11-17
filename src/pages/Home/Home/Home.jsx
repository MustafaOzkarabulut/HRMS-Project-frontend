import React from 'react'
import FeaturedCandidates from '../FeaturedCandidates/FeaturedCandidates'
import FindJob from '../FindJob/FindJob'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'
import Explore from '../Explore/Explore'

export default function Home() {
    return (
      <div>
        <Explore></Explore>
        <FindJob></FindJob>
        <FeaturedCandidates></FeaturedCandidates>
        <FeaturedJobs></FeaturedJobs>
      </div>
    )
}
