document.addEventListener('DOMContentLoaded', async function () {
  const fallbackOrder = [
    'flashbeetle.html',
    'greenhouse-digital-twin.html',
    'yes-delft-impact-contest.html',
    'ember.html',
    'amiga-tractor.html',
    'ARM.html',
    'anti-spot-bot.html',
    'miscellaneous.html'
  ];

  try {
    let hrefs = [];

    if (location.protocol === 'file:') {
      // Browsers block fetch() for file:// due to CORS — use embedded fallback order.
      hrefs = fallbackOrder.slice();
    } else {
      const resp = await fetch('work.html');
      if (resp && resp.ok) {
        const text = await resp.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const cards = Array.from(doc.querySelectorAll('.project-card'));
        hrefs = cards.map(a => a.getAttribute('href')).filter(Boolean);
      }
    }

    if (!hrefs.length) hrefs = fallbackOrder.slice();

    const current = window.location.pathname.split('/').pop();
    let idx = hrefs.findIndex(h => h === current || h === './' + current || h === '/' + current);
    if (idx === -1) {
      const base = current.replace(/\.html$/i, '');
      idx = hrefs.findIndex(h => h.includes(base));
    }
    const nextHref = hrefs[(idx + 1) % hrefs.length] || hrefs[0];
    const prevHref = hrefs[(idx - 1 + hrefs.length) % hrefs.length] || hrefs[0];

    const container = document.createElement('div');
    container.className = 'project-nav-container';

    const nextBtn = document.createElement('a');
    nextBtn.className = 'next-project-button';
    nextBtn.href = nextHref;
    nextBtn.setAttribute('aria-label', 'Next project');
    nextBtn.innerHTML = 'Next&nbsp;<span aria-hidden="true">›</span>';

    const prevBtn = document.createElement('a');
    prevBtn.className = 'prev-project-button';
    prevBtn.href = prevHref;
    prevBtn.setAttribute('aria-label', 'Previous project');
    prevBtn.innerHTML = '<span aria-hidden="true">‹</span>&nbsp;Prev';

    container.appendChild(nextBtn);
    container.appendChild(prevBtn);
    document.body.appendChild(container);
  } catch (e) {
    console.error('next-project error', e);
  }
});
