<script setup>
import ContactSection from '@/components/ContactSection.vue';
import ContributionTimeline from '@/components/ContributionTimeline.vue';
import EducationSection from '@/components/EducationSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProjectCaseStudies from '@/components/ProjectCaseStudies.vue';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import { resumeData } from '@/data/resume.js';
</script>

<template>
  <SiteHeader :navigation="resumeData.navigation" />
  <main id="main-content">
    <HeroSection :profile="resumeData.profile" />
    <RevealOnScroll>
      <ExperienceSection :experience="resumeData.experience" />
    </RevealOnScroll>
    <RevealOnScroll>
      <ProjectCaseStudies :projects="resumeData.projects" />
    </RevealOnScroll>
    <RevealOnScroll>
      <ContributionTimeline :items="resumeData.timeline" />
    </RevealOnScroll>
    <RevealOnScroll>
      <SkillsSection :groups="resumeData.skillGroups" />
    </RevealOnScroll>
    <RevealOnScroll>
      <EducationSection
        :certifications="resumeData.certifications"
        :education="resumeData.education"
      />
    </RevealOnScroll>
    <RevealOnScroll>
      <ContactSection :profile="resumeData.profile" />
    </RevealOnScroll>
  </main>
</template>
