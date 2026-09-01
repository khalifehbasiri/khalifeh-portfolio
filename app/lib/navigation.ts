export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  // Update URL without hashtag
  window.history.pushState({}, '', `/${sectionId}`);

  // Smooth scroll to section
  element.scrollIntoView({ behavior: 'smooth' });
}

// On page load, check if URL has a section and scroll to it
export function handleInitialScroll() {
  const path = window.location.pathname;
  // Remove leading slash: '/projects' -> 'projects'
  const sectionId = path.slice(1);

  if (!sectionId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  if (sectionId && document.getElementById(sectionId)) {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
