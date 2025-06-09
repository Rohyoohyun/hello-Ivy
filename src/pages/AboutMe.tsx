import Navbar from '@/widgets/NavBar';
import MyInfo from '@/features/AboutMeComponents/MyInfo';
import Career from '@/features/AboutMeComponents/Career';
import SkillInfo from '@/features/AboutMeComponents/SkillInfo';
import Navigator from '@/features/AboutMeComponents/Navigator';

export default function AboutMe() {
    return (
        <div>
            <Navbar />
            <MyInfo />
            <Career />
            <SkillInfo />
            <Navigator />
        </div>
    );
}
