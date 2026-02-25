// Element references
const scrollDownBtn = document.getElementById("scrollDownBtn");
const backToTopBtn = document.getElementById("backToTop");
const themeToggleBtn = document.getElementById("themeToggle");
const langMenuToggle = document.getElementById("langMenuToggle");
const langMenu = document.getElementById("langMenu");
const downloadPdfBtn = document.getElementById("downloadPdf");

// Language + i18n
let currentLang = "en";
const LANG_KEY = "hemanta-lang";

const translations = {
  en: {
    elements: {
      sidebarTitle: "Explore",
      sidebarMoviesBtn: "🎬 Recommended Movies",
      sidebarMusicBtn: "🎵 Recommended Music",
      sidebarProjectsBtn: "🎮 Projects & Games",
      subtitle: "Computer Science Student · Builder of Fun Things",
      heroTitle: "Welcome to my interactive world",
      heroText:
        "I’m Hemanta, a curious computer science student who loves mixing code with creativity. Scroll, click, and play around — this website is designed to be as fun and dynamic as the projects I enjoy building.",
      heroTag1: "Front-End Explorer",
      heroTag2: "Problem Solver",
      heroTag3: "Game Enthusiast",
      skillsTitle: "Skills",
      skillsIntro:
        "A blend of technical skills and creative problem solving. Always learning, always experimenting.",
      skillWebTitle: "Web Development",
      skillWebText:
        "HTML, CSS, JavaScript, responsive layouts, and building interactive experiences that feel alive.",
      skillProgTitle: "Programming",
      skillProgText:
        "Strong foundations in algorithms, data structures, and writing clean, readable code.",
      skillCreativeTitle: "Creative Projects",
      skillCreativeText:
        "Small games, playful UIs, and experiments that make learning computer science fun.",
      skillCollabTitle: "Collaboration",
      skillCollabText:
        "Communicating ideas clearly, working in teams, and turning concepts into working prototypes.",
      resumeTitle: "Resume Timeline",
      resumeIntro:
        "A quick journey through my academic and project milestones. Details live in my resume below.",
      resStudyTitle: "Computer Science Studies",
      resStudyTime: "Present",
      resStudyText:
        "Diving deep into core CS subjects, with a special interest in front-end development and interactive systems.",
      resProjectsTitle: "Personal Projects",
      resProjectsTime: "Ongoing",
      resProjectsText:
        "Building small games, experimenting with animations, and creating fun UI ideas like this website.",
      resFutureTitle: "Future Goals",
      resFutureTime: "Soon",
      resFutureText:
        "Internships, open-source contributions, and more polished projects that push my creativity and skills.",
      resumeDownloadText: "Download Resume (PDF)",
      resumeNote:
        "This is a sample / fake resume file referenced as Fake-Resume.pdf.",
      moviesTitle: "Recommended Movies",
      moviesIntro:
        "A few Nepali movies I recommend for a good time. Click a card to watch directly inside this page.",
      darpanDesc: "A classic emotional journey with music, friendship, and drama.",
      oonDesc: "A heartfelt story wrapped in warmth, humor, and nostalgia.",
      dimakhDesc: "Fun, chaos, and plenty of moments to make your mind spin (in a good way).",
      nowPlayingTitle: "Now Playing",
      videoHint: "Choose a movie card above to start watching.",
      musicTitle: "Recommended Music",
      musicIntro:
        "Some tracks to keep you energized while you explore the site or code along.",
      danzaDesc: "High energy, perfect for getting into a flow state.",
      gulabiDesc: "Colorful vibes and feel-good energy.",
      volumeLabel: "Volume",
      danzaDownload: "Download",
      gulabiDownload: "Download",
      projectsTitle: "Projects & Games",
      projectsIntro:
        "Playable mini-experiences built with web technologies. Try not to get too addicted!",
      flappyDesc:
        "A browser version of the classic flappy-style game. Tap or press space to fly.",
      hangmanDesc:
        "Guess the secret word letter by letter. Can you solve it in time?",
      habitTitle: "Habit Tracker",
      habitDesc:
        "Create daily habits, mark them done, and keep your streaks alive.",
      habitTip:
        "Streaks are counted per day. Mark a habit “Done today” once per day to keep it going.",
      habitOpenFull: "Open full habit tracker",
      locationTitle: "Location & Live Weather",
      locationIntro:
        "A quick glimpse of where I am in the world and what the weather looks like right now.",
      mapTitle: "My Location",
      mapIntro:
        "Currently set to Kathmandu, Nepal. You can customize the map URL to your actual location if needed.",
      weatherLocation: "Kathmandu, Nepal (via Open-Meteo API)",
      weatherTitle: "Live Weather",
      chatTitle: "Hemanta's AI Guide",
      chatIntro:
        "Hi! I’m your AI guide. Ask me to navigate (e.g., “Go to skills”), change theme (“dark mode”), or explain parts of the site. You can also use voice with the mic button.",
      habitAppTitle: "Habit Tracker App",
      habitAppIntro:
        "A focused view of your habits. Add what you care about, mark them done each day, and keep your streaks climbing.",
    },
    placeholders: {
      siteSearch: "Search this site...",
      habitNameInput: "Add a new habit (e.g., Code 30 minutes)",
      chatInput: "Ask me anything...",
    },
    buttons: {
      langLabel: "English",
      downloadPdf: "⬇ PDF",
      themeLight: "🌞 Light",
      themeDark: "🌙 Dark",
      scrollDown: "⬇ Scroll",
      habitAdd: "Add",
      hangmanRestart: "New Word",
      flappyStart: "Start / Restart",
    },
    messages: {
      flappyScore: "Score: {score}",
      hangmanWin: "You cracked it! 🎉",
      hangmanLose: "Out of attempts. The word was {word}.",
      hangmanPrompt: "Guess the word!",
      hangmanAttempts: "Attempts left: {n}",
      habitsEmpty: "No habits yet. Add your first one above.",
      habitStreak: "🔥 {days} day streak",
      weatherLoading: "Loading current weather...",
      weatherError:
        "Could not load weather right now. Please check your internet connection.",
      chatToSkills: "Taking you to the Skills section.",
      chatToResume:
        "Scrolling to your Resume timeline. You can also download the PDF there.",
      chatToMovies: "Opening the Recommended Movies section.",
      chatToMusic: "Heading over to the Recommended Music section.",
      chatToProjects:
        "Jumping to the Projects & Games section so you can play Flappy Birds, Hangman, and use the habit tracker.",
      chatToLocation: "Scrolling to your location and live weather section.",
      chatDarkOn: "Dark mode enabled. Things just got moodier.",
      chatLightOn: "Light mode enabled. Bright and energetic!",
      chatTop: "Scrolling back to the top.",
      chatHelp:
        "I can help you navigate (skills, resume, movies, music, projects, location), switch between dark and light themes, scroll to the top, and answer simple questions about this site.",
      chatUnknown:
        "I didn't fully understand that, but I can help you navigate the site. Try asking things like “Go to skills”, “Open movies”, “Turn on dark mode”, or “Show me the weather”.",
      voiceListening:
        "Listening... say a command like 'Go to skills' or 'dark mode'.",
      voiceError: "Could not understand audio. Please try again.",
      voiceUnsupported: "Voice commands are not supported in this browser.",
      voiceUnavailable: "Voice commands are not available in this browser.",
    },
  },
  ne: {
    elements: {
      sidebarTitle: "अनुसन्धान",
      sidebarMoviesBtn: "🎬 मन पर्ने फिल्महरू",
      sidebarMusicBtn: "🎵 मन पर्ने संगीत",
      sidebarProjectsBtn: "🎮 प्रोजेक्ट र गेमहरू",
      subtitle: "कम्प्युटर साइन्स विद्यार्थी · रमाइला कुरा बनाउने",
      heroTitle: "मेरो इन्टरएक्टिभ संसारमा स्वागत छ",
      heroText:
        "म हेमन्त, जिज्ञासु कम्प्युटर साइन्स विद्यार्थी, जसलाई कोड र क्रिएटिभिटी मिसाउन मन पर्छ। स्क्रोल, क्लिक र खेल्दै गर्नुहोस् — यो वेबसाइट मैले बनाउने रमाइला प्रोजेक्टहरू जस्तै इन्टरएक्टिभ छ।",
      heroTag1: "फ्रन्ट–एन्ड एक्स्प्लोरर",
      heroTag2: "समस्या समाधानकर्ता",
      heroTag3: "गेम मन पराउने",
      skillsTitle: "सीपहरू",
      skillsIntro:
        "प्राविधिक सीप र क्रिएटिभ सोचको मिश्रण। सधैं सिक्दै, सधैं प्रयोग गर्दै।",
      skillWebTitle: "वेब डेभलपमेन्ट",
      skillWebText:
        "HTML, CSS, JavaScript, रेस्पोन्सिभ लेआउट, र जीवन्त लाग्ने इन्टरएक्टिभ अनुभवहरू।",
      skillProgTitle: "प्रोग्रामिङ",
      skillProgText:
        "अल्गोरिदम, डेटा स्ट्रक्चर, र सफा, पढ्न सजिलो कोड लेख्ने राम्रो आधार।",
      skillCreativeTitle: "क्रिएटिभ प्रोजेक्टहरू",
      skillCreativeText:
        "सानातिना गेम, रमाइला UI, र कम्प्युटर साइन्स सिक्न अझै मज्जा आउने प्रयोगहरू।",
      skillCollabTitle: "सहकार्य",
      skillCollabText:
        "आफ्नो सोच स्पष्टसँग बुझाउने, टिमसँग काम गर्ने, र आइडियालाई प्रोटोटाइपमा बदल्ने।",
      resumeTitle: "रिज्युमे टाइमलाइन",
      resumeIntro:
        "मेरो अध्ययन र प्रोजेक्टको छोटो यात्रा। विस्तृत जानकारी तलको रिज्युमेमा छ।",
      resStudyTitle: "कम्प्युटर साइन्स अध्ययन",
      resStudyTime: "हाल",
      resStudyText:
        "मुख्य CS विषयहरूमा गहिरो अध्ययन, विशेष गरी फ्रन्ट–एन्ड र इन्टरएक्टिभ सिस्टममा रुचि।",
      resProjectsTitle: "व्यक्तिगत प्रोजेक्टहरू",
      resProjectsTime: "जारी",
      resProjectsText:
        "सानातिना गेम, एनिमेसन, र यस्तै रमाइला UI आइडिया (जस्तै यो वेबसाइट) बनाउँदै।",
      resFutureTitle: "भविष्य योजना",
      resFutureTime: "छिट्टै",
      resFutureText:
        "इन्टरनसिप, ओपन–सोर्स योगदान, र अझै पोलिस्ड प्रोजेक्टहरू जसले मेरो सीप र क्रिएटिभिटी बढाओस्।",
      resumeDownloadText: "रिज्युमे (PDF) डाउनलोड गर्नुहोस्",
      resumeNote:
        "यो एउटा उदाहरण / नक्कली रिज्युमे फाइल हो (Fake-Resume.pdf) सन्दर्भका लागि राखिएको।",
      moviesTitle: "मन पर्ने फिल्महरू",
      moviesIntro:
        "रमाइलो समय बिताउन केहि नेपाली फिल्महरू। कार्डमा क्लिक गरेर यही पेजभित्र हेर्नुहोस्।",
      darpanDesc: "सङ्गीत, मित्रता र ड्रामा भरिएको क्लासिक भावनात्मक यात्रा।",
      oonDesc: "न्यानोपन, हाँसो र नस्टाल्जियाले भरिएको रमाइलो कथा।",
      dimakhDesc: "मज्जाको, अलमलिने, तर रोचक क्षणहरूले दिमाग चलाइरहने फिल्म।",
      nowPlayingTitle: "अहिले चलिरहेको",
      videoHint: "फिल्म सुरु गर्न माथिको कार्डमध्ये कुनै एकमा क्लिक गर्नुहोस्।",
      musicTitle: "मन पर्ने संगीत",
      musicIntro:
        "साइट हेर्दा वा कोड लेख्दा उर्जा दिइरहने केही गीतहरू।",
      danzaDesc: "उच्च उर्जा, फोकस मोडमा जान उपयुक्त।",
      gulabiDesc: "रङ्गीन भाइब र राम्रो महसुस गराउने उर्जा।",
      volumeLabel: "भोल्युम",
      danzaDownload: "डाउनलोड",
      gulabiDownload: "डाउनलोड",
      projectsTitle: "प्रोजेक्ट र गेमहरू",
      projectsIntro:
        "वेब टेक्नोलोजीले बनेका साना, खेल्न मिल्ने अनुभवहरू। धेरै नै लत नलागोस् है!",
      flappyDesc:
        "क्लासिक फ्ल्याप्पी–स्टाइल गेमको ब्राउजर संस्करण। क्लिक वा स्पेस थिचेर उड्नुहोस्।",
      hangmanDesc:
        "लुकेको शब्दलाई एक–एक अक्षर अन्दाज गरेर पत्ता लगाउनुहोस्। समयमै सक्न सक्नुहुन्छ?",
      habitTitle: "ह्याबिट ट्रयाकर",
      habitDesc:
        "दैनिक बानीहरू थप्नुहोस्, पुरा भएको मार्क गर्नुहोस्, र आफ्नो स्ट्रिक जोगाइराख्नुहोस्।",
      habitTip:
        "स्ट्रिक दिनअनुसार गणना हुन्छ। प्रत्येक दिन एक पटक “आज गरें” थिच्नुहोस्।",
      habitOpenFull: "पुरै ह्याबिट ट्रयाकर खोल्नुहोस्",
      locationTitle: "स्थान र लाइभ मौसम",
      locationIntro:
        "म अहिले कहाँ छु र त्यहाँको मौसम कस्तो छ भन्ने छोटो झलक।",
      mapTitle: "मेरो स्थान",
      mapIntro:
        "अहिले काठमाडौं, नेपाल सेट गरिएको छ। चाहियो भने URL परिवर्तन गरेर आफ्नो वास्तविक स्थान राख्न सकिन्छ।",
      weatherLocation: "काठमाडौं, नेपाल (Open-Meteo API मार्फत)",
      weatherTitle: "लाइभ मौसम",
      chatTitle: "हेमन्तको AI गाइड",
      chatIntro:
        "नमस्ते! म तपाईंको AI गाइड हुँ। “स्किल्समा जाऊ”, “डार्क मोड चालु गर” जस्ता कमाण्ड दिँदा म साइट नेभिगेट र व्याख्या गर्न मद्दत गर्छु। माइक बटनबाट आवाज पनि प्रयोग गर्न सकिन्छ।",
      habitAppTitle: "ह्याबिट ट्रयाकर एप",
      habitAppIntro:
        "तपाईंका बानीहरू मात्रैको लागि बनाइएको भ्यु। महत्त्वपूर्ण बानीहरू थप्नुहोस्, दिनहुँ मार्क गर्नुहोस्, र स्ट्रिक बढ्दै गएको हेर्नुहोस्।",
    },
    placeholders: {
      siteSearch: "यस साइटमा खोज्नुहोस्...",
      habitNameInput: "नयाँ ह्याबिट थप्नुहोस् (जस्तै, दिनको ३० मिनेट कोड)",
      chatInput: "केही पनि सोध्नुहोस्...",
    },
    buttons: {
      langLabel: "नेपाली",
      downloadPdf: "⬇ पीडीएफ",
      themeLight: "🌞 उज्यालो",
      themeDark: "🌙 अँध्यारो",
      scrollDown: "⬇ तल स्क्रोल",
      habitAdd: "थप्नुहोस्",
      hangmanRestart: "नयाँ शब्द",
      flappyStart: "सुरु / पुन: सुरु",
    },
    messages: {
      flappyScore: "स्कोर: {score}",
      hangmanWin: "तपाईंले शब्द फेला पार्नुभयो! 🎉",
      hangmanLose: "प्रयास सकियो। लुकेको शब्द {word} थियो।",
      hangmanPrompt: "शब्द अनुमान गर्नुहोस्!",
      hangmanAttempts: "बाँकी प्रयास: {n}",
      habitsEmpty: "अहिले कुनै ह्याबिट छैन। माथि बाट पहिलो ह्याबिट थप्नुहोस्।",
      habitStreak: "🔥 {days} दिनको स्ट्रिक",
      weatherLoading: "हालको मौसम लोड हुँदैछ...",
      weatherError:
        "अहिले मौसम लोड हुन सकेन। कृपया इन्टरनेट जाँच गर्नुहोस्।",
      chatToSkills: "तपाईंलाई स्किल्स सेक्षनतिर लैइँदैछु।",
      chatToResume:
        "रिज्युमे टाइमलाइनतिर स्क्रोल गर्दैछु। त्यहाँबाट PDF पनि डाउनलोड गर्न सक्नुहुन्छ।",
      chatToMovies: "मन पर्ने नेपाली फिल्महरू भएको सेक्षन खोल्दैछु।",
      chatToMusic: "मन पर्ने संगीत भएको सेक्षनतिर जाँदैछु।",
      chatToProjects:
        "प्रोजेक्ट र गेम (फ्ल्याप्पी बर्ड, ह्याङ्गम्यान, ह्याबिट ट्रयाकर) भएको सेक्षनतिर जाँदैछु।",
      chatToLocation: "स्थान र लाइभ मौसम सेक्षनतिर स्क्रोल गर्दैछु।",
      chatDarkOn: "डार्क मोड अन भयो। अब अलि मूडी देखिन्छ।",
      chatLightOn: "लाइट मोड अन भयो। अब चम्किलो र ऊर्जाशील छ।",
      chatTop: "फेरि माथिल्लो भागतिर स्क्रोल गर्दैछु।",
      chatHelp:
        "म तपाईंलाई (स्किल्स, रिज्युमे, फिल्म, संगीत, प्रोजेक्ट, लोकेशन) सेक्षनहरूमा जान, डार्क/लाइट मोड स्विच गर्न, माथि जान, र साइटबारे सजिलो प्रश्नहरूमा मद्दत गर्न सक्छु।",
      chatUnknown:
        "मैले ठीक बुझिनँ, तर साइट नेभिगेट गर्न भने मद्दत गर्न सक्छु। “स्किल्समा जाऊ”, “फिल्म देखाउ”, “डार्क मोड चालु गर”, “मौसम देखाउ” जस्ता कमाण्ड दिनुहोस्।",
      voiceListening:
        "सुन्दैछु... “स्किल्समा जाऊ” वा “डार्क मोड” जस्ता कमाण्ड भन्नुहोस्।",
      voiceError:
        "अवाज ठिकसँग बुझ्न सकिएन। कृपया फेरि प्रयास गर्नुहोस्।",
      voiceUnsupported:
        "यो ब्राउजरले भ्वाइस कमाण्ड सपोर्ट गर्दैन।",
      voiceUnavailable:
        "यस ब्राउजरमा भ्वाइस कमाण्ड उपलब्ध छैन।",
    },
  },
  es: {
    elements: {
      sidebarTitle: "Explorar",
      sidebarMoviesBtn: "🎬 Películas recomendadas",
      sidebarMusicBtn: "🎵 Música recomendada",
      sidebarProjectsBtn: "🎮 Proyectos y juegos",
      subtitle: "Estudiante de Ciencias de la Computación · Creador de cosas divertidas",
      heroTitle: "Bienvenido a mi mundo interactivo",
      heroText:
        "Soy Hemanta, un estudiante de ciencias de la computación al que le encanta mezclar código y creatividad. Desplázate, haz clic y juega: este sitio está pensado para ser tan divertido y dinámico como los proyectos que me gusta crear.",
      heroTag1: "Explorador de front‑end",
      heroTag2: "Resolutor de problemas",
      heroTag3: "Amante de los juegos",
      skillsTitle: "Habilidades",
      skillsIntro:
        "Una mezcla de habilidades técnicas y creatividad para resolver problemas. Siempre aprendiendo y experimentando.",
      skillWebTitle: "Desarrollo web",
      skillWebText:
        "HTML, CSS, JavaScript, diseños responsivos y experiencias interactivas que se sienten vivas.",
      skillProgTitle: "Programación",
      skillProgText:
        "Buenas bases en algoritmos, estructuras de datos y código limpio y legible.",
      skillCreativeTitle: "Proyectos creativos",
      skillCreativeText:
        "Mini‑juegos, interfaces llamativas y experimentos que hacen que aprender informática sea más divertido.",
      skillCollabTitle: "Colaboración",
      skillCollabText:
        "Comunicar ideas con claridad, trabajar en equipo y convertir conceptos en prototipos funcionales.",
      resumeTitle: "Línea de tiempo de mi CV",
      resumeIntro:
        "Un pequeño recorrido por mis estudios y proyectos. Los detalles completos están en mi CV de abajo.",
      resStudyTitle: "Estudios de informática",
      resStudyTime: "Presente",
      resStudyText:
        "Profundizando en asignaturas clave de informática, con interés especial en front‑end y sistemas interactivos.",
      resProjectsTitle: "Proyectos personales",
      resProjectsTime: "En curso",
      resProjectsText:
        "Creando mini‑juegos, probando animaciones y diseñando interfaces como este sitio.",
      resFutureTitle: "Metas futuras",
      resFutureTime: "Pronto",
      resFutureText:
        "Prácticas, contribuciones a código abierto y proyectos más pulidos que eleven mis habilidades.",
      resumeDownloadText: "Descargar CV (PDF)",
      resumeNote:
        "Este es un archivo de currículum de ejemplo / falso llamado Fake-Resume.pdf, solo para referencia.",
      moviesTitle: "Películas recomendadas",
      moviesIntro:
        "Algunas películas nepalesas que recomiendo para pasar un buen rato. Haz clic en una tarjeta para verlas dentro de esta página.",
      darpanDesc:
        "Un viaje clásico y emotivo lleno de música, amistad y drama.",
      oonDesc:
        "Una historia entrañable llena de calidez, humor y nostalgia.",
      dimakhDesc:
        "Diversión y caos con momentos que te harán girar la cabeza (en el buen sentido).",
      nowPlayingTitle: "Reproduciendo ahora",
      videoHint:
        "Elige una tarjeta de película de arriba para empezar a ver.",
      musicTitle: "Música recomendada",
      musicIntro:
        "Algunas canciones para mantenerte con energía mientras navegas o programas.",
      danzaDesc:
        "Mucha energía, perfecta para entrar en estado de flujo.",
      gulabiDesc:
        "Vibras coloridas y mucha energía positiva.",
      volumeLabel: "Volumen",
      danzaDownload: "Descargar",
      gulabiDownload: "Descargar",
      projectsTitle: "Proyectos y juegos",
      projectsIntro:
        "Mini‑experiencias jugables hechas con tecnologías web. ¡Cuidado con la adicción!",
      flappyDesc:
        "Versión web del clásico juego estilo Flappy. Pulsa o usa la barra espaciadora para volar.",
      hangmanDesc:
        "Adivina la palabra secreta letra por letra. ¿Podrás resolverla a tiempo?",
      habitTitle: "Registro de hábitos",
      habitDesc:
        "Crea hábitos diarios, márcalos como hechos y mantén vivas tus rachas.",
      habitTip:
        "Las rachas se cuentan por día. Marca “Hecho hoy” una vez por día para no romperla.",
      habitOpenFull: "Abrir el registro de hábitos completo",
      locationTitle: "Ubicación y clima en vivo",
      locationIntro:
        "Un vistazo rápido de dónde estoy y cómo está el clima ahora mismo.",
      mapTitle: "Mi ubicación",
      mapIntro:
        "Actualmente configurado en Katmandú, Nepal. Puedes cambiar la URL del mapa a tu ubicación real.",
      mapOpenButton: "Abrir en Google Maps",
      weatherLocation: "Katmandú, Nepal (a través de Open‑Meteo API)",
      weatherTitle: "Clima en vivo",
      chatTitle: "Asistente IA de Hemanta",
      chatIntro:
        "¡Hola! Soy tu guía IA. Pídeme que navegue (p. ej., “Ir a habilidades”), que cambie el tema (“modo oscuro”) o que explique partes de la página. También puedes usar tu voz con el botón del micrófono.",
      habitAppTitle: "Aplicación de registro de hábitos",
      habitAppIntro:
        "Una vista enfocada en tus hábitos. Añade lo que te importa, márcalos cada día y mira cómo suben tus rachas.",
    },
    placeholders: {
      siteSearch: "Buscar en este sitio...",
      habitNameInput: "Añade un nuevo hábito (p. ej., programar 30 minutos)",
      chatInput: "Pregúntame lo que quieras...",
    },
    buttons: {
      langLabel: "Español",
      downloadPdf: "⬇ PDF",
      themeLight: "🌞 Claro",
      themeDark: "🌙 Oscuro",
      scrollDown: "⬇ Desplazar",
      habitAdd: "Añadir",
      hangmanRestart: "Nueva palabra",
      flappyStart: "Iniciar / Reiniciar",
    },
    messages: {
      flappyScore: "Puntuación: {score}",
      hangmanWin: "¡Has descubierto la palabra! 🎉",
      hangmanLose: "Se terminaron los intentos. La palabra era {word}.",
      hangmanPrompt: "¡Adivina la palabra!",
      hangmanAttempts: "Intentos restantes: {n}",
      habitsEmpty: "Todavía no hay hábitos. Añade el primero arriba.",
      habitStreak: "🔥 Racha de {days} días",
      weatherLoading: "Cargando el clima actual...",
      weatherError:
        "No se pudo cargar el clima ahora. Comprueba tu conexión a Internet.",
      chatToSkills:
        "Te llevo a la sección de habilidades.",
      chatToResume:
        "Desplazando hasta la línea de tiempo de tu CV. Allí también puedes descargar el PDF.",
      chatToMovies:
        "Abriendo la sección de películas recomendadas.",
      chatToMusic:
        "Yendo a la sección de música recomendada.",
      chatToProjects:
        "Saltando a la sección de proyectos y juegos, donde puedes jugar y usar el registro de hábitos.",
      chatToLocation:
        "Desplazando hacia tu ubicación y el clima en vivo.",
      chatDarkOn: "Modo oscuro activado. Ahora todo se ve más intenso.",
      chatLightOn: "Modo claro activado. Brillante y lleno de energía.",
      chatTop: "Desplazando de nuevo hacia arriba.",
      chatHelp:
        "Puedo ayudarte a navegar (habilidades, CV, películas, música, proyectos, ubicación), cambiar entre modo claro y oscuro, volver arriba y responder preguntas sencillas sobre este sitio.",
      chatUnknown:
        "No entendí del todo, pero puedo ayudarte a navegar. Prueba con “Ir a habilidades”, “Abrir películas”, “Activar modo oscuro” o “Mostrar el clima”.",
      voiceListening:
        "Escuchando... di algo como “Ir a habilidades” o “modo oscuro”.",
      voiceError:
        "No pude entender el audio. Inténtalo de nuevo.",
      voiceUnsupported:
        "Este navegador no admite comandos de voz.",
      voiceUnavailable:
        "Los comandos de voz no están disponibles en este navegador.",
    },
  },
  de: {
    elements: {
      sidebarTitle: "Entdecken",
      sidebarMoviesBtn: "🎬 Empfohlene Filme",
      sidebarMusicBtn: "🎵 Empfohlene Musik",
      sidebarProjectsBtn: "🎮 Projekte & Spiele",
      subtitle: "Informatikstudent · Erschaffer von spaßigen Projekten",
      heroTitle: "Willkommen in meiner interaktiven Welt",
      heroText:
        "Ich bin Hemanta, ein neugieriger Informatikstudent, der es liebt, Code mit Kreativität zu verbinden. Scrolle, klicke und probiere aus – diese Website soll so lebendig und spielerisch sein wie die Projekte, die ich gern baue.",
      heroTag1: "Front‑End‑Entdecker",
      heroTag2: "Problemlöser",
      heroTag3: "Spiele‑Fan",
      skillsTitle: "Fähigkeiten",
      skillsIntro:
        "Eine Mischung aus technischen Fähigkeiten und kreativer Problemlösung. Immer am Lernen, immer am Experimentieren.",
      skillWebTitle: "Webentwicklung",
      skillWebText:
        "HTML, CSS, JavaScript, responsive Layouts und interaktive Erlebnisse, die lebendig wirken.",
      skillProgTitle: "Programmierung",
      skillProgText:
        "Stabile Grundlagen in Algorithmen und Datenstrukturen sowie gut lesbarer Code.",
      skillCreativeTitle: "Kreative Projekte",
      skillCreativeText:
        "Kleine Spiele, verspielte UIs und Experimente, die das Lernen der Informatik spannender machen.",
      skillCollabTitle: "Zusammenarbeit",
      skillCollabText:
        "Ideen klar kommunizieren, im Team arbeiten und Konzepte in funktionierende Prototypen verwandeln.",
      resumeTitle: "Lebenslauf‑Zeitachse",
      resumeIntro:
        "Ein kurzer Überblick über mein Studium und meine Projekte. Details findest du im PDF‑Lebenslauf unten.",
      resStudyTitle: "Informatikstudium",
      resStudyTime: "Gegenwart",
      resStudyText:
        "Vertiefung in zentrale Informatikthemen, insbesondere Front‑End‑Entwicklung und interaktive Systeme.",
      resProjectsTitle: "Persönliche Projekte",
      resProjectsTime: "Laufend",
      resProjectsText:
        "Entwicklung kleiner Spiele, Experimente mit Animationen und Umsetzung von UI‑Ideen wie dieser Seite.",
      resFutureTitle: "Zukünftige Ziele",
      resFutureTime: "Bald",
      resFutureText:
        "Praktika, Open‑Source‑Beiträge und ausgereiftere Projekte, die meine Fähigkeiten weiterentwickeln.",
      resumeDownloadText: "Lebenslauf (PDF) herunterladen",
      resumeNote:
        "Dies ist eine Beispiel‑/Fake‑Lebenslaufdatei namens Fake-Resume.pdf, nur zu Demonstrationszwecken.",
      moviesTitle: "Empfohlene Filme",
      moviesIntro:
        "Einige nepalesische Filme, die ich für einen gemütlichen Abend empfehle. Klicke auf eine Karte, um den Film direkt auf der Seite zu sehen.",
      darpanDesc:
        "Eine klassische, emotionale Reise voller Musik, Freundschaft und Drama.",
      oonDesc:
        "Eine herzliche Geschichte voller Wärme, Humor und Nostalgie.",
      dimakhDesc:
        "Eine chaotisch‑lustige Geschichte mit vielen verrückten Momenten – im guten Sinne.",
      nowPlayingTitle: "Jetzt läuft",
      videoHint:
        "Wähle oben eine Filmkarte aus, um die Wiedergabe zu starten.",
      musicTitle: "Empfohlene Musik",
      musicIntro:
        "Ein paar Tracks, die dir beim Surfen oder Programmieren Energie geben.",
      danzaDesc:
        "Sehr energiegeladen – perfekt, um in den Flow zu kommen.",
      gulabiDesc:
        "Farbenfrohe Vibes und richtig gute Laune.",
      volumeLabel: "Lautstärke",
      danzaDownload: "Herunterladen",
      gulabiDownload: "Herunterladen",
      projectsTitle: "Projekte & Spiele",
      projectsIntro:
        "Kleine, im Browser spielbare Web‑Experiences. Versuch, nicht zu süchtig zu werden!",
      flappyDesc:
        "Browser‑Version des klassischen Flappy‑Bird‑Stils. Tippe oder drücke die Leertaste, um zu fliegen.",
      hangmanDesc:
        "Errate das geheime Wort Buchstabe für Buchstabe. Schaffst du es rechtzeitig?",
      habitTitle: "Gewohnheits‑Tracker",
      habitDesc:
        "Lege tägliche Gewohnheiten an, markiere sie als erledigt und halte deine Streaks am Leben.",
      habitTip:
        "Streaks werden pro Tag gezählt. Markiere „Heute erledigt“ einmal täglich, damit sie nicht abreißt.",
      habitOpenFull: "Kompletten Gewohnheits‑Tracker öffnen",
      locationTitle: "Standort & aktuelles Wetter",
      locationIntro:
        "Ein kurzer Blick darauf, wo ich gerade bin und wie das Wetter dort ist.",
      mapTitle: "Mein Standort",
      mapIntro:
        "Derzeit auf Kathmandu (Nepal) eingestellt. Du kannst die Karten‑URL auf deinen echten Standort ändern.",
      mapOpenButton: "In Google Maps öffnen",
      weatherLocation: "Kathmandu, Nepal (über Open‑Meteo‑API)",
      weatherTitle: "Aktuelles Wetter",
      chatTitle: "Hemantas KI‑Assistent",
      chatIntro:
        "Hi! Ich bin dein KI‑Guide. Bitte mich, zu navigieren (z. B. „Zu Fähigkeiten gehen“), das Theme zu wechseln („Dark Mode“) oder Teile der Seite zu erklären. Über den Mikrofon‑Button kannst du auch Sprachbefehle nutzen.",
      habitAppTitle: "Gewohnheits‑Tracker App",
      habitAppIntro:
        "Eine fokussierte Ansicht nur für deine Gewohnheiten. Füge wichtige Routinen hinzu, markiere sie täglich und beobachte, wie deine Streaks wachsen.",
    },
    placeholders: {
      siteSearch: "Diese Seite durchsuchen...",
      habitNameInput:
        "Neue Gewohnheit hinzufügen (z. B. 30 Minuten programmieren)",
      chatInput: "Frag mich irgendetwas...",
    },
    buttons: {
      langLabel: "Deutsch",
      downloadPdf: "⬇ PDF",
      themeLight: "🌞 Hell",
      themeDark: "🌙 Dunkel",
      scrollDown: "⬇ Nach unten",
      habitAdd: "Hinzufügen",
      hangmanRestart: "Neues Wort",
      flappyStart: "Start / Neustart",
    },
    messages: {
      flappyScore: "Punkte: {score}",
      hangmanWin: "Du hast das Wort erraten! 🎉",
      hangmanLose: "Keine Versuche mehr. Das Wort war {word}.",
      hangmanPrompt: "Errate das Wort!",
      hangmanAttempts: "Verbleibende Versuche: {n}",
      habitsEmpty:
        "Noch keine Gewohnheiten. Füge oben deine erste Gewohnheit hinzu.",
      habitStreak: "🔥 Streak von {days} Tagen",
      weatherLoading: "Aktuelles Wetter wird geladen...",
      weatherError:
        "Das Wetter konnte gerade nicht geladen werden. Bitte prüfe deine Internetverbindung.",
      chatToSkills:
        "Ich bringe dich zum Abschnitt „Fähigkeiten“.",
      chatToResume:
        "Ich scrolle zur Lebenslauf‑Zeitachse. Dort kannst du auch das PDF herunterladen.",
      chatToMovies:
        "Ich öffne den Bereich mit empfohlenen Filmen.",
      chatToMusic:
        "Ich wechsle zum Abschnitt mit empfohlener Musik.",
      chatToProjects:
        "Ich springe zum Abschnitt „Projekte & Spiele“, damit du spielen und den Gewohnheits‑Tracker nutzen kannst.",
      chatToLocation:
        "Ich scrolle zu deinem Standort und dem Live‑Wetter.",
      chatDarkOn: "Dunkelmodus aktiviert. Jetzt wird es stimmungsvoller.",
      chatLightOn: "Hellmodus aktiviert. Heller und energiegeladener!",
      chatTop: "Ich scrolle wieder nach oben.",
      chatHelp:
        "Ich kann dir helfen, durch die Seite zu navigieren (Fähigkeiten, Lebenslauf, Filme, Musik, Projekte, Standort), zwischen hell/dunkel zu wechseln, nach oben zu springen und einfache Fragen zur Seite zu beantworten.",
      chatUnknown:
        "Das habe ich nicht ganz verstanden, aber ich kann dir beim Navigieren helfen. Versuche Sätze wie „Zu Fähigkeiten gehen“, „Filme öffnen“, „Dunkelmodus aktivieren“ oder „Wetter anzeigen“.",
      voiceListening:
        "Ich höre zu … sage z. B. „Zu Fähigkeiten gehen“ oder „Dunkelmodus“.",
      voiceError:
        "Sprachbefehl konnte nicht verstanden werden. Bitte versuche es erneut.",
      voiceUnsupported:
        "Dieser Browser unterstützt keine Sprachbefehle.",
      voiceUnavailable:
        "Sprachbefehle sind in diesem Browser nicht verfügbar.",
    },
  },
  zh: {
    elements: {
      sidebarTitle: "探索",
      sidebarMoviesBtn: "🎬 推荐电影",
      sidebarMusicBtn: "🎵 推荐音乐",
      sidebarProjectsBtn: "🎮 项目与游戏",
      subtitle: "计算机科学学生 · 热爱创造有趣作品",
      heroTitle: "欢迎来到我的互动世界",
      heroText:
        "我是 Hemanta，一名好奇的计算机科学学生，喜欢把代码和创意结合在一起。向下滚动、点击和尝试——这个网站就像我做的项目一样有趣又充满活力。",
      heroTag1: "前端探索者",
      heroTag2: "问题解决者",
      heroTag3: "游戏爱好者",
      skillsTitle: "技能",
      skillsIntro:
        "兼具技术能力与创意解决问题的思维。一直在学习，也一直在尝试新东西。",
      skillWebTitle: "网页开发",
      skillWebText:
        "HTML、CSS、JavaScript，自适应布局，以及充满生命力的互动体验。",
      skillProgTitle: "编程",
      skillProgText:
        "扎实的算法和数据结构基础，追求简洁易读的代码。",
      skillCreativeTitle: "创意项目",
      skillCreativeText:
        "小型游戏、有趣的界面和各种实验，让学习计算机科学变得更好玩。",
      skillCollabTitle: "协作",
      skillCollabText:
        "清晰表达想法，在团队中合作，把概念变成真正可运行的原型。",
      resumeTitle: "简历时间线",
      resumeIntro:
        "快速浏览一下我的学习与项目之路。更多细节在下面的简历 PDF 中。",
      resStudyTitle: "计算机科学学习",
      resStudyTime: "现在",
      resStudyText:
        "深入学习计算机科学核心课程，特别关注前端开发和交互式系统。",
      resProjectsTitle: "个人项目",
      resProjectsTime: "进行中",
      resProjectsText:
        "制作小型游戏、尝试动画效果，并构思像本网站这样的有趣界面。",
      resFutureTitle: "未来目标",
      resFutureTime: "不久",
      resFutureText:
        "实习、开源贡献以及更完善的项目，让自己的能力不断提升。",
      resumeDownloadText: "下载简历 (PDF)",
      resumeNote:
        "这是一个示例 / 虚构的简历文件，文件名为 Fake-Resume.pdf，仅用于演示。",
      moviesTitle: "推荐电影",
      moviesIntro:
        "几部我推荐的尼泊尔电影。点击卡片即可在此页面中直接播放。",
      darpanDesc:
        "充满音乐、友情与戏剧张力的经典情感电影。",
      oonDesc:
        "一部温暖又幽默、充满怀旧气息的故事。",
      dimakhDesc:
        "有趣又略带混乱的影片，会让你的大脑愉快地“转起来”。",
      nowPlayingTitle: "正在播放",
      videoHint:
        "点击上方任意电影卡片即可开始播放。",
      musicTitle: "推荐音乐",
      musicIntro:
        "在浏览或写代码时，帮助你保持状态的几首歌曲。",
      danzaDesc:
        "节奏感很强，非常适合进入专注状态。",
      gulabiDesc:
        "色彩十足、让人心情愉悦的旋律。",
      volumeLabel: "音量",
      danzaDownload: "下载",
      gulabiDownload: "下载",
      projectsTitle: "项目与游戏",
      projectsIntro:
        "使用 Web 技术制作的可玩小体验。小心，可能会上瘾！",
      flappyDesc:
        "经典 Flappy 风格游戏的浏览器版本。点击或按空格键让小鸟飞起来。",
      hangmanDesc:
        "逐个字母猜出秘密单词。你能在机会用完之前完成吗？",
      habitTitle: "习惯追踪器",
      habitDesc:
        "添加每日习惯，把完成情况标记出来，保持你的连续打卡记录。",
      habitTip:
        "连续天数是按日计算的。每天点击一次“今天已完成”即可保持连击。",
      habitOpenFull: "打开完整习惯追踪页面",
      locationTitle: "位置与实时天气",
      locationIntro:
        "快速了解我现在所在的位置以及此刻的天气情况。",
      mapTitle: "我的位置",
      mapIntro:
        "目前设置为尼泊尔·加德满都。如有需要，可以修改地图 URL 为你的真实位置。",
      mapOpenButton: "在 Google 地图中打开",
      weatherLocation: "加德满都，尼泊尔（使用 Open‑Meteo API）",
      weatherTitle: "实时天气",
      chatTitle: "Hemanta 的智能助手",
      chatIntro:
        "你好！我是你的 AI 导航助手。你可以让我帮你跳转（例如“去技能页面”）、切换主题（“开启深色模式”），或讲解页面内容。也可以点击麦克风按钮使用语音指令。",
      habitAppTitle: "习惯追踪应用",
      habitAppIntro:
        "专注于你的习惯视图。添加重要的习惯，每天打卡，看着连续天数不断增加。",
    },
    placeholders: {
      siteSearch: "在本网站中搜索…",
      habitNameInput: "添加新习惯（例如，每天编码 30 分钟）",
      chatInput: "想问什么都可以…",
    },
    buttons: {
      langLabel: "中文",
      downloadPdf: "⬇ PDF",
      themeLight: "🌞 亮色",
      themeDark: "🌙 深色",
      scrollDown: "⬇ 向下滚动",
      habitAdd: "添加",
      hangmanRestart: "新单词",
      flappyStart: "开始 / 重来",
    },
    messages: {
      flappyScore: "得分：{score}",
      hangmanWin: "你猜对了这个单词！🎉",
      hangmanLose: "机会用完了。正确答案是 {word}。",
      hangmanPrompt: "来猜一猜这个单词吧！",
      hangmanAttempts: "剩余次数：{n}",
      habitsEmpty: "还没有任何习惯。可以先在上方添加一个。",
      habitStreak: "🔥 已连续 {days} 天",
      weatherLoading: "正在加载当前天气…",
      weatherError:
        "现在无法获取天气数据，请检查你的网络连接。",
      chatToSkills:
        "正在带你前往“技能”板块。",
      chatToResume:
        "正在滚动到简历时间线。在那里你也可以下载 PDF。",
      chatToMovies:
        "正在打开“推荐电影”板块。",
      chatToMusic:
        "正在前往“推荐音乐”板块。",
      chatToProjects:
        "正在跳转到“项目与游戏”板块，你可以在这里玩游戏并使用习惯追踪器。",
      chatToLocation:
        "正在滚动到“位置与实时天气”板块。",
      chatDarkOn: "已切换到深色模式。现在看起来更有氛围了。",
      chatLightOn: "已切换到亮色模式。更加明亮、有活力！",
      chatTop: "正在滚动回到页面顶部。",
      chatHelp:
        "我可以帮助你导航（技能、简历、电影、音乐、项目、位置）、切换深色/亮色模式、回到顶部，以及回答与本网站相关的简单问题。",
      chatUnknown:
        "我没完全听懂，不过我可以帮助你在站内导航。可以试试说“去技能页面”、“打开电影”、“开启深色模式”或“显示天气”等。",
      voiceListening:
        "正在聆听…可以说“去技能页面”或“深色模式”等指令。",
      voiceError:
        "没有听清你的语音，请再试一次。",
      voiceUnsupported:
        "此浏览器暂不支持语音指令。",
      voiceUnavailable:
        "本浏览器中暂时无法使用语音指令。",
    },
  },
  ru: {
    elements: {
      sidebarTitle: "Обзор",
      sidebarMoviesBtn: "🎬 Рекомендованные фильмы",
      sidebarMusicBtn: "🎵 Рекомендованная музыка",
      sidebarProjectsBtn: "🎮 Проекты и игры",
      subtitle: "Студент‑программист · Создатель забавных проектов",
      heroTitle: "Добро пожаловать в мой интерактивный мир",
      heroText:
        "Я Хеманта, любознательный студент информатики, который обожает совмещать код и креатив. Листайте вниз, нажимайте и играйте — этот сайт задуман таким же живым и весёлым, как проекты, которые я люблю делать.",
      heroTag1: "Исследователь фронтенда",
      heroTag2: "Решатель задач",
      heroTag3: "Любитель игр",
      skillsTitle: "Навыки",
      skillsIntro:
        "Сочетание технических навыков и творческого подхода к решению задач. Всегда учусь и экспериментирую.",
      skillWebTitle: "Веб‑разработка",
      skillWebText:
        "HTML, CSS, JavaScript, адаптивная вёрстка и интерактивные интерфейсы, которые ощущаются «живыми».",
      skillProgTitle: "Программирование",
      skillProgText:
        "Прочные основы алгоритмов и структур данных, аккуратный и понятный код.",
      skillCreativeTitle: "Творческие проекты",
      skillCreativeText:
        "Небольшие игры, забавные интерфейсы и эксперименты, которые делают изучение информатики интереснее.",
      skillCollabTitle: "Сотрудничество",
      skillCollabText:
        "Чёткая коммуникация идей, работа в команде и превращение концепций в рабочие прототипы.",
      resumeTitle: "Хронология резюме",
      resumeIntro:
        "Короткое путешествие по моему обучению и проектам. Подробности — в PDF‑резюме ниже.",
      resStudyTitle: "Изучение информатики",
      resStudyTime: "Сейчас",
      resStudyText:
        "Углубляюсь в ключевые дисциплины CS, особенно интересуюсь фронтендом и интерактивными системами.",
      resProjectsTitle: "Личные проекты",
      resProjectsTime: "В процессе",
      resProjectsText:
        "Создаю мини‑игры, экспериментирую с анимацией и придумываю забавные интерфейсы вроде этого сайта.",
      resFutureTitle: "Будущие цели",
      resFutureTime: "Скоро",
      resFutureText:
        "Стажировки, вклад в open‑source и более серьёзные проекты, которые прокачают мои навыки.",
      resumeDownloadText: "Скачать резюме (PDF)",
      resumeNote:
        "Это пример / фиктивный файл резюме с именем Fake-Resume.pdf, используемый только для демонстрации.",
      moviesTitle: "Рекомендованные фильмы",
      moviesIntro:
        "Несколько непальских фильмов, которые я советую посмотреть. Нажмите на карточку, чтобы запустить фильм прямо на странице.",
      darpanDesc:
        "Классическая эмоциональная история с музыкой, дружбой и драмой.",
      oonDesc:
        "Тёплая история с юмором и нотками ностальгии.",
      dimakhDesc:
        "Весёлый и немного хаотичный фильм, который приятно «взрывает мозг».",
      nowPlayingTitle: "Сейчас играет",
      videoHint:
        "Выберите любую карточку фильма выше, чтобы начать просмотр.",
      musicTitle: "Рекомендованная музыка",
      musicIntro:
        "Несколько треков, которые помогают поддерживать энергию, пока вы смотрите сайт или пишете код.",
      danzaDesc:
        "Очень энергичный трек, идеально подходящий для состояния потока.",
      gulabiDesc:
        "Яркая музыка с хорошим настроением.",
      volumeLabel: "Громкость",
      danzaDownload: "Скачать",
      gulabiDownload: "Скачать",
      projectsTitle: "Проекты и игры",
      projectsIntro:
        "Небольшие игровые веб‑проекты. Постарайтесь не слишком подсесть!",
      flappyDesc:
        "Браузерная версия классической игры в стиле Flappy Bird. Кликайте или нажимайте пробел, чтобы лететь.",
      hangmanDesc:
        "Отгадывайте скрытое слово по буквам. Успеете до окончания попыток?",
      habitTitle: "Трекер привычек",
      habitDesc:
        "Добавляйте ежедневные привычки, отмечайте выполнение и сохраняйте свои серии.",
      habitTip:
        "Серия считается по дням. Нажимайте «Сегодня выполнено» один раз в день, чтобы не прерывать её.",
      habitOpenFull: "Открыть полный трекер привычек",
      locationTitle: "Местоположение и погода",
      locationIntro:
        "Краткий взгляд на то, где я нахожусь и какая там сейчас погода.",
      mapTitle: "Моё местоположение",
      mapIntro:
        "Сейчас задан город Катманду (Непал). При необходимости можно изменить URL карты на свой реальный адрес.",
      mapOpenButton: "Открыть в Google Maps",
      weatherLocation: "Катманду, Непал (через Open‑Meteo API)",
      weatherTitle: "Погода сейчас",
      chatTitle: "ИИ‑помощник Хеманты",
      chatIntro:
        "Привет! Я твой ИИ‑проводник по сайту. Могу помогать с навигацией (например, «перейди к навыкам»), переключать тему («тёмный режим») и объяснять части страницы. Можно также использовать голос, нажав кнопку с микрофоном.",
      habitAppTitle: "Приложение трекера привычек",
      habitAppIntro:
        "Отдельный экран только для привычек. Добавляй важные действия, отмечай их каждый день и следи за ростом своей серии.",
    },
    placeholders: {
      siteSearch: "Поиск по сайту…",
      habitNameInput:
        "Добавьте новую привычку (например, 30 минут кодинга в день)",
      chatInput: "Спросите что‑нибудь…",
    },
    buttons: {
      langLabel: "Русский",
      downloadPdf: "⬇ PDF",
      themeLight: "🌞 Светлая",
      themeDark: "🌙 Тёмная",
      scrollDown: "⬇ Вниз",
      habitAdd: "Добавить",
      hangmanRestart: "Новое слово",
      flappyStart: "Старт / Сброс",
    },
    messages: {
      flappyScore: "Счёт: {score}",
      hangmanWin: "Ты отгадал слово! 🎉",
      hangmanLose: "Попытки закончились. Загаданное слово: {word}.",
      hangmanPrompt: "Попробуй угадать слово!",
      hangmanAttempts: "Оставшиеся попытки: {n}",
      habitsEmpty:
        "Пока нет ни одной привычки. Добавь первую с помощью формы выше.",
      habitStreak: "🔥 Серия: {days} дн.",
      weatherLoading: "Загружаю текущую погоду…",
      weatherError:
        "Не удалось загрузить данные о погоде. Проверь подключение к Интернету.",
      chatToSkills:
        "Перехожу к разделу с навыками.",
      chatToResume:
        "Прокручиваю к хронологии резюме. Там можно скачать PDF.",
      chatToMovies:
        "Открываю раздел с рекомендованными фильмами.",
      chatToMusic:
        "Перехожу к разделу с рекомендованной музыкой.",
      chatToProjects:
        "Перехожу к разделу «Проекты и игры», где можно поиграть и пользоваться трекером привычек.",
      chatToLocation:
        "Прокручиваю к разделу с местоположением и погодой.",
      chatDarkOn: "Тёмная тема включена. Стало немного атмосфернее.",
      chatLightOn: "Светлая тема включена. Ярко и бодро!",
      chatTop: "Прокручиваю страницу наверх.",
      chatHelp:
        "Я могу помочь с навигацией (навыки, резюме, фильмы, музыка, проекты, местоположение), переключением светлой/тёмной темы, возвратом к началу и простыми вопросами о сайте.",
      chatUnknown:
        "Я не до конца понял запрос, но могу помочь с навигацией. Попробуй фразы вроде «перейди к навыкам», «открой фильмы», «включи тёмную тему» или «покажи погоду».",
      voiceListening:
        "Слушаю… скажи, например, «перейди к навыкам» или «тёмный режим».",
      voiceError:
        "Не получилось распознать голос. Попробуй ещё раз.",
      voiceUnsupported:
        "Этот браузер не поддерживает голосовые команды.",
      voiceUnavailable:
        "Голосовые команды недоступны в этом браузере.",
    },
  },
};

function tMessage(key) {
  const langData = translations[currentLang] || translations.en;
  const msg = langData.messages[key] ?? translations.en.messages[key];
  return msg ?? key;
}

function formatMessage(template, params) {
  return template.replace(/\{(\w+)\}/g, (_, k) =>
    params && params[k] != null ? params[k] : ""
  );
}

function updateThemeButtonLabel() {
  if (!themeToggleBtn) return;
  const langData = translations[currentLang] || translations.en;
  const isDark = document.body.classList.contains("dark-theme");
  themeToggleBtn.textContent = isDark
    ? langData.buttons?.themeDark || translations.en.buttons.themeDark
    : langData.buttons?.themeLight || translations.en.buttons.themeLight;
}

function applyLanguageStatics() {
  const langData = translations[currentLang] || translations.en;

  // Element textContent
  Object.entries(langData.elements || {}).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // Placeholders
  Object.entries(langData.placeholders || {}).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el && "placeholder" in el) {
      el.placeholder = text;
    }
  });

  // Buttons
  if (langMenuToggle) {
    const label = langData.buttons?.langLabel || translations.en.buttons.langLabel || "English";
    langMenuToggle.textContent = `🌐 ${label}`;
  }
  if (downloadPdfBtn) {
    downloadPdfBtn.textContent =
      langData.buttons?.downloadPdf || translations.en.buttons.downloadPdf;
  }
  if (scrollDownBtn) {
    scrollDownBtn.textContent =
      langData.buttons?.scrollDown || translations.en.buttons.scrollDown;
  }
  const habitAddBtnLocal = document.getElementById("habitAddBtn");
  if (habitAddBtnLocal) {
    habitAddBtnLocal.textContent =
      langData.buttons?.habitAdd || translations.en.buttons.habitAdd;
  }
  const hangmanRestartBtnLocal = document.getElementById("hangmanRestart");
  if (hangmanRestartBtnLocal) {
    hangmanRestartBtnLocal.textContent =
      langData.buttons?.hangmanRestart || translations.en.buttons.hangmanRestart;
  }
  const flappyStartBtnLocal = document.getElementById("flappyStart");
  if (flappyStartBtnLocal) {
    flappyStartBtnLocal.textContent =
      langData.buttons?.flappyStart || translations.en.buttons.flappyStart;
  }

  // Habit full app link text
  const habitOpenFull = document.getElementById("habitOpenFull");
  if (habitOpenFull && langData.elements.habitOpenFull) {
    habitOpenFull.textContent = langData.elements.habitOpenFull;
  }

  updateThemeButtonLabel();
}

function setLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  localStorage.setItem(LANG_KEY, currentLang);
  applyLanguageStatics();
}

// Smooth scrolling helpers
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

scrollDownBtn?.addEventListener("click", () => {
  scrollToSection("skills");
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (!backToTopBtn) return;
  const show = window.scrollY > 250;
  backToTopBtn.classList.toggle("visible", show);
});

// Theme toggle
function setTheme(isDark) {
  const body = document.body;
  if (isDark) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
  updateThemeButtonLabel();
  localStorage.setItem("hemanta-theme", isDark ? "dark" : "light");
}

// Initialize theme
(() => {
  const stored = localStorage.getItem("hemanta-theme");
  if (stored === "dark") {
    setTheme(true);
  } else {
    setTheme(false);
  }
})();

themeToggleBtn?.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-theme");
  setTheme(isDark);
});

// Initialize language after DOM is ready
(() => {
  const storedLang = localStorage.getItem(LANG_KEY);
  if (storedLang && translations[storedLang]) {
    currentLang = storedLang;
  } else {
    currentLang = "en";
  }
  applyLanguageStatics();
})();

langMenuToggle?.addEventListener("click", () => {
  if (!langMenu) return;
  langMenu.classList.toggle("open");
});

langMenu?.querySelectorAll(".lang-option").forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.getAttribute("data-lang");
    if (lang) {
      setLanguage(lang);
    }
    langMenu.classList.remove("open");
  });
});

document.addEventListener("click", e => {
  if (!langMenu || !langMenuToggle) return;
  if (
    e.target === langMenu ||
    e.target === langMenuToggle ||
    langMenu.contains(e.target) ||
    langMenuToggle.contains(e.target)
  ) {
    return;
  }
  langMenu.classList.remove("open");
});

downloadPdfBtn?.addEventListener("click", () => {
  window.print();
});

// Fade-in sections
const fadeSections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeSections.forEach(sec => observer.observe(sec));

// Sidebar navigation and active state
const sidebarButtons = document.querySelectorAll(".sidebar-item");

sidebarButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    if (target) {
      scrollToSection(target);
      sidebarButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }
  });
});

// Sidebar search across website
const searchInput = document.getElementById("siteSearch");

function normalizeText(str) {
  return (str || "").toLowerCase();
}

searchInput?.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const query = normalizeText(searchInput.value.trim());
  if (!query) return;

  const sections = document.querySelectorAll("main .section");
  let bestMatch = null;
  let bestScore = 0;

  sections.forEach(section => {
    const text = normalizeText(section.textContent || "");
    const index = text.indexOf(query);
    if (index !== -1) {
      const score = 1 / (index + 1);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = section;
      }
    }
  });

  if (bestMatch) {
    bestMatch.classList.add("visible");
    bestMatch.scrollIntoView({ behavior: "smooth", block: "start" });

    bestMatch.classList.add("search-highlight");
    setTimeout(() => bestMatch.classList.remove("search-highlight"), 1500);
  }
});

// Movies: in-page player
const movieCards = document.querySelectorAll(".media-card[data-video]");
const movieIframe = document.getElementById("movieIframe");

movieCards.forEach(card => {
  card.addEventListener("click", () => {
    const src = card.getAttribute("data-video");
    if (movieIframe && src) {
      movieIframe.src = src;
    }
  });
});

// Music volume controls
document.querySelectorAll(".audio-controls input[type='range']").forEach(range => {
  range.addEventListener("input", () => {
    const targetId = range.getAttribute("data-audio-target");
    if (!targetId) return;
    const audio = document.getElementById(targetId);
    if (audio) {
      audio.volume = Number(range.value);
    }
  });
});

// Flappy Birds game
const flappyCanvas = document.getElementById("flappyCanvas");
const flappyStartBtn = document.getElementById("flappyStart");
const flappyScoreEl = document.getElementById("flappyScore");

if (flappyCanvas && flappyStartBtn && flappyScoreEl) {
  const ctx = flappyCanvas.getContext("2d");
  const width = flappyCanvas.width;
  const height = flappyCanvas.height;

  let birdY, birdVel, gravity, jumpStrength;
  let pipes, pipeGap, pipeWidth, pipeSpeed;
  let score, gameOver, animId;

  function resetGame() {
    birdY = height / 2;
    birdVel = 0;
    gravity = 0.4;
    jumpStrength = -7.7;
    pipeGap = 140;
    pipeWidth = 60;
    pipeSpeed = 2.6;
    score = 0;
    gameOver = false;
    pipes = [];

    for (let i = 1; i <= 3; i++) {
      const x = width + i * 220;
      const topHeight = 60 + Math.random() * (height - pipeGap - 140);
      pipes.push({ x, topHeight, passed: false });
    }

    flappyScoreEl.textContent = formatMessage(tMessage("flappyScore"), { score: 0 });
  }

  function drawBackground() {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#74b9ff");
    gradient.addColorStop(1, "#0984e3");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Simple clouds
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.beginPath();
    ctx.arc(80, 80, 26, 0, Math.PI * 2);
    ctx.arc(110, 75, 22, 0, Math.PI * 2);
    ctx.arc(140, 82, 24, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(300, 120, 26, 0, Math.PI * 2);
    ctx.arc(332, 115, 22, 0, Math.PI * 2);
    ctx.arc(364, 122, 24, 0, Math.PI * 2);
    ctx.fill();

    // Ground
    ctx.fillStyle = "#00b894";
    ctx.fillRect(0, height - 60, width, 60);
    ctx.fillStyle = "#2d3436";
    ctx.fillRect(0, height - 40, width, 40);
  }

  function drawBird() {
    const birdX = 80;
    const birdRadius = 14;

    ctx.save();
    ctx.translate(birdX, birdY);
    ctx.rotate(Math.max(-0.5, Math.min(0.5, birdVel / 8)));

    ctx.fillStyle = "#ffeaa7";
    ctx.beginPath();
    ctx.arc(0, 0, birdRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#fdcb6e";
    ctx.beginPath();
    ctx.arc(4, -4, birdRadius * 0.7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#d35400";
    ctx.beginPath();
    ctx.moveTo(birdRadius - 2, -2);
    ctx.lineTo(birdRadius + 8, 0);
    ctx.lineTo(birdRadius - 2, 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#2d3436";
    ctx.beginPath();
    ctx.arc(-3, -4, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawPipes() {
    pipes.forEach(pipe => {
      ctx.fillStyle = "#00b894";

      ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
      ctx.fillRect(pipe.x - 4, pipe.topHeight - 24, pipeWidth + 8, 24);

      const bottomY = pipe.topHeight + pipeGap;
      ctx.fillRect(pipe.x, bottomY, pipeWidth, height - bottomY - 40);
      ctx.fillRect(pipe.x - 4, bottomY, pipeWidth + 8, 24);

      ctx.strokeStyle = "rgba(0,0,0,0.25)";
      ctx.lineWidth = 2;
      ctx.strokeRect(pipe.x, 0, pipeWidth, pipe.topHeight);
      ctx.strokeRect(pipe.x, bottomY, pipeWidth, height - bottomY - 40);
    });
  }

  function update() {
    if (gameOver) return;

    birdVel += gravity;
    birdY += birdVel;

    pipes.forEach(pipe => {
      pipe.x -= pipeSpeed;

      if (!pipe.passed && pipe.x + pipeWidth < 80) {
        pipe.passed = true;
        score += 1;
        flappyScoreEl.textContent = formatMessage(tMessage("flappyScore"), {
          score,
        });
      }
    });

    if (pipes.length && pipes[0].x + pipeWidth < -10) {
      pipes.shift();
      const x = pipes[pipes.length - 1].x + 220;
      const topHeight = 60 + Math.random() * (height - pipeGap - 140);
      pipes.push({ x, topHeight, passed: false });
    }

    if (birdY + 14 > height - 40 || birdY - 14 < 0) {
      endGame();
      return;
    }

    const birdX = 80;
    const birdR = 14;

    for (const pipe of pipes) {
      const topBottom = pipe.topHeight;
      const bottomTop = pipe.topHeight + pipeGap;

      if (
        birdX + birdR > pipe.x &&
        birdX - birdR < pipe.x + pipeWidth &&
        (birdY - birdR < topBottom || birdY + birdR > bottomTop)
      ) {
        endGame();
        return;
      }
    }
  }

  function endGame() {
    gameOver = true;
    cancelAnimationFrame(animId);
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(40, height / 2 - 40, width - 80, 80);
    ctx.fillStyle = "#ffffff";
    ctx.font = "20px Poppins";
    ctx.textAlign = "center";
    ctx.fillText(
      formatMessage(tMessage("flappyScore"), { score }),
      width / 2,
      height / 2 - 5
    );
    ctx.font = "14px Poppins";
    ctx.fillText("Click Start / Restart or press space", width / 2, height / 2 + 18);
  }

  function loop() {
    drawBackground();
    drawPipes();
    drawBird();
    update();
    if (!gameOver) {
      animId = requestAnimationFrame(loop);
    }
  }

  function startGame() {
    cancelAnimationFrame(animId);
    resetGame();
    loop();
  }

  flappyStartBtn.addEventListener("click", startGame);

  function handleJump() {
    if (gameOver) {
      startGame();
    } else {
      birdVel = jumpStrength;
    }
  }

  flappyCanvas.addEventListener("click", handleJump);
  window.addEventListener("keydown", e => {
    if (e.code === "Space") {
      e.preventDefault();
      handleJump();
    }
  });

  // Initial render
  resetGame();
  drawBackground();
  drawPipes();
  drawBird();
}

// Hangman game
const hangmanWordEl = document.getElementById("hangmanWord");
const hangmanMessageEl = document.getElementById("hangmanMessage");
const hangmanAttemptsEl = document.getElementById("hangmanAttempts");
const hangmanLettersEl = document.getElementById("hangmanLetters");
const hangmanRestartBtn = document.getElementById("hangmanRestart");

if (
  hangmanWordEl &&
  hangmanMessageEl &&
  hangmanAttemptsEl &&
  hangmanLettersEl &&
  hangmanRestartBtn
) {
  const words = [
    "javascript",
    "nepal",
    "kathmandu",
    "computer",
    "algorithm",
    "frontend",
    "portfolio",
    "hangman",
    "flappy",
    "student",
    "developer",
  ];

  let secretWord = "";
  let guessedLetters = new Set();
  let attemptsLeft = 7;
  let finished = false;

  function pickWord() {
    const idx = Math.floor(Math.random() * words.length);
    secretWord = words[idx].toUpperCase();
  }

  function updateWordDisplay() {
    const display = secretWord
      .split("")
      .map(ch => (guessedLetters.has(ch) ? ch : "_"))
      .join(" ");
    hangmanWordEl.textContent = display;
  }

  function updateStatus() {
    hangmanAttemptsEl.textContent = formatMessage(tMessage("hangmanAttempts"), {
      n: attemptsLeft,
    });
  }

  function updateButtons() {
    hangmanLettersEl.querySelectorAll("button").forEach(btn => {
      const letter = btn.textContent;
      btn.disabled = guessedLetters.has(letter) || finished;
    });
  }

  function checkGameState() {
    const allRevealed = secretWord
      .split("")
      .every(ch => guessedLetters.has(ch));
    if (allRevealed) {
      finished = true;
      hangmanMessageEl.textContent = tMessage("hangmanWin");
      hangmanMessageEl.style.color = "var(--success)";
    } else if (attemptsLeft <= 0) {
      finished = true;
      hangmanMessageEl.textContent = formatMessage(tMessage("hangmanLose"), {
        word: secretWord,
      });
      hangmanMessageEl.style.color = "var(--danger)";
    } else {
      hangmanMessageEl.textContent = tMessage("hangmanPrompt");
      hangmanMessageEl.style.color = "var(--text-muted)";
    }
  }

  function handleGuess(letter) {
    if (finished || guessedLetters.has(letter)) return;
    guessedLetters.add(letter);
    if (!secretWord.includes(letter)) {
      attemptsLeft -= 1;
    }
    updateWordDisplay();
    updateStatus();
    checkGameState();
    updateButtons();
  }

  function buildLetterButtons() {
    hangmanLettersEl.innerHTML = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (const ch of letters) {
      const btn = document.createElement("button");
      btn.textContent = ch;
      btn.addEventListener("click", () => handleGuess(ch));
      hangmanLettersEl.appendChild(btn);
    }
  }

  function newGame() {
    guessedLetters = new Set();
    attemptsLeft = 7;
    finished = false;
    pickWord();
    buildLetterButtons();
    updateWordDisplay();
    updateStatus();
    checkGameState();
  }

  hangmanRestartBtn.addEventListener("click", newGame);

  // Start
  newGame();
}

// Habit Tracker
const habitNameInput = document.getElementById("habitNameInput");
const habitAddBtn = document.getElementById("habitAddBtn");
const habitListEl = document.getElementById("habitList");

function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getYesterdayKey() {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const HABITS_KEY = "hemanta-habits";

function loadHabits() {
  try {
    const raw = localStorage.getItem(HABITS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveHabits(habitsToSave) {
  localStorage.setItem(HABITS_KEY, JSON.stringify(habitsToSave));
}

let habits = loadHabits();

function renderHabits() {
  if (!habitListEl) return;
  habitListEl.innerHTML = "";
  if (!habits.length) {
    habitListEl.innerHTML = `<p class="habit-tip">${tMessage("habitsEmpty")}</p>`;
    return;
  }

  const todayKey = getTodayKey();

  habits.forEach(habit => {
    const item = document.createElement("div");
    item.className = "habit-item";

    const main = document.createElement("div");
    main.className = "habit-main";

    const nameEl = document.createElement("span");
    nameEl.className = "habit-name";
    nameEl.textContent = habit.name;

    const streakEl = document.createElement("span");
    streakEl.className = "habit-streak";
    const days = habit.streak || 0;
    streakEl.textContent = formatMessage(tMessage("habitStreak"), { days });

    main.appendChild(nameEl);
    main.appendChild(streakEl);

    const actions = document.createElement("div");
    actions.className = "habit-actions";

    const doneBtn = document.createElement("button");
    doneBtn.className = "pill-button habit-done-today";
    const alreadyDoneToday = habit.lastCompleted === todayKey;
    doneBtn.textContent = alreadyDoneToday ? "Done today ✔" : "Done today";
    doneBtn.disabled = alreadyDoneToday;

    doneBtn.addEventListener("click", () => {
      const today = getTodayKey();
      const yesterday = getYesterdayKey();

      if (habit.lastCompleted === today) {
        return;
      }

      if (habit.lastCompleted === yesterday) {
        habit.streak = (habit.streak || 0) + 1;
      } else {
        habit.streak = 1;
      }
      habit.lastCompleted = today;
      saveHabits(habits);
      renderHabits();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "pill-button habit-delete";
    deleteBtn.textContent = "✕";
    deleteBtn.addEventListener("click", () => {
      habits = habits.filter(h => h.id !== habit.id);
      saveHabits(habits);
      renderHabits();
    });

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);

    item.appendChild(main);
    item.appendChild(actions);
    habitListEl.appendChild(item);
  });
}

function addHabit(name) {
  const trimmed = name.trim();
  if (!trimmed) return;
  const habit = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    name: trimmed,
    streak: 0,
    lastCompleted: null,
  };
  habits.unshift(habit);
  saveHabits(habits);
  renderHabits();
}

habitAddBtn?.addEventListener("click", () => {
  if (!habitNameInput) return;
  addHabit(habitNameInput.value);
  habitNameInput.value = "";
  habitNameInput.focus();
});

habitNameInput?.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    addHabit(habitNameInput.value);
    habitNameInput.value = "";
  }
});

if (habitListEl) {
  renderHabits();
}

// Live Weather using Open-Meteo (no API key required)
const weatherContent = document.getElementById("weatherContent");

async function loadWeather() {
  if (!weatherContent) return;
  try {
    weatherContent.innerHTML = `<p>${tMessage("weatherLoading")}</p>`;
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&current_weather=true"
    );
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    const cw = data.current_weather;
    if (!cw) throw new Error("No data");

    const temp = cw.temperature;
    const wind = cw.windspeed;
    const code = cw.weathercode;

    const description = (() => {
      if (code === 0) return "Clear sky";
      if ([1, 2].includes(code)) return "Partly cloudy";
      if (code === 3) return "Cloudy";
      if ([45, 48].includes(code)) return "Foggy";
      if ([51, 53, 55].includes(code)) return "Drizzle";
      if ([61, 63, 65].includes(code)) return "Rain";
      if ([71, 73, 75].includes(code)) return "Snow";
      if ([95, 96, 99].includes(code)) return "Thunderstorm";
      return "Mixed conditions";
    })();

    weatherContent.innerHTML = `
      <div class="weather-main">
        <span>${temp.toFixed(1)}</span>
        <span class="unit">°C</span>
      </div>
      <div class="weather-extra">
        <div>${description}</div>
        <div>Wind: ${wind.toFixed(1)} km/h</div>
      </div>
    `;
  } catch (err) {
    weatherContent.innerHTML = `<p>${tMessage("weatherError")}</p>`;
  }
}

loadWeather();

// Chatbot with navigation + theme control + voice commands
const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.querySelector(".chat-window");
const chatClose = document.getElementById("chatClose");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const voiceBtn = document.getElementById("voiceBtn");
const voiceStatus = document.getElementById("voiceStatus");

function appendMessage(text, sender = "bot") {
  if (!chatBody) return;
  const msg = document.createElement("div");
  msg.className = `chat-message ${sender}`;
  msg.innerHTML = `<p>${text}</p>`;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function openChat() {
  chatWindow?.classList.add("open");
}

function closeChat() {
  chatWindow?.classList.remove("open");
}

chatToggle?.addEventListener("click", () => {
  if (!chatWindow) return;
  if (chatWindow.classList.contains("open")) {
    closeChat();
  } else {
    openChat();
  }
});

chatClose?.addEventListener("click", closeChat);

function handleUserCommand(raw) {
  const text = raw.trim();
  if (!text) return;
  appendMessage(text, "user");

  const lower = text.toLowerCase();

  function reply(msg) {
    appendMessage(msg, "bot");
  }

  if (
    lower.includes("skill") ||
    lower.includes("skills section")
  ) {
    scrollToSection("skills");
    reply(tMessage("chatToSkills"));
    return;
  }

  if (lower.includes("resume")) {
    scrollToSection("resume");
    reply(tMessage("chatToResume"));
    return;
  }

  if (lower.includes("movie") || lower.includes("movies")) {
    scrollToSection("movies");
    reply(tMessage("chatToMovies"));
    return;
  }

  if (lower.includes("music") || lower.includes("song")) {
    scrollToSection("music");
    reply(tMessage("chatToMusic"));
    return;
  }

  if (
    lower.includes("project") ||
    lower.includes("game") ||
    lower.includes("flappy") ||
    lower.includes("hangman")
  ) {
    scrollToSection("projects");
    reply(tMessage("chatToProjects"));
    return;
  }

  if (lower.includes("map") || lower.includes("location") || lower.includes("weather")) {
    scrollToSection("location-weather");
    reply(tMessage("chatToLocation"));
    return;
  }

  if (
    lower.includes("dark mode") ||
    (lower.includes("dark") && lower.includes("theme"))
  ) {
    setTheme(true);
    reply(tMessage("chatDarkOn"));
    return;
  }

  if (
    lower.includes("light mode") ||
    (lower.includes("light") && lower.includes("theme"))
  ) {
    setTheme(false);
    reply(tMessage("chatLightOn"));
    return;
  }

  if (lower.includes("top") || lower.includes("go up") || lower.includes("back to top")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    reply(tMessage("chatTop"));
    return;
  }

  if (lower.includes("help") || lower.includes("what can you do")) {
    reply(tMessage("chatHelp"));
    return;
  }

  reply(tMessage("chatUnknown"));
}

chatSend?.addEventListener("click", () => {
  if (!chatInput) return;
  const text = chatInput.value;
  chatInput.value = "";
  handleUserCommand(text);
});

chatInput?.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    const text = chatInput.value;
    chatInput.value = "";
    handleUserCommand(text);
  }
});

// Voice commands using Web Speech API (if available)
let recognition = null;
let listening = false;

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    listening = true;
    if (voiceStatus) {
      voiceStatus.textContent = tMessage("voiceListening");
      voiceStatus.classList.add("listening");
    }
  };

  recognition.onend = () => {
    listening = false;
    if (voiceStatus) {
      voiceStatus.textContent = "";
      voiceStatus.classList.remove("listening");
    }
  };

  recognition.onerror = () => {
    listening = false;
    if (voiceStatus) {
      voiceStatus.textContent = tMessage("voiceError");
      voiceStatus.classList.remove("listening");
    }
  };

  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    openChat();
    handleUserCommand(transcript);
  };
} else if (voiceStatus) {
  voiceStatus.textContent = tMessage("voiceUnsupported");
}

voiceBtn?.addEventListener("click", () => {
  if (!recognition) {
    if (voiceStatus) {
      voiceStatus.textContent = tMessage("voiceUnavailable");
    }
    return;
  }
  if (!listening) {
    recognition.start();
  } else {
    recognition.stop();
  }
});

