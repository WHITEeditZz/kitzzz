const oM = [
    {
      id: 0,
      name: "Graphic Designs",
      description: "High-impact digital artwork, typography, and visual layouts tailored for major content creators and commercial brands.",
      marqueeImages: [
        "images/projects/design1.png",
        "images/projects/design2.png",
        "images/projects/design3.png",
        "images/projects/design4.png"
      ],
      image: "images/projects/design1.png",
      tags: ["Photoshop", "Illustrator", "Typography"],
      liveview: "https://www.behance.net/gallery/183079081/STINT-RELIC-LOGO",
      alt: "Graphic Designs Portfolio",
      pageAnchor: "graphic",
    },
    {
      id: 1,
      name: "Motion Graphics",
      description: "Commercial Starbucks motion graphics featuring dynamic product visualization, floating coffee beans, and precise typography.",
      video: "images/projects/motiongraphics.mp4",
      tags: ["After Effects", "3D Motion", "Commercial"],
      liveview: "#",
      alt: "Motion Graphics",
      pageAnchor: "motion",
    },
    {
      id: 2,
      name: "ShortForm Videos",
      description: "Engaging and fast-paced short-form content tailored for TikTok, Instagram Reels, and YouTube Shorts.",
      video: "images/projects/shortform.mp4",
      tags: ["Premiere Pro", "After Effects", "CapCut"],
      liveview: "#",
      alt: "ShortForm Videos",
      pageAnchor: "shortform",
    },
    {
      id: 3,
      name: "LongForm Videos",
      description: "High-retention, engaging long-form video editing for YouTube, featuring professional pacing, dynamic storytelling, and advanced color grading.",
      video: "images/projects/longform.mp4",
      tags: ["Premiere Pro", "After Effects", "Davinci Resolve"],
      liveview: "#",
      alt: "LongForm Videos",
      pageAnchor: "longform",
    },
    {
      id: 4,
      name: "3D Models",
      description: "Advanced 3D organic models, glass refractions, and studio product renderings created with Blender and Octane.",
      image: "images/projects/model3d.png",
      tags: ["Blender", "Octane Render", "3D Art"],
      liveview: "https://www.behance.net/kartiksingh15",
      alt: "3D Models Portfolio",
      pageAnchor: "models3d",
    }
  ];
  
  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        (this.tags = typeof aM !== 'undefined' ? aM : {}),
        this.renderItems();
    }
  
    renderItems() {
      this.items.forEach((e) => {
        
        let mediaHtml = "";
        if (e.video) {
            mediaHtml = `<video class="work-item-image" src="${e.video}" autoplay loop muted playsinline style="height: 300px; width: 334px; object-fit: cover;"></video>`;
        } else {
            mediaHtml = `<img class="work-item-image" src="${e.image}" alt="${e.alt}" height="300" width="334" style="object-fit: cover;"/>`;
        }

        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  ${mediaHtml}
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span style="display:block; margin-top:10px;">${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }
  
    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }
  
    renderButtons(e) {
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset; padding: 10px; border-radius: 4px; color: white; font-weight: bold;">
              Available on request
          </div>`;
      }
      return t;
    }
  
    renderTags(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) {
        if (this.tags && this.tags[e[n]]) {
            t += this.tags[e[n]];
        } else {
            // Provide a default styled tag
            t += `<div class="row center" style="background: rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 4px 10px; margin-right: 8px; font-size: 12px; color: white; border: 1px solid rgba(255,255,255,0.2);"><span style="margin-right: 5px;">#</span><span>${e[n]}</span></div>`;
        }
      }
      return t;
    }
  
    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });
  
      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
  