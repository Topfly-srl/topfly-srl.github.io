(function () {
  "use strict";

  if (window.__tfHomeUxRefreshLoaded) {
    return;
  }
  window.__tfHomeUxRefreshLoaded = true;

  var MOBILE_MAX = 767;
  var INITIAL_VISIBLE_CARDS = 8;
  var SECTOR_DATA = {
    vehicles: [
      { id: "tutte", label: "Tutte", tag: "L'intera piattaforma, per qualsiasi flotta.", ids: ["tempo-reale", "passeggeri", "centralina", "tachigrafo", "carburante", "autisti", "missioni", "costi", "cassoni", "antifurto", "connessioni", "risparmi", "corse", "scuolabus", "sicurezza", "protezione", "sensori", "integrazione", "assistenza", "carrental", "elettriche", "dashcam", "calcestruzzo"], icon: '<rect x="3.4" y="3.4" width="7.2" height="7.2" rx="1.6"></rect><rect x="13.4" y="3.4" width="7.2" height="7.2" rx="1.6"></rect><rect x="3.4" y="13.4" width="7.2" height="7.2" rx="1.6"></rect><rect x="13.4" y="13.4" width="7.2" height="7.2" rx="1.6"></rect>' },
      { id: "trasporti-pesanti", label: "Trasporti pesanti", tag: "Tempi di guida, carburante, rimorchi e antifurto sotto controllo.", ids: ["tempo-reale", "centralina", "tachigrafo", "carburante", "autisti", "missioni", "costi", "cassoni", "antifurto", "connessioni", "risparmi", "sicurezza", "protezione", "sensori", "integrazione", "assistenza", "dashcam"], icon: '<path d="M2 6h11.5v9.5H2z"></path><path d="M13.5 9h3.8l3.2 3.4v3.1h-7z"></path><circle cx="6.2" cy="18.4" r="1.7"></circle><circle cx="17.3" cy="18.4" r="1.7"></circle>' },
      { id: "bus", label: "Bus", tag: "Passeggeri, corse, fermate e sicurezza a bordo.", ids: ["tempo-reale", "passeggeri", "centralina", "tachigrafo", "carburante", "autisti", "missioni", "costi", "antifurto", "connessioni", "risparmi", "corse", "scuolabus", "sicurezza", "integrazione", "assistenza", "dashcam"], icon: '<rect x="2.6" y="3.6" width="18.8" height="12.4" rx="2.6"></rect><path d="M2.6 11.2h18.8"></path><circle cx="7" cy="18.6" r="1.6"></circle><circle cx="17" cy="18.6" r="1.6"></circle>' },
      { id: "rifiuti", label: "Rifiuti", tag: "Missioni, cassoni e sensori per la raccolta.", ids: ["tempo-reale", "centralina", "tachigrafo", "carburante", "autisti", "missioni", "costi", "cassoni", "antifurto", "connessioni", "risparmi", "sensori", "integrazione", "assistenza", "dashcam"], icon: '<path d="M4.5 7.2h15"></path><path d="M9.2 7.2l.5-2.1h4.6l.5 2.1"></path><path d="M6.4 7.2l1 12.6h9.2l1-12.6"></path><path d="M10 11v5.4M14 11v5.4"></path>' },
      { id: "corrieri", label: "Corrieri", tag: "Consegne puntuali e merci protette lungo il percorso.", ids: ["tempo-reale", "centralina", "tachigrafo", "carburante", "autisti", "missioni", "costi", "antifurto", "connessioni", "sicurezza", "protezione", "sensori", "integrazione", "assistenza", "dashcam"], icon: '<path d="M12 3.4l8 4.1v8.9l-8 4.1-8-4.1V7.5z"></path><path d="M4 7.6l8 4 8-4"></path><path d="M12 11.6V20"></path>' },
      { id: "autonoleggi", label: "Autonoleggi", tag: "Car sharing, auto elettriche e costi sempre tracciati.", ids: ["tempo-reale", "centralina", "carburante", "costi", "antifurto", "connessioni", "integrazione", "assistenza", "carrental", "elettriche"], icon: '<path d="M4.8 13.2l1.5-4.3a2 2 0 0 1 1.9-1.3h7.6a2 2 0 0 1 1.9 1.3l1.5 4.3"></path><path d="M3.4 13.2h17.2v3.4a1 1 0 0 1-1 1H4.4a1 1 0 0 1-1-1z"></path><circle cx="7.4" cy="17.8" r="1.5"></circle><circle cx="16.6" cy="17.8" r="1.5"></circle>' },
      { id: "macchine-operatrici", label: "Macchine operatrici", tag: "Cantiere, calcestruzzo e manutenzioni programmate.", ids: ["tempo-reale", "centralina", "carburante", "autisti", "costi", "antifurto", "connessioni", "risparmi", "integrazione", "assistenza", "dashcam", "calcestruzzo"], icon: '<path d="M4 19.5h10v-3.5H6.2L4 19.5z"></path><path d="M9 16v-3h3l4.5-4.5"></path><path d="M16.5 8.5l2.8-1 .9 2.8"></path>' },
      { id: "sgombero-neve", label: "Sgombero neve", tag: "Mezzi sempre operativi, anche col meteo peggiore.", ids: ["tempo-reale", "centralina", "tachigrafo", "carburante", "autisti", "missioni", "costi", "antifurto", "connessioni", "risparmi", "integrazione", "assistenza", "dashcam"], icon: '<path d="M12 2.5v19"></path><path d="M3.8 7.25 20.2 16.75"></path><path d="M20.2 7.25 3.8 16.75"></path><path d="M9.6 4.4 12 6.2l2.4-1.8M9.6 19.6 12 17.8l2.4 1.8M4.2 9.3l2.9-.2.3-2.9M19.8 14.7l-2.9.2-.3 2.9M19.8 9.3l-.3-2.9-2.9-.2M4.2 14.7l.3 2.9 2.9.2"></path>' },
      { id: "moto-e-bici", label: "Moto e bici", tag: "L'essenziale: posizione, antifurto e assistenza.", ids: ["tempo-reale", "costi", "antifurto", "connessioni", "integrazione", "assistenza"], icon: '<circle cx="6" cy="16" r="3.3"></circle><circle cx="18" cy="16" r="3.3"></circle><path d="M6 16l3.4-5.2h4.2l2.4 5.2"></path><path d="M9.4 10.8H7.2"></path><path d="M13.6 10.8l2.2 2.2"></path>' },
      { id: "imbarcazioni", label: "Imbarcazioni", tag: "Per la nautica c'è Seaguardian, la soluzione dedicata.", ids: ["seaguardian"], icon: '<path d="M3.5 16.5h17l-2.6 4H6.1z"></path><path d="M12 3.2v11.8"></path><path d="M12 5.2l5.6 8.8H12z"></path><path d="M12 5.6 6.8 14H12z"></path>' },
      { id: "persone", label: "Persone", tag: "Sicurezza delle persone, a bordo e fuori.", ids: ["scuolabus", "sicurezza", "sensori"], icon: '<circle cx="8.8" cy="8" r="2.7"></circle><path d="M4.4 19.2v-1.4a4.4 4.4 0 0 1 8.8 0v1.4"></path><circle cx="16.4" cy="9" r="2.2"></circle><path d="M14.4 19.2v-1a3.7 3.7 0 0 1 5.6-3"></path>' }
    ],
    services: [
      { id: "tempo-reale", t: "Tempo Reale e Storico", h: "/tempo-reale-e-storico/", d: "Posizione, percorsi e storico sempre consultabili." },
      { id: "passeggeri", t: "Passeggeri", h: "/passeggeri/", d: "Conteggio e gestione dei passeggeri a bordo." },
      { id: "centralina", t: "Centralina e Anomalie", h: "/centralina-e-anomalie-veicolo/", d: "Leggi le anomalie dalla centralina e agisci subito." },
      { id: "tachigrafo", t: "Tachigrafo e Infrazioni", h: "/tachigrafo-e-infrazioni/", d: "Scarico remoto, tempi di guida e lettere automatiche." },
      { id: "carburante", t: "Carburante", h: "/carburante/", d: "Consumi, rifornimenti e furti sotto controllo." },
      { id: "autisti", t: "Autisti", h: "/autisti/", d: "Stile di guida, sicurezza e gestione del personale." },
      { id: "missioni", t: "Missioni", h: "/missioni/", d: "Assegna attività e comunica con l'autista in tempo reale." },
      { id: "costi", t: "Costi e Manutenzione", h: "/costi-e-manutenzione/", d: "Manutenzioni preventive e costi sempre tracciati." },
      { id: "cassoni", t: "Cassoni e Rimorchi", h: "/cassoni-e-rimorchi/", d: "Sicurezza e controllo di cassoni e rimorchi." },
      { id: "antifurto", t: "Antifurto Completo", h: "/antifurto-completo/", d: "Protezione discreta, insensibile ai jammer." },
      { id: "connessioni", t: "Connessioni e Mappe", h: "/connessioni-e-mappe-globali/", d: "Mappe dettagliate e copertura nazionale e internazionale." },
      { id: "risparmi", t: "Risparmi e Incentivi", h: "/risparmi-e-incentivi/", d: "Individua i risparmi e accedi agli incentivi." },
      { id: "corse", t: "Corse e Fermate", h: "/corse-e-fermate/", d: "Un servizio di trasporto affidabile, corsa per corsa." },
      { id: "scuolabus", t: "Scuolabus Sicuro", h: "/scuolabus-sicuro/", d: "Massima sicurezza per i bambini a bordo." },
      { id: "sicurezza", t: "Sicurezza Mezzi e Persone", h: "/sicurezza-mezzi-e-persone/", d: "Priorità assoluta a mezzi e persone." },
      { id: "protezione", t: "Protezione Merci", h: "/protezione-merci/", d: "Le tue merci protette per tutto il viaggio." },
      { id: "sensori", t: "Sensoristica Aggiuntiva", h: "/sensoristica-aggiuntiva/", d: "Temperature, porte, livelli: i sensori che ti servono." },
      { id: "integrazione", t: "Integrazione e Condivisione", h: "/integrazione-e-condivisione-con-terze-parti/", d: "Collega TOPFLY ai tuoi gestionali e a terze parti." },
      { id: "assistenza", t: "Assistenza Top", h: "/assistenza-top/", d: "Supporto dedicato, sempre al tuo fianco." },
      { id: "carrental", t: "Car Rental / Car Sharing", h: "/car-rental-car-sharing/", d: "Noleggio e condivisione auto, digitalizzati." },
      { id: "elettriche", t: "Auto Elettriche", h: "/auto-elettriche/", d: "Gestione e monitoraggio della flotta elettrica." },
      { id: "dashcam", t: "Dashcam Intelligenti", h: "/dashcam-intelligenti/", d: "Eventi video automatici, prove e analisi." },
      { id: "calcestruzzo", t: "Lavorabilità Calcestruzzo", h: "/monitoraggio-lavorabilita-del-calcestruzzo/", d: "Qualità del calcestruzzo dal carico alla consegna." },
      { id: "seaguardian", t: "Seaguardian", h: "https://www.seaguardian.it/", d: "La soluzione TOPFLY dedicata alla nautica.", ext: true }
    ]
  };

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  }

  function isMobile() {
    return window.matchMedia("(max-width: " + MOBILE_MAX + "px)").matches;
  }

  function clean(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function textOf(element) {
    return clean(element ? element.innerText || element.textContent : "");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function imageSource(image) {
    if (!image) {
      return "";
    }
    return image.currentSrc || image.src || image.getAttribute("data-src") || image.getAttribute("data-lazy-src") || "";
  }

  function isSliderPreviewEnabled() {
    // Banner "in evidenza" ringiovanito (.tf-slider-preview): ATTIVO OVUNQUE,
    // anche in produzione (owner 2026-07-11: "togli il gate e mettilo in
    // produzione"). Prima era limitato a localhost; ora l'unica via per
    // vedere il vecchio Elementor statico e' il parametro ?tf_slider_preview=0
    // (debug).
    try {
      var forced = new URLSearchParams(window.location.search).get("tf_slider_preview");
      return forced !== "0";
    } catch (error) {
      return true;
    }
  }

  function button(label, modifier) {
    var item = document.createElement("button");
    item.type = "button";
    item.className = "tf-slider-preview__arrow " + (modifier || "");
    item.setAttribute("aria-label", label);
    return item;
  }

  function makeScrollableCarousel(track, slides, prev, next, dots, options) {
    options = options || {};
    var pointerStartX = 0;
    var scrollStart = 0;
    var dragged = false;
    var scrollTimer = null;
    var autoplayTimer = null;
    var currentIndex = 0;
    var programmaticUntil = 0;
    var loop = options.loop !== false;
    var autoplayMs = Number(options.autoplayMs || 0);
    var root = options.root || track.parentNode || track;
    var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function itemsPerPage() {
      var value = typeof options.itemsPerPage === "function" ? options.itemsPerPage() : options.itemsPerPage;
      var amount = Math.floor(Number(value || 1));
      return Math.max(1, Math.min(amount, slides.length || 1));
    }

    function pageCount() {
      return Math.max(1, Math.ceil(slides.length / itemsPerPage()));
    }

    function normalizePage(page) {
      var count = pageCount();
      if (loop) {
        return ((page % count) + count) % count;
      }
      return Math.max(0, Math.min(page, count - 1));
    }

    function indexToPage(index) {
      return normalizePage(Math.floor(normalize(index) / itemsPerPage()));
    }

    function pageToIndex(page) {
      return normalize(Math.min(normalizePage(page) * itemsPerPage(), slides.length - 1));
    }

    function visualPageStart(page) {
      var amount = itemsPerPage();
      var count = pageCount();
      if (normalizePage(page) === count - 1) {
        return Math.max(0, slides.length - amount);
      }
      return normalizePage(page) * amount;
    }

    function syncDots(active) {
      var count = pageCount();
      var activePage = indexToPage(active);
      dots.forEach(function (dot, index) {
        var isVisible = index < count;
        var start = visualPageStart(index) + 1;
        var end = Math.min(start + itemsPerPage() - 1, slides.length);
        dot.hidden = !isVisible;
        dot.setAttribute("aria-hidden", isVisible ? "false" : "true");
        dot.classList.toggle("is-active", isVisible && index === activePage);
        dot.setAttribute("aria-current", isVisible && index === activePage ? "true" : "false");
        if (isVisible && typeof options.dotLabel === "function") {
          dot.setAttribute("aria-label", options.dotLabel(index, start, end));
        }
      });
    }

    if (prev) {
      prev.classList.add("tf-carousel-prev");
    }
    if (next) {
      next.classList.add("tf-carousel-next");
    }
    dots.forEach(function (dot) {
      dot.classList.add("tf-carousel-dot");
    });

    function normalize(index) {
      if (!slides.length) {
        return 0;
      }
      if (loop) {
        return ((index % slides.length) + slides.length) % slides.length;
      }
      return Math.max(0, Math.min(index, slides.length - 1));
    }

    function maxScroll() {
      return Math.max(track.scrollWidth - track.clientWidth, 0);
    }

    function slideLeft(index) {
      var slide = slides[index];
      if (!slide) {
        return 0;
      }
      return Math.max(0, Math.min(slide.offsetLeft - track.offsetLeft, maxScroll()));
    }

    function activeIndex() {
      if (maxScroll() > 0 && track.scrollLeft >= maxScroll() - 2) {
        return slides.length - 1;
      }

      var best = 0;
      var distance = Infinity;
      slides.forEach(function (slide, index) {
        var diff = Math.abs(slideLeft(index) - track.scrollLeft);
        if (diff < distance) {
          best = index;
          distance = diff;
        }
      });
      return best;
    }

    function update(active) {
      active = active === undefined ? currentIndex : active;
      syncDots(active);
    }

    var scrollAnimationFrame = null;

    // Durante l'animazione programmata scroll-snap-type viene SOSPESO sul
    // track: con "x mandatory" attivo il browser (Safari/iPad in
    // particolare) ri-aggancia lo scroll allo snap point piu' vicino a ogni
    // passo dell'animazione, combattendo con i nostri incrementi di
    // scrollLeft — e' questo che produceva il movimento "a scatti"
    // segnalato dall'owner (2026-07-08). Lo snap viene ripristinato a fine
    // animazione (o quando l'utente interrompe col dito), quando ormai
    // siamo esattamente su uno snap point, quindi lo swipe manuale continua
    // ad agganciarsi come prima.
    function stopScrollAnimation() {
      if (scrollAnimationFrame) {
        window.cancelAnimationFrame(scrollAnimationFrame);
        scrollAnimationFrame = null;
      }
      track.style.scrollSnapType = "";
    }

    // Anima scrollLeft manualmente invece di affidarsi a
    // track.scrollTo({behavior:"smooth"}): quel metodo nativo, combinato con
    // scroll-snap-type sul track, puo' non completare il movimento quando si
    // salta piu' di uno slide alla volta (es. dal pallino 2 al 4) — bug reale
    // segnalato dall'owner su tablet (2026-07-06), riprodotto anche in
    // automazione: lo scrollLeft restava fermo nonostante la chiamata.
    // Muovere scrollLeft a piccoli passi via requestAnimationFrame aggira
    // del tutto lo scroll nativo "smooth" ed e' compatibile ovunque.
    function goTo(index, behavior) {
      currentIndex = normalize(index);
      programmaticUntil = Date.now() + 700;
      var target = slideLeft(currentIndex);
      stopScrollAnimation();
      if (behavior === "auto" || reducedMotion) {
        track.scrollLeft = target;
      } else {
        var start = track.scrollLeft;
        var change = target - start;
        var duration = 380;
        var startTime = null;
        if (change) {
          track.style.scrollSnapType = "none";
          var step = function (timestamp) {
            if (startTime === null) {
              startTime = timestamp;
            }
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            track.scrollLeft = start + change * eased;
            if (progress < 1) {
              scrollAnimationFrame = window.requestAnimationFrame(step);
            } else {
              scrollAnimationFrame = null;
              track.style.scrollSnapType = "";
            }
          };
          scrollAnimationFrame = window.requestAnimationFrame(step);
        }
      }
      update(currentIndex);
    }

    function move(direction) {
      goTo(pageToIndex(indexToPage(currentIndex) + direction), "smooth");
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        window.clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();
      if (!autoplayMs || reducedMotion || slides.length < 2 || document.hidden) {
        return;
      }
      autoplayTimer = window.setInterval(function () {
        move(1);
      }, autoplayMs);
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    if (prev) {
      prev.addEventListener("click", function () {
        move(-1);
        restartAutoplay();
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        move(1);
        restartAutoplay();
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        if (dot.hidden) {
          return;
        }
        goTo(pageToIndex(index), "smooth");
        restartAutoplay();
      });
    });

    track.addEventListener("pointerdown", function (event) {
      if (event.button !== undefined && event.button !== 0) {
        return;
      }
      stopScrollAnimation();
      pointerStartX = event.clientX;
      scrollStart = track.scrollLeft;
      dragged = false;
      stopAutoplay();
      track.classList.add("is-dragging");
      // NB: NON catturare il pointer qui. setPointerCapture al primo tocco
      // "ruba" il click ai link figli, e i pulsanti CTA delle card (es. i
      // banner "in evidenza") non navigavano (owner 2026-07-11). Il pointer
      // viene catturato solo quando parte un vero drag (pointermove oltre
      // soglia), cosi' un semplice tap su un link resta un click normale.
    });

    track.addEventListener("pointermove", function (event) {
      if (!track.classList.contains("is-dragging")) {
        return;
      }
      var delta = event.clientX - pointerStartX;
      if (Math.abs(delta) > 12) {
        if (!dragged && track.setPointerCapture && event.pointerId !== undefined) {
          try {
            track.setPointerCapture(event.pointerId);
          } catch (error) {
            /* pointer non catturabile */
          }
        }
        dragged = true;
      }
      track.scrollLeft = scrollStart - delta;
    });

    function endDrag(event) {
      if (!track.classList.contains("is-dragging")) {
        return;
      }
      track.classList.remove("is-dragging");
      if (track.releasePointerCapture && event && event.pointerId !== undefined) {
        try {
          track.releasePointerCapture(event.pointerId);
        } catch (error) {
          /* pointer already released */
        }
      }
      window.setTimeout(function () {
        dragged = false;
      }, 80);
      restartAutoplay();
    }

    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("mouseleave", endDrag);

    track.addEventListener("click", function (event) {
      if (!dragged) {
        return;
      }
      var link = event.target.closest("a");
      if (link) {
        event.preventDefault();
      }
    }, true);

    track.addEventListener("scroll", function () {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(function () {
        if (Date.now() > programmaticUntil) {
          currentIndex = activeIndex();
        }
        update(currentIndex);
      }, 80);
    }, { passive: true });

    if (root && root.addEventListener) {
      root.addEventListener("mouseenter", stopAutoplay);
      root.addEventListener("mouseleave", startAutoplay);
      root.addEventListener("focusin", stopAutoplay);
      root.addEventListener("focusout", startAutoplay);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    window.addEventListener("resize", function () {
      goTo(pageToIndex(indexToPage(currentIndex)), "auto");
    });
    update();
    startAutoplay();
  }

  function extractSliderItem(slide) {
    var textWidgets = Array.from(slide.querySelectorAll(".elementor-widget-text-editor .elementor-widget-container"))
      .map(textOf)
      .filter(Boolean);
    var link = slide.querySelector(".elementor-button[href], a[href]");
    var image = slide.querySelector("img");
    var title = textWidgets[0] || "";
    var description = textWidgets.slice(1).find(function (item) { return item.length > 20; }) || "";
    var cta = clean(link ? link.textContent : "") || "Approfondisci";

    if (/^clicca$/i.test(cta)) {
      cta = "Approfondisci";
    }

    return {
      title: title,
      description: description,
      cta: cta,
      href: link ? link.getAttribute("href") : "",
      image: imageSource(image)
    };
  }

  function initSliderPreview() {
    if (!isSliderPreviewEnabled()) {
      return;
    }

    var dashboard = document.querySelector("#newsec2");
    var wrappers = Array.from(document.querySelectorAll(".swiper-wrapper")).filter(function (wrapper) {
      var slides = Array.from(wrapper.children).filter(function (child) {
        return child.classList && child.classList.contains("swiper-slide");
      });
      var beforeDashboard = !dashboard || Boolean(wrapper.compareDocumentPosition(dashboard) & Node.DOCUMENT_POSITION_FOLLOWING);
      return slides.length > 1 && beforeDashboard;
    });
    var wrapper = wrappers[0];

    if (!wrapper || document.querySelector(".tf-slider-preview")) {
      return;
    }

    var original = wrapper.closest("section.elementor-top-section, section[data-element_type='section'], section");
    if (!original) {
      return;
    }

    var seen = {};
    var items = Array.from(wrapper.children)
      .filter(function (child) {
        return child.classList && child.classList.contains("swiper-slide");
      })
      .map(extractSliderItem)
      .filter(function (item) {
        var key = clean(item.title + item.href).toLowerCase();
        if (!item.title || seen[key]) {
          return false;
        }
        seen[key] = true;
        return true;
      });

    if (items.length < 2) {
      return;
    }

    document.documentElement.classList.add("tf-slider-preview-active");

    var section = document.createElement("section");
    section.className = "tf-slider-preview";
    section.setAttribute("aria-label", "Slider in evidenza");
    section.innerHTML = [
      '<div class="tf-slider-preview__inner">',
      '  <div class="tf-slider-preview__viewport">',
      '    <div class="tf-slider-preview__track"></div>',
      '  </div>',
      '  <div class="tf-slider-preview__footer">',
      '    <div class="tf-slider-preview__dots"></div>',
      '    <div class="tf-slider-preview__arrows"></div>',
      '  </div>',
      '</div>'
    ].join("");

    var track = section.querySelector(".tf-slider-preview__track");
    var dots = section.querySelector(".tf-slider-preview__dots");
    var arrows = section.querySelector(".tf-slider-preview__arrows");
    var prev = button("Slide precedente", "tf-slider-preview__arrow--prev");
    var next = button("Slide successiva", "tf-slider-preview__arrow--next");
    arrows.append(prev, next);

    items.forEach(function (item, index) {
      var slide = document.createElement("article");
      slide.className = "tf-slider-preview__slide";
      slide.innerHTML = [
        '<div class="tf-slider-preview__card">',
        '  <span class="tf-slider-preview__media">',
        item.image ? '    <img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.title) + '" loading="' + (index === 0 ? "eager" : "lazy") + '">' : "",
        '  </span>',
        '  <span class="tf-slider-preview__copy">',
        '    <h2>' + escapeHtml(item.title) + '</h2>',
        item.description ? '    <p>' + escapeHtml(item.description) + '</p>' : "",
        '  </span>',
        item.href ? '  <a class="tf-slider-preview__cta" href="' + escapeHtml(item.href) + '">' + escapeHtml(item.cta) + '</a>' : "",
        '</div>'
      ].join("");
      track.appendChild(slide);

      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "tf-slider-preview__dot";
      dot.setAttribute("aria-label", "Vai alla slide " + (index + 1));
      dots.appendChild(dot);
    });

    original.parentNode.insertBefore(section, original);
    original.classList.add("tf-slider-original-hidden");

    makeScrollableCarousel(track, Array.from(track.children), prev, next, Array.from(dots.children), {
      root: section,
      loop: true,
      autoplayMs: 5000
    });
  }

  function initSectorClamp() {
    var section = document.querySelector(".topfly-sector-refresh");
    if (!section) {
      return;
    }

    var grid = section.querySelector(".tf-feature-grid");
    var cards = grid ? Array.from(grid.querySelectorAll(".tf-feature-card")) : [];
    if (!grid || cards.length <= INITIAL_VISIBLE_CARDS) {
      return;
    }

    var control = section.querySelector(".tf-sector-more");
    if (!control) {
      control = document.createElement("div");
      control.className = "tf-sector-more";
      control.innerHTML = '<button type="button" aria-expanded="false">Mostra altri</button>';
      grid.parentNode.insertBefore(control, grid.nextSibling);
    }

    var toggle = control.querySelector("button");
    var expanded = false;

    function resetOwnVisibility() {
      cards.forEach(function (card) {
        card.classList.remove("tf-sector-extra-hidden");
      });
    }

    function isCardVisible(card) {
      var style = window.getComputedStyle(card);
      return !card.hidden && style.display !== "none" && style.visibility !== "hidden";
    }

    function apply() {
      resetOwnVisibility();

      if (!isMobile()) {
        control.style.display = "none";
        toggle.setAttribute("aria-expanded", "true");
        return;
      }

      var visibleCards = cards.filter(isCardVisible);
      var hiddenCount = Math.max(visibleCards.length - INITIAL_VISIBLE_CARDS, 0);

      if (hiddenCount <= 0) {
        control.style.display = "none";
        toggle.setAttribute("aria-expanded", "true");
        return;
      }

      control.style.display = "flex";
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      toggle.textContent = expanded ? "Mostra meno" : "Mostra altri " + hiddenCount;

      if (!expanded) {
        visibleCards.slice(INITIAL_VISIBLE_CARDS).forEach(function (card) {
          card.classList.add("tf-sector-extra-hidden");
        });
      }
    }

    toggle.addEventListener("click", function () {
      expanded = !expanded;
      apply();
      if (!expanded) {
        section.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });

    section.addEventListener("click", function (event) {
      if (!event.target.closest(".tf-sector-tab")) {
        return;
      }
      expanded = false;
      window.setTimeout(apply, 90);
    });

    window.addEventListener("resize", apply);
    window.setTimeout(apply, 120);
    apply();
  }

  function initSectorRefresh() {
    if (document.querySelector(".topfly-sector-refresh")) {
      return;
    }

    var heading = findRefreshHeading(/Tutte le caratteristiche del sistema di localizzazione satellitare per flotte/i);
    var original = document.getElementById("home_features") || sectionFromHeading(heading);

    if (!original || !original.parentNode) {
      return;
    }

    var section = document.createElement("section");
    var tabs = SECTOR_DATA.vehicles.map(function (vehicle, index) {
      return [
        '<button class="tf-sector-tab' + (index === 0 ? " is-active" : "") + '" type="button" data-sector="' + escapeHtml(vehicle.id) + '" role="tab" aria-selected="' + (index === 0 ? "true" : "false") + '">',
        '  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + vehicle.icon + '</svg>',
        '  <span>' + escapeHtml(vehicle.label) + '</span>',
        '</button>'
      ].join("");
    }).join("");
    var cards = SECTOR_DATA.services.map(function (service, index) {
      return [
        '<a class="tf-feature-card is-entering" style="animation-delay:' + Math.min(index * 18, 180) + 'ms" data-service="' + escapeHtml(service.id) + '" href="' + escapeHtml(service.h) + '"' + (service.ext ? ' target="_blank" rel="noopener"' : "") + '>',
        '  <strong>' + escapeHtml(service.t) + '</strong>',
        '  <span>' + escapeHtml(service.d) + '</span>',
        '  <em aria-hidden="true">Maggiori info</em>',
        '</a>'
      ].join("");
    }).join("");

    section.id = "home_features";
    section.className = "topfly-sector-refresh";
    section.setAttribute("aria-label", "Settori e funzionalità");
    section.innerHTML = [
      '<div class="tf-sector-inner">',
      '  <div class="tf-sector-head">',
      '    <span class="tf-sector-kicker">Sistema di localizzazione satellitare</span>',
      '    <h2 class="tf-sector-title">Settori e funzionalità</h2>',
      '  </div>',
      '  <div class="tf-sector-tabs" role="tablist" aria-label="Settori TOPFLY">' + tabs + '</div>',
      '  <div class="tf-sector-status">',
      '    <div class="tf-sector-count"><b>' + SECTOR_DATA.services.length + '</b><span>servizi disponibili</span></div>',
      '    <p class="tf-sector-tag">' + escapeHtml(SECTOR_DATA.vehicles[0].tag) + '</p>',
      '  </div>',
      '  <div class="tf-feature-grid">' + cards + '</div>',
      '</div>'
    ].join("");

    if (original.id === "home_features") {
      original.id = "home_features_original";
    }
    original.parentNode.insertBefore(section, original);
    original.classList.add("tf-sector-original-hidden");

    var count = section.querySelector(".tf-sector-count b");
    var tag = section.querySelector(".tf-sector-tag");
    var buttons = Array.from(section.querySelectorAll(".tf-sector-tab"));
    var featureCards = Array.from(section.querySelectorAll(".tf-feature-card"));

    function apply(vehicle) {
      var allowed = {};
      vehicle.ids.forEach(function (id) {
        allowed[id] = true;
      });

      buttons.forEach(function (button) {
        var active = button.getAttribute("data-sector") === vehicle.id;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", active ? "true" : "false");
      });

      var visible = 0;
      featureCards.forEach(function (card, index) {
        var show = Boolean(allowed[card.getAttribute("data-service")]);
        card.hidden = !show;
        card.classList.toggle("is-entering", show);
        card.style.animationDelay = Math.min(index * 18, 180) + "ms";
        if (show) {
          visible += 1;
        }
      });

      if (count) {
        count.textContent = String(visible);
      }
      if (tag) {
        tag.textContent = vehicle.tag;
      }
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var id = button.getAttribute("data-sector");
        var vehicle = SECTOR_DATA.vehicles.find(function (item) {
          return item.id === id;
        });
        if (vehicle) {
          apply(vehicle);
        }
      });
    });

    apply(SECTOR_DATA.vehicles[0]);
  }

  function findMissionVisionBlock(root, pattern) {
    var heading = Array.from(root.querySelectorAll(".wpsisac-slide-title,h2,h3,h4,.elementor-heading-title")).find(function (node) {
      return pattern.test(textOf(node)) && !node.closest(".slick-cloned");
    });

    if (!heading) {
      return null;
    }

    var original = heading.closest(".wpsisac-slide-wrap") || heading.closest(".wpsisac-slide") || heading.closest(".elementor-column") || heading.parentNode;
    var paragraphs = Array.from(original.querySelectorAll(".wpsisac-slider-short-content p, .elementor-widget-text-editor p")).filter(function (node) {
      return textOf(node);
    });

    if (!paragraphs.length) {
      return null;
    }

    return {
      heading: textOf(heading),
      image: original.querySelector("img"),
      original: original,
      paragraphs: paragraphs
    };
  }

  function initMissionVision() {
    var intro = Array.from(document.querySelectorAll("h2,h3,.elementor-heading-title")).find(function (node) {
      return /Ci concentriamo sul valore per il cliente/i.test(node.textContent || "");
    });

    if (!intro) {
      return;
    }

    var root = intro.closest(".customer_value_sec") || intro.closest("section.elementor-top-section") || intro.closest(".elementor-section");
    if (!root || root.classList.contains("tf-mv-js")) {
      return;
    }

    var mission = findMissionVisionBlock(root, /^Mission$/i);
    var vision = findMissionVisionBlock(root, /^Vision$/i);

    if (!mission || !vision) {
      return;
    }

    var split = document.createElement("div");
    split.className = "tf-mv-split";

    [
      ["Mission", mission],
      ["Vision", vision]
    ].forEach(function (entry) {
      var label = entry[0];
      var block = entry[1];
      var card = document.createElement("section");
      var heading = document.createElement("h3");

      card.className = "tf-mv-card";
      heading.className = "tf-mv-heading";
      heading.textContent = label;

      if (block.image) {
        var media = document.createElement("span");
        media.className = "tf-mv-media";
        media.appendChild(block.image);
        card.appendChild(media);
      }

      card.appendChild(heading);
      block.paragraphs.forEach(function (paragraph) {
        paragraph.classList.add("tf-mv-text");
        card.appendChild(paragraph);
      });
      split.appendChild(card);
    });

    var titleWidget = intro.closest(".elementor-widget-heading") || intro.closest(".elementor-widget") || intro.parentNode;
    var originalSlider = mission.original.closest(".wpsisac-slick-slider") || mission.original.closest(".wpsisac-slider-wrap") || mission.original;

    root.classList.add("tf-mv-js");
    if (titleWidget && titleWidget.parentNode) {
      titleWidget.parentNode.insertBefore(split, titleWidget.nextSibling);
    } else {
      root.appendChild(split);
    }

    if (originalSlider) {
      originalSlider.classList.add("tf-mv-originals-hidden");
    }
    if (vision.original !== mission.original && !vision.original.closest(".tf-mv-originals-hidden")) {
      vision.original.classList.add("tf-mv-originals-hidden");
    }

    // I pallini/frecce del carosello legacy (demirror-apply.mjs) sono figli
    // del wrapper .wpsisac-slick-slider-wrp, non del track appena nascosto:
    // nasconderli separatamente, altrimenti restano visibili orfani, senza
    // piu' nessuna slide da controllare (bug segnalato dall'owner).
    var sliderWrapper = root.querySelector(".wpsisac-slick-slider-wrp");
    if (sliderWrapper) {
      Array.prototype.forEach.call(sliderWrapper.querySelectorAll(".slick-dots, .slick-arrow"), function (control) {
        control.classList.add("tf-mv-originals-hidden");
      });
    }
  }

  function resolveCardParts(source, options) {
    options = options || {};

    var image = options.imageNode !== undefined ? options.imageNode : source.querySelector("img");
    var hasTitleNodeOption = Object.prototype.hasOwnProperty.call(options, "titleNode");
    var titleNode = hasTitleNodeOption ? options.titleNode : source.querySelector(".elementor-widget-heading .elementor-heading-title, h3, h4, h5");
    var titleText = clean(options.titleText || textOf(titleNode));
    var descNode = options.descNode || source.querySelector(".elementor-widget-text-editor p") || source.querySelector(".elementor-widget-text-editor .elementor-widget-container");
    var link = options.linkNode || source.querySelector(".elementor-widget-button a[href], a.elementor-button[href], a[href]");

    if (options.requireImage !== false && !image) {
      return null;
    }
    if (!titleNode && !titleText) {
      return null;
    }
    if (options.requireDescription !== false && !descNode) {
      return null;
    }
    if (options.requireLink !== false && !link) {
      return null;
    }

    return {
      image: image,
      titleNode: titleNode,
      titleText: titleText,
      descNode: descNode,
      link: link,
      linkClass: options.linkClass || "tf-card__btn"
    };
  }

  function buildCardFromParts(parts) {
    var card = document.createElement("article");
    var body = document.createElement("div");

    card.className = "tf-card";
    body.className = "tf-card__body";

    if (parts.image) {
      var media = document.createElement("span");
      media.className = "tf-card__media";
      media.appendChild(parts.image);
      card.appendChild(media);
    }

    if (parts.titleNode) {
      parts.titleNode.classList.add("tf-card__title");
      body.appendChild(parts.titleNode);
    } else {
      var title = document.createElement("h3");
      title.className = "tf-card__title";
      title.textContent = parts.titleText;
      body.appendChild(title);
    }

    if (parts.descNode) {
      parts.descNode.classList.add("tf-card__desc");
      body.appendChild(parts.descNode);
    }

    if (parts.link) {
      var footer = document.createElement("div");
      footer.className = "tf-card__footer";
      parts.link.classList.add(parts.linkClass);
      footer.appendChild(parts.link);
      body.appendChild(footer);
    }

    card.appendChild(body);
    return card;
  }

  function cloneClean(node) {
    if (!node) {
      return null;
    }
    var clone = node.cloneNode(true);
    if (clone.removeAttribute) {
      clone.removeAttribute("id");
    }
    Array.from(clone.querySelectorAll ? clone.querySelectorAll("[id]") : []).forEach(function (child) {
      child.removeAttribute("id");
    });
    return clone;
  }

  function cloneCardParts(parts) {
    return {
      image: cloneClean(parts.image),
      titleNode: cloneClean(parts.titleNode),
      titleText: parts.titleText,
      descNode: cloneClean(parts.descNode),
      link: cloneClean(parts.link),
      linkClass: parts.linkClass
    };
  }

  function buildCard(source, options) {
    var parts = resolveCardParts(source, options);
    return parts ? buildCardFromParts(parts) : null;
  }

  function initIndustria40() {
    var heading = Array.from(document.querySelectorAll("h2,h3,.elementor-heading-title")).find(function (node) {
      return /Industria 4\.0/i.test(node.textContent || "");
    });

    if (!heading) {
      return;
    }

    var section = heading.closest(".customer_feedback_sec") || heading.closest("section.elementor-top-section") || heading.closest(".elementor-section");
    if (!section || section.classList.contains("tf-ind40-js")) {
      return;
    }

    var titleWidget = heading.closest(".elementor-widget-heading") || heading.closest(".elementor-widget");
    var leadSource = heading.closest(".elementor-column");
    var leadLink = leadSource ? leadSource.querySelector(".elementor-widget-button a[href]") : null;
    var leadDesc = leadSource ? leadSource.querySelector(".elementor-widget-text-editor p") || leadSource.querySelector(".elementor-widget-text-editor .elementor-widget-container") : null;
    var subColumns = Array.from(section.querySelectorAll(".elementor-inner-column")).filter(function (column) {
      return column.querySelector("img") && column.querySelector("a[href*='/industria-4-0/top']");
    });

    if (!titleWidget || !leadSource || !leadLink || !leadDesc || subColumns.length !== 3) {
      return;
    }

    var leadButtonWidget = leadLink.closest(".elementor-widget-button");
    var leadDescWidget = leadDesc.closest(".elementor-widget-text-editor");
    var subWrapper = subColumns[0].closest("section.elementor-inner-section");
    var leadParts = resolveCardParts(leadSource, {
      titleText: textOf(leadLink),
      titleNode: null,
      descNode: leadDesc,
      linkNode: leadLink,
      requireImage: false,
      linkClass: "tf-card__btn"
    });
    var subParts = subColumns.map(function (column) {
      return resolveCardParts(column, {
        requireImage: true,
        requireDescription: true,
        requireLink: true,
        linkClass: "tf-card__btn"
      });
    });

    if (!leadParts || subParts.some(function (parts) { return !parts; })) {
      return;
    }

    var lead = document.createElement("div");
    var grid = document.createElement("div");

    lead.className = "tf-ind40-lead";
    grid.className = "tf-card-grid tf-ind40-grid";
    lead.appendChild(buildCardFromParts(cloneCardParts(leadParts)));
    subParts.forEach(function (parts) {
      grid.appendChild(buildCardFromParts(cloneCardParts(parts)));
    });

    section.classList.add("tf-ind40-js");
    titleWidget.parentNode.insertBefore(lead, titleWidget.nextSibling);
    titleWidget.parentNode.insertBefore(grid, lead.nextSibling);

    if (leadButtonWidget) {
      leadButtonWidget.classList.add("tf-ind40-originals-hidden");
    }
    if (leadDescWidget) {
      leadDescWidget.classList.add("tf-ind40-originals-hidden");
    }
    if (subWrapper) {
      subWrapper.classList.add("tf-ind40-originals-hidden");
    }
  }

  // makeCarouselArrow RIMOSSA (2026-07-08): l'owner ha chiesto di togliere
  // le frecce dei caroselli "DEFINITIVAMENTE DA QUALSIASI VIEW". Recensioni
  // e Ultime Notizie navigano solo con pallini + swipe/drag. Non ricrearla.

  function makeDots(count, labelPrefix) {
    var dots = document.createElement("div");
    dots.className = "tf-carousel-dots";
    for (var index = 0; index < count; index += 1) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", labelPrefix + " " + (index + 1));
      dots.appendChild(dot);
    }
    return dots;
  }

  function initReviewsCarousel() {
    var heading = Array.from(document.querySelectorAll("h2,h3,.elementor-heading-title")).find(function (node) {
      return /Recensioni\s+dei\s+clienti|Recensioni/i.test(node.textContent || "");
    });

    if (!heading) {
      return;
    }

    var section = heading.closest("section.elementor-top-section") || heading.closest(".elementor-section");
    if (!section || section.classList.contains("tf-reviews-js")) {
      return;
    }

    var titleWidget = heading.closest(".elementor-widget-heading") || heading.closest(".elementor-widget");
    var reviewColumns = Array.from(section.querySelectorAll(".elementor-inner-column")).map(function (column) {
      var stars = column.querySelectorAll(".elementor-icon-list-icon svg, .elementor-icon-list-icon i").length || 5;
      var texts = Array.from(column.querySelectorAll(".elementor-widget-heading .elementor-heading-title, .elementor-widget-text-editor .elementor-widget-container")).map(textOf).filter(Boolean);

      if (stars < 3 || texts.length < 3) {
        return null;
      }

      return {
        column: column,
        stars: Math.min(stars, 5),
        title: texts[0],
        name: texts[1],
        quote: texts.slice(2).join(" ")
      };
    }).filter(Boolean);

    if (!titleWidget || !reviewColumns.length) {
      return;
    }

    var wrapper = document.createElement("div");
    var track = document.createElement("div");
    var prev = null;
    var next = null;
    var dots = makeDots(reviewColumns.length, "Vai alla recensione");

    wrapper.className = "tf-reviews";
    track.className = "tf-reviews-track";

    reviewColumns.forEach(function (item) {
      var card = document.createElement("article");
      var stars = document.createElement("div");
      var quote = document.createElement("blockquote");
      var toggle = document.createElement("button");
      var name = document.createElement("p");
      var role = document.createElement("p");

      card.className = "tf-review-card";
      stars.className = "tf-review-stars";
      quote.className = "tf-review-quote";
      toggle.className = "tf-review-toggle";
      name.className = "tf-review-name";
      role.className = "tf-review-role";

      stars.setAttribute("aria-label", item.stars + " su 5");
      stars.textContent = Array(item.stars + 1).join("\u2605");
      quote.textContent = item.quote;
      toggle.type = "button";
      toggle.textContent = "Leggi tutto";
      toggle.hidden = true;
      name.textContent = item.name;
      role.textContent = item.title;

      card.append(stars, quote, toggle, name, role);
      track.appendChild(card);
    });

    wrapper.append(track, dots);
    section.classList.add("tf-reviews-js");
    titleWidget.parentNode.insertBefore(wrapper, titleWidget.nextSibling);

    reviewColumns.forEach(function (item) {
      var original = item.column.closest("section.elementor-inner-section");
      if (original) {
        original.classList.add("tf-reviews-originals-hidden");
      }
    });

    function updateToggles() {
      Array.from(track.querySelectorAll(".tf-review-card")).forEach(function (card) {
        var quote = card.querySelector(".tf-review-quote");
        var toggle = card.querySelector(".tf-review-toggle");
        if (!quote || !toggle || !quote.classList.contains("is-clamped")) {
          return;
        }
        toggle.hidden = quote.scrollHeight <= quote.clientHeight + 1;
      });
    }

    makeScrollableCarousel(track, Array.from(track.children), prev, next, Array.from(dots.children), {
      root: wrapper,
      loop: true,
      autoplayMs: 6000,
      itemsPerPage: function () {
        return window.matchMedia && window.matchMedia("(min-width: 768px)").matches ? 2 : 1;
      },
      dotLabel: function (index, start, end) {
        return start === end ? "Vai alla recensione " + start : "Vai alle recensioni " + start + "-" + end;
      }
    });
    window.setTimeout(updateToggles, 160);
    window.addEventListener("resize", updateToggles);
  }

  function backgroundImageUrl(node) {
    var value = node ? node.style.backgroundImage || node.getAttribute("style") || "" : "";
    var match = /url\((['"]?)(.*?)\1\)/.exec(value);
    return match ? match[2] : "";
  }

  function initNewsCarousel() {
    var heading = Array.from(document.querySelectorAll("h2,h3,.elementor-heading-title")).find(function (node) {
      return /Ultime Notizie/i.test(node.textContent || "");
    });

    if (!heading) {
      return;
    }

    var section = heading.closest("section.elementor-top-section") || heading.closest(".elementor-section");
    if (!section || section.classList.contains("tf-news-js")) {
      return;
    }

    var titleWidget = heading.closest(".elementor-widget-heading") || heading.closest(".elementor-widget");
    var original = section.querySelector(".lates_news_slider");
    var seen = {};
    var items = [];

    Array.from(section.querySelectorAll(".news_content")).forEach(function (node) {
      var link = node.querySelector("h1 a[href],h2 a[href],h3 a[href],h4 a[href],h5 a[href],h6 a[href],a[href]");
      var href = link ? link.getAttribute("href") : "";
      var image = backgroundImageUrl(node);

      if (!href || !image || seen[href] || items.length >= 4) {
        return;
      }

      seen[href] = true;
      items.push({
        link: link,
        href: href,
        image: image,
        category: textOf(node.querySelector("button")) || "Ultime notizie",
        date: textOf(node.querySelector("h6")),
        title: textOf(link)
      });
    });

    if (!titleWidget || !original || !items.length) {
      return;
    }

    var wrapper = document.createElement("div");
    var track = document.createElement("div");
    var prev = null;
    var next = null;
    var dots = makeDots(items.length, "Vai alla notizia");

    wrapper.className = "tf-news";
    track.className = "tf-news-track";

    items.forEach(function (item) {
      var card = document.createElement("article");
      var thumb = document.createElement("a");
      var image = document.createElement("img");
      var body = document.createElement("div");
      var meta = document.createElement("div");
      var category = document.createElement("span");
      var date = document.createElement("span");
      var title = document.createElement("h3");
      var more = document.createElement("a");

      card.className = "tf-news-card";
      thumb.className = "tf-news-card__thumb";
      body.className = "tf-news-card__body";
      meta.className = "tf-news-card__meta";
      category.className = "tf-news-card__cat";
      date.className = "tf-news-card__date";
      title.className = "tf-news-card__title";
      more.className = "tf-news-card__more";

      thumb.href = item.href;
      image.src = item.image;
      image.alt = item.title || "Ultime notizie TOPFLY";
      image.loading = "lazy";
      category.textContent = item.category;
      date.textContent = item.date;
      more.href = item.href;
      more.textContent = "Leggi di più";
      item.link.classList.add("tf-news-card__link");
      thumb.appendChild(image);
      title.appendChild(item.link);
      meta.append(category, date);
      body.append(meta, title, more);
      card.append(thumb, body);
      track.appendChild(card);
    });

    wrapper.append(track, dots);
    section.classList.add("tf-news-js");
    titleWidget.parentNode.insertBefore(wrapper, titleWidget.nextSibling);
    original.classList.add("tf-news-originals-hidden");

    // itemsPerPage DEVE rispecchiare quante card mostra la CSS per viewport
    // (.tf-news-card: 3 affiancate >=1100px, 2 tra 768-1099px, 1 sotto 768px),
    // altrimenti la paginazione a pallini si sfasa: senza questo parametro la
    // funzione assumeva 1 card/pagina e generava 4 pagine mentre lo scroll
    // reale ne ha solo 2 (4 card, 3 a vista = una sola card di scorrimento),
    // quindi i pallini dal 2 in poi puntavano tutti alla stessa posizione
    // (clamp a maxScroll) e "le notizie non cambiavano piu'". Come per il
    // carosello recensioni, i pallini rappresentano le PAGINE, non le card:
    // syncDots nasconde quelli in eccesso e l'ultima pagina si allinea in fondo.
    makeScrollableCarousel(track, Array.from(track.children), prev, next, Array.from(dots.children), {
      root: wrapper,
      loop: true,
      autoplayMs: 6000,
      itemsPerPage: function () {
        if (!window.matchMedia) {
          return 1;
        }
        if (window.matchMedia("(min-width: 1100px)").matches) {
          return 3;
        }
        return window.matchMedia("(min-width: 768px)").matches ? 2 : 1;
      },
      dotLabel: function (index, start, end) {
        return start === end ? "Vai alla notizia " + start : "Vai alle notizie " + start + "-" + end;
      }
    });
  }

  // Menu mobile/tablet: reimplementazione FEDELE del runtime Elementor Pro
  // originale (nav-menu.bundle + smartmenus), rimosso dal de-mirror. Un
  // precedente drawer custom (classi tf-mobnav-*) era stato scritto al suo
  // posto ed e' stato BOCCIATO dall'owner (2026-07-08: "non e' nemmeno il
  // nostro menu'"): NON reintrodurlo. Qui si replicano esattamente classi,
  // attributi e stili inline che il runtime vero applicava, cosi' e' il CSS
  // CATTURATO dal live (widget-nav-menu.min.css + cs_multistep.css) a fare
  // tutto il resto:
  //   - apertura/chiusura: classe `elementor-active` sul toggle; la regola
  //     `.elementor-nav-menu--toggle .elementor-menu-toggle.elementor-active
  //     + .elementor-nav-menu__container { max-height:var(--menu-height);
  //     transform:scaleY(1) }` (e la gemella :not() a 0/scaleY(0)) fa
  //     l'animazione a tendina sotto l'header — identica al live. La stessa
  //     classe scambia l'icona hamburger/X.
  //   - `--menu-height`: il runtime (DropdownMenuHeightController) la setta
  //     inline a "1000vmax" da aperto e 0 da chiuso (header non sticky).
  //   - stretch (full_width:stretch): il runtime (StretchElement) setta
  //     inline width = larghezza viewport e left negativo per portare il
  //     pannello a tutta pagina, piu' top = altezza del toggle.
  //   - sottomenu: smartmenus appende `<span class="sub-arrow">` con
  //     l'icona del widget (fas fa-chevron-down, da data-settings) dentro
  //     le voci padri, nasconde i sub-menu inline e al tap li apre/chiude
  //     (classe `highlighted` sul link = evidenziazione gradiente del tema
  //     via cs_multistep). Primo tap apre, secondo tap naviga se il link e'
  //     reale — comportamento smartmenus "collapsible".
  function initMobileNav() {
    var widget = document.querySelector(".elementor-element-3f8a29a.elementor-widget-nav-menu") || document.querySelector(".elementor-widget-nav-menu");
    if (!widget || widget.classList.contains("tf-navdd-js")) {
      return;
    }
    var toggle = widget.querySelector(".elementor-menu-toggle");
    var dropdown = widget.querySelector("nav.elementor-nav-menu--dropdown.elementor-nav-menu__container");
    if (!toggle || !dropdown) {
      return;
    }
    widget.classList.add("tf-navdd-js");

    var links = Array.from(dropdown.querySelectorAll("a"));

    Array.from(dropdown.querySelectorAll("li.menu-item-has-children > a")).forEach(function (anchor) {
      if (anchor.querySelector(".sub-arrow")) {
        return;
      }
      var arrow = document.createElement("span");
      arrow.className = "sub-arrow";
      arrow.innerHTML = '<i class="fas fa-chevron-down" aria-hidden="true"></i>';
      anchor.appendChild(arrow);
    });

    Array.from(dropdown.querySelectorAll("ul.sub-menu")).forEach(function (sub) {
      sub.style.display = "none";
    });

    function isOpen() {
      return toggle.classList.contains("elementor-active");
    }

    function stretch() {
      dropdown.style.width = "";
      dropdown.style.left = "";
      var viewportWidth = document.documentElement.clientWidth;
      var offsetLeft = dropdown.getBoundingClientRect().left + (window.scrollX || 0);
      dropdown.style.width = viewportWidth + "px";
      dropdown.style.left = -offsetLeft + "px";
      dropdown.style.top = toggle.offsetHeight + "px";
    }

    function setMenu(open) {
      toggle.classList.toggle("elementor-active", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      dropdown.setAttribute("aria-hidden", open ? "false" : "true");
      links.forEach(function (link) {
        link.tabIndex = open ? 0 : -1;
      });
      dropdown.style.setProperty("--menu-height", open ? "1000vmax" : "0");
      if (open) {
        stretch();
      }
    }

    toggle.addEventListener("click", function () {
      setMenu(!isOpen());
    });
    toggle.addEventListener("keyup", function (event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.currentTarget.click();
        event.stopPropagation();
      }
    });

    Array.from(dropdown.querySelectorAll("li.menu-item-has-children")).forEach(function (item) {
      var anchor = item.querySelector(":scope > a");
      var sub = item.querySelector(":scope > ul.sub-menu");
      if (!anchor || !sub) {
        return;
      }
      anchor.addEventListener("click", function (event) {
        var subOpen = sub.style.display !== "none";
        var href = anchor.getAttribute("href");
        var isRealLink = href && href !== "#";
        if (!subOpen) {
          event.preventDefault();
          sub.style.display = "block";
          anchor.classList.add("highlighted");
          anchor.setAttribute("aria-expanded", "true");
        } else if (!isRealLink) {
          event.preventDefault();
          sub.style.display = "none";
          anchor.classList.remove("highlighted");
          anchor.setAttribute("aria-expanded", "false");
        }
        // sottomenu gia' aperto + link reale: si naviga (default browser),
        // esattamente come smartmenus sul live.
      });
    });

    // Come il runtime originale ($dropdownMenuFinalItems): il tap su una
    // voce finale chiude il menu (la navigazione parte comunque).
    Array.from(dropdown.querySelectorAll("li:not(.menu-item-has-children) > a")).forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    window.addEventListener("resize", function () {
      if (isOpen()) {
        stretch();
      }
    });

    setMenu(false);
  }

  // Hero: NESSUNA gestione custom della card "IVECO / Mario Rossi", di
  // proposito (2026-07-08, owner: "non dobbiamo mettere una pezza, dev'
  // essere fedele all'originale"). La card e' disegnata NATIVAMENTE
  // dall'animazione Lottie (layer "popup" nel JSON) esattamente come sul
  // live: appare nella scena mappa agganciata al camion. Una precedente
  // card PNG statica sovrapposta (e una patch al JSON che spegneva il
  // layer nativo) sono state rimosse. Storia completa in
  // docs/hero-card-lottie.md — non reintrodurre overlay o sincronismi.

  // Menu del footer (widget HFE "navigation-menu", layout verticale,
  // hfe-link-redirect-child): replica fedele del runtime HFE originale
  // (f364036a, _eventClick + init) — stessa implementazione usata per il
  // chrome condiviso in ElementorChromeRuntime.astro, qui sul DOM diretto
  // della home. Senza la classe parent-has-child (che sul live aggiunge il
  // JS di HFE) le frecce dei sottomenu NON ESISTONO: il CSS originale e'
  // `.hfe-submenu-icon-arrow .hfe-nav-menu .parent-has-child .sub-arrow
  // i:before{content:'\f107'}` — per questo in home non si vedevano.
  function initFooterMenu() {
    var footer = document.querySelector(".elementor-location-footer");
    if (!footer || footer.classList.contains("tf-footermenu-js")) {
      return;
    }
    footer.classList.add("tf-footermenu-js");

    Array.from(footer.querySelectorAll(".elementor-widget-navigation-menu .hfe-nav-menu li.menu-item")).forEach(function (item) {
      var sub = item.querySelector(":scope > ul.sub-menu");
      item.classList.toggle("parent-has-child", !!sub);
      item.classList.toggle("parent-has-no-child", !sub);
    });

    Array.from(footer.querySelectorAll(".elementor-widget-navigation-menu div.hfe-has-submenu-container")).forEach(function (container) {
      var next = container.nextElementSibling;
      var sub = next && next.matches && next.matches("ul.sub-menu") ? next : null;
      if (!sub) {
        return;
      }
      var link = container.querySelector("a");
      if (link) {
        link.setAttribute("aria-haspopup", "true");
        link.setAttribute("aria-expanded", "false");
      }

      function setOpen(open) {
        container.classList.toggle("sub-menu-active", open);
        container.classList.toggle("menu-active", open);
        sub.classList.toggle("sub-menu-open", open);
        sub.style.position = "relative";
        sub.style.transition = open ? "0.3s ease" : "none";
        sub.style.visibility = open ? "visible" : "hidden";
        sub.style.opacity = open ? "1" : "0";
        sub.style.height = open ? "auto" : "0";
        if (link) {
          link.setAttribute("aria-expanded", open ? "true" : "false");
        }
      }

      function toggle(event) {
        event.preventDefault();
        setOpen(!container.classList.contains("sub-menu-active"));
      }

      container.addEventListener("click", toggle);
      container.addEventListener("keyup", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          toggle(event);
        }
      });
    });
  }

  function markRhythmSection(node) {
    if (!node) {
      return;
    }
    node.classList.add("tf-rhythm");
  }

  function findRefreshHeading(pattern) {
    return Array.from(document.querySelectorAll("h2,h3,.elementor-heading-title")).find(function (node) {
      return pattern.test(node.textContent || "");
    });
  }

  function sectionFromHeading(heading) {
    return heading ? heading.closest("section.elementor-top-section") || heading.closest(".elementor-section") || heading.closest(".elementor-widget-container") : null;
  }

  function initSectionRhythm() {
    document.body.classList.add("tf-rhythm-js");

    markRhythmSection(document.querySelector(".tf-slider-preview"));
    markRhythmSection(document.querySelector(".topfly-sector-refresh"));
    markRhythmSection(document.querySelector(".tf-mv-js"));
    markRhythmSection(document.querySelector(".tf-ind40-js"));
    markRhythmSection(document.querySelector(".tf-reviews-js"));
    markRhythmSection(document.querySelector(".tf-news-js"));

    [
      /Ci concentriamo sul valore per il cliente/i,
      /Industria 4\.0/i,
      /Recensioni/i,
      /Ultime Notizie/i
    ].forEach(function (pattern) {
      markRhythmSection(sectionFromHeading(findRefreshHeading(pattern)));
    });
  }

  function addClassAll(selector, className, root) {
    Array.from((root || document).querySelectorAll(selector)).forEach(function (node) {
      node.classList.add(className);
    });
  }

  function initTypeRamp() {
    document.body.classList.add("tf-type-js");

    [
      /Una piattaforma completa per/i,
      /Principali Vantaggi/i,
      /Esempi di Applicazioni/i,
      /Domande Frequenti/i
    ].forEach(function (pattern) {
      var heading = findRefreshHeading(pattern);
      if (heading) {
        heading.classList.add("tf-section-title");
      }
    });

    [
      /Ci concentriamo sul valore per il cliente/i,
      /Industria 4\.0/i,
      /Recensioni/i,
      /Ultime Notizie/i
    ].forEach(function (pattern) {
      var heading = findRefreshHeading(pattern);
      if (heading) {
        heading.classList.add("tf-h2");
      }
    });

    addClassAll(".tf-card__title, .tf-mv-heading, .tf-news-card__title", "tf-card-title");
    addClassAll(".tf-card__desc, .tf-mv-text, .tf-review-quote, .tf-news-card__excerpt", "tf-card-body");
    addClassAll(".custom_cases .cases_content h5, .cases_slider .cases_content h5", "tf-case-card-title");
  }

  function initTouchTargets() {
    document.body.classList.add("tf-touch-js");
    addClassAll(".tf-carousel-arrow", "tf-carousel-touch");
    addClassAll(".tf-carousel-dots button", "tf-carousel-dot");
    addClassAll(".tf-slider-preview__arrow", "tf-carousel-touch");
    addClassAll(".tf-slider-preview__dot", "tf-slider-preview__dot-touch");
  }

  function initPlatformMotion() {
    var section = document.querySelector("#newsec2");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!section || reduceMotion) {
      return;
    }

    function play() {
      section.classList.remove("tf-platform-motion-ready");
      section.classList.add("tf-platform-motion-in");
    }

    section.classList.add("tf-platform-motion-ready");

    if (!("IntersectionObserver" in window)) {
      play();
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        window.requestAnimationFrame(play);
        observer.disconnect();
      });
    }, { threshold: 0.22 });

    observer.observe(section);
  }

  ready(function () {
    initSectorRefresh();
    initSectorClamp();
    initSliderPreview();
    initMissionVision();
    initIndustria40();
    initReviewsCarousel();
    initNewsCarousel();
    initMobileNav();
    initFooterMenu();
    initSectionRhythm();
    initTypeRamp();
    initTouchTargets();
    initPlatformMotion();
  });
})();
