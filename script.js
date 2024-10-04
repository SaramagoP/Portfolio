 // Header toggle
      // Sélectionne le bouton de menu par son ID
      let MenuBtn = document.getElementById("MenuBtn");

      // Ajoute un écouteur d'événements au bouton de menu pour détecter les clics
      MenuBtn.addEventListener("click", function (e) {
        // Bascule la classe 'mobile-nav-active' sur le corps du document pour activer/désactiver la navigation mobile
        document.querySelector("body").classList.toggle("mobile-nav-active");
        // Bascule la classe 'fa-xmark' sur le bouton pour changer son apparence (ex. : d'une icône de menu à une icône de fermeture)
        this.classList.toggle("fa-xmark");
      });

      // Typing Effect
      // Crée une nouvelle instance de Typed pour animer le texte
      let typed = new Typed(".auto-input", {
        // Définit les chaînes de caractères à taper
        strings: [
          "Développeur Web Junior",
          "Développeur Front-End",
          "Développeur Back-End",
        ],
        // Vitesse de saisie des caractères (en millisecondes)
        typeSpeed: 100,
        // Vitesse de suppression des caractères (en millisecondes)
        backSpeed: 100,
        // Délai avant de commencer à supprimer (en millisecondes)
        backDelay: 2000,
        // Définit le mode de boucle pour recommencer l'animation indéfiniment
        loop: true,
      });

      let navLinks = document.querySelectorAll("nav ul li a");

      let sections = document.querySelectorAll("section");

      window.addEventListener("scroll", function () {
        const scrollPos = window.scrollY + 20;
        sections.forEach((section) => {
          if (
            scrollPos > section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (
                section.getAttribute("id") ===
                link.getAttribute("href").substring(1)
              ) {
                link.classList.add("active");
              }
            });
          }
        });
      });

      