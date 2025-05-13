// Wave animation, switching between frames
document.addEventListener("DOMContentLoaded", function () {
    const frameCount = 30;
    const currentImage = document.getElementById("waveImageCurrent");
    const nextImage = document.getElementById("waveImageNext");

    let currentFrame = 1;
    currentImage.src = `static/images/frames/wave${currentFrame}.svg`;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;

        const scrollFraction = scrollTop / maxScroll;
        const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount)) + 1;

        if (frameIndex !== currentFrame) {
            nextImage.src = `static/images/frames/wave${frameIndex}.svg`;
            nextImage.classList.remove("fade");

            setTimeout(() => {
                currentImage.src = nextImage.src;
                nextImage.classList.add("fade");
                currentFrame = frameIndex;
            }, 100); // Delay controls crossfade timing
        }
    });
});

// Fetch and load the SVG content from the file and create links
fetch('static/images/homepage.html')
    .then(response => response.text())
    .then(svg => {
        document.getElementById('svg-container').innerHTML = svg;

        // Add event listeners to elements with specific IDs (e.g., clickable sections)
        document.querySelectorAll('[id]').forEach(el => {
            el.addEventListener('click', () => {
                const name = el.getAttribute('id');
                // Redirect based on the section name
                if (name === 'Generative_Object') {
                    window.location.href = '/mountain.html';
                }
                else if (name === 'Generative_Object-2') {
                    window.location.href = '/grassland.html';
                }
                else if (name === 'Generative_Object-3') {
                    window.location.href = '/arctic.html';
                }
                else if (name === 'Generative_Object-4') {
                    window.location.href = '/forest.html';
                }
                else if (name === 'Generative_Object-5') {
                    window.location.href = '/ocean.html';
                }
                else if (name === 'Generative_Object-6') {
                    window.location.href = '/desert.html';
                }
                else if (name === 'Generative_Object-7') {
                    window.location.href = '/sky.html';
                }
                // Add more cases as needed
            });
        });
    })
    .catch(error => console.error('Error loading SVG:', error));


// Main Page Pop-up
function showPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("hidden");
}

// Sky page scrolls sideways
function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener('wheel', transformScroll);