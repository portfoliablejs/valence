const translations = {
    "en": {
        "btn_pitch": "Pitch",
        "btn_repo": "Repo",
        "btn_demo": "Demo",
        "ai_summary": "AI Summary",
        "protected_case": "Protected Case",
        "play_video_presentation": "Play Video Presentation",
        "repository_code": "Repository code",
        "github_directory": "GitHub Directory",
        "live_demo": "Live demo",
        "live_demonstration": "Live Demonstration",
        "share": "Share",
        "copied": "Copied!",
        "close": "Close",
        "search_cases": "Search cases...",
        "swipe_explore": "Swipe to explore cases",
    },
    "pt": {
        "btn_pitch": "Pitch",
        "btn_repo": "Repo",
        "btn_demo": "Demo",
        "ai_summary": "Resumo da IA",
        "protected_case": "Case Protegido",
        "play_video_presentation": "Reproduzir Apresentação",
        "repository_code": "Código do repositório",
        "github_directory": "Diretório GitHub",
        "live_demo": "Demo ao vivo",
        "live_demonstration": "Demonstração ao Vivo",
        "share": "Compartilhar",
        "copied": "Copiado!",
        "close": "Fechar",
        "search_cases": "Buscar projetos...",
        "swipe_explore": "Deslize para explorar projetos",
    }
};

let currentLang = 'en';

export function setLanguage(lang) {
    currentLang = lang;
}

export function _t(en, pt) {
    return currentLang === 'pt' ? pt : en;
}

export function t(key) {
    return translations[currentLang]?.[key] || key;
}