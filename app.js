class LanguageLearningApp {
    constructor() {
        this.userData = this.loadUserData();
        this.currentVideo = null;
        this.currentVideoIndex = 0;
        this.currentLevel = null;
        this.player = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        
        // Always go directly to dashboard
        this.showDashboard();
    }

    setupEventListeners() {
        document.getElementById('start-learning')?.addEventListener('click', () => this.startLearning());
        document.getElementById('back-to-dashboard').addEventListener('click', () => this.showDashboard());
        document.getElementById('mark-watched').addEventListener('click', () => this.markVideoWatched());
        document.getElementById('prev-video').addEventListener('click', () => this.previousVideo());
        document.getElementById('next-video').addEventListener('click', () => this.nextVideo());
        document.getElementById('language-selector')?.addEventListener('change', (e) => this.changeLanguage(e.target.value));
    }

    loadUserData() {
        const defaultData = {
            isSetup: true,
            targetLanguage: 'es',
            proficiencyLevel: 'beginner',
            progress: {
                beginner: { videosWatched: [], totalWatchTime: 0 },
                elementary: { videosWatched: [], totalWatchTime: 0 },
                intermediate: { videosWatched: [], totalWatchTime: 0 },
                advanced: { videosWatched: [], totalWatchTime: 0 }
            }
        };

        const savedData = localStorage.getItem('languageLearningData');
        return savedData ? { ...defaultData, ...JSON.parse(savedData) } : defaultData;
    }

    saveUserData() {
        localStorage.setItem('languageLearningData', JSON.stringify(this.userData));
    }

    startLearning() {
        this.userData.targetLanguage = document.getElementById('target-language').value;
        this.userData.proficiencyLevel = document.getElementById('proficiency-level').value;
        this.userData.isSetup = true;
        
        this.saveUserData();
        this.showDashboard();
    }

    showWelcomeScreen() {
        // Welcome screen removed - redirect to dashboard
        this.showDashboard();
    }

    showDashboard() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const learningDashboard = document.getElementById('learning-dashboard');
        const videoView = document.getElementById('video-view');
        
        if (welcomeScreen) welcomeScreen.classList.add('hidden');
        if (learningDashboard) learningDashboard.classList.remove('hidden');
        if (videoView) videoView.classList.add('hidden');
        
        this.updateDashboard();
    }

    updateDashboard() {
        // Update language selector
        const languageSelector = document.getElementById('language-selector');
        
        if (languageSelector) languageSelector.value = this.userData.targetLanguage;
        
        // Update progress summary
        const totalVideosWatched = Object.values(this.userData.progress).reduce((sum, level) => sum + level.videosWatched.length, 0);
        const totalWatchTime = Object.values(this.userData.progress).reduce((sum, level) => sum + level.totalWatchTime, 0);
        
        document.getElementById('videos-watched').textContent = totalVideosWatched;
        document.getElementById('total-time').textContent = Math.round(totalWatchTime) + ' min';
        
        // Update level cards
        const levels = ['beginner', 'elementary', 'intermediate', 'advanced'];
        levels.forEach(level => {
            const videos = getVideos(this.userData.targetLanguage, level);
            const watchedCount = this.userData.progress[level].videosWatched.length;
            
            document.getElementById(`${level}-count`).textContent = videos.length;
            
            const progressPercent = videos.length > 0 ? (watchedCount / videos.length) * 100 : 0;
            document.getElementById(`${level}-progress`).style.width = progressPercent + '%';
        });
    }

    openLevel(level) {
        this.currentLevel = level;
        const videos = getVideos(this.userData.targetLanguage, level);
        
        if (videos.length === 0) {
            alert(`No videos available for ${level} level in ${this.userData.targetLanguage}!`);
            return;
        }

        // Find first unwatched video or start from beginning
        const watchedVideos = this.userData.progress[level].videosWatched;
        this.currentVideoIndex = 0;
        
        for (let i = 0; i < videos.length; i++) {
            if (!watchedVideos.includes(i)) {
                this.currentVideoIndex = i;
                break;
            }
        }

        this.loadVideo();
    }

    loadVideo() {
        const video = getCurrentVideo(this.userData.targetLanguage, this.currentLevel, this.currentVideoIndex);
        
        if (!video) {
            alert('No more videos available in this level!');
            return;
        }

        this.currentVideo = video;
        this.showVideoView();
        this.renderVideo();
    }

    showVideoView() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const learningDashboard = document.getElementById('learning-dashboard');
        const videoView = document.getElementById('video-view');
        
        if (welcomeScreen) welcomeScreen.classList.add('hidden');
        if (learningDashboard) learningDashboard.classList.add('hidden');
        if (videoView) videoView.classList.remove('hidden');
    }

    renderVideo() {
        const videos = getVideos(this.userData.targetLanguage, this.currentLevel);
        
        // Update header
        document.getElementById('video-title').textContent = this.currentVideo.title;
        document.getElementById('video-progress-text').textContent = `${this.currentVideoIndex + 1} / ${videos.length}`;
        document.getElementById('video-progress-bar').style.width = ((this.currentVideoIndex + 1) / videos.length) * 100 + '%';
        
        // Update video info
        document.getElementById('video-duration').textContent = this.currentVideo.duration;
        document.getElementById('video-description').textContent = this.currentVideo.description;
        
        // Update navigation buttons
        document.getElementById('prev-video').disabled = this.currentVideoIndex === 0;
        document.getElementById('next-video').disabled = this.currentVideoIndex === videos.length - 1;
        
        // Update watched button
        const isWatched = this.userData.progress[this.currentLevel].videosWatched.includes(this.currentVideoIndex);
        const watchButton = document.getElementById('mark-watched');
        watchButton.textContent = isWatched ? 'Watched ✓' : 'Mark as Watched';
        watchButton.disabled = isWatched;
        
        // Load YouTube player
        this.loadYouTubePlayer();
    }

    loadYouTubePlayer() {
        // Check if we're running from file:// protocol
        if (window.location.protocol === 'file:') {
            this.showFallbackPlayer();
            return;
        }
        
        // Initialize YouTube player when API is ready
        if (window.YT && window.YT.Player) {
            this.createPlayer();
        } else {
            // Wait for YouTube API to load
            window.onYouTubeIframeAPIReady = () => {
                this.createPlayer();
            };
        }
    }

    showFallbackPlayer() {
        const playerContainer = document.getElementById('youtube-player');
        playerContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 400px; background: #f7fafc; border-radius: 10px; border: 2px solid #667eea;">
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <h3 style="color: #4a5568; margin-bottom: 0.5rem;">🎥 ${this.currentVideo.title}</h3>
                    <p style="color: #718096; margin-bottom: 1rem;">To watch embedded videos, please run a local server</p>
                    <p style="color: #718096; font-size: 0.9rem;">Run: <code style="background: #e2e8f0; padding: 0.2rem 0.4rem; border-radius: 4px;">python3 serve.py</code></p>
                </div>
                <a href="https://www.youtube.com/watch?v=${this.currentVideo.videoId}" target="_blank" 
                   style="background: #667eea; color: white; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 1rem;">
                   🚀 Watch on YouTube
                </a>
                <button onclick="app.markVideoWatched()" 
                        style="background: #48bb78; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    ✅ Mark as Watched
                </button>
            </div>
        `;
    }

    createPlayer() {
        if (this.player) {
            this.player.loadVideoById(this.currentVideo.videoId);
            return;
        }

        this.player = new YT.Player('youtube-player', {
            height: '400',
            width: '100%',
            videoId: this.currentVideo.videoId,
            playerVars: {
                'playsinline': 1,
                'rel': 0,
                'modestbranding': 1,
                'origin': window.location.origin || window.location.protocol + '//' + window.location.host,
                'enablejsapi': 1
            },
            events: {
                'onReady': (event) => {
                    console.log('YouTube player ready');
                },
                'onStateChange': (event) => {
                    if (event.data === YT.PlayerState.ENDED) {
                        this.markVideoWatched();
                    }
                },
                'onError': (event) => {
                    console.error('YouTube player error:', event.data);
                    this.handleVideoError(event.data);
                }
            }
        });
    }

    handleVideoError(errorCode) {
        let errorMessage = 'Error loading video: ';
        switch(errorCode) {
            case 2:
                errorMessage += 'Invalid video ID';
                break;
            case 5:
                errorMessage += 'HTML5 player error';
                break;
            case 100:
                errorMessage += 'Video not found or private';
                break;
            case 101:
            case 150:
                errorMessage += 'Video cannot be embedded';
                break;
            default:
                errorMessage += 'Unknown error (' + errorCode + ')';
        }
        
        // Replace player with fallback link
        const playerContainer = document.getElementById('youtube-player');
        playerContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 400px; background: #f7fafc; border-radius: 10px; border: 2px dashed #667eea;">
                <p style="color: #4a5568; margin-bottom: 1rem; text-align: center;">${errorMessage}</p>
                <a href="https://www.youtube.com/watch?v=${this.currentVideo.videoId}" target="_blank" 
                   style="background: #667eea; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600;">
                   Watch on YouTube →
                </a>
            </div>
        `;
    }

    markVideoWatched() {
        const watchedVideos = this.userData.progress[this.currentLevel].videosWatched;
        
        if (!watchedVideos.includes(this.currentVideoIndex)) {
            watchedVideos.push(this.currentVideoIndex);
            
            // Add estimated watch time (convert duration string to minutes)
            const duration = this.currentVideo.duration;
            const minutes = this.parseDurationToMinutes(duration);
            this.userData.progress[this.currentLevel].totalWatchTime += minutes;
            
            this.saveUserData();
            this.renderVideo(); // Update UI
        }
    }

    parseDurationToMinutes(duration) {
        const parts = duration.split(':');
        if (parts.length === 2) {
            return parseInt(parts[0]) + parseInt(parts[1]) / 60;
        } else if (parts.length === 3) {
            return parseInt(parts[0]) * 60 + parseInt(parts[1]) + parseInt(parts[2]) / 60;
        }
        return 15; // Default fallback
    }

    previousVideo() {
        if (this.currentVideoIndex > 0) {
            this.currentVideoIndex--;
            this.loadVideo();
        }
    }

    nextVideo() {
        const videos = getVideos(this.userData.targetLanguage, this.currentLevel);
        if (this.currentVideoIndex < videos.length - 1) {
            this.currentVideoIndex++;
            this.loadVideo();
        }
    }

    changeLanguage(language) {
        this.userData.targetLanguage = language;
        this.saveUserData();
        this.updateDashboard();
    }

}

// Global functions for HTML onclick handlers
function openLevel(level) {
    app.openLevel(level);
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new LanguageLearningApp();
});

// Initialize app immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new LanguageLearningApp();
    });
} else {
    window.app = new LanguageLearningApp();
}