import styles from './about.module.css'
import OurTeam from '@/components/OurTeam/OurTeam'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import MissionVision from '@/components/MissionVision/MissionVision'
import LearnerFeedback from '@/components/LearnerFeedback/LearnerFeedback'

const about = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.headImage}>
        <img src="./staff/whole-staff.jpg" alt="TEAM-LETS-SPEAK" />
      </div>
      <WhyChooseUs/>
      <MissionVision/>
      <LearnerFeedback/>
      <OurTeam/>
    </div>
  )
}

export default about