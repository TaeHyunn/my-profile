<script setup>
import ContactSection from '@/components/ContactSection.vue';
import ContributionTimeline from '@/components/ContributionTimeline.vue';
import EducationSection from '@/components/EducationSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProjectCaseStudies from '@/components/ProjectCaseStudies.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import { resumeData } from '@/data/resume.js';
</script>

<template>
  <main id="main-content">
    <HeroSection :profile="resumeData.profile" />
    <ExperienceSection :experience="resumeData.experience" />
    <ProjectCaseStudies :projects="resumeData.projects" />
    <ContributionTimeline :items="resumeData.timeline" />
    <SkillsSection :groups="resumeData.skillGroups" />
    <EducationSection
      :certifications="resumeData.certifications"
      :education="resumeData.education"
    />
    <ContactSection :profile="resumeData.profile" />
  </main>
</template>
