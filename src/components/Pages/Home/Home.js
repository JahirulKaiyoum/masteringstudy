import React from 'react';

import Banner from './Banner/Banner';
import PrioritySection from './PrioritySection/PrioritySection';
import WhyMasteringStudySection from './WhyMasteringStudySection/WhyMasteringStudySection';
import LearningModelSection from './LearningModelSection/LearningModelSection';
import CareerSkillSection from './CareerSkillSection/CareerSkillSection';
import InternshipSection from './InternshipSection/InternshipSection';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PrioritySection></PrioritySection>
            <WhyMasteringStudySection></WhyMasteringStudySection>
            <LearningModelSection></LearningModelSection>
            <CareerSkillSection></CareerSkillSection>
            <InternshipSection></InternshipSection>
        </>
    );
};

export default Home;