import styles from './page.module.scss'
import { HeroBlock } from './components/hero-block/hero-block'
import FeaturesBlock from './components/features-block/features-block'
import InstructionBlock from './components/instruction-block/instruction-block'
import ApiBlock from './components/api-block/api-block'
import CommunityBlock from './components/community-block/community-block'
import Footer from './components/ui/footer/footer'
import UsecasesBlock from './components/usecases-block/usecases-block'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBlock></HeroBlock>
      <UsecasesBlock></UsecasesBlock>
      <FeaturesBlock></FeaturesBlock>
      <InstructionBlock></InstructionBlock>
      <ApiBlock></ApiBlock>
      <CommunityBlock></CommunityBlock>
      <Footer></Footer>
    </main>
  )
}
