# PolyLearn - YouTube Language Learning Platform

A curated YouTube-based language learning platform with videos organized by proficiency levels.

## 🚀 Quick Start

### Option 1: Run with Local Server (Recommended)
```bash
# Run the local server (opens browser automatically)
python3 serve.py

# Or manually open: http://localhost:8000
```

### Option 2: Open Directly (Limited Features)
```bash
# Open index.html directly in browser
# Note: Videos will show "Watch on YouTube" links instead of embedded players
```

## 📚 Features

- **4 Languages**: Spanish, French, German, English
- **4 Levels**: Beginner, Elementary, Intermediate, Advanced  
- **Curated Content**: Hand-picked YouTube videos from top language learning channels
- **Progress Tracking**: Track watched videos and total watch time
- **Responsive Design**: Works on desktop and mobile

## 🎥 Video Sources

### Spanish
- SpanishPod101, Learn Spanish with Anja, SpanishDict, Spanish Playground, etc.

### French  
- FrenchPod101, Learn French with Alexa, Comme une Française, Lingoni French, etc.

### German
- GermanPod101, Learn German with Herr Antrim, Deutsche Welle, Easy German, etc.

### English
- English with Lucy, EnglishClass101, Learn English with Emma, etc.

## 🛠 Technical Details

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Video Player**: YouTube iframe API
- **Storage**: Local Storage for progress tracking
- **Server**: Simple Python HTTP server for development

## 📝 Usage

1. Select your target language and proficiency level
2. Browse video categories by level
3. Watch embedded YouTube videos or click to open on YouTube
4. Mark videos as watched to track progress
5. Navigate between videos with Previous/Next buttons

## 🔧 Development

- **HTML**: `index.html` - Main application structure
- **CSS**: `styles.css` - Responsive styling and layout
- **JavaScript**: `app.js` - Application logic and YouTube integration
- **Data**: `lessons.js` - Video data organized by language and level
- **Translation**: `translations.js` - UI text (simplified to English only)
- **Server**: `serve.py` - Local development server

## 🎯 Why Use a Local Server?

YouTube's iframe API requires proper CORS headers and doesn't work with the `file://` protocol. The local server:
- Enables embedded video playback
- Provides proper HTTP headers
- Prevents CORS errors
- Offers better development experience