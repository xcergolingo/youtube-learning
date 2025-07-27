// Simplified to English only since we removed translations
const translations = {
    en: {
        site_title: "PolyLearn",
        welcome_title: "Welcome to PolyLearn",
        welcome_subtitle: "Learn languages through curated YouTube videos",
        target_language_label: "Which language would you like to learn?",
        level_label: "What's your current level?",
        level_beginner: "Beginner",
        level_elementary: "Elementary", 
        level_intermediate: "Intermediate",
        level_advanced: "Advanced",
        start_button: "Start Learning",
        dashboard_title: "Your Learning Journey",
        videos_watched: "Videos Watched",
        total_time: "Total Watch Time",
        beginner_description: "Start your language journey with basics",
        elementary_description: "Build on your foundation",
        intermediate_description: "Develop fluency and confidence", 
        advanced_description: "Master complex concepts",
        back_button: "← Back",
        prev_video: "← Previous",
        mark_watched: "Mark as Watched",
        next_video: "Next →"
    }
};

// Keep functions for compatibility but simplified
function changeUILanguage(lang) {
    // Only English supported now
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations.en[key]) {
            element.textContent = translations.en[key];
        }
    });
}

function loadUILanguage() {
    changeUILanguage('en');
}