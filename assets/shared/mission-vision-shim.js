(function () {
  "use strict";

  // Estratto verbatim da public/assets/home/home-ux-refresh.js (initMissionVision
  // + dipendenze) — riusato su /la-nostra-azienda/ per garantire una resa
  // ESATTAMENTE identica alla home, senza caricare l'intero script home-ux-
  // refresh.js (che contiene molte altre funzioni pensate solo per i widget
  // della home e potrebbero interferire con markup non previsto altrove).
  // Qualunque modifica al trattamento Mission/Vision della home va replicata
  // anche qui per restare "esattamente e completamente uguale" (richiesta
  // owner, 2026-07-06).

  if (window.__tfMissionVisionShimLoaded) {
    return;
  }
  window.__tfMissionVisionShimLoaded = true;

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  }

  function clean(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function textOf(element) {
    return clean(element ? element.innerText || element.textContent : "");
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

    var sliderWrapper = root.querySelector(".wpsisac-slick-slider-wrp");
    if (sliderWrapper) {
      Array.prototype.forEach.call(sliderWrapper.querySelectorAll(".slick-dots, .slick-arrow"), function (control) {
        control.classList.add("tf-mv-originals-hidden");
      });
    }
  }

  ready(initMissionVision);
})();
