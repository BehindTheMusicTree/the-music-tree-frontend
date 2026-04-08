import type { ProjectSlug } from "@/data/projects/types";

export type Language = "en" | "fr";

export type Messages = {
  layout: {
    skipToContent: string;
  };
  header: {
    languageLabel: string;
    contribute: string;
    nav: {
      projects: string;
      about: string;
      engagement: string;
      faq: string;
      contact: string;
    };
  };
  footer: {
    product: string;
    company: string;
    support: string;
    community: string;
    home: string;
    projects: string;
    docs: string;
    about: string;
    engagement: string;
    contact: string;
    newsletter: string;
    faq: string;
    contribute: string;
    apiNote: string;
    checkResults: string;
  };
  newsletterForm: {
    ariaLabel: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    success: string;
    errorGeneric: string;
    errorNetwork: string;
  };
  project: {
    allProjects: string;
    releaseStatusAria: string;
    audienceHeading: string;
    featuresHeading: string;
    relatedHeading: string;
    documentationHeading: string;
    documentationIntro: string;
    linksHeading: string;
    demosHeading: string;
    opensInNewTab: string;
    statusActive: string;
    statusWip: string;
  };
  projectCard: {
    learnMore: string;
    teaserSummaries: Record<ProjectSlug, string>;
  };
  contribute: {
    title: string;
    intro: string;
    whereToStart: {
      sectionTitle: string;
      /** One line above the channel list. */
      intro: string;
      discordLabel: string;
      githubLabel: string;
      discordDescription: string;
      githubDescription: string;
      issuesLabel: string;
      issuesDescription: string;
      discussionsLabel: string;
      discussionsDescription: string;
    };
    sponsor: {
      sectionTitle: string;
      intro: string;
      githubTitle: string;
      githubDescription: string;
      /** `title` on the GitHub Sponsors iframe embed (`BtmtSponsorButton`). */
      githubEmbedTitle: string;
      tipeeeTitle: string;
      tipeeeDescription: string;
      tipeeeCta: string;
      tipeeeNote: string;
    };
    ways: {
      heading: string;
      introStart: string;
      introDiscussions: string;
      introMiddleOne: string;
      introIssues: string;
      introMiddleTwo: string;
      introGithub: string;
      introEnd: string;
      bullets: Array<{ title: string; text: string }>;
    };
    greatContribution: {
      heading: string;
      bullets: Array<{ title: string; text: string }>;
      outro: string;
    };
    nextSteps: {
      heading: string;
      intro: string;
      docsLabel: string;
      middle: string;
      guideLabel: string;
      end: string;
    };
  };
};

export const messages: Record<Language, Messages> = {
  en: {
    layout: {
      skipToContent: "Skip to content",
    },
    header: {
      languageLabel: "Website language",
      contribute: "Contribute",
      nav: {
        projects: "Projects",
        about: "About Us",
        engagement: "Engagement",
        faq: "FAQ",
        contact: "Contact",
      },
    },
    footer: {
      product: "Product",
      company: "Company",
      support: "Support",
      community: "Community",
      home: "Home",
      projects: "Projects",
      docs: "Docs",
      about: "About Us",
      engagement: "Engagement",
      contact: "Contact",
      newsletter: "Newsletter",
      faq: "FAQ",
      contribute: "Contribute",
      apiNote: "Their API may be unavailable.",
      checkResults: "Check results here",
    },
    newsletterForm: {
      ariaLabel: "Newsletter signup",
      emailLabel: "Email for newsletter",
      emailPlaceholder: "you@example.com",
      submit: "Subscribe to our newsletter",
      success: "Check your inbox to confirm your subscription.",
      errorGeneric: "Something went wrong.",
      errorNetwork: "Network error. Try again.",
    },
    project: {
      allProjects: "All projects",
      releaseStatusAria: "Release status and package badges",
      audienceHeading: "Who it's for",
      featuresHeading: "Key features",
      relatedHeading: "Related projects",
      documentationHeading: "Technical documentation",
      documentationIntro:
        "Setup, APIs, architecture, and contribution workflows live in each repository's README (and linked resources). This page focuses on the product story and ecosystem fit.",
      linksHeading: "Links",
      demosHeading: "Quick demos",
      opensInNewTab: "(opens in a new tab)",
      statusActive: "Active & Available",
      statusWip: "Work in Progress",
    },
    projectCard: {
      learnMore: "Learn more",
      teaserSummaries: {
        "audiometa-python":
          "Unified Python library for reading and writing audio metadata (ID3v1, ID3v2, Vorbis, RIFF). Live web demo available.",
        "audiometa-webapp":
          "Web app for reading and editing audio metadata (ID3, Vorbis, RIFF) in the browser. Companion to AudioMeta Python.",
        "grow-the-music-tree":
          "Interactive map of global music genres. Community-driven genre tree, personalized music journeys, and intelligent genre detection. API access via TheMusicTreeAPI.",
        "the-music-tree-api":
          "RESTful API for genre hierarchy and metadata, intelligent genre detection and classification, personalized user profiling, and data-driven recommendations. Built with Django REST Framework and PostgreSQL.",
        "hear-the-music-tree":
          "Cloud-based audio file manager for collectors, DJs, and music lovers. Smart playlists, universal format and tag support, secure cloud storage, cross-platform sync and export. Powered by GrowTheMusicTree.",
      },
    },
    contribute: {
      title: "Contribute",
      intro:
        "We love collaborating with the community. Join the channels below, then read practical ways to help and what makes a strong contribution.",
      whereToStart: {
        sectionTitle: "Where to start",
        intro:
          "Choose where you want to begin — each option opens the right place to chat, browse code, report bugs, or discuss ideas.",
        discordLabel: "Discord",
        githubLabel: "GitHub",
        discordDescription:
          "Chat with contributors, ask quick questions, and follow project updates in real time.",
        githubDescription:
          "Explore repositories, read code and READMEs, and fork a project when you are ready to propose changes.",
        issuesLabel: "GitHub issues",
        issuesDescription:
          "Find reported bugs and planned work across org repositories, or open a new issue in the repo that best fits your report.",
        discussionsLabel: "Organization discussions",
        discussionsDescription:
          "Share ideas, ask broader questions, and weigh trade-offs before turning something into a formal issue or pull request.",
      },
      sponsor: {
        sectionTitle: "Sponsor",
        intro:
          "Choose one support path: GitHub Sponsors for ecosystem support, or Tipeee for direct GrowTheMusicTree support.",
        githubTitle: "GitHub Sponsors",
        githubDescription: "Best if you already use GitHub.",
        githubEmbedTitle: "Sponsor BehindTheMusicTree",
        tipeeeTitle: "Support on Tipeee",
        tipeeeDescription: "Best for non-GitHub supporters.",
        tipeeeCta: "Support GrowTheMusicTree on Tipeee",
        tipeeeNote:
          "Tipeee checkout may be in French; it is the same GrowTheMusicTree project.",
      },
      ways: {
        heading: "Ways to Contribute",
        introStart: "Map these to the links above when it helps: use",
        introDiscussions: "Organization discussions",
        introMiddleOne: "for ideas and open questions,",
        introIssues: "GitHub issues",
        introMiddleTwo: "for concrete bugs and scoped work, and",
        introGithub: "GitHub",
        introEnd: "to read code and open pull requests.",
        bullets: [
          {
            title: "Report Bugs",
            text: "Found an issue? Open an issue with details and steps to reproduce.",
          },
          {
            title: "Share Ideas",
            text: "Have a feature idea? Start a discussion or open a feature request.",
          },
          {
            title: "Write Code",
            text: "Check out open issues, fork repos, and submit PRs.",
          },
          {
            title: "Improve Docs",
            text: "Documentation improvements are always welcome.",
          },
          {
            title: "Show Support",
            text: "Star repositories you find useful.",
          },
          {
            title: "Spread the Word",
            text: "Tell others about projects you love.",
          },
        ],
      },
      greatContribution: {
        heading: "What Makes a Great Contribution",
        bullets: [
          { title: "Clear communication", text: "Describe what and why." },
          {
            title: "Small, focused changes",
            text: "Easier to review and merge.",
          },
          {
            title: "Tests included",
            text: "Ensures quality and prevents regressions.",
          },
          {
            title: "Documentation updates",
            text: "Keep docs in sync with code.",
          },
          {
            title: "Respectful collaboration",
            text: "We are all here to learn and build together.",
          },
        ],
        outro: "Every contribution matters, no matter how small.",
      },
      nextSteps: {
        heading: "Next steps",
        intro: "Read the",
        docsLabel: "Docs",
        middle: "hub and the association's",
        guideLabel: "welcome guide on GitHub",
        end: ".",
      },
    },
  },
  fr: {
    layout: {
      skipToContent: "Aller au contenu",
    },
    header: {

      languageLabel: "Langue du site",
      contribute: "Contribuer",
      nav: {
        projects: "Projets",
        about: "A propos",
        engagement: "Engagement",
        faq: "FAQ",
        contact: "Contact",
      },
    },
    footer: {
      product: "Produit",
      company: "Association",
      support: "Support",
      community: "Communaute",
      home: "Accueil",
      projects: "Projets",
      docs: "Docs",
      about: "A propos",
      engagement: "Engagement",
      contact: "Contact",
      newsletter: "Newsletter",
      faq: "FAQ",
      contribute: "Contribuer",
      apiNote: "Leur API peut etre indisponible.",
      checkResults: "Voir les resultats ici",
    },
    newsletterForm: {
      ariaLabel: "Inscription a la newsletter",
      emailLabel: "Email pour la newsletter",
      emailPlaceholder: "vous@exemple.com",
      submit: "S'inscrire a notre newsletter",
      success: "Verifiez votre boite mail pour confirmer votre inscription.",
      errorGeneric: "Une erreur est survenue.",
      errorNetwork: "Erreur reseau. Reessayez.",
    },
    project: {
      allProjects: "Tous les projets",
      releaseStatusAria: "Statut de publication et badges de package",
      audienceHeading: "Pour qui",
      featuresHeading: "Fonctionnalites principales",
      relatedHeading: "Projets lies",
      documentationHeading: "Documentation technique",
      documentationIntro:
        "L'installation, les API, l'architecture et les workflows de contribution sont documentes dans les README de chaque depot (et ressources liees). Cette page se concentre sur l'histoire produit et sa place dans l'ecosysteme.",
      linksHeading: "Liens",
      demosHeading: "Demos rapides",
      opensInNewTab: "(ouvre dans un nouvel onglet)",
      statusActive: "Actif et disponible",
      statusWip: "Travail en cours",
    },
    projectCard: {
      learnMore: "En savoir plus",
      teaserSummaries: {
        "audiometa-python":
          "Bibliotheque Python unifiee pour lire et ecrire les metadonnees audio (ID3v1, ID3v2, Vorbis, RIFF). Demo web disponible.",
        "audiometa-webapp":
          "Application web pour lire et modifier les metadonnees audio (ID3, Vorbis, RIFF) dans le navigateur. Compagnon d'AudioMeta Python.",
        "grow-the-music-tree":
          "Carte interactive des genres musicaux mondiaux. Arbre de genres communautaire, parcours personnalises et detection intelligente des genres. Acces API via TheMusicTreeAPI.",
        "the-music-tree-api":
          "API REST pour la hierarchie des genres et les metadonnees, detection et classification de genres, profils utilisateur et recommandations. Construite avec Django REST Framework et PostgreSQL.",
        "hear-the-music-tree":
          "Gestionnaire de fichiers audio dans le nuage pour collectionneurs, DJ et passionnes. Listes de lecture intelligentes, formats et tags largement pris en charge, stockage securise, synchro et export multi-plateforme. Propulse par GrowTheMusicTree.",
      },
    },
    contribute: {
      title: "Contribuer",
      intro:
        "Nous aimons collaborer avec la communaute. Rejoignez les canaux ci-dessous, puis consultez des pistes concretes pour aider et ce qui fait une contribution solide.",
      whereToStart: {
        sectionTitle: "Par ou commencer",
        intro:
          "Choisissez votre point d'entree — chaque option ouvre le bon endroit pour discuter, parcourir le code, signaler un bug ou echanger des idees.",
        discordLabel: "Discord",
        githubLabel: "GitHub",
        discordDescription:
          "Echangez avec les contributeurs, posez des questions rapides et suivez les mises a jour du projet en temps reel.",
        githubDescription:
          "Explorez les depots, lisez le code et les README, puis forkez un projet quand vous etes pret a proposer des changements.",
        issuesLabel: "Issues GitHub",
        issuesDescription:
          "Consultez les bugs signales et le travail planifie dans les depots de l'organisation, ou ouvrez une nouvelle issue dans le depot le plus adapte.",
        discussionsLabel: "Discussions d'organisation",
        discussionsDescription:
          "Partagez des idees, posez des questions plus larges et evaluez les compromis avant de transformer un sujet en issue ou pull request formelle.",
      },
      sponsor: {
        sectionTitle: "Sponsoriser",
        intro:
          "Choisissez un mode de soutien : GitHub Sponsors pour soutenir l'ecosysteme, ou Tipeee pour soutenir directement GrowTheMusicTree.",
        githubTitle: "GitHub Sponsors",
        githubDescription: "Ideal si vous utilisez deja GitHub.",
        githubEmbedTitle: "Soutenir BehindTheMusicTree",
        tipeeeTitle: "Soutenir sur Tipeee",
        tipeeeDescription: "Ideal pour les personnes qui n'utilisent pas GitHub.",
        tipeeeCta: "Soutenez GrowTheMusicTree sur Tipeee",
        tipeeeNote:
          "Le paiement Tipeee peut etre en francais ; il s'agit du meme projet GrowTheMusicTree.",
      },
      ways: {
        heading: "Facons de contribuer",
        introStart: "Vous pouvez vous appuyer sur les liens ci-dessus : utilisez",
        introDiscussions: "les discussions d'organisation",
        introMiddleOne: "pour les idees et les questions ouvertes,",
        introIssues: "les issues GitHub",
        introMiddleTwo: "pour les bugs concrets et le travail cible, et",
        introGithub: "GitHub",
        introEnd: "pour lire le code et ouvrir des pull requests.",
        bullets: [
          {
            title: "Signaler des bugs",
            text: "Vous avez trouve un probleme ? Ouvrez une issue avec les details et les etapes de reproduction.",
          },
          {
            title: "Partager des idees",
            text: "Vous avez une idee de fonctionnalite ? Lancez une discussion ou ouvrez une demande de fonctionnalite.",
          },
          {
            title: "Ecrire du code",
            text: "Consultez les issues ouvertes, forkez les depots et proposez des PR.",
          },
          {
            title: "Ameliorer la documentation",
            text: "Les ameliorations de documentation sont toujours bienvenues.",
          },
          {
            title: "Montrer votre soutien",
            text: "Ajoutez une etoile aux depots que vous trouvez utiles.",
          },
          {
            title: "Faire connaitre le projet",
            text: "Parlez des projets que vous aimez autour de vous.",
          },
        ],
      },
      greatContribution: {
        heading: "Ce qui fait une excellente contribution",
        bullets: [
          {
            title: "Communication claire",
            text: "Expliquez ce que vous faites et pourquoi.",
          },
          {
            title: "Changements petits et cibles",
            text: "Plus simples a relire et a fusionner.",
          },
          {
            title: "Tests inclus",
            text: "Garantit la qualite et evite les regressions.",
          },
          {
            title: "Mises a jour de documentation",
            text: "Gardez la documentation alignee avec le code.",
          },
          {
            title: "Collaboration respectueuse",
            text: "Nous sommes ici pour apprendre et construire ensemble.",
          },
        ],
        outro: "Chaque contribution compte, meme les plus petites.",
      },
      nextSteps: {
        heading: "Prochaines etapes",
        intro: "Consultez le hub",
        docsLabel: "Docs",
        middle: "et le",
        guideLabel: "guide de bienvenue sur GitHub",
        end: "de l'association.",
      },
    },
  },
};
