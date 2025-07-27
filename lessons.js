const videoData = {
    es: { // Spanish learning videos
        beginner: [
            {
                title: "Spanish Alphabet & Pronunciation",
                description: "Learn the Spanish alphabet and basic pronunciation with clear examples",
                videoId: "KfkZa6D4vAo", // SpanishPod101
                channel: "SpanishPod101",
                duration: "15:32"
            },
            {
                title: "Basic Spanish Greetings",
                description: "Essential greetings and introductions for Spanish beginners",
                videoId: "_eDfwTqCWa8", // Learn Spanish with Anja
                channel: "Learn Spanish with Anja", 
                duration: "8:45"
            },
            {
                title: "Spanish Gender & Articles",
                description: "Understanding masculine and feminine nouns in Spanish",
                videoId: "QKYVvkZuGg8", // SpanishDict
                channel: "SpanishDict",
                duration: "12:20"
            },
            {
                title: "Present Tense Regular Verbs",
                description: "Learn how to conjugate regular Spanish verbs in present tense",
                videoId: "aQnSW3OWW4M", // Spanish Playground
                channel: "Spanish Playground",
                duration: "18:15"
            },
            {
                title: "Numbers 1-100 in Spanish",
                description: "Master Spanish numbers from 1 to 100 with pronunciation practice",
                videoId: "ckYYI-jdDlI", // CultureAlley Spanish
                channel: "CultureAlley Spanish",
                duration: "22:40"
            }
        ],
        elementary: [
            {
                title: "Ser vs Estar Explained",
                description: "Master the difference between ser and estar in Spanish",
                videoId: "G2IYVzWP1x0", // SpanishPod101
                channel: "SpanishPod101",
                duration: "16:28"
            },
            {
                title: "Spanish Past Tense (Preterite)",
                description: "Learn the preterite tense for talking about completed past actions",
                videoId: "CWxqR_-qW2g", // Learn Spanish with Anja
                channel: "Learn Spanish with Anja",
                duration: "14:30"
            },
            {
                title: "Direct & Indirect Object Pronouns",
                description: "Understanding Spanish pronouns: me, te, lo, la, le, etc.",
                videoId: "X7TkIhHb8q8", // Spanish Sessions
                channel: "Spanish Sessions",
                duration: "20:15"
            }
        ],
        intermediate: [
            {
                title: "Subjunctive Mood Introduction",
                description: "Introduction to the Spanish subjunctive with common expressions",
                videoId: "3XYNGnfIe4w", // María Español
                channel: "María Español",
                duration: "25:42"
            },
            {
                title: "Por vs Para - Complete Guide",
                description: "Master the tricky prepositions 'por' and 'para' in Spanish",
                videoId: "pnMXd-8hpL8", // Hola Spanish
                channel: "Hola Spanish",
                duration: "19:35"
            }
        ],
        advanced: [
            {
                title: "Advanced Spanish Conversation",
                description: "Natural Spanish conversation practice for advanced learners",
                videoId: "K_jrmG3vI5o", // Advanced Spanish Stories
                channel: "Advanced Spanish Stories",
                duration: "32:18"
            }
        ]
    },
    fr: { // French learning videos
        beginner: [
            {
                title: "French Alphabet & Basic Pronunciation",
                description: "Learn the French alphabet and essential pronunciation rules",
                videoId: "8LSJkUhbzpA", // FrenchPod101
                channel: "FrenchPod101",
                duration: "12:45"
            },
            {
                title: "French Articles: Le, La, Les, Un, Une",
                description: "Master French articles and gender system",
                videoId: "dOhgaw8tKZI", // Learn French with Alexa
                channel: "Learn French with Alexa",
                duration: "15:20"
            },
            {
                title: "French Present Tense - Regular Verbs",
                description: "Conjugating regular -er, -ir, and -re verbs in French",
                videoId: "z8nOe9JjK8Q", // Comme une Française
                channel: "Comme une Française",
                duration: "18:30"
            },
            {
                title: "French Numbers 1-100",
                description: "Learn French numbers with proper pronunciation",
                videoId: "UsEz58OstereotypesB", // Coffee Break French
                channel: "Coffee Break French",
                duration: "16:55"
            }
        ],
        elementary: [
            {
                title: "Passé Composé - French Past Tense",
                description: "Learn the most common French past tense",
                videoId: "qkLc-h_Hov8", // Lingoni French
                channel: "Lingoni French",
                duration: "22:15"
            },
            {
                title: "French Subjunctive Basics",
                description: "Introduction to the French subjunctive mood",
                videoId: "_TFhYYx08aQ", // French Mornings with Elisa
                channel: "French Mornings with Elisa",
                duration: "18:40"
            }
        ],
        intermediate: [
            {
                title: "French Conversation Practice",
                description: "Intermediate French dialogue and listening practice",
                videoId: "RhBLgO9WE5A", // Inner French
                channel: "Inner French",
                duration: "25:30"
            },
            {
                title: "Advanced French Grammar",
                description: "Complex French grammar concepts explained clearly",
                videoId: "O9vJjYvgvfQ", // Easy French
                channel: "Easy French",
                duration: "28:45"
            }
        ],
        advanced: [
            {
                title: "French Cultural Insights",
                description: "Advanced French with cultural context and expressions",
                videoId: "nHKtZ5PY7U8", // Piece of French
                channel: "Piece of French",
                duration: "35:20"
            }
        ]
    },
    de: { // German learning videos
        beginner: [
            {
                title: "German Alphabet & Pronunciation",
                description: "Learn the German alphabet with perfect pronunciation",
                videoId: "RzXz4OTgU3w", // GermanPod101
                channel: "GermanPod101",
                duration: "14:25"
            },
            {
                title: "German Articles: Der, Die, Das",
                description: "Master German articles and the case system basics",
                videoId: "YnCqiEFKudM", // Learn German with Herr Antrim
                channel: "Learn German with Herr Antrim",
                duration: "16:50"
            },
            {
                title: "German Present Tense",
                description: "Conjugating German verbs in present tense",
                videoId: "bzYVx8M4kVc", // Nicos Weg (Deutsche Welle)
                channel: "Deutsche Welle",
                duration: "12:30"
            },
            {
                title: "German Numbers & Counting",
                description: "Learn German numbers from 1-100 with pronunciation",
                videoId: "0FnOPH7xvCU", // Learn German with Anja
                channel: "Learn German with Anja",
                duration: "19:40"
            }
        ],
        elementary: [
            {
                title: "German Cases Explained",
                description: "Understanding Nominativ, Akkusativ, Dativ, Genitiv",
                videoId: "kB3fM3tcYgA", // Deutsch für Euch
                channel: "Deutsch für Euch",
                duration: "24:15"
            },
            {
                title: "German Past Tense (Perfekt)",
                description: "Learn the German perfect tense for past actions",
                videoId: "6qGtc5Vg8g0", // Get Germanized
                channel: "Get Germanized",
                duration: "18:55"
            }
        ],
        intermediate: [
            {
                title: "German Street Interviews",
                description: "Real German conversations with subtitles",
                videoId: "kNZ1uODTaq4", // Easy German
                channel: "Easy German",
                duration: "22:30"
            },
            {
                title: "Advanced German Grammar",
                description: "Complex German grammar made simple",
                videoId: "mMQnHv2U0ro", // Deutsch mit Marija
                channel: "Deutsch mit Marija",
                duration: "26:45"
            }
        ],
        advanced: [
            {
                title: "German Business Language",
                description: "Professional German for advanced learners",
                videoId: "tFoiTN7Ouxo", // Learn German with Julia
                channel: "Learn German with Julia",
                duration: "31:20"
            }
        ]
    },
    en: { // English learning videos for non-native speakers
        beginner: [
            {
                title: "English Alphabet & Pronunciation",
                description: "Learn English letters and basic pronunciation",
                videoId: "yT2tpFZGUzE", // English with Lucy
                channel: "English with Lucy",
                duration: "13:45"
            },
            {
                title: "English Articles: A, An, The",
                description: "Master English articles with simple rules",
                videoId: "xZb2qhOpHuM", // EnglishClass101
                channel: "EnglishClass101",
                duration: "15:30"
            },
            {
                title: "Present Simple Tense",
                description: "Learn English present simple tense",
                videoId: "jJfz5Dj9wWA", // Learn English with Emma
                channel: "Learn English with Emma",
                duration: "17:20"
            }
        ],
        elementary: [
            {
                title: "Past Simple Tense",
                description: "English past simple for beginners",
                videoId: "hGPkMSj8KE0", // English Lessons with Adam
                channel: "English Lessons with Adam",
                duration: "20:15"
            }
        ],
        intermediate: [
            {
                title: "English Conversation Practice",
                description: "Intermediate English speaking practice",
                videoId: "LBHP-0kv4lg", // English Speaking Course
                channel: "English Speaking Course",
                duration: "25:40"
            }
        ],
        advanced: [
            {
                title: "Advanced English Expressions",
                description: "Native-level English phrases and idioms",
                videoId: "MG7xYCk15Ys", // Advanced English Lessons
                channel: "Advanced English Lessons",
                duration: "30:25"
            }
        ]
    }
};

function getVideos(language, level) {
    return videoData[language]?.[level] || [];
}

function getCurrentVideo(language, level, videoIndex) {
    const videos = getVideos(language, level);
    return videos[videoIndex] || null;
}

function getAllLevels(language) {
    return Object.keys(videoData[language] || {});
}