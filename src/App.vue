<script setup>
import ContactSection from '@/components/ContactSection.vue';
import EducationSection from '@/components/EducationSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProjectCaseStudies from '@/components/ProjectCaseStudies.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import { resumeData } from '@/data/resume.js';
</script>

<template>
  <SiteHeader :navigation="resumeData.navigation" />
  <main id="main-content" class="resume-document">
    <HeroSection :profile="resumeData.profile" />
    <SkillsSection :groups="resumeData.skillGroups" />
    <ExperienceSection :experience="resumeData.experience" />
    <ProjectCaseStudies :projects="resumeData.projects" />
    <EducationSection
      :certifications="resumeData.certifications"
      :education="resumeData.education"
    />
    <ContactSection :profile="resumeData.profile" />
  </main>
</template>
