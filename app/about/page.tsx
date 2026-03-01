import styles from './about.module.css'
import OurTeam from '@/components/OurTeam/OurTeam'
import MissionVision from '@/components/MissionVision/MissionVision'
import LearnerFeedback from '@/components/LearnerFeedback/LearnerFeedback'
import HeadCarousel from '@/components/HeadCarousel/HeadCarousel'

const about = () => {
  return (
    <div className={styles.aboutPage}>
      <HeadCarousel/>
      <MissionVision/>
      <LearnerFeedback/>
      <OurTeam/>
    </div>
  )
}

export default about;