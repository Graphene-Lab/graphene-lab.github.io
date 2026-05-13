(() => {
  // ../src/utils/html.js
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => {
      switch (char) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#39;";
        default:
          return char;
      }
    });
  }

  // ../src/i18n.js
  var translations = {
    en: {
      heroEyebrow: "OPEN SOURCE",
      heroTitle: "Privacy-First Storage",
      heroSubtitle: "Built on Zero-Trust",
      heroLead: `Your <strong>files</strong> are <strong>encrypted</strong> on your device before upload to the server in a provider-blind architecture. We <strong>never receive your encryption keys</strong>, ever - our code is fully <a href="#" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 3px;"><strong>open source</strong></a>, so anyone can independently verify these guarantees.
            <br> <br> <strong>Filenames</strong> are <strong>obfuscated</strong>, <strong>unique per-file keys</strong> are deterministically derived using <strong>quantum-hardened, hash-based derivation</strong> with <strong>512-bit</strong> key material, and <strong>no party is treated as secure</strong>, along with many additional security features.`,
      heroStartBtn: "Start Free - 100 GB",
      heroSecurityBtn: "Security Features",
      heroStat1Title: "100 GB Free",
      heroStat1Sub: "No Card Required",
      heroStat2Title: "Early Access",
      heroStat2Sub: "Offer Terms Below",
      heroDeviceNode: "Your Device",
      heroCloudNode: "Graphene Cloud",
      navSecurity: "Security",
      navPlatforms: "Platforms",
      navComparison: "Comparison",
      navFaq: "FAQ",
      navProducts: "Products",
      navTryFree: "Try it free",
      freePlanBadge: "LIMITED-OFFER",
      freePlanTitle: "100 GB Free - Life Time Offer*",
      freePlanDesc: "Privacy-first storage, secured by design. Your files are encrypted on your device before upload in a provider-blind architecture, so we never see your keys. Built with user-experience focus, our cross-platform clients deliver fast sync.",
      freePlanCreateAcc: "Create Account",
      freePlanDownloadBtn: "Download Clients",
      freePlanNoCard: "No credit card required",
      freePlanDisclaimer: "Early Access Beta offer with 100 GB free storage. No credit card required. Early Access users keep 100 GB free for life (as long as Graphene Cloud continues operating). Keep in mind this is a limited offer and may end once free-user capacity is reached. This offer is provided as-is, and bugs or temporary service interruptions may occur.",
      freePlanInstallBtn: "Install Graphene Cloud",
      faqTitle: "FAQ",
      faqDesc: "Quick answers about security, access, and Cloud Space hosting.",
      faqQ1: "Can you access my files?",
      faqA1: "No. Client-Side Encryption and No Provider Key Access ensure only you control decryption keys.",
      faqQ2: "Can you recover lost encryption keys?",
      faqA2: "No. We do not store keys, so lost credentials cannot be recovered by the provider.",
      faqQ3: "Do you scan user files?",
      faqA3: "No. Provider-Blind Storage means the server never sees plaintext content.",
      faqQ4: "Is Graphene Cloud self-hosted?",
      faqA4: "No, Graphene Cloud is hosted on our servers with Zero-Trust Architecture safeguards.",
      faqQ5: "Can I self-host?",
      faqA5: "Yes, via the Private Home Cloud product for optional storage on your dedicated cloud boxes.",
      faqQ6: "Is the free plan permanent?",
      faqA6: "It is an Early Access Beta offer. Early Access users keep 100 GB free for life (as long as Graphene Cloud continues operating), but the offer is limited and may end once free-user capacity is reached.",
      whyCloudTitle: "Why Choose Graphene Cloud?",
      whyCloudDesc: "We've reimagined storage from the ground up to prioritize your privacy.",
      whyCloudNote: "Our philosophy is that any software claiming to be secure <strong>must be open-source</strong>. We are open-source, allowing anyone to verify our code and cryptographic implementations.",
      whyCloudSource: "View Our Source Code",
      whyCloudReason1Title: "Zero-Knowledge Encryption & Zero-Trust Architecture",
      whyCloudReason1Desc: "We use Zero-knowledge encryption (our unique advanced client-side encryption method), meaning all file encryption (documents, photos, videos) is performed client-side on your device before the upload even begins. We never receive your keys (passphrase or master encryption key), and we never see your files in plaintext.",
      whyCloudReason2Title: "Fast performance",
      whyCloudReason2Desc: "Optimized syncing and low-latency access across devices.",
      whyCloudReason3Title: "Linux Support",
      whyCloudReason3Desc: "First Linux free space provider, with support for Windows, iOS, and Android.",
      whyCloudReason4Title: "Free 100 GB (Limited Offer)",
      whyCloudReason4Desc: "Early Access Beta offer with 100 GB free storage. No credit card required. Early Access users keep 100 GB free for life (as long as Graphene Cloud continues operating). Keep in mind this is a limited offer and may end once our free-user capacity is reached. This offer is provided as-is, and bugs or temporary service interruptions may occur.",
      securityEyebrow: "Privacy-First",
      securityTitle: "Security & Architecture Highlights",
      securityDesc: "Security is built in from the first byte with zero-knowledge, client-side encrypted storage and a provider-blind architecture.",
      "client-side-encryption-title": "Client-Side Encryption",
      "client-side-encryption-desc": "Your files are encrypted on your device before any upload begins.",
      "no-provider-key-access-title": "No Provider Key Access",
      "no-provider-key-access-desc": "We never receive, store, or recover encryption keys.",
      "metadata-obfuscation-title": "Metadata Obfuscation",
      "metadata-obfuscation-desc": "Encrypted filenames and minimized metadata reduce visibility into usage patterns.",
      "zero-trust-architecture-title": "Zero-Trust Architecture",
      "zero-trust-architecture-desc": "No party is treated as secure, clients cannot trust any party.",
      "quantum-resistant-title": "Quantum-Resistant",
      "quantum-resistant-desc": "We use strong symmetric and hash-based key derivation (with 512-bit hash-derived key material), which is generally more quantum-tolerant than classical public-key cryptography.",
      "air-gapped-cold-storage-title": "Air-Gapped Cold Storage",
      "air-gapped-cold-storage-desc": "Even if a public endpoint is compromised, isolated storage remains outside direct remote attack paths.",
      "energy-efficient-infrastructure-title": "Energy-Efficient Infrastructure",
      "energy-efficient-infrastructure-desc": "Built on ARM infrastructure that lowers power consumption while maintaining high performance for more sustainable and Eco-Friendly operations.",
      "surveillance-resistant-design-title": "Surveillance-Resistant Design",
      "surveillance-resistant-design-desc": "Provider-Blind Storage reduces exposure to external monitoring.",
      appsEyebrow: "Cross-Platform",
      appsTitle: "Works Everywhere",
      appsDesc: "A unified experience across desktop, mobile and web.",
      desktopTitle: "Desktop",
      desktopDesc: "Seamless folder sync for Windows, macOS, and Linux",
      mobileTitle: "Mobile",
      mobileDesc: "Your files in your pocket (iOS & Android), always encrypted",
      webTitle: "Web",
      webDesc: "Browser-side cryptography, zero server trust",
      downloadLabel: "Download:",
      featureLinux: "First free space provider for Linux",
      featureFastSync: "Fast sync",
      featureUpdates: "Background updates",
      featureOffline: "Offline access",
      featureExplorer: "Secure explorer",
      featureOnTheGo: "On-the-go access",
      featureGallery: "Secure gallery sync",
      featureStatic: "Static client",
      featureInBrowser: "In-browser encryption",
      featureDragDrop: "Drag & drop",
      sectionClient: "Client",
      sectionExplorer: "Explorer",
      sectionPhotoSync: "Photo Sync",
      compareTitle: "How We Compare",
      compareDesc: "Side-by-side transparency across major cloud storage providers*",
      scoreLabel: "Score",
      showAllFeatures: "Show all features",
      hideDetails: "Hide details",
      showDetails: "Show details",
      methodSummary: "Our Score formula and methodology details.",
      methodText: "Score formula: base 30 pts + 10 pts for Client-Side Encryption + 10 pts for Provider Key Isolation + 5 pts for each other security criterion + up to 20 pts from free storage capacity (GB, normalized to the highest offer in this table). Metadata visibility refers to access patterns, logs, and operational telemetry. Storage space is based on free tier offerings at the time of this analysis and may change over time.",
      rowClientEncryption: "Client-Side Encryption",
      rowProviderKeyAccess: "Provider Access to Keys",
      rowMetadataVisibility: "Metadata Visibility",
      rowZeroTrust: "Zero-Trust Architecture",
      rowFreeStorage: "Free Storage",
      rowAirGapped: "Air-Gapped Cold Storage",
      rowSurveillance: "Surveillance Resistance",
      rowQuantum: "Quantum-Resistant Design",
      rowEnergy: "Energy-Efficient Infrastructure",
      valClientEncryption: "Client-Side Encryption",
      valProviderManaged: "Provider-managed keys",
      valNoProviderAccess: "No Provider Key Access",
      valNotStated: "Not stated",
      valMetadataObfuscated: "Metadata obfuscated",
      valMetadataVisible: "Metadata visible",
      valProviderVisible: "Provider-visible metadata",
      valPartialMetadata: "Partial metadata visibility",
      valZeroTrust: "Zero-Trust Architecture",
      valCentralizedTrust: "Centralized trust",
      valNoZeroTrust: "No zero-trust architecture",
      valEarlyAccess: "100 GB (early access)",
      valIsolatedStorage: "LAN/WAN-isolated cold storage",
      valNoAirGapped: "No air-gapped option",
      valSurveillanceResistant: "Surveillance-resistant design",
      valSurveillanceExposure: "Surveillance exposure",
      valHashEncryption: "Hash-based 512-bit encryption",
      valNoQuantumRoadmap: "No quantum roadmap",
      valNoQuantumResistance: "No quantum resistance",
      valEnergyEfficient: "Energy-efficient ARM infrastructure",
      valStandardInfra: "Standard infrastructure",
      productsEyebrow: "Tailored Solutions",
      productsTitle: "Our Products",
      productsDesc: "Our Cloud Solutions are designed to meet the unique needs of individuals and enterprises",
      learnMore: "Learn More",
      builtBy: "Built by Graphene Lab",
      productOf: "Graphene Cloud is a product of Graphene Lab.",
      visitGrapheneLab: "Visit Graphene Lab",
      productHomeTitle: "PRIVATE HOME CLOUD",
      productHomeDesc: "Trustless personal cloud system for users who want store their data on their own servers using dedicated cloud boxes.",
      productWhitelabelTitle: "WHITELABEL CLOUD",
      productWhitelabelDesc: "Tailored cloud deployments for service providers and resellers to offer privacy-first storage under their own brand with our technology.",
      productEnterpriseTitle: "ENTERPRISE CLOUD",
      productEnterpriseDesc: "Cloud solutions for enterprises to make data private, secure, and available with isolated sub-clouds and auditability.",
      footerCtaBadge: "Early access &#8226; Limited",
      footerCtaTitle: "Start with 100 GB Free",
      footerCtaDesc: "Experience Privacy-First Cloud Storage with Zero-Trust Architecture from day one.",
      footerCtaNoCard: "No credit card required",
      footerCtaLifetime: "Lifetime offer",
      footerCtaCreateAcc: "Create Account",
      footerCtaContact: "Contact Us",
      footerTerms: "Terms",
      footerPrivacy: "Privacy",
      footerSecurity: "Security",
      footerContact: "Contact",
      footerCopyright: "&copy; 2026 Graphene Cloud. All rights reserved."
    },
    it: {
      heroEyebrow: "OPEN SOURCE",
      heroTitle: "Archiviazione basata sulla privacy",
      heroSubtitle: "Costruito su Zero-Trust",
      heroLead: `I tuoi <strong>file</strong> sono <strong>crittografati</strong> sul tuo dispositivo prima dell'upload sul server in un'architettura provider-blind. Non <strong>riceviamo mai le tue chiavi di crittografia</strong> - il nostro codice \xE8 interamente <a href="#" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 3px;"><strong>open source</strong></a>, permettendo a chiunque di verificare queste garanzie.
            <br> <br> <strong>I nomi dei file</strong> sono <strong>offuscati</strong>, <strong>chiavi uniche per-file</strong> sono derivate deterministicamente usando una <strong>derivazione basata su hash rafforzata contro computer quantistici</strong> con <strong>512-bit</strong> di materiale chiave. Nessuna terza parte viene considerata sicura.`,
      heroStartBtn: "Inizia Gratis - 100 GB",
      heroSecurityBtn: "Funzioni di Sicurezza",
      heroStat1Title: "100 GB Gratis",
      heroStat1Sub: "Nessuna Carta Richiesta",
      heroStat2Title: "Accesso Anticipato",
      heroStat2Sub: "Termini dell'offerta in basso",
      heroDeviceNode: "Il tuo dispositivo",
      heroCloudNode: "Graphene Cloud",
      navSecurity: "Sicurezza",
      navPlatforms: "Piattaforme",
      navComparison: "Confronto",
      navFaq: "FAQ",
      navProducts: "Prodotti",
      navTryFree: "Provalo gratis",
      freePlanBadge: "OFFERTA-LIMITATA",
      freePlanTitle: "100 GB Gratis - Offerta a Vita*",
      freePlanDesc: "Archiviazione basata sulla privacy, sicura by design. I tuoi file sono crittografati sul tuo dispositivo prima dell'upload in un'architettura provider-blind, quindi non vediamo mai le tue chiavi. Costruito con un focus sull'esperienza utente, i nostri client multipiattaforma offrono una sincronizzazione veloce.",
      freePlanCreateAcc: "Crea un Account",
      freePlanDownloadBtn: "Scarica i Client",
      freePlanNoCard: "Nessuna carta di credito richiesta",
      freePlanDisclaimer: "Offerta Beta in Accesso Anticipato con 100 GB di archiviazione gratuita. Nessuna carta di credito richiesta. Gli utenti in Accesso Anticipato mantengono 100 GB gratuiti a vita (fintanto che Graphene Cloud continua ad operare). Tieni presente che questa \xE8 un'offerta limitata e potrebbe terminare una volta raggiunta la capacit\xE0 per gli utenti gratuiti. Questa offerta \xE8 fornita 'cos\xEC com'\xE8', e potrebbero verificarsi bug o interruzioni temporanee del servizio.",
      freePlanInstallBtn: "Installa Graphene Cloud",
      faqTitle: "FAQ",
      faqDesc: "Risposte rapide su sicurezza, accesso e hosting su Cloud Space.",
      faqQ1: "Potete accedere ai miei file?",
      faqA1: "No. La crittografia lato client e il 'No Provider Key Access' assicurano che solo tu controlli le chiavi di decrittografia.",
      faqQ2: "Potete recuperare chiavi di crittografia perse?",
      faqA2: "No. Non conserviamo le chiavi, quindi le credenziali perse non possono essere recuperate dal provider.",
      faqQ3: "Scansionate i file degli utenti?",
      faqA3: "No. 'Provider-Blind Storage' significa che il server non vede mai il contenuto in chiaro.",
      faqQ4: "Graphene Cloud \xE8 self-hosted?",
      faqA4: "No, Graphene Cloud \xE8 ospitato sui nostri server con protezioni 'Zero-Trust Architecture'.",
      faqQ5: "Posso fare il self-hosting?",
      faqA5: "S\xEC, tramite il prodotto Private Home Cloud per l'archiviazione opzionale sui tuoi dispositivi cloud dedicati.",
      faqQ6: "Il piano gratuito \xE8 permanente?",
      faqA6: "\xC8 un'offerta Beta in Accesso Anticipato. Gli utenti in Accesso Anticipato mantengono 100 GB gratuiti a vita (fintanto che Graphene Cloud continua ad operare), ma l'offerta \xE8 limitata e potrebbe terminare una volta raggiunta la capacit\xE0 per gli utenti gratuiti.",
      whyCloudTitle: "Perch\xE9 scegliere Graphene Cloud?",
      whyCloudDesc: "Abbiamo ripensato l'archiviazione da zero per dare priorit\xE0 alla tua privacy.",
      whyCloudNote: "La nostra filosofia \xE8 che qualsiasi software che si dichiari sicuro <strong>debba essere open-source</strong>. Noi siamo open-source, consentendo a chiunque di verificare il nostro codice e le implementazioni crittografiche.",
      whyCloudSource: "Visualizza il nostro codice sorgente",
      whyCloudReason1Title: "Crittografia Zero-Knowledge e Architettura Zero-Trust",
      whyCloudReason1Desc: "Utilizziamo la crittografia Zero-knowledge (il nostro metodo avanzato di crittografia lato client), il che significa che tutta la crittografia dei file (documenti, foto, video) viene eseguita lato client sul tuo dispositivo prima ancora che inizi il caricamento. Non riceviamo mai le tue chiavi e non vediamo mai i tuoi file in chiaro.",
      whyCloudReason2Title: "Prestazioni veloci",
      whyCloudReason2Desc: "Sincronizzazione ottimizzata e accesso a bassa latenza su tutti i dispositivi.",
      whyCloudReason3Title: "Supporto Linux",
      whyCloudReason3Desc: "Primo fornitore di spazio libero per Linux, con supporto per Windows, iOS e Android.",
      whyCloudReason4Title: "100 GB gratuiti (offerta limitata)",
      whyCloudReason4Desc: "Offerta Beta in Accesso Anticipato con 100 GB di archiviazione gratuita. Nessuna carta di credito richiesta. Gli utenti in Accesso Anticipato mantengono 100 GB gratuiti a vita (fintanto che Graphene Cloud continua ad operare). Tieni presente che questa \xE8 un'offerta limitata e potrebbe terminare una volta raggiunta la capacit\xE0 per gli utenti gratuiti. Questa offerta \xE8 fornita 'cos\xEC com'\xE8', e potrebbero verificarsi bug o interruzioni temporanee del servizio.",
      securityEyebrow: "Privacy-First",
      securityTitle: "Punti salienti della sicurezza e dell'architettura",
      securityDesc: "La sicurezza \xE8 integrata fin dal primo byte con archiviazione crittografata lato client a conoscenza zero e un'architettura blindata dal provider.",
      "client-side-encryption-title": "Crittografia lato client",
      "client-side-encryption-desc": "I tuoi file vengono crittografati sul tuo dispositivo prima che inizi qualsiasi caricamento.",
      "no-provider-key-access-title": "Nessun accesso alle chiavi per il provider",
      "no-provider-key-access-desc": "Non riceviamo, memorizziamo o recuperiamo mai le chiavi di crittografia.",
      "metadata-obfuscation-title": "Offuscamento dei metadati",
      "metadata-obfuscation-desc": "Nomi dei file crittografati e metadati ridotti al minimo riducono la visibilit\xE0 sui modelli di utilizzo.",
      "zero-trust-architecture-title": "Architettura Zero-Trust",
      "zero-trust-architecture-desc": "Nessuna parte \xE8 considerata sicura, i client non possono fidarsi di nessuna parte.",
      "quantum-resistant-title": "Resistente ai computer quantistici",
      "quantum-resistant-desc": "Utilizziamo una forte derivazione di chiavi simmetriche e basate su hash (con materiale chiave derivato da hash a 512 bit), che \xE8 generalmente pi\xF9 tollerante ai quanti rispetto alla crittografia a chiave pubblica classica.",
      "air-gapped-cold-storage-title": "Archiviazione a freddo Air-Gapped",
      "air-gapped-cold-storage-desc": "Anche se un endpoint pubblico viene compromesso, l'archiviazione isolata rimane al di fuori dei percorsi di attacco remoto diretto.",
      "energy-efficient-infrastructure-title": "Infrastruttura a risparmio energetico",
      "energy-efficient-infrastructure-desc": "Costruito su infrastruttura ARM che riduce il consumo energetico mantenendo prestazioni elevate per operazioni pi\xF9 sostenibili ed ecocompatibili.",
      "surveillance-resistant-design-title": "Design resistente alla sorveglianza",
      "surveillance-resistant-design-desc": "Lo storage blindato dal provider riduce l'esposizione al monitoraggio esterno.",
      appsEyebrow: "Multipiattaforma",
      appsTitle: "Funziona ovunque",
      appsDesc: "Un'esperienza unificata su desktop, dispositivi mobili e web.",
      desktopTitle: "Desktop",
      desktopDesc: "Sincronizzazione perfetta delle cartelle per Windows, macOS e Linux",
      mobileTitle: "Mobile",
      mobileDesc: "I tuoi file in tasca (iOS e Android), sempre crittografati",
      webTitle: "Web",
      webDesc: "Crittografia lato browser, fiducia zero nel server",
      downloadLabel: "Scarica:",
      featureLinux: "Primo provider di spazio gratuito per Linux",
      featureFastSync: "Sincronizzazione veloce",
      featureUpdates: "Aggiornamenti in background",
      featureOffline: "Accesso offline",
      featureExplorer: "Explorer sicuro",
      featureOnTheGo: "Accesso in movimento",
      featureGallery: "Sincronizzazione sicura della galleria",
      featureStatic: "Client statico",
      featureInBrowser: "Crittografia nel browser",
      featureDragDrop: "Trascina e rilascia",
      sectionClient: "Client",
      sectionExplorer: "Explorer",
      sectionPhotoSync: "Sincronizzazione foto",
      compareTitle: "Come ci confrontiamo",
      compareDesc: "Trasparenza fianco a fianco tra i principali provider di cloud storage*",
      scoreLabel: "Punteggio",
      showAllFeatures: "Mostra tutte le caratteristiche",
      hideDetails: "Nascondi dettagli",
      showDetails: "Mostra dettagli",
      methodSummary: "La nostra formula del punteggio e i dettagli della metodologia.",
      methodText: "Formula del punteggio: base 30 punti + 10 punti per la crittografia lato client + 10 punti per l'isolamento della chiave del provider + 5 punti per ogni altro criterio di sicurezza + fino a 20 punti dalla capacit\xE0 di archiviazione gratuita (GB, normalizzata rispetto all'offerta pi\xF9 alta in questa tabella). La visibilit\xE0 dei metadati si riferisce ai modelli di accesso, ai log e alla telemetria operativa. Lo spazio di archiviazione si basa sulle offerte del livello gratuito al momento di questa analisi e pu\xF2 cambiare nel tempo.",
      rowClientEncryption: "Crittografia lato client",
      rowProviderKeyAccess: "Accesso del provider alle chiavi",
      rowMetadataVisibility: "Visibilit\xE0 dei metadati",
      rowZeroTrust: "Architettura Zero-Trust",
      rowFreeStorage: "Archiviazione gratuita",
      rowAirGapped: "Archiviazione a freddo Air-Gapped",
      rowSurveillance: "Resistenza alla sorveglianza",
      rowQuantum: "Design resistente ai quanti",
      rowEnergy: "Infrastruttura a risparmio energetico",
      valClientEncryption: "Crittografia lato client",
      valProviderManaged: "Chiavi gestite dal provider",
      valNoProviderAccess: "Nessun accesso alle chiavi per il provider",
      valNotStated: "Non dichiarato",
      valMetadataObfuscated: "Metadati offuscati",
      valMetadataVisible: "Metadati visibili",
      valProviderVisible: "Metadati visibili al provider",
      valPartialMetadata: "Visibilit\xE0 parziale dei metadati",
      valZeroTrust: "Architettura Zero-Trust",
      valCentralizedTrust: "Fiducia centralizzata",
      valNoZeroTrust: "Nessuna architettura zero-trust",
      valEarlyAccess: "100 GB (accesso anticipato)",
      valIsolatedStorage: "Archiviazione a freddo isolata LAN/WAN",
      valNoAirGapped: "Nessuna opzione air-gapped",
      valSurveillanceResistant: "Design resistente alla sorveglianza",
      valSurveillanceExposure: "Esposizione alla sorveglianza",
      valHashEncryption: "Crittografia a 512 bit basata su hash",
      valNoQuantumRoadmap: "Nessuna tabella di marcia quantistica",
      valNoQuantumResistance: "Nessuna resistenza quantistica",
      valEnergyEfficient: "Infrastruttura ARM efficiente dal punto di vista energetico",
      valStandardInfra: "Infrastruttura standard",
      productsEyebrow: "Soluzioni su misura",
      productsTitle: "I nostri prodotti",
      productsDesc: "Le nostre soluzioni Cloud sono progettate per soddisfare le esigenze uniche di individui e aziende",
      learnMore: "Saperne di pi\xF9",
      builtBy: "Creato da Graphene Lab",
      productOf: "Graphene Cloud \xE8 un prodotto di Graphene Lab.",
      visitGrapheneLab: "Visita Graphene Lab",
      productHomeTitle: "PRIVATE HOME CLOUD",
      productHomeDesc: "Sistema cloud personale senza fiducia per gli utenti che desiderano archiviare i propri dati sui propri server utilizzando box cloud dedicati.",
      productWhitelabelTitle: "WHITELABEL CLOUD",
      productWhitelabelDesc: "Distribuzioni cloud su misura per fornitori di servizi e rivenditori per offrire archiviazione basata sulla privacy con il proprio marchio con la nostra tecnologia.",
      productEnterpriseTitle: "ENTERPRISE CLOUD",
      productEnterpriseDesc: "Soluzioni cloud per le aziende per rendere i dati privati, sicuri e disponibili con sub-cloud isolati e verificabilit\xE0.",
      footerCtaBadge: "Accesso anticipato &#8226; Limitato",
      footerCtaTitle: "Inizia con 100 GB Gratis",
      footerCtaDesc: "Sperimenta un'archiviazione cloud basata sulla privacy con architettura Zero-Trust fin dal primo giorno.",
      footerCtaNoCard: "Nessuna carta di credito richiesta",
      footerCtaLifetime: "Offerta a vita",
      footerCtaCreateAcc: "Crea un Account",
      footerCtaContact: "Contattaci",
      footerTerms: "Termini",
      footerPrivacy: "Privacy",
      footerSecurity: "Sicurezza",
      footerContact: "Contatti",
      footerCopyright: "&copy; 2026 Graphene Cloud. Tutti i diritti riservati."
    },
    fr: {
      heroEyebrow: "OPEN SOURCE",
      heroTitle: "Stockage ax\xE9 sur la confidentialit\xE9",
      heroSubtitle: "Bas\xE9 sur le Zero-Trust",
      heroLead: `Vos <strong>fichiers</strong> sont <strong>chiffr\xE9s</strong> sur votre appareil avant d'\xEAtre t\xE9l\xE9charg\xE9s sur le serveur dans une architecture blind\xE9e pour le fournisseur. Nous ne <strong>recevons jamais vos cl\xE9s de chiffrement</strong> - notre code est enti\xE8rement <a href="#" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 3px;"><strong>open source</strong></a>, ce qui permet \xE0 quiconque de v\xE9rifier ces garanties de mani\xE8re ind\xE9pendante.
            <br> <br> Les <strong>noms de fichiers</strong> sont <strong>obfusqu\xE9s</strong>, des <strong>cl\xE9s uniques par fichier</strong> sont d\xE9riv\xE9es de mani\xE8re d\xE9terministe \xE0 l'aide d'une <strong>d\xE9rivation bas\xE9e sur le hachage renforc\xE9e contre le calcul quantique</strong> avec un mat\xE9riau de cl\xE9 de <strong>512 bits</strong>. Aucune partie n'est trait\xE9e comme s\xE9curis\xE9e.`,
      heroStartBtn: "Commencer gratuitement - 100 Go",
      heroSecurityBtn: "Fonctionnalit\xE9s de s\xE9curit\xE9",
      heroStat1Title: "100 Go gratuits",
      heroStat1Sub: "Aucune carte requise",
      heroStat2Title: "Acc\xE8s anticip\xE9",
      heroStat2Sub: "Conditions de l'offre ci-dessous",
      heroDeviceNode: "Votre appareil",
      heroCloudNode: "Graphene Cloud",
      navSecurity: "S\xE9curit\xE9",
      navPlatforms: "Plateformes",
      navComparison: "Comparaison",
      navFaq: "FAQ",
      navProducts: "Produits",
      navTryFree: "Essayer gratuitement",
      freePlanBadge: "OFFRE-LIMIT\xC9E",
      freePlanTitle: "100 Go gratuits - Offre \xE0 vie*",
      freePlanDesc: "Stockage ax\xE9 sur la confidentialit\xE9, s\xE9curis\xE9 par conception. Vos fichiers sont chiffr\xE9s sur votre appareil avant le t\xE9l\xE9chargement dans une architecture blind\xE9e pour le fournisseur, nous ne voyons donc jamais vos cl\xE9s. Con\xE7us pour l'exp\xE9rience utilisateur, nos clients multiplateformes offrent une synchronisation rapide.",
      freePlanCreateAcc: "Cr\xE9er un compte",
      freePlanDownloadBtn: "T\xE9l\xE9charger les clients",
      freePlanNoCard: "Aucune carte de cr\xE9dit requise",
      freePlanDisclaimer: "Offre Beta en acc\xE8s anticip\xE9 avec 100 Go de stockage gratuit. Aucune carte de cr\xE9dit requise. Les utilisateurs en acc\xE8s anticip\xE9 conservent 100 Go gratuits \xE0 vie (tant que Graphene Cloud continue de fonctionner). Gardez \xE0 l'esprit qu'il s'agit d'une offre limit\xE9e qui peut prendre fin une fois notre capacit\xE9 d'utilisateurs gratuits atteinte. Cette offre est fournie 'telle quelle', et des bugs ou des interruptions temporaires de service peuvent survenir.",
      freePlanInstallBtn: "Installer Graphene Cloud",
      faqTitle: "FAQ",
      faqDesc: "R\xE9ponses rapides sur la s\xE9curit\xE9, l'acc\xE8s et l'h\xE9bergement de Cloud Space.",
      faqQ1: "Pouvez-vous acc\xE9der \xE0 mes fichiers ?",
      faqA1: "Non. Le chiffrement c\xF4t\xE9 client et l'absence d'acc\xE8s aux cl\xE9s par le fournisseur garantissent que vous seul contr\xF4lez les cl\xE9s de d\xE9chiffrement.",
      faqQ2: "Pouvez-vous r\xE9cup\xE9rer les cl\xE9s de chiffrement perdues ?",
      faqA2: "Non. Nous ne stockons pas les cl\xE9s, les identifiants perdus ne peuvent donc pas \xEAtre r\xE9cup\xE9r\xE9s par le fournisseur.",
      faqQ3: "Analysez-vous les fichiers des utilisateurs ?",
      faqA3: "Non. Le stockage blind\xE9 pour le fournisseur signifie que le serveur ne voit jamais le contenu en clair.",
      faqQ4: "Graphene Cloud est-il auto-h\xE9berg\xE9 ?",
      faqA4: "Non, Graphene Cloud est h\xE9berg\xE9 sur nos serveurs avec des garanties d'architecture Zero-Trust.",
      faqQ5: "Puis-je l'auto-h\xE9berger ?",
      faqA5: "Oui, via le produit Private Home Cloud pour un stockage optionnel sur vos bo\xEEtiers cloud d\xE9di\xE9s.",
      faqQ6: "Le plan gratuit est-il permanent ?",
      faqA6: "Il s'agit d'une offre Beta en acc\xE8s anticip\xE9. Les utilisateurs en acc\xE8s anticip\xE9 conservent 100 Go gratuits \xE0 vie (tant que Graphene Cloud continue de fonctionner), mais l'offre est limit\xE9e.",
      whyCloudTitle: "Pourquoi choisir Graphene Cloud ?",
      whyCloudDesc: "Nous avons repens\xE9 le stockage de fond en comble pour donner la priorit\xE9 \xE0 votre vie priv\xE9e.",
      whyCloudNote: "Notre philosophie est que tout logiciel pr\xE9tendant \xEAtre s\xE9curis\xE9 <strong>doit \xEAtre open-source</strong>. Nous sommes open-source, ce qui permet \xE0 quiconque de v\xE9rifier notre code et nos impl\xE9mentations cryptographiques.",
      whyCloudSource: "Voir notre code source",
      whyCloudReason1Title: "Chiffrement Zero-Knowledge et Architecture Zero-Trust",
      whyCloudReason1Desc: "Nous utilisons le chiffrement Zero-knowledge (notre m\xE9thode avanc\xE9e de chiffrement c\xF4t\xE9 client), ce qui signifie que tout le chiffrement des fichiers (documents, photos, vid\xE9os) est effectu\xE9 c\xF4t\xE9 client sur votre appareil avant m\xEAme que le t\xE9l\xE9chargement ne commence. Nous ne recevons jamais vos cl\xE9s et ne voyons jamais vos fichiers en clair.",
      whyCloudReason2Title: "Performances rapides",
      whyCloudReason2Desc: "Synchronisation optimis\xE9e et acc\xE8s \xE0 faible latence sur tous les appareils.",
      whyCloudReason3Title: "Support Linux",
      whyCloudReason3Desc: "Premier fournisseur d'espace gratuit pour Linux, avec support pour Windows, iOS et Android.",
      whyCloudReason4Title: "100 Go gratuits (offre limit\xE9e)",
      whyCloudReason4Desc: "Offre Beta en acc\xE8s anticip\xE9 avec 100 Go de stockage gratuit. Aucune carte de cr\xE9dit requise. Les utilisateurs en acc\xE8s anticip\xE9 conservent 100 Go gratuits \xE0 vie (tant que Graphene Cloud continue de fonctionner).",
      securityEyebrow: "Confidentialit\xE9 d'abord",
      securityTitle: "Points forts de la s\xE9curit\xE9 et de l'architecture",
      securityDesc: "La s\xE9curit\xE9 est int\xE9gr\xE9e d\xE8s le premier octet avec un stockage chiffr\xE9 c\xF4t\xE9 client sans connaissance et une architecture blind\xE9e pour le fournisseur.",
      "client-side-encryption-title": "Chiffrement c\xF4t\xE9 client",
      "client-side-encryption-desc": "Vos fichiers sont chiffr\xE9s sur votre appareil avant tout t\xE9l\xE9chargement.",
      "no-provider-key-access-title": "Aucun acc\xE8s aux cl\xE9s par le fournisseur",
      "no-provider-key-access-desc": "Nous ne recevons, ne stockons et ne r\xE9cup\xE9rons jamais les cl\xE9s de chiffrement.",
      "metadata-obfuscation-title": "Obfuscation des m\xE9tadonn\xE9es",
      "metadata-obfuscation-desc": "Les noms de fichiers chiffr\xE9s et les m\xE9tadonn\xE9es minimis\xE9es r\xE9duisent la visibilit\xE9 des mod\xE8les d'utilisation.",
      "zero-trust-architecture-title": "Architecture Zero-Trust",
      "zero-trust-architecture-desc": "Aucune partie n'est trait\xE9e comme s\xE9curis\xE9e, les clients ne peuvent faire confiance \xE0 personne.",
      "quantum-resistant-title": "R\xE9sistant au calcul quantique",
      "quantum-resistant-desc": "Nous utilisons une d\xE9rivation de cl\xE9 sym\xE9trique et bas\xE9e sur le hachage (avec un mat\xE9riau de cl\xE9 de 512 bits), plus tol\xE9rante au quantique que la cryptographie \xE0 cl\xE9 publique classique.",
      "air-gapped-cold-storage-title": "Stockage \xE0 froid Air-Gapped",
      "air-gapped-cold-storage-desc": "M\xEAme si un point d'acc\xE8s public est compromis, le stockage isol\xE9 reste en dehors des voies d'attaque \xE0 distance directe.",
      "energy-efficient-infrastructure-title": "Infrastructure \xE9conome en \xE9nergie",
      "energy-efficient-infrastructure-desc": "Construit sur une infrastructure ARM qui r\xE9duit la consommation d'\xE9nergie tout en maintenant des performances \xE9lev\xE9es.",
      "surveillance-resistant-design-title": "Conception r\xE9sistante \xE0 la surveillance",
      "surveillance-resistant-design-desc": "Le stockage blind\xE9 pour le fournisseur r\xE9duit l'exposition \xE0 la surveillance externe.",
      appsEyebrow: "Multiplateforme",
      appsTitle: "Fonctionne partout",
      appsDesc: "Une exp\xE9rience unifi\xE9e sur ordinateur, mobile et web.",
      desktopTitle: "Ordinateur",
      desktopDesc: "Synchronisation fluide des dossiers pour Windows, macOS et Linux",
      mobileTitle: "Mobile",
      mobileDesc: "Vos fichiers dans votre poche (iOS et Android), toujours chiffr\xE9s",
      webTitle: "Web",
      webDesc: "Cryptographie c\xF4t\xE9 navigateur, confiance z\xE9ro dans le serveur",
      downloadLabel: "T\xE9l\xE9charger :",
      featureLinux: "Premier fournisseur d'espace gratuit pour Linux",
      featureFastSync: "Synchronisation rapide",
      featureUpdates: "Mises \xE0 jour en arri\xE8re-plan",
      featureOffline: "Acc\xE8s hors ligne",
      featureExplorer: "Explorateur s\xE9curis\xE9",
      featureOnTheGo: "Acc\xE8s en d\xE9placement",
      featureGallery: "Synchronisation s\xE9curis\xE9e de la galerie",
      featureStatic: "Client statique",
      featureInBrowser: "Chiffrement dans le navigateur",
      featureDragDrop: "Glisser-d\xE9poser",
      sectionClient: "Client",
      sectionExplorer: "Explorateur",
      sectionPhotoSync: "Sync Photo",
      compareTitle: "Comment nous nous comparons",
      compareDesc: "Transparence c\xF4te \xE0 c\xF4te entre les principaux fournisseurs de stockage cloud*",
      scoreLabel: "Score",
      showAllFeatures: "Afficher toutes les fonctionnalit\xE9s",
      hideDetails: "Masquer les d\xE9tails",
      showDetails: "Afficher les d\xE9tails",
      methodSummary: "Notre formule de score et les d\xE9tails de la m\xE9thodologie.",
      methodText: "Formule du score : base 30 pts + 10 pts pour le chiffrement c\xF4t\xE9 client + 10 pts pour l'isolement des cl\xE9s du fournisseur + 5 pts pour chaque autre crit\xE8re de s\xE9curit\xE9 + jusqu'\xE0 20 pts de capacit\xE9 de stockage gratuit (Go, normalis\xE9 par rapport \xE0 l'offre la plus \xE9lev\xE9e de ce tableau).",
      rowClientEncryption: "Chiffrement c\xF4t\xE9 client",
      rowProviderKeyAccess: "Acc\xE8s aux cl\xE9s par le fournisseur",
      rowMetadataVisibility: "Visibilit\xE9 des m\xE9tadonn\xE9es",
      rowZeroTrust: "Architecture Zero-Trust",
      rowFreeStorage: "Stockage gratuit",
      rowAirGapped: "Stockage \xE0 froid Air-Gapped",
      rowSurveillance: "R\xE9sistance \xE0 la surveillance",
      rowQuantum: "Conception r\xE9sistante au quantique",
      rowEnergy: "Infrastructure \xE9conome en \xE9nergie",
      valClientEncryption: "Chiffrement c\xF4t\xE9 client",
      valProviderManaged: "Cl\xE9s g\xE9r\xE9es par le fournisseur",
      valNoProviderAccess: "Aucun acc\xE8s aux cl\xE9s par le fournisseur",
      valNotStated: "Non pr\xE9cis\xE9",
      valMetadataObfuscated: "M\xE9tadonn\xE9es obfusqu\xE9es",
      valMetadataVisible: "M\xE9tadonn\xE9es visibles",
      valProviderVisible: "M\xE9tadonn\xE9es visibles par le fournisseur",
      valPartialMetadata: "Visibilit\xE9 partielle des m\xE9tadonn\xE9es",
      valZeroTrust: "Architecture Zero-Trust",
      valCentralizedTrust: "Confiance centralis\xE9e",
      valNoZeroTrust: "Pas d'architecture zero-trust",
      valEarlyAccess: "100 Go (acc\xE8s anticipato)",
      valIsolatedStorage: "Stockage \xE0 froid isol\xE9 LAN/WAN",
      valNoAirGapped: "Pas d'option air-gapped",
      valSurveillanceResistant: "Conception r\xE9sistante \xE0 la surveillance",
      valSurveillanceExposure: "Exposition \xE0 la surveillance",
      valHashEncryption: "Chiffrement 512 bits bas\xE9 sur le hachage",
      valNoQuantumRoadmap: "Pas de feuille de route quantique",
      valNoQuantumResistance: "Pas de r\xE9sistance quantique",
      valEnergyEfficient: "Infrastructure ARM \xE9conome en \xE9nergie",
      valStandardInfra: "Infrastructure standard",
      productsEyebrow: "Solutions sur mesure",
      productsTitle: "Nos produits",
      productsDesc: "Nos solutions cloud sont con\xE7ues pour r\xE9pondre aux besoins uniques des particuliers et des entreprises",
      learnMore: "En savoir plus",
      builtBy: "Construit par Graphene Lab",
      productOf: "Graphene Cloud est un produit de Graphene Lab.",
      visitGrapheneLab: "Visiter Graphene Lab",
      productHomeTitle: "PRIVATE HOME CLOUD",
      productHomeDesc: "Syst\xE8me cloud personnel sans confiance pour les utilisateurs qui souhaitent stocker leurs donn\xE9es sur leurs propres serveurs \xE0 l'aide de bo\xEEtiers cloud d\xE9di\xE9s.",
      productWhitelabelTitle: "WHITELABEL CLOUD",
      productWhitelabelDesc: "D\xE9ploiements cloud sur mesure pour les fournisseurs de services et les revendeurs afin de proposer un stockage ax\xE9 sur la confidentialit\xE9 sous leur propre marque.",
      productEnterpriseTitle: "ENTERPRISE CLOUD",
      productEnterpriseDesc: "Solutions cloud pour les entreprises afin de rendre les donn\xE9es priv\xE9es, s\xE9curis\xE9es et disponibles avec des sous-clouds isol\xE9s.",
      footerCtaBadge: "Acc\xE8s anticip\xE9 &#8226; Limit\xE9",
      footerCtaTitle: "Commencer avec 100 Go gratuits",
      footerCtaDesc: "D\xE9couvrez le stockage cloud ax\xE9 sur la confidentialit\xE9 avec l'architecture Zero-Trust d\xE8s le premier jour.",
      footerCtaNoCard: "Aucune carte de cr\xE9dit requise",
      footerCtaLifetime: "Offre \xE0 vie",
      footerCtaCreateAcc: "Cr\xE9er un compte",
      footerCtaContact: "Nous contacter",
      footerTerms: "Conditions",
      footerPrivacy: "Confidentialit\xE9",
      footerSecurity: "S\xE9curit\xE9",
      footerContact: "Contact",
      footerCopyright: "&copy; 2026 Graphene Cloud. Tous droits r\xE9serv\xE9s."
    },
    es: {
      heroEyebrow: "C\xD3DIGO ABIERTO",
      heroTitle: "Almacenamiento centrado en la privacidad",
      heroSubtitle: "Basado en Zero-Trust",
      heroLead: `Sus <strong>archivos</strong> se <strong>encriptan</strong> en su dispositivo antes de subirse al servidor en una arquitectura ciega para el proveedor. <strong>Nunca recibimos sus llaves de encriptaci\xF3n</strong>; nuestro c\xF3digo es totalmente <a href="#" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 3px;"><strong>c\xF3digo abierto</strong></a>, por lo que cualquiera puede verificar estas garant\xEDas de forma independiente.
            <br> <br> Los <strong>nombres de archivo</strong> est\xE1n <strong>ofuscados</strong>, las <strong>llaves \xFAnicas por archivo</strong> se derivan de forma determinista mediante una <strong>derivaci\xF3n basada en hash reforzada contra computaci\xF3n cu\xE1ntica</strong> con material de llave de <strong>512 bits</strong>. Ninguna parte es tratada como segura.`,
      heroStartBtn: "Comenzar gratis - 100 GB",
      heroSecurityBtn: "Funciones de seguridad",
      heroStat1Title: "100 GB Gratis",
      heroStat1Sub: "Sin tarjeta requerida",
      heroStat2Title: "Acceso anticipado",
      heroStat2Sub: "T\xE9rminos de la oferta abajo",
      heroDeviceNode: "Tu dispositivo",
      heroCloudNode: "Graphene Cloud",
      navSecurity: "Seguridad",
      navPlatforms: "Plataformas",
      navComparison: "Comparaci\xF3n",
      navFaq: "FAQ",
      navProducts: "Productos",
      navTryFree: "Pru\xE9balo gratis",
      freePlanBadge: "OFERTA-LIMITADA",
      freePlanTitle: "100 GB Gratis - Oferta de por vida*",
      freePlanDesc: "Almacenamiento centrado en la privacidad, seguro por dise\xF1o. Sus archivos se encriptan en su dispositivo antes de subirse en una arquitectura ciega para el proveedor, por lo que nunca vemos sus llaves. Dise\xF1ado enfoc\xE1ndose en la experiencia del usuario, nuestros clientes multiplataforma ofrecen una sincronizaci\xF3n r\xE1pida.",
      freePlanCreateAcc: "Crear una cuenta",
      freePlanDownloadBtn: "Descargar clientes",
      freePlanNoCard: "No se requiere tarjeta de cr\xE9dito",
      freePlanDisclaimer: "Oferta Beta de acceso anticipado con 100 GB de almacenamiento gratuito. No se requiere tarjeta de cr\xE9dito. Los usuarios de acceso anticipado conservan 100 GB gratuitos de por vida (mientras Graphene Cloud siga funcionando). Tenga en cuenta que esta es una oferta limitada y puede finalizar una vez que se alcance la capacidad de usuarios gratuitos. Esta oferta se proporciona 'tal cual', y pueden ocurrir errores o interrupciones temporales del servicio.",
      freePlanInstallBtn: "Instalar Graphene Cloud",
      faqTitle: "FAQ",
      faqDesc: "Respuestas r\xE1pidas sobre seguridad, acceso y hosting en Cloud Space.",
      faqQ1: "\xBFPueden acceder a mis archivos?",
      faqA1: "No. La encriptaci\xF3n del lado del cliente y el hecho de que el proveedor no tenga acceso a las llaves aseguran que solo usted controle las llaves de desencriptaci\xF3n.",
      faqQ2: "\xBFPueden recuperar llaves de encriptaci\xF3n perdidas?",
      faqA2: "No. No almacenamos las llaves, por lo que el proveedor no puede recuperar las credenciales perdidas.",
      faqQ3: "\xBFEscanean los archivos de los usuarios?",
      faqA3: "No. El almacenamiento ciego para el proveedor significa que el servidor nunca ve el contenido en texto plano.",
      faqQ4: "\xBFEs Graphene Cloud auto-hospedado?",
      faqA4: "No, Graphene Cloud est\xE1 alojado en nuestros servidores con salvaguardas de arquitectura Zero-Trust.",
      faqQ5: "\xBFPuedo auto-hospedarlo?",
      faqA5: "S\xED, a trav\xE9s del producto Private Home Cloud para almacenamiento opcional en sus cajas cloud dedicadas.",
      faqQ6: "\xBFEs permanente el plan gratuito?",
      faqA6: "Es una oferta Beta de acceso anticipado. Los usuarios de acceso anticipado conservan 100 GB gratuitos de por vida (mientras Graphene Cloud siga funcionando), pero la oferta es limitada.",
      whyCloudTitle: "\xBFPor qu\xE9 elegir Graphene Cloud?",
      whyCloudDesc: "Hemos reinventado el almacenamiento desde cero para priorizar su privacidad.",
      whyCloudNote: "Nuestra filosof\xEDa es que cualquier software que afirme ser seguro <strong>debe ser de c\xF3digo abierto</strong>. Somos de c\xF3digo abierto, lo que permite a cualquiera verificar nuestro c\xF3digo e implementaciones criptogr\xE1ficas.",
      whyCloudSource: "Ver nuestro c\xF3digo fuente",
      whyCloudReason1Title: "Encriptaci\xF3n Zero-Knowledge y Arquitectura Zero-Trust",
      whyCloudReason1Desc: "Utilizamos encriptaci\xF3n Zero-knowledge (nuestro m\xE9todo avanzado de encriptaci\xF3n del lado del cliente), lo que significa que toda la encriptaci\xF3n de archivos (documentos, fotos, videos) se realiza en su dispositivo antes de que comience la subida. Nunca recibimos sus llaves y nunca vemos sus archivos en texto plano.",
      whyCloudReason2Title: "Rendimiento r\xE1pido",
      whyCloudReason2Desc: "Sincronizaci\xF3n optimizada y acceso de baja latencia en todos los dispositivos.",
      whyCloudReason3Title: "Soporte para Linux",
      whyCloudReason3Desc: "Primer proveedor de espacio gratuito para Linux, con soporte para Windows, iOS y Android.",
      whyCloudReason4Title: "100 GB gratis (oferta limitada)",
      whyCloudReason4Desc: "Oferta Beta de acceso anticipado con 100 GB de almacenamiento gratuito. No se requiere tarjeta de cr\xE9dito. Los usuarios de acceso anticipado conservan 100 GB gratuitos de por vida.",
      securityEyebrow: "Privacidad primero",
      securityTitle: "Puntos destacados de seguridad y arquitectura",
      securityDesc: "La seguridad est\xE1 integrada desde el primer byte con almacenamiento encriptado del lado del cliente de conocimiento cero y una arquitectura ciega para el proveedor.",
      "client-side-encryption-title": "Encriptaci\xF3n del lado del cliente",
      "client-side-encryption-desc": "Sus archivos se encriptan en su dispositivo antes de que comience cualquier subida.",
      "no-provider-key-access-title": "Sin acceso del proveedor a las llaves",
      "no-provider-key-access-desc": "Nunca recibimos, almacenamos ni recuperamos las llaves de encriptaci\xF3n.",
      "metadata-obfuscation-title": "Ofuscaci\xF3n de metadatos",
      "metadata-obfuscation-desc": "Los nombres de archivo encriptados y los metadatos minimizados reducen la visibilidad de los patrones de uso.",
      "zero-trust-architecture-title": "Arquitectura Zero-Trust",
      "zero-trust-architecture-desc": "Ninguna parte es tratada como segura, los clientes no pueden confiar en ninguna parte.",
      "quantum-resistant-title": "Resistente a la computaci\xF3n cu\xE1ntica",
      "quantum-resistant-desc": "Utilizamos una s\xF3lida derivaci\xF3n de llaves sim\xE9tricas y basadas en hash (con material de llave de 512 bits), que es m\xE1s tolerante a la computaci\xF3n cu\xE1ntica que la criptograf\xEDa de llave p\xFAblica cl\xE1sica.",
      "air-gapped-cold-storage-title": "Almacenamiento en fr\xEDo Air-Gapped",
      "air-gapped-cold-storage-desc": "Incluso si un punto final p\xFAblico se ve comprometido, el almacenamiento aislado permanece fuera de las rutas de ataque remoto directo.",
      "energy-efficient-infrastructure-title": "Infraestructura eficiente en energ\xEDa",
      "energy-efficient-infrastructure-desc": "Construido sobre una infraestructura ARM que reduce el consumo de energ\xEDa manteniendo un alto rendimiento para operaciones m\xE1s sostenibles y ecol\xF3gicas.",
      "surveillance-resistant-design-title": "Dise\xF1o resistente a la vigilancia",
      "surveillance-resistant-design-desc": "El almacenamiento ciego para el proveedor reduce la exposici\xF3n al monitoreo externo.",
      appsEyebrow: "Multiplataforma",
      appsTitle: "Funciona en todas partes",
      appsDesc: "Una experiencia unificada en escritorio, m\xF3vil y web.",
      desktopTitle: "Escritorio",
      desktopDesc: "Sincronizaci\xF3n perfecta de carpetas para Windows, macOS y Linux",
      mobileTitle: "M\xF3vil",
      mobileDesc: "Tus archivos en tu bolsillo (iOS y Android), siempre encriptados",
      webTitle: "Web",
      webDesc: "Criptograf\xEDa del lado del navegador, confianza cero en el servidor",
      downloadLabel: "Descargar:",
      featureLinux: "Primer proveedor de espacio gratuito para Linux",
      featureFastSync: "Sincronizaci\xF3n r\xE1pida",
      featureUpdates: "Actualizaciones en segundo plano",
      featureOffline: "Acceso sin conexi\xF3n",
      featureExplorer: "Explorador seguro",
      featureOnTheGo: "Acceso sobre la marcha",
      featureGallery: "Sincronizaci\xF3n segura de galer\xEDa",
      featureStatic: "Cliente est\xE1tico",
      featureInBrowser: "Encriptaci\xF3n en el navegador",
      featureDragDrop: "Arrastrar y soltar",
      sectionClient: "Cliente",
      sectionExplorer: "Explorador",
      sectionPhotoSync: "Sincronizaci\xF3n de fotos",
      compareTitle: "C\xF3mo nos comparamos",
      compareDesc: "Transparencia frente a frente entre los principales proveedores de almacenamiento en la nube*",
      scoreLabel: "Puntuaci\xF3n",
      showAllFeatures: "Mostrar todas las funciones",
      hideDetails: "Ocultar detalles",
      showDetails: "Mostrar detalles",
      methodSummary: "Nuestra f\xF3rmula de puntuaci\xF3n y detalles de la metodolog\xEDa.",
      methodText: "F\xF3rmula de puntuaci\xF3n: base 30 pts + 10 pts por encriptaci\xF3n del lado del cliente + 10 pts por aislamiento de llaves del proveedor + 5 pts por cada otro criterio de seguridad + hasta 20 pts de capacidad de almacenamiento gratuito (GB).",
      rowClientEncryption: "Encriptaci\xF3n del lado del cliente",
      rowProviderKeyAccess: "Acceso del proveedor a las llaves",
      rowMetadataVisibility: "Visibilidad de metadatos",
      rowZeroTrust: "Arquitectura Zero-Trust",
      rowFreeStorage: "Almacenamiento gratuito",
      rowAirGapped: "Almacenamiento en fr\xEDo Air-Gapped",
      rowSurveillance: "Resistencia a la vigilancia",
      rowQuantum: "Dise\xF1o resistente a la computaci\xF3n cu\xE1ntica",
      rowEnergy: "Infraestructura eficiente en energ\xEDa",
      valClientEncryption: "Encriptaci\xF3n del lado del cliente",
      valProviderManaged: "Llaves gestionadas por el proveedor",
      valNoProviderAccess: "Sin acceso del proveedor a las llaves",
      valNotStated: "No declarado",
      valMetadataObfuscated: "Metadatos ofuscados",
      valMetadataVisible: "Metadatos visibles",
      valProviderVisible: "Metadatos visibles para el proveedor",
      valPartialMetadata: "Visibilidad parcial de metadatos",
      valZeroTrust: "Arquitectura Zero-Trust",
      valCentralizedTrust: "Confianza centralizada",
      valNoZeroTrust: "Sin arquitectura zero-trust",
      valEarlyAccess: "100 GB (acceso anticipado)",
      valIsolatedStorage: "Almacenamiento en fr\xEDo aislado LAN/WAN",
      valNoAirGapped: "Sin opci\xF3n air-gapped",
      valSurveillanceResistant: "Dise\xF1o resistente a la vigilancia",
      valSurveillanceExposure: "Exposici\xF3n a la vigilancia",
      valHashEncryption: "Encriptaci\xF3n de 512 bits basada en hash",
      valNoQuantumRoadmap: "Sin hoja de ruta cu\xE1ntica",
      valNoQuantumResistance: "Sin resistencia cu\xE1ntica",
      valEnergyEfficient: "Infraestructura ARM eficiente en energ\xEDa",
      valStandardInfra: "Infraestructura est\xE1ndar",
      productsEyebrow: "Soluciones a medida",
      productsTitle: "Nuestros productos",
      productsDesc: "Nuestras soluciones en la nube est\xE1n dise\xF1adas para satisfacer las necesidades \xFAnicas de individuos y empresas",
      learnMore: "Saber m\xE1s",
      builtBy: "Construido por Graphene Lab",
      productOf: "Graphene Cloud es un producto de Graphene Lab.",
      visitGrapheneLab: "Visitar Graphene Lab",
      productHomeTitle: "PRIVATE HOME CLOUD",
      productHomeDesc: "Sistema de nube personal sin confianza para usuarios que desean almacenar sus datos en sus propios servidores mediante cajas de nube dedicadas.",
      productWhitelabelTitle: "WHITELABEL CLOUD",
      productWhitelabelDesc: "Despliegues de nube a medida para proveedores de servicios y revendedores para ofrecer almacenamiento centrado en la privacidad bajo su propia marca.",
      productEnterpriseTitle: "ENTERPRISE CLOUD",
      productEnterpriseDesc: "Soluciones en la nube para empresas para que los datos sean privados, seguros y est\xE9n disponibles con sub-nubes aisladas.",
      footerCtaBadge: "Acceso anticipado &#8226; Limitado",
      footerCtaTitle: "Comience con 100 GB Gratis",
      footerCtaDesc: "Experimente el almacenamiento en la nube centrado en la privacidad con la arquitectura Zero-Trust desde el primer d\xEDa.",
      footerCtaNoCard: "No se requiere tarjeta de cr\xE9dito",
      footerCtaLifetime: "Oferta de por vida",
      footerCtaCreateAcc: "Crear una cuenta",
      footerCtaContact: "Cont\xE1ctenos",
      footerTerms: "T\xE9rminos",
      footerPrivacy: "Privacidad",
      footerSecurity: "Seguridad",
      footerContact: "Contacto",
      footerCopyright: "&copy; 2026 Graphene Cloud. Todos los derechos reservados."
    },
    de: {
      heroEyebrow: "OPEN SOURCE",
      heroTitle: "Privatsph\xE4re-orientierter Speicher",
      heroSubtitle: "Basierend auf Zero-Trust",
      heroLead: `Ihre <strong>Dateien</strong> werden auf Ihrem Ger\xE4t <strong>verschl\xFCsselt</strong>, bevor sie in einer f\xFCr den Anbieter blinden Architektur auf den Server hochgeladen werden. Wir <strong>erhalten niemals Ihre Verschl\xFCsselungsschl\xFCssel</strong> - unser Code ist vollst\xE4ndig <a href="#" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 3px;"><strong>Open Source</strong></a>, sodass jeder diese Garantien unabh\xE4ngig \xFCberpr\xFCfen kann.
            <br> <br> <strong>Dateinamen</strong> sind <strong>verschleiert</strong>, <strong>einzigartige Schl\xFCssel pro Datei</strong> werden deterministisch mittels einer <strong>quantenresistenten, hash-basierten Ableitung</strong> mit <strong>512-Bit</strong> Schl\xFCsselmaterial abgeleitet. Keine Partei wird als vertrauensw\xFCrdig behandelt.`,
      heroStartBtn: "Kostenlos starten - 100 GB",
      heroSecurityBtn: "Sicherheitsfunktionen",
      heroStat1Title: "100 GB kostenlos",
      heroStat1Sub: "Keine Karte erforderlich",
      heroStat2Title: "Early Access",
      heroStat2Sub: "Angebotsbedingungen unten",
      heroDeviceNode: "Ihr Ger\xE4t",
      heroCloudNode: "Graphene Cloud",
      navSecurity: "Sicherheit",
      navPlatforms: "Plattformen",
      navComparison: "Vergleich",
      navFaq: "FAQ",
      navProducts: "Produkte",
      navTryFree: "Kostenlos testen",
      freePlanBadge: "LIMITIERTES-ANGEBOT",
      freePlanTitle: "100 GB kostenlos - Lebenslanges Angebot*",
      freePlanDesc: "Privatsph\xE4re-orientierter Speicher, sicher durch Design. Ihre Dateien werden vor dem Hochladen auf Ihrem Ger\xE4t verschl\xFCsselt, sodass wir Ihre Schl\xFCssel nie sehen. Unsere plattform\xFCbergreifenden Clients bieten eine schnelle Synchronisierung.",
      freePlanCreateAcc: "Konto erstellen",
      freePlanDownloadBtn: "Clients herunterladen",
      freePlanNoCard: "Keine Kreditkarte erforderlich",
      freePlanDisclaimer: "Early Access Beta-Angebot mit 100 GB kostenlosem Speicherplatz. Keine Kreditkarte erforderlich. Early Access-Benutzer behalten 100 GB lebenslang kostenlos (solange Graphene Cloud in Betrieb ist). Bitte beachten Sie, dass dies ein begrenztes Angebot ist. Dieses Angebot wird 'wie besehen' bereitgestellt.",
      freePlanInstallBtn: "Graphene Cloud installieren",
      faqTitle: "FAQ",
      faqDesc: "Schnelle Antworten zu Sicherheit, Zugriff und Cloud Space Hosting.",
      faqQ1: "K\xF6nnen Sie auf meine Dateien zugreifen?",
      faqA1: "Nein. Client-seitige Verschl\xFCsselung und kein Zugriff des Anbieters auf Schl\xFCssel stellen sicher, dass nur Sie die Entschl\xFCsselungsschl\xFCssel kontrollieren.",
      faqQ2: "K\xF6nnen Sie verlorene Verschl\xFCsselungsschl\xFCssel wiederherstellen?",
      faqA2: "Nein. Wir speichern keine Schl\xFCssel, daher k\xF6nnen verlorene Zugangsdaten nicht vom Anbieter wiederhergestellt werden.",
      faqQ3: "Scannen Sie Benutzerdateien?",
      faqA3: "Nein. Provider-Blind Storage bedeutet, dass der Server niemals Klartextinhalte sieht.",
      faqQ4: "Ist Graphene Cloud selbst gehostet?",
      faqA4: "Nein, Graphene Cloud wird auf unseren Servern mit Zero-Trust-Architektur-Sicherheitsvorkehrungen gehostet.",
      faqQ5: "Kann ich es selbst hosten?",
      faqA5: "Ja, \xFCber das Produkt Private Home Cloud f\xFCr optionalen Speicher auf Ihren eigenen Cloud-Boxen.",
      faqQ6: "Ist der kostenlose Plan dauerhaft?",
      faqA6: "Es ist ein Early Access Beta-Angebot. Early Access-Benutzer behalten 100 GB lebenslang kostenlos (solange Graphene Cloud in Betrieb ist).",
      whyCloudTitle: "Warum Graphene Cloud w\xE4hlen?",
      whyCloudDesc: "Wir haben den Speicher von Grund auf neu konzipiert, um Ihre Privatsph\xE4re zu sch\xFCtzen.",
      whyCloudNote: "Unsere Philosophie ist, dass jede Software, die behauptet sicher zu sein, <strong>Open Source sein muss</strong>. Wir sind Open Source, damit jeder unseren Code \xFCberpr\xFCfen kann.",
      whyCloudSource: "Quellcode anzeigen",
      whyCloudReason1Title: "Zero-Knowledge-Verschl\xFCsselung & Zero-Trust-Architektur",
      whyCloudReason1Desc: "Wir verwenden Zero-Knowledge-Verschl\xFCsselung (unsere fortschrittliche Client-seitige Verschl\xFCsselungsmethode). Alle Dateien werden auf Ihrem Ger\xE4t verschl\xFCsselt, bevor der Upload beginnt. Wir erhalten niemals Ihre Schl\xFCssel.",
      whyCloudReason2Title: "Schnelle Performance",
      whyCloudReason2Desc: "Optimierte Synchronisierung und Zugriff mit geringer Latenz auf allen Ger\xE4ten.",
      whyCloudReason3Title: "Linux-Support",
      whyCloudReason3Desc: "Erster Anbieter von kostenlosem Speicherplatz f\xFCr Linux, mit Support f\xFCr Windows, iOS und Android.",
      whyCloudReason4Title: "100 GB kostenlos (limitiertes Angebot)",
      whyCloudReason4Desc: "Early Access Beta-Angebot mit 100 GB kostenlosem Speicherplatz. Keine Kreditkarte erforderlich. Early Access-Benutzer behalten 100 GB lebenslang kostenlos.",
      securityEyebrow: "Privatsph\xE4re zuerst",
      securityTitle: "Sicherheits- und Architektur-Highlights",
      securityDesc: "Sicherheit ist vom ersten Byte an integriert, mit Zero-Knowledge-Verschl\xFCsselung und einer Provider-blinden Architektur.",
      "client-side-encryption-title": "Client-seitige Verschl\xFCsselung",
      "client-side-encryption-desc": "Ihre Dateien werden auf Ihrem Ger\xE4t verschl\xFCsselt, bevor der Upload beginnt.",
      "no-provider-key-access-title": "Kein Zugriff des Anbieters auf Schl\xFCssel",
      "no-provider-key-access-desc": "Wir erhalten, speichern oder stellen niemals Verschl\xFCsselungsschl\xFCssel wieder her.",
      "metadata-obfuscation-title": "Metadaten-Verschleierung",
      "metadata-obfuscation-desc": "Verschl\xFCsselte Dateinamen und minimierte Metadaten reduzieren die Sichtbarkeit von Nutzungsmustern.",
      "zero-trust-architecture-title": "Zero-Trust-Architektur",
      "zero-trust-architecture-desc": "Keine Partei wird als sicher behandelt, Clients k\xF6nnen keiner Partei vertrauen.",
      "quantum-resistant-title": "Quantenresistent",
      "quantum-resistant-desc": "Wir verwenden eine starke symmetrische und hash-basierte Schl\xFCsselableitung (512-Bit), die quantenresistenter ist als klassische Kryptografie.",
      "air-gapped-cold-storage-title": "Air-Gapped Cold Storage",
      "air-gapped-cold-storage-desc": "Selbst wenn ein \xF6ffentlicher Endpunkt kompromittiert wird, bleibt der isolierte Speicher gesch\xFCtzt.",
      "energy-efficient-infrastructure-title": "Energieeffiziente Infrastruktur",
      "energy-efficient-infrastructure-desc": "Auf ARM-Infrastruktur aufgebaut, die den Stromverbrauch senkt und gleichzeitig eine hohe Leistung beibeh\xE4lt.",
      "surveillance-resistant-design-title": "\xDCberwachungsresistentes Design",
      "surveillance-resistant-design-desc": "Provider-Blind Storage reduziert die Gef\xE4hrdung durch externe \xDCberwachung.",
      appsEyebrow: "Plattform\xFCbergreifend",
      appsTitle: "Funktioniert \xFCberall",
      appsDesc: "Ein einheitliches Erlebnis auf Desktop, Mobilger\xE4ten und im Web.",
      desktopTitle: "Desktop",
      desktopDesc: "Nahtlose Ordnersynchronisierung f\xFCr Windows, macOS und Linux",
      mobileTitle: "Mobil",
      mobileDesc: "Ihre Dateien in Ihrer Tasche (iOS & Android), immer verschl\xFCsselt",
      webTitle: "Web",
      webDesc: "Browser-seitige Kryptografie, Null Vertrauen in den Server",
      downloadLabel: "Herunterladen:",
      featureLinux: "Erster Anbieter von Gratis-Speicher f\xFCr Linux",
      featureFastSync: "Schnelle Synchronisierung",
      featureUpdates: "Hintergrund-Updates",
      featureOffline: "Offline-Zugriff",
      featureExplorer: "Sicherer Explorer",
      featureOnTheGo: "Zugriff von unterwegs",
      featureGallery: "Sichere Galerie-Synchronisierung",
      featureStatic: "Statischer Client",
      featureInBrowser: "Verschl\xFCsselung im Browser",
      featureDragDrop: "Drag & Drop",
      sectionClient: "Client",
      sectionExplorer: "Explorer",
      sectionPhotoSync: "Fotosynchronisierung",
      compareTitle: "Wie wir uns vergleichen",
      compareDesc: "Transparenz im direkten Vergleich mit den wichtigsten Cloud-Speicheranbietern*",
      scoreLabel: "Punktzahl",
      showAllFeatures: "Alle Funktionen anzeigen",
      hideDetails: "Details ausblenden",
      showDetails: "Details anzeigen",
      methodSummary: "Unsere Punkteformel und Details zur Methodik.",
      methodText: "Punkteformel: 30 Basispunkte + 10 Punkte f\xFCr Client-seitige Verschl\xFCsselung + 10 Punkte f\xFCr Schl\xFCsselisolierung + 5 Punkte f\xFCr jedes weitere Sicherheitskriterium.",
      rowClientEncryption: "Client-seitige Verschl\xFCsselung",
      rowProviderKeyAccess: "Zugriff des Anbieters auf Schl\xFCssel",
      rowMetadataVisibility: "Sichtbarkeit von Metadaten",
      rowZeroTrust: "Zero-Trust-Architektur",
      rowFreeStorage: "Kostenloser Speicher",
      rowAirGapped: "Air-Gapped Cold Storage",
      rowSurveillance: "\xDCberwachungsresistenz",
      rowQuantum: "Quantenresistentes Design",
      rowEnergy: "Energieeffiziente Infrastruktur",
      valClientEncryption: "Client-seitige Verschl\xFCsselung",
      valProviderManaged: "Vom Anbieter verwaltete Schl\xFCssel",
      valNoProviderAccess: "Kein Zugriff des Anbieters auf Schl\xFCssel",
      valNotStated: "Nicht angegeben",
      valMetadataObfuscated: "Metadaten verschleiert",
      valMetadataVisible: "Metadaten sichtbar",
      valProviderVisible: "Vom Anbieter einsehbare Metadaten",
      valPartialMetadata: "Teilweise Sichtbarkeit von Metadaten",
      valZeroTrust: "Zero-Trust-Architektur",
      valCentralizedTrust: "Zentralisiertes Vertrauen",
      valNoZeroTrust: "Keine Zero-Trust-Architektur",
      valEarlyAccess: "100 GB (Early Access)",
      valIsolatedStorage: "Isolierter Cold Storage (LAN/WAN)",
      valNoAirGapped: "Keine Air-Gapped-Option",
      valSurveillanceResistant: "\xDCberwachungsresistentes Design",
      valSurveillanceExposure: "\xDCberwachungsrisiko",
      valHashEncryption: "Hash-basierte 512-Bit-Verschl\xFCsselung",
      valNoQuantumRoadmap: "Keine Quanten-Roadmap",
      valNoQuantumResistance: "Keine Quantenresistenz",
      valEnergyEfficient: "Energieeffiziente ARM-Infrastruktur",
      valStandardInfra: "Standard-Infrastruktur",
      productsEyebrow: "Ma\xDFgeschneiderte L\xF6sungen",
      productsTitle: "Unsere Produkte",
      productsDesc: "Unsere Cloud-L\xF6sungen sind auf die Bed\xFCrfnisse von Privatpersonen und Unternehmen zugeschnitten",
      learnMore: "Mehr erfahren",
      builtBy: "Erstellt von Graphene Lab",
      productOf: "Graphene Cloud ist ein Produkt von Graphene Lab.",
      visitGrapheneLab: "Graphene Lab besuchen",
      productHomeTitle: "PRIVATE HOME CLOUD",
      productHomeDesc: "Vertrauensloses pers\xF6nliches Cloud-System f\xFCr Benutzer, die ihre Daten auf eigenen Servern speichern m\xF6chten.",
      productWhitelabelTitle: "WHITELABEL CLOUD",
      productWhitelabelDesc: "Ma\xDFgeschneiderte Cloud-Bereitstellungen f\xFCr Dienstleister unter eigener Marke.",
      productEnterpriseTitle: "ENTERPRISE CLOUD",
      productEnterpriseDesc: "Cloud-L\xF6sungen f\xFCr Unternehmen mit isolierten Sub-Clouds.",
      footerCtaBadge: "Early Access &#8226; Limitiert",
      footerCtaTitle: "Starten Sie mit 100 GB kostenlos",
      footerCtaDesc: "Erleben Sie Privatsph\xE4re-orientierten Cloud-Speicher mit Zero-Trust-Architektur.",
      footerCtaNoCard: "Keine Kreditkarte erforderlich",
      footerCtaLifetime: "Lebenslanges Angebot",
      footerCtaCreateAcc: "Konto erstellen",
      footerCtaContact: "Kontaktieren Sie uns",
      footerTerms: "Bedingungen",
      footerPrivacy: "Datenschutz",
      footerSecurity: "Sicherheit",
      footerContact: "Kontakt",
      footerCopyright: "&copy; 2026 Graphene Cloud. Alle Rechte vorbehalten."
    },
    ru: {
      heroEyebrow: "\u041E\u0422\u041A\u0420\u042B\u0422\u042B\u0419 \u0418\u0421\u0425\u041E\u0414\u041D\u042B\u0419 \u041A\u041E\u0414",
      heroTitle: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0435 \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",
      heroSubtitle: "\u041F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043E \u043D\u0430 Zero-Trust",
      heroLead: `\u0412\u0430\u0448\u0438 <strong>\u0444\u0430\u0439\u043B\u044B</strong> <strong>\u0448\u0438\u0444\u0440\u0443\u044E\u0442\u0441\u044F</strong> \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435, \xAB\u0441\u043B\u0435\u043F\u043E\u0439\xBB \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430. \u041C\u044B <strong>\u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0432\u0430\u0448\u0438 \u043A\u043B\u044E\u0447\u0438 \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u044F</strong> \u2014 \u043D\u0430\u0448 \u043A\u043E\u0434 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E <a href="#" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 3px;"><strong>\u043E\u0442\u043A\u0440\u044B\u0442</strong></a>, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u0436\u0435\u0442 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u044D\u0442\u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438.
            <br> <br> <strong>\u0418\u043C\u0435\u043D\u0430 \u0444\u0430\u0439\u043B\u043E\u0432</strong> <strong>\u043E\u0431\u0444\u0443\u0441\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u044B</strong>, <strong>\u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043B\u044E\u0447\u0438 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430</strong> \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u0434\u0435\u0442\u0435\u0440\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C <strong>\u043A\u0432\u0430\u043D\u0442\u043E\u0432\u043E-\u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0439 \u0434\u0435\u0440\u0438\u0432\u0430\u0446\u0438\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0445\u0435\u0448\u0435\u0439</strong> \u0441 \u0434\u043B\u0438\u043D\u043E\u0439 \u043A\u043B\u044E\u0447\u0430 <strong>512 \u0431\u0438\u0442</strong>. \u041D\u0438 \u043E\u0434\u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u043D\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0439.`,
      heroStartBtn: "\u041D\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u2014 100 \u0413\u0411",
      heroSecurityBtn: "\u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438",
      heroStat1Title: "100 \u0413\u0411 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      heroStat1Sub: "\u041A\u0430\u0440\u0442\u0430 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F",
      heroStat2Title: "\u0420\u0430\u043D\u043D\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F",
      heroStat2Sub: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0438\u0436\u0435",
      heroDeviceNode: "\u0412\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E",
      heroCloudNode: "Graphene Cloud",
      navSecurity: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
      navPlatforms: "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B",
      navComparison: "\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435",
      navFaq: "FAQ",
      navProducts: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B",
      navTryFree: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      freePlanBadge: "\u041E\u0413\u0420\u0410\u041D\u0418\u0427\u0415\u041D\u041D\u041E\u0415-\u041F\u0420\u0415\u0414\u041B\u041E\u0416\u0415\u041D\u0418\u0415",
      freePlanTitle: "100 \u0413\u0411 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u2014 \u043F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E*",
      freePlanDesc: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435, \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0435 \u043F\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044E. \u0412\u0430\u0448\u0438 \u0444\u0430\u0439\u043B\u044B \u0448\u0438\u0444\u0440\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0432\u0438\u0434\u0438\u043C \u0432\u0430\u0448\u0438 \u043A\u043B\u044E\u0447\u0438. \u041D\u0430\u0448\u0438 \u043C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u0431\u044B\u0441\u0442\u0440\u0443\u044E \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044E.",
      freePlanCreateAcc: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
      freePlanDownloadBtn: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u044B",
      freePlanNoCard: "\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F",
      freePlanDisclaimer: "\u0411\u0435\u0442\u0430-\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u043D\u043D\u0435\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430: 100 \u0413\u0411 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0440\u0430\u043D\u043D\u0435\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442 100 \u0413\u0411 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430 (\u043F\u043E\u043A\u0430 Graphene Cloud \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442). \u042D\u0442\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435. \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \xAB\u043A\u0430\u043A \u0435\u0441\u0442\u044C\xBB.",
      freePlanInstallBtn: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C Graphene Cloud",
      faqTitle: "FAQ",
      faqDesc: "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u0434\u043E\u0441\u0442\u0443\u043F\u0435 \u0438 \u0445\u043E\u0441\u0442\u0438\u043D\u0433\u0435.",
      faqQ1: "\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043C\u043E\u0438\u043C \u0444\u0430\u0439\u043B\u0430\u043C?",
      faqA1: "\u041D\u0435\u0442. \u0428\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u043A \u043A\u043B\u044E\u0447\u0430\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u044E\u0442, \u0447\u0442\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u043A\u043B\u044E\u0447\u0430\u043C\u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438.",
      faqQ2: "\u041C\u043E\u0436\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0443\u0442\u0435\u0440\u044F\u043D\u043D\u044B\u0435 \u043A\u043B\u044E\u0447\u0438?",
      faqA2: "\u041D\u0435\u0442. \u041C\u044B \u043D\u0435 \u0445\u0440\u0430\u043D\u0438\u043C \u043A\u043B\u044E\u0447\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443\u0442\u0435\u0440\u044F\u043D\u043D\u044B\u0435 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u043C.",
      faqQ3: "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u0444\u0430\u0439\u043B\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439?",
      faqA3: "\u041D\u0435\u0442. \xAB\u0421\u043B\u0435\u043F\u043E\u0435\xBB \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0432\u0438\u0434\u0438\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u043C \u0432\u0438\u0434\u0435.",
      faqQ4: "Graphene Cloud \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0445\u043E\u0441\u0442\u0438\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443?",
      faqA4: "\u041D\u0435\u0442, Graphene Cloud \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u0441 \u0437\u0430\u0449\u0438\u0442\u043E\u0439 Zero-Trust.",
      faqQ5: "\u041C\u043E\u0433\u0443 \u043B\u0438 \u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435?",
      faqA5: "\u0414\u0430, \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 Private Home Cloud \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0432\u0430\u0448\u0438\u0445 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u043B\u0430\u0447\u043D\u044B\u0445 \u0431\u043E\u043A\u0441\u0430\u0445.",
      faqQ6: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430?",
      faqA6: "\u042D\u0442\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u043D\u043D\u0435\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442 100 \u0413\u0411 \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430 (\u043F\u043E\u043A\u0430 \u0441\u0435\u0440\u0432\u0438\u0441 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442).",
      whyCloudTitle: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0441\u0442\u043E\u0438\u0442 \u0432\u044B\u0431\u0440\u0430\u0442\u044C Graphene Cloud?",
      whyCloudDesc: "\u041C\u044B \u043F\u0435\u0440\u0435\u043E\u0441\u043C\u044B\u0441\u043B\u0438\u043B\u0438 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0432\u0430\u0448\u0443 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E.",
      whyCloudNote: "\u041D\u0430\u0448\u0430 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F: \u043B\u044E\u0431\u043E\u0435 \u041F\u041E, \u043F\u0440\u0435\u0442\u0435\u043D\u0434\u0443\u044E\u0449\u0435\u0435 \u043D\u0430 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C, <strong>\u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C</strong>. \u041C\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438.",
      whyCloudSource: "\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434",
      whyCloudReason1Title: "\u0428\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 Zero-Knowledge \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Zero-Trust",
      whyCloudReason1Desc: "\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 Zero-Knowledge. \u0412\u0441\u0435 \u0444\u0430\u0439\u043B\u044B \u0448\u0438\u0444\u0440\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439. \u041C\u044B \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0432\u0430\u0448\u0438 \u043A\u043B\u044E\u0447\u0438.",
      whyCloudReason2Title: "\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      whyCloudReason2Desc: "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043D\u0430 \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445.",
      whyCloudReason3Title: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 Linux",
      whyCloudReason3Desc: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F Linux, \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C Windows, iOS \u0438 Android.",
      whyCloudReason4Title: "100 \u0413\u0411 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E (\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E)",
      whyCloudReason4Desc: "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u043D\u043D\u0435\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430: 100 \u0413\u0411 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u041A\u0430\u0440\u0442\u0430 \u043D\u0435 \u043D\u0443\u0436\u043D\u0430. \u041F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043B\u044F \u043F\u0435\u0440\u0432\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.",
      securityEyebrow: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E",
      securityTitle: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430",
      securityDesc: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0431\u0430\u0439\u0442\u0430: \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \xAB\u0441\u043B\u0435\u043F\u0430\u044F\xBB \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430.",
      "client-side-encryption-title": "\u0428\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
      "client-side-encryption-desc": "\u0424\u0430\u0439\u043B\u044B \u0448\u0438\u0444\u0440\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438.",
      "no-provider-key-access-title": "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u043A \u043A\u043B\u044E\u0447\u0430\u043C",
      "no-provider-key-access-desc": "\u041C\u044B \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C, \u043D\u0435 \u0445\u0440\u0430\u043D\u0438\u043C \u0438 \u043D\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043A\u043B\u044E\u0447\u0438 \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u044F.",
      "metadata-obfuscation-title": "\u041E\u0431\u0444\u0443\u0441\u043A\u0430\u0446\u0438\u044F \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445",
      "metadata-obfuscation-desc": "\u0417\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0438\u043C\u0435\u043D\u0430 \u0444\u0430\u0439\u043B\u043E\u0432 \u0438 \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0442 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430.",
      "zero-trust-architecture-title": "\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Zero-Trust",
      "zero-trust-architecture-desc": "\u041D\u0438 \u043E\u0434\u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u043D\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.",
      "quantum-resistant-title": "\u041A\u0432\u0430\u043D\u0442\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C",
      "quantum-resistant-desc": "\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0441\u0442\u043E\u0439\u043A\u0443\u044E \u0434\u0435\u0440\u0438\u0432\u0430\u0446\u0438\u044E \u043A\u043B\u044E\u0447\u0435\u0439 (512 \u0431\u0438\u0442), \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u0443\u044E \u043A \u043A\u0432\u0430\u043D\u0442\u043E\u0432\u044B\u043C \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F\u043C.",
      "air-gapped-cold-storage-title": "\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",
      "air-gapped-cold-storage-desc": "\u0414\u0430\u0436\u0435 \u043F\u0440\u0438 \u0432\u0437\u043B\u043E\u043C\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432, \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0434\u043B\u044F \u043F\u0440\u044F\u043C\u043E\u0439 \u0430\u0442\u0430\u043A\u0438.",
      "energy-efficient-infrastructure-title": "\u042D\u043D\u0435\u0440\u0433\u043E\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
      "energy-efficient-infrastructure-desc": "\u041F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043E \u043D\u0430 ARM-\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435 \u0434\u043B\u044F \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u044F \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F.",
      "surveillance-resistant-design-title": "\u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0441\u043B\u0435\u0436\u043A\u0438",
      "surveillance-resistant-design-desc": "\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Provider-Blind \u043C\u0438\u043D\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430.",
      appsEyebrow: "\u041C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
      appsTitle: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432\u0435\u0437\u0434\u0435",
      appsDesc: "\u0415\u0434\u0438\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u043D\u0430 \u041F\u041A, \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 \u0438 \u0432 \u0432\u0435\u0431\u0435.",
      desktopTitle: "\u041F\u041A",
      desktopDesc: "\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0430\u043F\u043E\u043A \u0434\u043B\u044F Windows, macOS \u0438 Linux",
      mobileTitle: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",
      mobileDesc: "\u0412\u0430\u0448\u0438 \u0444\u0430\u0439\u043B\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0441 \u0432\u0430\u043C\u0438 (iOS \u0438 Android) \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435",
      webTitle: "\u0412\u0435\u0431",
      webDesc: "\u041A\u0440\u0438\u043F\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u043D\u0443\u043B\u0435\u0432\u043E\u0435 \u0434\u043E\u0432\u0435\u0440\u0438\u0435 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443",
      downloadLabel: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C:",
      featureLinux: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F Linux",
      featureFastSync: "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
      featureUpdates: "\u0424\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F",
      featureOffline: "\u041E\u0444\u0444\u043B\u0430\u0439\u043D-\u0434\u043E\u0441\u0442\u0443\u043F",
      featureExplorer: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A",
      featureOnTheGo: "\u0414\u043E\u0441\u0442\u0443\u043F \u0432 \u043F\u0443\u0442\u0438",
      featureGallery: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0433\u0430\u043B\u0435\u0440\u0435\u0438",
      featureStatic: "\u0421\u0442\u0430\u0442\u0438\u0447\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442",
      featureInBrowser: "\u0428\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435",
      featureDragDrop: "Drag & drop",
      sectionClient: "\u041A\u043B\u0438\u0435\u043D\u0442",
      sectionExplorer: "\u041F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A",
      sectionPhotoSync: "\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0444\u043E\u0442\u043E",
      compareTitle: "\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435",
      compareDesc: "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0441 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u043E\u0431\u043B\u0430\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430\u043C\u0438*",
      scoreLabel: "\u0411\u0430\u043B\u043B\u044B",
      showAllFeatures: "\u0412\u0441\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438",
      hideDetails: "\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438",
      showDetails: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438",
      methodSummary: "\u041D\u0430\u0448\u0430 \u0444\u043E\u0440\u043C\u0443\u043B\u0430 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u044F.",
      methodText: "\u0424\u043E\u0440\u043C\u0443\u043B\u0430: \u0431\u0430\u0437\u0430 30 \u0431\u0430\u043B\u043B\u043E\u0432 + 10 \u0437\u0430 \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0435 + 10 \u0437\u0430 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044E \u043A\u043B\u044E\u0447\u0435\u0439 + 5 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438.",
      rowClientEncryption: "\u0428\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0435",
      rowProviderKeyAccess: "\u0414\u043E\u0441\u0442\u0443\u043F \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u043A \u043A\u043B\u044E\u0447\u0430\u043C",
      rowMetadataVisibility: "\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445",
      rowZeroTrust: "\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Zero-Trust",
      rowFreeStorage: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E",
      rowAirGapped: "\u0425\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",
      rowSurveillance: "\u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0441\u043B\u0435\u0436\u043A\u0438",
      rowQuantum: "\u041A\u0432\u0430\u043D\u0442\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C",
      rowEnergy: "\u042D\u043D\u0435\u0440\u0433\u043E\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
      valClientEncryption: "\u0428\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0435",
      valProviderManaged: "\u041A\u043B\u044E\u0447\u0438 \u0443 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430",
      valNoProviderAccess: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430",
      valNotStated: "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E",
      valMetadataObfuscated: "\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u043A\u0440\u044B\u0442\u044B",
      valMetadataVisible: "\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0438\u0434\u043D\u044B",
      valProviderVisible: "\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0438\u0434\u043D\u044B \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0443",
      valPartialMetadata: "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C",
      valZeroTrust: "\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Zero-Trust",
      valCentralizedTrust: "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0434\u043E\u0432\u0435\u0440\u0438\u0435",
      valNoZeroTrust: "\u0411\u0435\u0437 Zero-Trust",
      valEarlyAccess: "100 \u0413\u0411 (\u0440\u0430\u043D\u043D\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F)",
      valIsolatedStorage: "\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 LAN/WAN",
      valNoAirGapped: "\u041D\u0435\u0442 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430",
      valSurveillanceResistant: "\u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0441\u043B\u0435\u0436\u043A\u0438",
      valSurveillanceExposure: "\u0420\u0438\u0441\u043A \u0441\u043B\u0435\u0436\u043A\u0438",
      valHashEncryption: "512-\u0431\u0438\u0442\u043D\u043E\u0435 \u0445\u0435\u0448-\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      valNoQuantumRoadmap: "\u041D\u0435\u0442 \u043A\u0432\u0430\u043D\u0442\u043E\u0432\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432",
      valNoQuantumResistance: "\u041D\u0435\u0442 \u043A\u0432\u0430\u043D\u0442\u043E\u0432\u043E\u0439 \u0437\u0430\u0449\u0438\u0442\u044B",
      valEnergyEfficient: "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0430\u044F ARM-\u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
      valStandardInfra: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430",
      productsEyebrow: "\u0420\u0435\u0448\u0435\u043D\u0438\u044F",
      productsTitle: "\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B",
      productsDesc: "\u041E\u0431\u043B\u0430\u0447\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043B\u0438\u0446 \u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430",
      learnMore: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
      builtBy: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E Graphene Lab",
      productOf: "Graphene Cloud \u2014 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 Graphene Lab.",
      visitGrapheneLab: "\u0421\u0430\u0439\u0442 Graphene Lab",
      productHomeTitle: "PRIVATE HOME CLOUD",
      productHomeDesc: "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u043B\u0430\u043A\u043E \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0432\u0430\u0448\u0438\u0445 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.",
      productWhitelabelTitle: "WHITELABEL CLOUD",
      productWhitelabelDesc: "\u041E\u0431\u043B\u0430\u0447\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432 \u043F\u043E\u0434 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u0431\u0440\u0435\u043D\u0434\u043E\u043C.",
      productEnterpriseTitle: "ENTERPRISE CLOUD",
      productEnterpriseDesc: "\u0420\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0438\u0439 \u0441 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u0443\u0431-\u043E\u0431\u043B\u0430\u043A\u0430\u043C\u0438.",
      footerCtaBadge: "\u0420\u0430\u043D\u043D\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F &#8226; \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E",
      footerCtaTitle: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441\u043E 100 \u0413\u0411 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      footerCtaDesc: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0435 \u043E\u0431\u043B\u0430\u043A\u043E \u0441 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043E\u0439 Zero-Trust.",
      footerCtaNoCard: "\u041A\u0430\u0440\u0442\u0430 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F",
      footerCtaLifetime: "\u041F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F",
      footerCtaCreateAcc: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
      footerCtaContact: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438",
      footerTerms: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F",
      footerPrivacy: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C",
      footerSecurity: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
      footerContact: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      footerCopyright: "&copy; 2026 Graphene Cloud. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."
    }
  };
  var currentLang = "en";
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) {
      currentLang = langParam;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("appLang", langParam);
      }
    } else if (typeof localStorage !== "undefined") {
      currentLang = localStorage.getItem("appLang") || "en";
    }
  }

  function t(key) {
    return translations[currentLang]?.[key] || translations["en"][key] || key;
  }
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("appLang", lang);
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: lang }));
  }

  // ../src/components/why-cloud.js
  var reasons = [
    {
      id: "zero-trust",
      titleKey: "whyCloudReason1Title",
      descriptionKey: "whyCloudReason1Desc",
      details: [
        "File names are obfuscated, and each file is encrypted with its own key, deterministically derived from your root key plus file metadata (path and timestamp). The root key is generated from a Bitcoin-style mnemonic (BIP-39 flow), a battle-tested key-management approach used in wallets that protect significant digital value, while per-file key derivation uses our own hardened scheme. This derivation is symmetric and hash-based, with 512-bit hash-derived key material, which is makes it more Quantum-Resistant.",
        "We follow Zero-Trust principles: no external component, including proxy/middleware servers, is treated as trusted. Proxies relay encrypted traffic but cannot decrypt file content. Unlike architectures that claim end-to-end encryption but terminate encryption at middleware (the proxy) and then re-encrypt upstream to servers, our design keeps file content encrypted from client to storage. This creates defense in depth, effectively a double shield: client-side encryption protects data confidentiality, while encrypted transport and a blind-proxy architecture further reduce in-transit and infrastructure risk.",
        "In addition to our core security features, we offer Air-Gapped Cold Storage (currently not included in the early-access offer). Even if a public endpoint is compromised, isolated storage remains outside direct remote attack paths. While this may seem unnecessary because files are already encrypted, it further reduces risks such as an attacker wiping out your data. LAN/WAN-isolated cold storage uses encrypted optical TX/RX links to carry TCP/IP-like communication without direct network connectivity.",
        "It is worth noting that We use energy-efficient ARM infrastructure to reduce power consumption without compromising performance, supporting more sustainable operations in today's energy-constrained environment."
      ],
      icon: shieldIcon(),
      type: "large",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#764ba2"
    },
    {
      id: "fast-performance",
      titleKey: "whyCloudReason2Title",
      descriptionKey: "whyCloudReason2Desc",
      icon: lightningIcon(),
      type: "small",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f5576c"
    },
    {
      id: "linux-support",
      titleKey: "whyCloudReason3Title",
      descriptionKey: "whyCloudReason3Desc",
      icon: linuxIcon(),
      type: "small",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      color: "#fa709a"
    },
    {
      id: "free-100gb",
      titleKey: "whyCloudReason4Title",
      descriptionKey: "whyCloudReason4Desc",
      icon: giftIcon(),
      type: "large",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#00f2fe"
    }
  ];
  function setupWhyCloud() {
    const buttons = Array.from(document.querySelectorAll(".bento-read-more"));
    const heading = document.querySelector("#why-cloud .section-heading");
    let expandedReasonId = null;
    const update = () => {
      buttons.forEach((button) => {
        const reasonId = button.getAttribute("data-reason-id");
        const details = document.getElementById(`reason-details-${reasonId}`);
        const card = button.closest(".bento-item");
        const isExpanded = expandedReasonId === reasonId;
        if (details) {
          details.hidden = !isExpanded;
          details.style.display = isExpanded ? "grid" : "none";
        }
        if (card) card.classList.toggle("is-expanded", isExpanded);
        button.textContent = isExpanded ? "Read less" : "Read more";
        button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      });
    };
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest(".bento-item");
        const previousCardTop = card ? card.getBoundingClientRect().top : 0;
        const previousScrollY = window.scrollY;
        const reasonId = button.getAttribute("data-reason-id");
        const isCollapsing = expandedReasonId === reasonId;
        button.blur();
        expandedReasonId = isCollapsing ? null : reasonId;
        update();
        if (isCollapsing) {
          requestAnimationFrame(() => {
            if (heading) {
              try {
                heading.scrollIntoView({ behavior: "smooth", block: "start" });
              } catch {
                heading.scrollIntoView();
              }
            }
          });
          return;
        }
        requestAnimationFrame(() => {
          if (!card) return;
          const nextCardTop = card.getBoundingClientRect().top;
          const delta = nextCardTop - previousCardTop;
          if (Math.abs(delta) > 1) {
            window.scrollTo(0, previousScrollY + delta);
          }
          try {
            button.focus({ preventScroll: true });
          } catch {
            button.focus();
          }
        });
      });
    });
    update();
  }
  function lightningIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" fill-opacity="0.15"></path>
    </svg>
  `;
  }
  function shieldIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" fill-opacity="0.15"></path>
      <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `;
  }
  function giftIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="11.5" width="14" height="9.5" rx="1.8" fill="currentColor" fill-opacity="0.14"></rect>
      <rect x="3" y="8.5" width="18" height="4" rx="1.2" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"></rect>
      <path d="M5 12.5v6.7a1.8 1.8 0 0 0 1.8 1.8h10.4a1.8 1.8 0 0 0 1.8-1.8v-6.7" stroke="currentColor" stroke-width="2"></path>
      <path d="M12 8.5V21" stroke="currentColor" stroke-width="2"></path>
      <path d="M3 12.5h18" stroke="currentColor" stroke-width="2"></path>
      <path d="M12 8.5h-2.8c-1.4 0-2.2-.7-2.2-1.8 0-1 .8-1.7 1.9-1.7 1.9 0 3.1 3.5 3.1 3.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
      <path d="M12 8.5h2.8c1.4 0 2.2-.7 2.2-1.8 0-1-.8-1.7-1.9-1.7-1.9 0-3.1 3.5-3.1 3.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
      <circle cx="12" cy="8.5" r="0.7" fill="currentColor"></circle>
    </svg>
  `;
  }
  function linuxIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 -1.5)">
        <ellipse cx="12" cy="13" rx="5.5" ry="7" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.15"></ellipse>
        <ellipse cx="12" cy="14" rx="3.5" ry="4.5" fill="currentColor" fill-opacity="0.1"></ellipse>
        <circle cx="10" cy="10" r="1.2" fill="currentColor"></circle>
        <circle cx="14" cy="10" r="1.2" fill="currentColor"></circle>
        <circle cx="10.3" cy="9.7" r="0.4" fill="white"></circle>
        <circle cx="14.3" cy="9.7" r="0.4" fill="white"></circle>
        <ellipse cx="12" cy="12" rx="1.5" ry="0.8" fill="currentColor"></ellipse>
        <path d="M9 19c-.5.8-1 1.5-1.5 2M10 19.5c-.3.5-.5 1-.7 1.5M15 19c.5.8 1 1.5 1.5 2M14 19.5c.3.5.5 1 .7 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
        <path d="M6.5 13c-.5-.3-1-.5-1.5-.5M17.5 13c.5-.3 1-.5 1.5-.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </g>
    </svg>
  `;
  }

  // ../src/components/security-features.js
  var features = [
    {
      id: "client-side-encryption",
      titleKey: "client-side-encryption-title",
      descriptionKey: "client-side-encryption-desc",
      icon: lockIcon(),
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#764ba2"
    },
    {
      id: "no-provider-key-access",
      titleKey: "no-provider-key-access-title",
      descriptionKey: "no-provider-key-access-desc",
      icon: keyIcon(),
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#00f2fe"
    },
    {
      id: "metadata-obfuscation",
      titleKey: "metadata-obfuscation-title",
      descriptionKey: "metadata-obfuscation-desc",
      icon: eyeIcon(),
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      color: "#d57eeb"
    },
    {
      id: "zero-trust-architecture",
      titleKey: "zero-trust-architecture-title",
      descriptionKey: "zero-trust-architecture-desc",
      icon: shieldIcon2(),
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f5576c"
    },
    {
      id: "quantum-resistant",
      titleKey: "quantum-resistant-title",
      descriptionKey: "quantum-resistant-desc",
      icon: quantumIcon(),
      gradient: "linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 100%)",
      color: "#a78bfa"
    },
    {
      id: "air-gapped-cold-storage",
      titleKey: "air-gapped-cold-storage-title",
      descriptionKey: "air-gapped-cold-storage-desc",
      icon: airGapIcon(),
      gradient: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
      color: "#fa709a"
    },
    {
      id: "energy-efficient-infrastructure",
      titleKey: "energy-efficient-infrastructure-title",
      descriptionKey: "energy-efficient-infrastructure-desc",
      icon: leafIcon(),
      gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
      color: "#34d399"
    },
    {
      id: "surveillance-resistant-design",
      titleKey: "surveillance-resistant-design-title",
      descriptionKey: "surveillance-resistant-design-desc",
      icon: searchIcon(),
      gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      color: "#a1c4fd"
    }
  ];
  var dotPoints = [
    { x: 85, y: 100 },
    { x: 115, y: 200 },
    { x: 85, y: 300 },
    { x: 115, y: 400 },
    { x: 85, y: 500 },
    { x: 115, y: 600 },
    { x: 100, y: 700 },
    { x: 100, y: 680 }
  ];
  var snakeParticles = [
    { id: "photo", icon: snakePhotoIcon() },
    { id: "pdf", icon: snakeFileIcon("PDF", "#dc2626") },
    { id: "folder", icon: snakeFolderIcon() },
    { id: "doc", icon: snakeFileIcon("DOC", "#2563eb") },
    { id: "txt", icon: snakeFileIcon("TXT", "#047857") }
  ];
  function setupSecurityFeatures() {
    setupSnakeDots();
  }
  function setupSnakeDots() {
    const snakeEl = document.querySelector(".security-snake");
    const pathEl = snakeEl ? snakeEl.querySelector(".snake-base-path") : null;
    const cardEls = Array.from(document.querySelectorAll(".security-card-premium"));
    const dotEls = Array.from(document.querySelectorAll(".snake-dot"));
    if (!snakeEl || !pathEl || !cardEls.length || !dotEls.length) return;
    const clamp = (value) => Math.min(100, Math.max(0, value));
    const getXForY = (targetY) => {
      if (typeof pathEl.getTotalLength !== "function") return null;
      const total = pathEl.getTotalLength();
      const samples = 240;
      let bestX = 100;
      let bestDiff = Number.POSITIVE_INFINITY;
      for (let i = 0; i <= samples; i += 1) {
        const point = pathEl.getPointAtLength(i / samples * total);
        const diff = Math.abs(point.y - targetY);
        if (diff < bestDiff) {
          bestDiff = diff;
          bestX = point.x;
        }
      }
      return bestX;
    };
    const measure = () => {
      const snakeRect = snakeEl.getBoundingClientRect();
      if (!snakeRect.height) return;
      snakeEl.style.setProperty("--snake-y-scale", String(snakeRect.height / 700));
      dotEls.forEach((dotEl, index) => {
        const card = cardEls[index];
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const yPct = clamp((centerY - snakeRect.top) / snakeRect.height * 100);
        const ySvg = yPct / 100 * 700;
        const pathX = getXForY(ySvg);
        const fallbackX = dotPoints[index] ? dotPoints[index].x : 100;
        const xSvg = pathX == null ? fallbackX : pathX;
        const xPct = clamp(xSvg / 200 * 100);
        dotEl.style.left = `${xPct}%`;
        dotEl.style.top = `${yPct}%`;
      });
    };
    const runMeasure = () => requestAnimationFrame(measure);
    runMeasure();
    setTimeout(runMeasure, 100);
    window.addEventListener("resize", runMeasure);
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(runMeasure);
      observer.observe(snakeEl);
      cardEls.forEach((card) => observer.observe(card));
    }
  }
  function lockIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `;
  }
  function shieldIcon2() {
    return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  `;
  }
  function keyIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="12" r="4"></circle>
      <path d="M12 12h9"></path>
      <path d="M18 12v3"></path>
      <path d="M15 12v2"></path>
    </svg>
  `;
  }
  function eyeIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;
  }
  function searchIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `;
  }
  function leafIcon() {
    return `
    <svg viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M293.925 279.079L254.668 239.822C261.193 214.83 281.569 121.457 235.819 75.706C185.789 25.678 19.07 1.128 11.997 0.107C8.716 -0.361 5.414 0.734 3.074 3.074C0.734 5.414 -0.365 8.72 0.107 11.996C1.128 19.069 25.677 185.788 75.705 235.818C94.958 255.071 124.612 264.832 163.842 264.832C196.701 264.832 227.158 257.946 239.815 254.662L279.079 293.926C281.129 295.975 283.815 297 286.502 297C289.189 297 291.875 295.975 293.925 293.926C298.025 289.825 298.025 283.178 293.925 279.079ZM163.843 243.837C130.384 243.837 105.724 236.144 90.552 220.971C72.233 202.652 54.403 160.481 38.989 99.018C31.252 68.168 25.945 39.523 23.165 23.164C39.524 25.944 68.168 31.251 99.019 38.989C160.483 54.403 202.654 72.233 220.974 90.552C253.359 122.936 243.98 190.343 237.174 222.327L173.524 158.678V119.448C173.524 113.651 168.824 108.951 163.027 108.951C157.23 108.951 152.53 113.651 152.53 119.448V137.683L105.08 90.234C100.979 86.136 94.334 86.136 90.234 90.234C86.134 94.334 86.134 100.98 90.234 105.08L101.366 116.212H83.129C77.332 116.212 72.632 120.912 72.632 126.709C72.632 132.506 77.332 137.206 83.129 137.206H122.361L174 188.845L155.762 188.845C149.965 188.845 145.265 193.545 145.265 199.342C145.265 205.139 149.964 209.839 155.762 209.839L194.995 209.84L222.344 237.188C207.942 240.258 186.331 243.837 163.843 243.837Z"
        fill="currentColor"
      ></path>
    </svg>
  `;
  }
  function airGapIcon() {
    return `
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.7399 6.32717C24.3781 8.48282 24.2132 11.571 22.2453 13.5389L20.3007 15.4835C20.0078 15.7764 19.533 15.7764 19.2401 15.4835L12.5226 8.76595C12.2297 8.47306 12.2297 7.99818 12.5226 7.70529L14.4671 5.76075C16.4352 3.79268 19.5237 3.62792 21.6793 5.26646L24.7238 2.22166C25.0167 1.92875 25.4916 1.92873 25.7845 2.22161C26.0774 2.51449 26.0774 2.98936 25.7845 3.28227L22.7399 6.32717ZM19.7704 13.8925L21.1846 12.4783C22.7467 10.9162 22.7467 8.3835 21.1846 6.82141C19.6225 5.25931 17.0899 5.25931 15.5278 6.82141L14.1135 8.23562L19.7704 13.8925Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.45"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12.7778 11.215C13.0707 11.5079 13.0707 11.9828 12.7778 12.2757L10.6514 14.402L13.5982 17.3489L15.7238 15.2234C16.0167 14.9305 16.4916 14.9305 16.7844 15.2234C17.0773 15.5163 17.0773 15.9912 16.7844 16.284L14.6589 18.4095L15.4858 19.2364C15.7787 19.5293 15.7787 20.0042 15.4858 20.2971L13.5412 22.2416C11.5732 24.2096 8.48484 24.3745 6.32918 22.7361L3.28475 25.7808C2.99187 26.0737 2.517 26.0737 2.22409 25.7808C1.93118 25.488 1.93116 25.0131 2.22404 24.7202L5.26853 21.6754C3.63025 19.5197 3.79509 16.4314 5.76306 14.4635L7.7076 12.5189C8.0005 12.226 8.47537 12.226 8.76826 12.5189L9.59072 13.3414L11.7172 11.215C12.0101 10.9221 12.485 10.9221 12.7778 11.215ZM6.83028 21.1875C8.3929 22.7431 10.9207 22.7409 12.4806 21.181L13.8948 19.7668L8.23793 14.1099L6.82372 15.5241C5.26383 17.084 5.26163 19.6117 6.81709 21.1743L6.82366 21.1808L6.83028 21.1875Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.45"
        stroke-linejoin="round"
      ></path>
    </svg>
  `;
  }
  function quantumIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="2.2"></circle>
      <ellipse cx="12" cy="12" rx="8.5" ry="3.3"></ellipse>
      <ellipse cx="12" cy="12" rx="8.5" ry="3.3" transform="rotate(60 12 12)"></ellipse>
      <ellipse cx="12" cy="12" rx="8.5" ry="3.3" transform="rotate(-60 12 12)"></ellipse>
    </svg>
  `;
  }
  function snakeLockOverlay(x = 15.8, y = 13.3) {
    return `
    <g transform="translate(${x} ${y}) scale(0.95)">
      <path d="M1.3 5.4V3.95a1.9 1.9 0 0 1 3.8 0v1.45" fill="none" stroke="#0b1121" stroke-width="1.9" stroke-linecap="round"></path>
      <path d="M1.3 5.4V3.95a1.9 1.9 0 0 1 3.8 0v1.45" fill="none" stroke="#a9b4c9" stroke-width="1.5" stroke-linecap="round"></path>
      <rect x="0" y="5.4" width="6.4" height="5.2" rx="1.2" fill="#a9b4c9" stroke="#0b1121" stroke-width="0.2"></rect>
      <circle cx="3.2" cy="8.05" r="0.85" fill="#0b0f1a" stroke="none"></circle>
    </g>
  `;
  }
  function snakeFileIcon(label, typeColor) {
    return `
    <g>
      <path d="M14.2 1.4H5.4A2.4 2.4 0 0 0 3 3.8v16.4a2.4 2.4 0 0 0 2.4 2.4h13.2a2.4 2.4 0 0 0 2.4-2.4V9z"></path>
      <polyline points="14.2 1.4 14.2 9 21 9"></polyline>
      <text
        x="12"
        y="17"
        text-anchor="middle"
        fill="#ffffff"
        stroke="none"
        font-size="4.9"
        font-weight="900"
        letter-spacing="0.18"
        font-family="Manrope, sans-serif"
      >
        ${escapeHtml(label)}
      </text>
      ${snakeLockOverlay()}
    </g>
  `;
  }
  function snakePhotoIcon() {
    return `
    <g>
      <rect x="3" y="3" width="18" height="18" rx="2.3" fill="rgba(255,255,255,0.08)"></rect>
      <circle cx="8.3" cy="8.3" r="1.7" fill="rgba(255,255,255,0.85)" stroke="none"></circle>
      <polyline points="20.5 15.2 15.5 10.2 5.2 20.5"></polyline>
      ${snakeLockOverlay(17.3, 11.5)}
    </g>
  `;
  }
  function snakeFolderIcon() {
    return `
    <g>
      <path d="M22 18.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2h5l2 2.8h9a2 2 0 0 1 2 2z" fill="rgba(255,255,255,0.08)"></path>
      ${snakeLockOverlay(17.3, 11.1)}
    </g>
  `;
  }

  // ../src/components/logo.js
  function renderGrapheneLogo({ className = "" } = {}) {
    const classAttr = className ? ` class="${className}"` : "";
    return `
    <svg${classAttr} viewBox="-23 0 302 302" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <g>
        <polygon
          fill="var(--text)"
          points="127.887881 0 149.918982 12.8925604 138.445 19.694 150.244736 12.7281189 150.244736 38.7619992 44.1101241 101.236835 44.11 200.453 44.2140031 200.392417 127.388908 248.744114 211.928 199.872 211.928 127.467 127.926729 176.989734 127.926 176.781 106.190511 163.840135 106.19 138.187 105.737673 137.907714 233.399134 62.9463331 255.938 75.424 255.982403 75.3981378 255.982 75.449 256.002991 75.4600773 255.982 75.472 255.982403 226.328463 128.655 301.503 128.655883 301.914784 128.308 301.708 127.926729 301.933302 127.926 301.481 0 225.554451 0 74.9801912 5.623 78.297 0.226418999 74.9613808"
        />
        <polygon
          fill="var(--text)"
          points="150.244736 12.7281189 150.244736 38.7619992 44.1101241 101.236835 44.1101241 200.617032 22.1890619 213.255525 22.1890619 88.3329587"
        />
        <polygon
          fill="var(--accent-dark)"
          points="149.918982 12.8925604 127.887881 0 0.226418999 74.9613808 22.2593366 88.579704"
        />
        <polygon
          fill="var(--accent-dark)"
          points="254.807015 200.392417 233.017452 187.681898 127.388908 248.744114 44.2140031 200.392417 22.1088056 213.310102 105.355991 262.643279 127.388908 276.261602"
        />
        <polygon
          fill="var(--accent-dark)"
          points="256.002991 75.4600773 233.399134 62.9463331 105.737673 137.907714 127.77059 151.526037"
        />
        <polygon
          fill="var(--muted)"
          points="0 74.9801912 22.3120967 88.1414558 22.3120967 213.210083 128.655883 275.502611 128.655883 301.914784 0 225.554451"
        />
        <polyline
          fill="var(--muted)"
          points="211.928183 101.824951 211.928183 200.197322 234.266221 212.833348 234.266221 106.582399 211.928183 101.824951"
        />
        <polygon
          fill="var(--text)"
          points="255.982403 75.3981378 255.982403 101.432018 149.847791 164.50641 149.847791 262.912135 255.982403 200.341706 255.982403 226.257488 127.926729 301.933302 127.926729 151.002977"
          transform="translate(191.954566, 188.665720) rotate(-180.000000) translate(-191.954566, -188.665720)"
        />
        <polygon
          fill="var(--muted)"
          points="106.190511 137.695104 106.190511 163.840135 128.041757 176.849732 128.041757 150.967194"
        />
      </g>
    </svg>
  `;
  }

  // ../src/components/free-plan.js
  function setupFreePlan() {
    const cta = document.querySelector("[data-download-clients-cta]");
    if (!cta) return;
    const desktopTarget = getDesktopDownloadTarget();
    if (!desktopTarget) return;
    cta.setAttribute("href", desktopTarget.href);
    cta.setAttribute("aria-label", `Install Graphene Cloud for ${desktopTarget.osName}`);
    cta.classList.add("button-with-os");
    cta.innerHTML = `<span data-i18n="freePlanInstallBtn">${t("freePlanInstallBtn")}</span>${desktopTarget.icon}`;
  }
  function getDesktopDownloadTarget() {
    if (typeof navigator === "undefined") return null;
    const userAgent = navigator.userAgent || "";
    const platform = navigator.platform || "";
    const maxTouchPoints = Number(navigator.maxTouchPoints || 0);
    const isIpadOs = /Mac/i.test(platform) && maxTouchPoints > 1;
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent) || isIpadOs;
    if (isMobile) return null;
    if (/Win/i.test(platform) || /Windows/i.test(userAgent)) {
      return {
        href: "/download/windows",
        osName: "Windows",
        icon: renderOsIcon("windows")
      };
    }
    if (/Mac/i.test(platform) || /Mac OS X/i.test(userAgent)) {
      return {
        href: "/download/macos",
        osName: "macOS",
        icon: renderOsIcon("macos")
      };
    }
    if (/Linux|X11/i.test(platform) || /Linux/i.test(userAgent)) {
      return {
        href: "/download/linux",
        osName: "Linux",
        icon: renderOsIcon("linux")
      };
    }
    return null;
  }
  function renderOsIcon(os) {
    if (os === "windows") {
      return `
      <span class="os-icon" aria-hidden="true">
        <svg viewBox="0 0 497.886 497.886" fill="currentColor">
          <polygon points="227.959,39.869 227.959,242.386 496.549,242.386 496.549,0"></polygon>
          <polygon points="1.336,244.746 211.172,244.746 211.172,41.818 1.336,72.798"></polygon>
          <polygon points="227.959,458.017 496.549,497.886 496.549,261.535 227.959,261.535"></polygon>
          <polygon points="1.336,425.086 211.172,456.066 211.172,261.531 1.336,261.531"></polygon>
        </svg>
      </span>
    `;
    }
    if (os === "macos") {
      return `
      <span class="os-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="currentColor">
          <path d="M31,0H1A1,1,0,0,0,0,1V31a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V1A1,1,0,0,0,31,0ZM2,2H14.36C11.89,7.34,11,15.52,11,15.9a1,1,0,0,0,.25.77A1,1,0,0,0,12,17h4.89a29.9,29.9,0,0,0,.25,7c-.37,0-.75.05-1.14.05A14.07,14.07,0,0,1,5.78,19.38a1,1,0,0,0-1.4-.16,1,1,0,0,0-.16,1.41A15.87,15.87,0,0,0,16,26c.53,0,1.05,0,1.55-.08A18.35,18.35,0,0,0,19.07,30H2ZM30,30H21.39a15.57,15.57,0,0,1-1.86-4.42,15.91,15.91,0,0,0,8.25-4.95,1,1,0,1,0-1.56-1.25,14.13,14.13,0,0,1-7.09,4.24A27.91,27.91,0,0,1,19,16.15,1,1,0,0,0,18,15H13.13c.34-2.59,1.36-9.12,3.46-13H30Z"></path>
          <path d="M8,13a1,1,0,0,0,1-1V9A1,1,0,0,0,7,9v3A1,1,0,0,0,8,13Z"></path>
          <path d="M24,13a1,1,0,0,0,1-1V9a1,1,0,0,0-2,0v3A1,1,0,0,0,24,13Z"></path>
        </svg>
      </span>
    `;
    }
    if (os === "linux") {
      return `
      <span class="os-icon" aria-hidden="true">
        <svg viewBox="0 0 304.998 304.998" fill="currentColor">
          <g id="XMLID_91_">
            <path id="XMLID_92_" d="M274.659,244.888c-8.944-3.663-12.77-8.524-12.4-15.777c0.381-8.466-4.422-14.667-6.703-17.117c1.378-5.264,5.405-23.474,0.004-39.291c-5.804-16.93-23.524-42.787-41.808-68.204c-7.485-10.438-7.839-21.784-8.248-34.922c-0.392-12.531-0.834-26.735-7.822-42.525C190.084,9.859,174.838,0,155.851,0c-11.295,0-22.889,3.53-31.811,9.684c-18.27,12.609-15.855,40.1-14.257,58.291c0.219,2.491,0.425,4.844,0.545,6.853c1.064,17.816,0.096,27.206-1.17,30.06c-0.819,1.865-4.851,7.173-9.118,12.793c-4.413,5.812-9.416,12.4-13.517,18.539c-4.893,7.387-8.843,18.678-12.663,29.597c-2.795,7.99-5.435,15.537-8.005,20.047c-4.871,8.676-3.659,16.766-2.647,20.505c-1.844,1.281-4.508,3.803-6.757,8.557c-2.718,5.8-8.233,8.917-19.701,11.122c-5.27,1.078-8.904,3.294-10.804,6.586c-2.765,4.791-1.259,10.811,0.115,14.925c2.03,6.048,0.765,9.876-1.535,16.826c-0.53,1.604-1.131,3.42-1.74,5.423c-0.959,3.161-0.613,6.035,1.026,8.542c4.331,6.621,16.969,8.956,29.979,10.492c7.768,0.922,16.27,4.029,24.493,7.035c8.057,2.944,16.388,5.989,23.961,6.913c1.151,0.145,2.291,0.218,3.39,0.218c11.434,0,16.6-7.587,18.238-10.704c4.107-0.838,18.272-3.522,32.871-3.882c14.576-0.416,28.679,2.462,32.674,3.357c1.256,2.404,4.567,7.895,9.845,10.724c2.901,1.586,6.938,2.495,11.073,2.495c0.001,0,0,0,0.001,0c4.416,0,12.817-1.044,19.466-8.039c6.632-7.028,23.202-16,35.302-22.551c2.7-1.462,5.226-2.83,7.441-4.065c6.797-3.768,10.506-9.152,10.175-14.771C282.445,250.905,279.356,246.811,274.659,244.888z M124.189,243.535c-0.846-5.96-8.513-11.871-17.392-18.715c-7.26-5.597-15.489-11.94-17.756-17.312c-4.685-11.082-0.992-30.568,5.447-40.602c3.182-5.024,5.781-12.643,8.295-20.011c2.714-7.956,5.521-16.182,8.66-19.783c4.971-5.622,9.565-16.561,10.379-25.182c4.655,4.444,11.876,10.083,18.547,10.083c1.027,0,2.024-0.134,2.977-0.403c4.564-1.318,11.277-5.197,17.769-8.947c5.597-3.234,12.499-7.222,15.096-7.585c4.453,6.394,30.328,63.655,32.972,82.044c2.092,14.55-0.118,26.578-1.229,31.289c-0.894-0.122-1.96-0.221-3.08-0.221c-7.207,0-9.115,3.934-9.612,6.283c-1.278,6.103-1.413,25.618-1.427,30.003c-2.606,3.311-15.785,18.903-34.706,21.706c-7.707,1.12-14.904,1.688-21.39,1.688c-5.544,0-9.082-0.428-10.551-0.651l-9.508-10.879C121.429,254.489,125.177,250.583,124.189,243.535z M136.254,64.149c-0.297,0.128-0.589,0.265-0.876,0.411c-0.029-0.644-0.096-1.297-0.199-1.952c-1.038-5.975-5-10.312-9.419-10.312c-0.327,0-0.656,0.025-1.017,0.08c-2.629,0.438-4.691,2.413-5.821,5.213c0.991-6.144,4.472-10.693,8.602-10.693c4.85,0,8.947,6.536,8.947,14.272C136.471,62.143,136.4,63.113,136.254,64.149z M173.94,68.756c0.444-1.414,0.684-2.944,0.684-4.532c0-7.014-4.45-12.509-10.131-12.509c-5.552,0-10.069,5.611-10.069,12.509c0,0.47,0.023,0.941,0.067,1.411c-0.294-0.113-0.581-0.223-0.861-0.329c-0.639-1.935-0.962-3.954-0.962-6.015c0-8.387,5.36-15.211,11.95-15.211c6.589,0,11.95,6.824,11.95,15.211C176.568,62.78,175.605,66.11,173.94,68.756z M169.081,85.08c-0.095,0.424-0.297,0.612-2.531,1.774c-1.128,0.587-2.532,1.318-4.289,2.388l-1.174,0.711c-4.718,2.86-15.765,9.559-18.764,9.952c-2.037,0.274-3.297-0.516-6.13-2.441c-0.639-0.435-1.319-0.897-2.044-1.362c-5.107-3.351-8.392-7.042-8.763-8.485c1.665-1.287,5.792-4.508,7.905-6.415c4.289-3.988,8.605-6.668,10.741-6.668c0.113,0,0.215,0.008,0.321,0.028c2.51,0.443,8.701,2.914,13.223,4.718c2.09,0.834,3.895,1.554,5.165,2.01C166.742,82.664,168.828,84.422,169.081,85.08z M205.028,271.45c2.257-10.181,4.857-24.031,4.436-32.196c-0.097-1.855-0.261-3.874-0.42-5.826c-0.297-3.65-0.738-9.075-0.283-10.684c0.09-0.042,0.19-0.078,0.301-0.109c0.019,4.668,1.033,13.979,8.479,17.226c2.219,0.968,4.755,1.458,7.537,1.458c7.459,0,15.735-3.659,19.125-7.049c1.996-1.996,3.675-4.438,4.851-6.372c0.257,0.753,0.415,1.737,0.332,3.005c-0.443,6.885,2.903,16.019,9.271,19.385l0.927,0.487c2.268,1.19,8.292,4.353,8.389,5.853c-0.001,0.001-0.051,0.177-0.387,0.489c-1.509,1.379-6.82,4.091-11.956,6.714c-9.111,4.652-19.438,9.925-24.076,14.803c-6.53,6.872-13.916,11.488-18.376,11.488c-0.537,0-1.026-0.068-1.461-0.206C206.873,288.406,202.886,281.417,205.028,271.45z M39.917,245.477c-0.494-2.312-0.884-4.137-0.465-5.905c0.304-1.31,6.771-2.714,9.533-3.313c3.883-0.843,7.899-1.714,10.525-3.308c3.551-2.151,5.474-6.118,7.17-9.618c1.228-2.531,2.496-5.148,4.005-6.007c0.085-0.05,0.215-0.108,0.463-0.108c2.827,0,8.759,5.943,12.177,11.262c0.867,1.341,2.473,4.028,4.331,7.139c5.557,9.298,13.166,22.033,17.14,26.301c3.581,3.837,9.378,11.214,7.952,17.541c-1.044,4.909-6.602,8.901-7.913,9.784c-0.476,0.108-1.065,0.163-1.758,0.163c-7.606,0-22.662-6.328-30.751-9.728l-1.197-0.503c-4.517-1.894-11.891-3.087-19.022-4.241c-5.674-0.919-13.444-2.176-14.732-3.312c-1.044-1.171,0.167-4.978,1.235-8.337c0.769-2.414,1.563-4.91,1.998-7.523C41.225,251.596,40.499,248.203,39.917,245.477z"></path>
          </g>
        </svg>
      </span>
    `;
    }
    return "";
  }

  // ../src/components/apps-platforms.js
  var platforms = [
    {
      titleKey: "desktopTitle",
      descriptionKey: "desktopDesc",
      featureSections: [
        {
          titleKey: "sectionClient",
          features: [
            { key: "featureLinux" },
            { key: "featureFastSync" },
            { key: "featureUpdates" },
            { key: "featureOffline" }
          ]
        }
      ],
      downloadLabelKey: "downloadLabel",
      downloads: [
        { label: "Windows", href: "/download/windows" },
        { label: "macOS", href: "/download/macos" },
        { label: "Linux", href: "/download/linux" }
      ],
      icon: desktopIcon(),
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#764ba2"
    },
    {
      titleKey: "mobileTitle",
      descriptionKey: "mobileDesc",
      featureSections: [
        {
          titleKey: "sectionExplorer",
          features: [{ key: "featureExplorer" }, { key: "featureOnTheGo" }]
        },
        { titleKey: "sectionPhotoSync", features: [{ key: "featureGallery" }] }
      ],
      downloadLabelKey: "downloadLabel",
      downloadSections: [
        {
          titleKey: "sectionExplorer",
          downloads: [
            { label: "App Store", href: "/download/ios/explorer" },
            { label: "Google Play", href: "/download/android/explorer" }
          ]
        },
        {
          titleKey: "sectionPhotoSync",
          downloads: [
            { label: "App Store", href: "/download/ios/gallery-sync" },
            { label: "Google Play", href: "/download/android/gallery-sync" }
          ]
        }
      ],
      icon: mobileIcon(),
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f5576c"
    },
    {
      titleKey: "webTitle",
      descriptionKey: "webDesc",
      featureSections: [
        {
          titleKey: "sectionClient",
          features: [
            { key: "featureStatic" },
            { key: "featureInBrowser" },
            { key: "featureDragDrop" }
          ]
        }
      ],
      downloadLabelKey: "downloadLabel",
      downloads: [{ label: "Web Client", href: "/app" }],
      icon: webIcon(),
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#00f2fe"
    }
  ];
  function setupAppsPlatforms() {
  }
  function desktopIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="13" rx="1.5" stroke="currentColor" stroke-width="1.5"></rect>
      <rect x="3" y="4" width="18" height="10" rx="0.5" fill="currentColor" fill-opacity="0.1"></rect>
      <path d="M2 14h20" stroke="currentColor" stroke-width="1.5"></path>
      <rect x="8" y="19" width="8" height="2" rx="0.5" fill="currentColor"></rect>
      <path d="M12 16v3" stroke="currentColor" stroke-width="1.5"></path>
      <circle cx="12" cy="14.5" r="0.7" fill="currentColor"></circle>
    </svg>
  `;
  }
  function mobileIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" stroke-width="1.5"></rect>
      <rect x="7" y="4" width="10" height="14" rx="0.5" fill="currentColor" fill-opacity="0.1"></rect>
      <path d="M9 19.5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <circle cx="12" cy="3.5" r="0.7" fill="currentColor"></circle>
      <path d="M10 3h4" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"></path>
    </svg>
  `;
  }
  function webIcon() {
    return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"></circle>
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" stroke-width="1.5"></ellipse>
      <path d="M3 12h18" stroke="currentColor" stroke-width="1.5"></path>
      <path d="M12 3c1.5 2 2.5 5.5 2.5 9s-1 7-2.5 9" stroke="currentColor" stroke-width="1.5"></path>
      <path d="M12 3c-1.5 2-2.5 5.5-2.5 9s1 7 2.5 9" stroke="currentColor" stroke-width="1.5"></path>
      <circle cx="12" cy="12" r="2" fill="currentColor" fill-opacity="0.25"></circle>
    </svg>
  `;
  }

  // ../src/components/comparison-table.js
  var providers = [
    {
      id: "cloudspace",
      name: "Our Cloud Storage",
      accent: "#1e69ff",
      gradient: "linear-gradient(135deg, #4c8dff 0%, #1e4dd8 100%)",
      logo: renderGrapheneLogo()
    },
    {
      id: "gdrive",
      name: "Google Drive",
      accent: "#34A853",
      gradient: "linear-gradient(135deg, #43c17d 0%, #1fa85a 100%)",
      logo: driveLogo()
    },
    {
      id: "onedrive",
      name: "OneDrive",
      accent: "#0A64D6",
      gradient: "linear-gradient(135deg, #3f8cff 0%, #0a64d6 100%)",
      logo: oneDriveLogo()
    },
    {
      id: "dropbox",
      name: "Dropbox",
      accent: "#0061FF",
      gradient: "linear-gradient(135deg, #2b7bff 0%, #0052d6 100%)",
      logo: dropboxLogo()
    },
    {
      id: "mega",
      name: "MEGA",
      accent: "#E53935",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #d32f2f 100%)",
      logo: megaLogo()
    },
    {
      id: "proton",
      name: "Proton Drive",
      accent: "#6B5BFF",
      gradient: "linear-gradient(135deg, #9b7bff 0%, #5a4dff 100%)",
      logo: protonLogo()
    }
  ];
  var rows = [
    {
      labelKey: "rowClientEncryption",
      values: [
        "V valClientEncryption",
        "X valProviderManaged",
        "X valProviderManaged",
        "X valProviderManaged",
        "V valClientEncryption",
        "V valClientEncryption"
      ]
    },
    {
      labelKey: "rowProviderKeyAccess",
      values: [
        "V valNoProviderAccess",
        "X valProviderManaged",
        "X valProviderManaged",
        "X valProviderManaged",
        "valNotStated",
        "V valNoProviderAccess"
      ]
    },
    {
      labelKey: "rowMetadataVisibility",
      values: [
        "V valMetadataObfuscated",
        "X valMetadataVisible",
        "X valMetadataVisible",
        "X valMetadataVisible",
        "! valProviderVisible",
        "! valPartialMetadata"
      ]
    },
    {
      labelKey: "rowZeroTrust",
      values: [
        "V valZeroTrust",
        "X valCentralizedTrust",
        "X valCentralizedTrust",
        "X valCentralizedTrust",
        "X valNoZeroTrust",
        "X valNoZeroTrust"
      ]
    },
    {
      labelKey: "rowFreeStorage",
      values: ["valEarlyAccess", "15 GB", "5 GB", "2 GB", "20 GB", "5 GB"]
    },
    {
      labelKey: "rowAirGapped",
      values: [
        "V valIsolatedStorage",
        "X valNoAirGapped",
        "X valNoAirGapped",
        "X valNoAirGapped",
        "X valNoAirGapped",
        "X valNoAirGapped"
      ]
    },
    {
      labelKey: "rowSurveillance",
      values: [
        "V valSurveillanceResistant",
        "X valSurveillanceExposure",
        "X valSurveillanceExposure",
        "X valSurveillanceExposure",
        "valNotStated",
        "valNotStated"
      ]
    },
    {
      labelKey: "rowQuantum",
      values: [
        "V valHashEncryption",
        "X valNoQuantumRoadmap",
        "X valNoQuantumRoadmap",
        "X valNoQuantumRoadmap",
        "X valNoQuantumResistance",
        "X valNoQuantumResistance"
      ]
    },
    {
      labelKey: "rowEnergy",
      values: [
        "V valEnergyEfficient",
        "X valStandardInfra",
        "X valStandardInfra",
        "X valStandardInfra",
        "valNotStated",
        "valNotStated"
      ]
    }
  ];
  var MAIN_FEATURE_WEIGHT = 10;
  var OTHER_FEATURE_WEIGHT = 5;
  var STORAGE_WEIGHT = 20;
  var PREVIEW_COUNT = 5;
  var storageRow = rows.find((row) => row.label === "Free Storage");
  var maxStorageGb = Math.max(1, ...storageRow ? storageRow.values.map(getStorageGb) : [1]);
  function setupComparisonTable() {
    const section = document.getElementById("comparison");
    if (!section) return;
    const ACTIVE_SWITCH_DEADZONE_PX = 16;
    const MOBILE_BREAKPOINT_QUERY = "(max-width: 767px)";
    let allOpen = false;
    const update = () => {
      const cards = Array.from(section.querySelectorAll(".compare-card"));
      cards.forEach((card) => {
        const providerIndex = Number(card.getAttribute("data-provider-index"));
        const listEl = card.querySelector(".compare-list");
        const button = card.querySelector(".compare-toggle");
        if (!listEl || !button || Number.isNaN(providerIndex)) return;
        listEl.innerHTML = renderRows(providerIndex, allOpen);
        button.textContent = allOpen ? t("hideDetails") : t("showAllFeatures");
        button.setAttribute("data-i18n", allOpen ? "hideDetails" : "showAllFeatures");
        button.setAttribute("aria-expanded", allOpen ? "true" : "false");
      });
    };
    const buttons = Array.from(section.querySelectorAll(".compare-toggle"));
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        allOpen = !allOpen;
        update();
      });
    });
    const infoText = section.querySelector("[data-comparison-info-text]");
    const infoToggle = section.querySelector("[data-comparison-info-toggle]");
    let isInfoExpanded = false;
    const isMobileView = () => typeof window !== "undefined" && window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches;
    const syncComparisonInfo = () => {
      if (!infoText || !infoToggle) return;
      if (isMobileView()) {
        infoText.hidden = !isInfoExpanded;
        infoToggle.hidden = false;
        infoToggle.textContent = isInfoExpanded ? t("hideDetails") : t("showDetails");
        infoToggle.setAttribute("data-i18n", isInfoExpanded ? "hideDetails" : "showDetails");
        infoToggle.setAttribute("aria-expanded", isInfoExpanded ? "true" : "false");
        return;
      }
      isInfoExpanded = false;
      infoText.hidden = false;
      infoToggle.hidden = true;
      infoToggle.textContent = t("showDetails");
      infoToggle.setAttribute("data-i18n", "showDetails");
      infoToggle.setAttribute("aria-expanded", "false");
    };
    if (infoToggle) {
      infoToggle.addEventListener("click", () => {
        if (!isMobileView()) return;
        isInfoExpanded = !isInfoExpanded;
        syncComparisonInfo();
      });
    }
    syncComparisonInfo();
    window.addEventListener("resize", syncComparisonInfo);
    const grid = section.querySelector(".comparison-grid");
    if (grid) {
      const cards = Array.from(grid.querySelectorAll(".compare-card"));
      let activeCard = null;
      let activeProviderIndex = null;
      const clearActiveCard = () => {
        if (!activeCard) return;
        activeCard.classList.remove("active");
        activeCard = null;
        activeProviderIndex = null;
      };
      const getProviderIndex = (card) => {
        const providerIndex = Number(card.getAttribute("data-provider-index"));
        return Number.isNaN(providerIndex) ? null : providerIndex;
      };
      const getGridCenter = () => grid.scrollLeft + grid.clientWidth / 2;
      const getCardCenter = (card) => card.offsetLeft + card.offsetWidth / 2;
      const getCardDistanceToCenter = (card, gridCenter) => Math.abs(gridCenter - getCardCenter(card));
      const getClosestCard = () => {
        if (cards.length === 0) return null;
        const gridCenter = getGridCenter();
        let closest = null;
        let closestDist = Infinity;
        cards.forEach((card) => {
          const dist = getCardDistanceToCenter(card, gridCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closest = card;
          }
        });
        if (!closest) return null;
        return { card: closest, distance: closestDist, gridCenter };
      };
      const applyActiveCard = (card) => {
        if (!card) {
          clearActiveCard();
          return;
        }
        if (card === activeCard) return;
        if (activeCard) activeCard.classList.remove("active");
        card.classList.add("active");
        activeCard = card;
        activeProviderIndex = getProviderIndex(card);
      };
      const setActiveCard = ({ force = false } = {}) => {
        const closestResult = getClosestCard();
        if (!closestResult) {
          clearActiveCard();
          return;
        }
        const { card: closest, distance: closestDist, gridCenter } = closestResult;
        if (!force && activeCard && closest !== activeCard) {
          const activeDist = getCardDistanceToCenter(activeCard, gridCenter);
          if (closestDist + ACTIVE_SWITCH_DEADZONE_PX >= activeDist) return;
        }
        applyActiveCard(closest);
      };
      if (cards.length > 0) {
        setTimeout(() => {
          const middleIndex = providers.length;
          if (cards[middleIndex]) {
            const targetCard = cards[middleIndex];
            const gridRect = grid.getBoundingClientRect();
            const cardRect = targetCard.getBoundingClientRect();
            const scrollLeftPosition = grid.scrollLeft + (cardRect.left - gridRect.left);
            grid.scrollTo({ left: scrollLeftPosition, behavior: "instant" });
            requestAnimationFrame(() => setActiveCard({ force: true }));
          } else {
            setActiveCard({ force: true });
          }
        }, 50);
        let blockWidth = 0;
        let isJumping = false;
        let rafId;
        let debounceTimer;
        grid.addEventListener("scroll", () => {
          if (blockWidth === 0 && cards.length > providers.length) {
            blockWidth = cards[providers.length].offsetLeft - cards[0].offsetLeft;
          }
          if (!isJumping) {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(setActiveCard);
          }
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            if (blockWidth <= 0) return;
            if (grid.scrollLeft <= blockWidth * 0.4 || grid.scrollLeft >= blockWidth * 1.6) {
              isJumping = true;
              grid.classList.add("is-jumping");
              const previousSnap = grid.style.scrollSnapType;
              grid.style.scrollSnapType = "none";
              if (grid.scrollLeft <= blockWidth * 0.4) {
                grid.scrollLeft += blockWidth;
              } else {
                grid.scrollLeft -= blockWidth;
              }
              requestAnimationFrame(() => {
                grid.style.scrollSnapType = previousSnap;
                const closestResult = getClosestCard();
                if (!closestResult) {
                  clearActiveCard();
                } else {
                  const jumpCard = closestResult.card;
                  const jumpProviderIndex = getProviderIndex(jumpCard);
                  if (jumpProviderIndex !== null && jumpProviderIndex === activeProviderIndex) {
                    applyActiveCard(jumpCard);
                  } else {
                    setActiveCard({ force: true });
                  }
                }
                requestAnimationFrame(() => {
                  isJumping = false;
                  grid.classList.remove("is-jumping");
                });
              });
            }
          }, 380);
        }, { passive: true });
      }
    }
  }
  function renderRows(providerIndex, allOpen) {
    const visibleRows = allOpen ? rows : rows.slice(0, PREVIEW_COUNT);
    return visibleRows.map((row) => {
      const rowValue = row.values[providerIndex];
      const rowPoints = getRowPoints(row.label, rowValue);
      const rowPointsLabel = `+${formatPoints(rowPoints)} pts`;
      const isZeroPoints = rowPoints <= 0;
      const isStorageRow = row.labelKey === "rowFreeStorage";
      return `
        <li class="compare-item">
          <span class="compare-label">
            <span data-i18n="${row.labelKey}">${escapeHtml(t(row.labelKey))}</span>
            <span class="compare-points${isZeroPoints ? " compare-points--zero" : ""}">
              ${escapeHtml(rowPointsLabel)}
            </span>
          </span>
          ${isStorageRow ? `<span class="compare-value compare-value--storage" data-i18n="${rowValue}">${escapeHtml(t(rowValue))}</span>` : formatValue(rowValue)}
        </li>
      `;
    }).join("");
  }
  function formatValue(value) {
    if (value.startsWith("V ")) {
      const key = value.replace(/^V\s*/, "");
      return `
      <span class="compare-value">
        ${statusIcon("yes")}
        <span data-i18n="${key}">${escapeHtml(t(key))}</span>
      </span>
    `;
    }
    if (value.startsWith("X ")) {
      const key = value.replace(/^X\s*/, "");
      return `
      <span class="compare-value">
        ${statusIcon("no")}
        <span data-i18n="${key}">${escapeHtml(t(key))}</span>
      </span>
    `;
    }
    if (value.startsWith("! ")) {
      const key = value.replace(/^!\s*/, "");
      return `
      <span class="compare-value">
        ${statusIcon("warn")}
        <span data-i18n="${key}">${escapeHtml(t(key))}</span>
      </span>
    `;
    }
    return `<span class="compare-value" data-i18n="${value}">${escapeHtml(t(value))}</span>`;
  }
  function statusIcon(type) {
    if (type === "yes") {
      return `
      <span class="compare-icon compare-icon--yes" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M3.2 8.1 6.5 11.3 12.8 4.9" stroke="currentColor"></path>
        </svg>
      </span>
    `;
    }
    if (type === "no") {
      return `
      <span class="compare-icon compare-icon--no" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="m4.4 4.4 7.2 7.2m0-7.2-7.2 7.2" stroke="currentColor"></path>
        </svg>
      </span>
    `;
    }
    return `
    <span class="compare-icon compare-icon--warn" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M8 3.2v6" stroke="currentColor"></path>
        <circle cx="8" cy="11.7" r="0.9" fill="currentColor" stroke="none"></circle>
      </svg>
    </span>
  `;
  }
  function getFeatureStrength(value) {
    if (value.startsWith("V")) return 1;
    if (value.startsWith("!")) return 0.5;
    if (value.startsWith("X")) return 0;
    if (/not stated/i.test(value)) return 0;
    return 0;
  }
  function getStorageGb(value) {
    const match = value.match(/(\d+(?:\.\d+)?)\s*GB/i);
    return match ? Number(match[1]) : 0;
  }
  function getRowWeight(labelKey) {
    if (labelKey === "rowFreeStorage") return STORAGE_WEIGHT;
    if (labelKey === "rowClientEncryption" || labelKey === "rowProviderKeyAccess") return MAIN_FEATURE_WEIGHT;
    return OTHER_FEATURE_WEIGHT;
  }
  function getRowPoints(labelKey, value) {
    if (labelKey === "rowFreeStorage") {
      return getStorageGb(t(value)) / maxStorageGb * STORAGE_WEIGHT;
    }
    return getFeatureStrength(value) * getRowWeight(labelKey);
  }
  function formatPoints(points) {
    const rounded = Math.round(points * 10) / 10;
    return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
  }
  function driveLogo() {
    return `
    <svg viewBox="0 0 207.027 207.027" fill="none" aria-hidden="true">
      <path d="M69.866 15.557 0 138.919l28.732 52.552 143.288-.029 35.008-59.588L136.39 15.735 69.866 15.557zM17.166 139.046 74.268 38.205 91.21 67.783 33.24 168.447 17.166 139.046zM99.841 82.851l23.805 41.558-47.732-.006 23.927-41.552zM163.434 176.443l-117.332.024 21.53-37.065 64.606.008.067.119 52.865-.085-21.736 36.999zM140.932 124.411 90.157 35.767l-2.966-5.178 40.751.121 57.003 93.706-44.013-.005z" fill="currentColor"></path>
    </svg>
  `;
  }
  function oneDriveLogo() {
    return `
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7.83017 26.0001C5.37824 26.0001 3.18957 24.8966 1.75391 23.1691L18.0429 16.3335L30.7089 23.4647C29.5926 24.9211 27.9066 26.0001 26.0004 25.9915C23.1254 26.0001 12.0629 26.0001 7.83017 26.0001Z" fill="currentColor" opacity="0.95"></path>
      <path d="M25.5785 13.3149L18.043 16.3334L30.709 23.4647C31.5199 22.4065 32.0004 21.0916 32.0004 19.6669C32.0004 16.1857 29.1321 13.3605 25.5833 13.3337C25.5817 13.3274 25.5801 13.3212 25.5785 13.3149Z" fill="currentColor" opacity="0.84"></path>
      <path d="M7.06445 10.7028L18.0423 16.3333L25.5779 13.3148C24.5051 9.11261 20.6237 6 15.9997 6C12.4141 6 9.27508 7.87166 7.54586 10.6716C7.3841 10.6773 7.22358 10.6877 7.06445 10.7028Z" fill="currentColor" opacity="0.74"></path>
      <path d="M1.7535 23.1687L18.0425 16.3331L7.06471 10.7026C3.09947 11.0792 0 14.3517 0 18.3331C0 20.1665 0.657197 21.8495 1.7535 23.1687Z" fill="currentColor" opacity="0.64"></path>
    </svg>
  `;
  }
  function dropboxLogo() {
    return `
    <svg viewBox="0 0 20 19" fill="none" aria-hidden="true">
      <path d="M10.012 11.74707 5.825 15.24637 4 14.0687V15.38937L10 19l6-3.61063V14.0687l-1.813 1.17767-4.175-3.4993zM20 3.92318 14.117 0 10 3.50952l5.932 3.74137L20 3.92318zM10 10.99226l4.117 3.50951L20 10.57859 15.932 7.25089 10 10.99226zM0 10.57859l5.883 3.50951L10 10.99226 4.068 7.25089 0 10.57859zM10 3.50952 4.068 7.25089 0 3.92318 5.883 0 10 3.50952z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
    </svg>
  `;
  }
  function megaLogo() {
    return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"></circle>
      <path d="M6.8 15.4v-6l5.2 4.9 5.2-4.9v6" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `;
  }
  function protonLogo() {
    return `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M4.5 36.1034V11.8966A4.0345 4.0345 0 0 1 8.5345 7.8621h7.5662a3.5863 3.5863 0 0 1 2.1224.6954l2.5323 1.8592a3.5867 3.5867 0 0 0 2.1223.6954H39.4655A4.0345 4.0345 0 0 1 43.5 15.1466V36.1034a4.0345 4.0345 0 0 1-4.0345 4.0345H8.5345A4.0345 4.0345 0 0 1 4.5 36.1034Z"
        stroke="currentColor"
        stroke-width="2.15"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M35.2069 40.1379V19.0871a3.138 3.138 0 0 0-3.156-3.1379l-15.2761.088a3.1382 3.1382 0 0 1-1.8366-.58l-3.4018-2.4192a3.1381 3.1381 0 0 0-1.8186-.5807H4.5"
        stroke="currentColor"
        stroke-width="2.15"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  `;
  }

  // ../src/components/faq.js
  function setupFaq() {
    const items = Array.from(document.querySelectorAll(".accordion-item"));
    let openIndex = 0;
    const update = () => {
      items.forEach((item, index) => {
        const isOpen = index === openIndex;
        const trigger = item.querySelector(".accordion-trigger");
        const panel = item.querySelector(".accordion-panel");
        const icon = item.querySelector(".accordion-icon");
        if (trigger) trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if (panel) panel.classList.toggle("open", isOpen);
        if (icon) icon.textContent = isOpen ? "-" : "+";
      });
    };
    items.forEach((item, index) => {
      const trigger = item.querySelector(".accordion-trigger");
      if (!trigger) return;
      trigger.addEventListener("click", () => {
        openIndex = openIndex === index ? -1 : index;
        update();
      });
    });
    update();
  }

  // ../src/components/navbar.js
  function setupNavbar() {
    const dropdown = document.getElementById("lang-dropdown");
    const trigger = document.getElementById("lang-trigger");
    const menu = document.getElementById("lang-menu");
    if (!dropdown || !trigger || !menu) return;
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", isOpen);
    });
    document.addEventListener("click", () => {
      dropdown.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    });
    menu.querySelectorAll(".lang-item").forEach((item) => {
      item.addEventListener("click", () => {
        const newLang = item.getAttribute("data-value");
        if (newLang !== currentLang) {
          setLanguage(newLang);
        }
        dropdown.classList.remove("is-open");
      });
    });
    // Set initial state
    const initialTriggerSpan = trigger.querySelector("span");
    if (initialTriggerSpan) {
      initialTriggerSpan.textContent = currentLang.toUpperCase();
    }
    menu.querySelectorAll(".lang-item").forEach((item) => {
      item.classList.toggle("is-active", item.getAttribute("data-value") === currentLang);
    });

    window.addEventListener("languageChanged", (e) => {
      const newLang = e.detail;
      const triggerSpan = trigger.querySelector("span");
      if (triggerSpan) {
        triggerSpan.textContent = newLang.toUpperCase();
      }
      menu.querySelectorAll(".lang-item").forEach((item) => {
        item.classList.toggle("is-active", item.getAttribute("data-value") === newLang);
      });
    });
  }

  // main-static.js
  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    setupNavbar();
    setupWhyCloud();
    setupSecurityFeatures();
    setupFreePlan();
    setupAppsPlatforms();
    setupComparisonTable();
    setupFaq();
    applyTranslations(currentLang);
  });
  window.addEventListener("languageChanged", (e) => {
    applyTranslations(e.detail);
  });
})();
