/* ============================================
   PM Learning Guide — Interactive Functionality
   app.js
   ============================================ */

(function () {
  'use strict';

  // ---- DOM References ----
  const body = document.body;
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const progressBar = document.getElementById('progress-bar');
  const sidebarProgressFill = document.getElementById('sidebar-progress-fill');
  const progressPct = document.getElementById('progress-pct');
  const currentChapterLabel = document.getElementById('current-chapter-label');
  const scrollTopBtn = document.getElementById('scroll-top');
  const themeToggle = document.getElementById('theme-toggle');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const glossarySearch = document.getElementById('glossary-search');
  const glossaryGrid = document.getElementById('glossary-grid');

  // ---- State ----
  let completedChapters = JSON.parse(localStorage.getItem('pm-completed') || '{}');
  let checkedSkills = JSON.parse(localStorage.getItem('pm-skills') || '{}');
  let currentTheme = localStorage.getItem('pm-theme') || 'dark';

  // ---- Initialize ----
  function init() {
    applyTheme(currentTheme);
    initAccordions();
    initTabs();
    initQuizzes();
    initSkillChecklist();
    initBugReportBuilder();
    initSearch();
    initGlossaryFilter();
    initScrollTracking();
    initMobileMenu();
    initScrollToTop();
    initThemeToggle();
    initIntersectionObserver();
    restoreCompletedChapters();
    initSmoothNavigation();
  }

  // ---- Theme ----
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('pm-theme', theme);
  }

  function initThemeToggle() {
    themeToggle.addEventListener('click', () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // ---- Scroll Progress ----
  function initScrollTracking() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          updateCurrentChapter();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    updateProgress();
  }

  function updateProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0;

    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
    sidebarProgressFill.style.width = progress + '%';
    progressPct.textContent = Math.round(progress) + '%';
  }

  function updateCurrentChapter() {
    const chapters = document.querySelectorAll('.chapter');
    const headerHeight = 80;
    let activeId = '';

    chapters.forEach(ch => {
      const rect = ch.getBoundingClientRect();
      if (rect.top <= headerHeight + 100) {
        activeId = ch.id;
      }
    });

    if (activeId) {
      const chapter = document.getElementById(activeId);
      const title = chapter?.getAttribute('data-title') || '';

      if (activeId !== 'hero') {
        currentChapterLabel.textContent = title;
        currentChapterLabel.classList.add('visible');
      } else {
        currentChapterLabel.classList.remove('visible');
      }

      // Update sidebar active state
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-chapter') === activeId);
      });

      // Mark chapter as read when scrolled past 80%
      const rect = chapter.getBoundingClientRect();
      const chapterHeight = chapter.offsetHeight;
      const visiblePortion = Math.max(0, Math.min(chapterHeight, -rect.top + window.innerHeight));
      const readPercent = visiblePortion / chapterHeight;

      if (readPercent > 0.8 && activeId !== 'hero' && activeId !== 'glossary') {
        markChapterComplete(activeId);
      }
    }
  }

  function markChapterComplete(chId) {
    if (completedChapters[chId]) return;
    completedChapters[chId] = true;
    localStorage.setItem('pm-completed', JSON.stringify(completedChapters));

    const check = document.querySelector(`.nav-check[data-ch="${chId}"]`);
    if (check) {
      check.classList.add('completed');
      check.textContent = '✓';
    }
  }

  function restoreCompletedChapters() {
    Object.keys(completedChapters).forEach(chId => {
      if (completedChapters[chId]) {
        const check = document.querySelector(`.nav-check[data-ch="${chId}"]`);
        if (check) {
          check.classList.add('completed');
          check.textContent = '✓';
        }
      }
    });
  }

  // ---- Smooth Navigation ----
  function initSmoothNavigation() {
    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          // Close mobile sidebar
          if (window.innerWidth <= 768) {
            closeMobileMenu();
          }
        }
      });
    });
  }

  // ---- Mobile Menu ----
  function initMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        sidebarOverlay.style.display = 'block';
        mobileMenuBtn.textContent = '✕';
      }
    });

    sidebarOverlay.addEventListener('click', closeMobileMenu);
  }

  function closeMobileMenu() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    setTimeout(() => { sidebarOverlay.style.display = 'none'; }, 250);
    mobileMenuBtn.textContent = '☰';
  }

  // ---- Scroll to Top ----
  function initScrollToTop() {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Accordions ----
  function initAccordions() {
    document.querySelectorAll('[data-accordion]').forEach(acc => {
      const header = acc.querySelector('.accordion-header');
      const body = acc.querySelector('.accordion-body');

      header.addEventListener('click', () => {
        const isOpen = acc.classList.contains('open');

        if (isOpen) {
          acc.classList.remove('open');
          body.style.maxHeight = '0';
        } else {
          acc.classList.add('open');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });

      // Keyboard accessibility
      header.setAttribute('tabindex', '0');
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', 'false');

      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });
    });
  }

  // ---- Tabs ----
  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(tabContainer => {
      const btns = tabContainer.querySelectorAll('.tab-btn');
      const panels = tabContainer.querySelectorAll('.tab-panel');

      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          const tabId = btn.getAttribute('data-tab');

          btns.forEach(b => b.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));

          btn.classList.add('active');
          const targetPanel = tabContainer.querySelector(`[data-tab-panel="${tabId}"]`);
          if (targetPanel) targetPanel.classList.add('active');
        });
      });
    });
  }

  // ---- Quizzes ----
  function initQuizzes() {
    document.querySelectorAll('.quiz').forEach(quiz => {
      quiz.querySelectorAll('.quiz-question').forEach(question => {
        const correctAnswer = question.getAttribute('data-correct');
        const options = question.querySelectorAll('.quiz-option');
        const feedback = question.querySelector('.quiz-feedback');
        let answered = false;

        options.forEach(option => {
          option.addEventListener('click', () => {
            if (answered) return;
            answered = true;

            const value = option.getAttribute('data-value');
            const isCorrect = value === correctAnswer;

            // Remove hover state from all options
            options.forEach(o => {
              o.style.cursor = 'default';
              if (o.getAttribute('data-value') === correctAnswer) {
                o.classList.add('correct');
              } else if (o === option && !isCorrect) {
                o.classList.add('incorrect');
              }
            });

            option.classList.add('selected');

            // Show feedback
            feedback.classList.add('show');
            if (isCorrect) {
              feedback.classList.add('correct');
              feedback.textContent = '✅ Correct! Well done.';
            } else {
              feedback.classList.add('incorrect');
              const correctText = options[parseInt(correctAnswer)].textContent.trim();
              feedback.textContent = `❌ Incorrect. The correct answer is: "${correctText}"`;
            }
          });

          // Keyboard
          option.setAttribute('tabindex', '0');
          option.setAttribute('role', 'radio');
          option.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              option.click();
            }
          });
        });
      });
    });
  }

  // ---- Skill Checklist ----
  function initSkillChecklist() {
    document.querySelectorAll('.skill-item').forEach(item => {
      const skillId = item.getAttribute('data-skill');

      // Restore state
      if (checkedSkills[skillId]) {
        item.classList.add('checked');
      }

      item.addEventListener('click', () => {
        item.classList.toggle('checked');
        checkedSkills[skillId] = item.classList.contains('checked');
        localStorage.setItem('pm-skills', JSON.stringify(checkedSkills));
      });

      // Keyboard
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'checkbox');
      item.setAttribute('aria-checked', !!checkedSkills[skillId]);

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });
  }

  // ---- Bug Report Builder ----
  function initBugReportBuilder() {
    const generateBtn = document.getElementById('bug-generate');
    if (!generateBtn) return;

    generateBtn.addEventListener('click', () => {
      const title = document.getElementById('bug-title').value || '[Bug Title]';
      const severity = document.getElementById('bug-severity').value;
      const priority = document.getElementById('bug-priority').value;
      const steps = document.getElementById('bug-steps').value || '[Steps to Reproduce]';
      const expected = document.getElementById('bug-expected').value || '[Expected Result]';
      const actual = document.getElementById('bug-actual').value || '[Actual Result]';

      const report = `Bug Report
═══════════════════════════════════════
Title:       ${title}
ID:          BUG-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}
Severity:    ${severity}
Priority:    ${priority}
Reporter:    [Your Name]
Date:        ${new Date().toLocaleDateString()}
Environment: [Browser / OS / Device]

Steps to Reproduce:
${steps.split('\n').map(s => '  ' + s).join('\n')}

Expected Result:
  ${expected}

Actual Result:
  ${actual}

Status: New → Awaiting Assignment
═══════════════════════════════════════`;

      const preview = document.getElementById('bug-preview');
      preview.textContent = report;
      preview.style.display = 'block';
      preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // ---- Search ----
  function initSearch() {
    // Build search index
    const searchIndex = buildSearchIndex();

    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length < 2) {
          searchResults.classList.remove('active');
          return;
        }
        const results = performSearch(searchIndex, query);
        displaySearchResults(results, query);
      }, 200);
    });

    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length >= 2) {
        searchResults.classList.add('active');
      }
    });

    // Close search on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
      }
    });

    // Keyboard shortcut: Ctrl+K / Cmd+K
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.blur();
      }
    });
  }

  function buildSearchIndex() {
    const index = [];
    document.querySelectorAll('.chapter').forEach(chapter => {
      const chapterId = chapter.id;
      const chapterTitle = chapter.getAttribute('data-title') || '';

      // Index headings
      chapter.querySelectorAll('h2, h3, h4').forEach(heading => {
        index.push({
          id: chapterId,
          chapter: chapterTitle,
          title: heading.textContent,
          text: heading.textContent,
          element: heading
        });
      });

      // Index paragraphs (first 120 chars)
      chapter.querySelectorAll('p').forEach(p => {
        const text = p.textContent.trim();
        if (text.length > 20) {
          index.push({
            id: chapterId,
            chapter: chapterTitle,
            title: text.slice(0, 80) + (text.length > 80 ? '…' : ''),
            text: text,
            element: p
          });
        }
      });

      // Index glossary terms
      chapter.querySelectorAll('.glossary-term').forEach(term => {
        const def = term.parentElement.querySelector('.glossary-def');
        index.push({
          id: chapterId,
          chapter: 'Glossary',
          title: term.textContent,
          text: (def ? def.textContent : ''),
          element: term
        });
      });

      // Index table cells
      chapter.querySelectorAll('td').forEach(td => {
        const text = td.textContent.trim();
        if (text.length > 10) {
          index.push({
            id: chapterId,
            chapter: chapterTitle,
            title: text.slice(0, 60) + (text.length > 60 ? '…' : ''),
            text: text,
            element: td
          });
        }
      });
    });
    return index;
  }

  function performSearch(index, query) {
    const results = [];
    const seen = new Set();

    for (const item of index) {
      if (results.length >= 12) break;
      const lowerText = item.text.toLowerCase();
      const lowerTitle = item.title.toLowerCase();

      if (lowerText.includes(query) || lowerTitle.includes(query)) {
        const key = item.id + ':' + item.title.slice(0, 40);
        if (!seen.has(key)) {
          seen.add(key);
          results.push(item);
        }
      }
    }
    return results;
  }

  function displaySearchResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found for "' + escapeHtml(query) + '"</div>';
      searchResults.classList.add('active');
      return;
    }

    searchResults.innerHTML = results.map(r => {
      const snippet = highlightQuery(r.text.slice(0, 120), query);
      return `<div class="search-result-item" data-target="${r.id}">
        <div class="result-chapter">${escapeHtml(r.chapter)}</div>
        <div class="result-title">${highlightQuery(r.title.slice(0, 60), query)}</div>
        <div class="result-snippet">${snippet}</div>
      </div>`;
    }).join('');

    searchResults.classList.add('active');

    // Click to navigate
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          searchResults.classList.remove('active');
          searchInput.value = '';
        }
      });
    });
  }

  function highlightQuery(text, query) {
    const escaped = escapeHtml(text);
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return escaped.replace(regex, '<strong style="color: var(--accent-start);">$1</strong>');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // ---- Glossary Filter ----
  function initGlossaryFilter() {
    if (!glossarySearch || !glossaryGrid) return;

    glossarySearch.addEventListener('input', () => {
      const query = glossarySearch.value.trim().toLowerCase();
      const items = glossaryGrid.querySelectorAll('.glossary-item');

      items.forEach(item => {
        const term = item.querySelector('.glossary-term').textContent.toLowerCase();
        const def = item.querySelector('.glossary-def').textContent.toLowerCase();
        const match = term.includes(query) || def.includes(query);
        item.style.display = match ? '' : 'none';
      });
    });
  }

  // ---- Intersection Observer for animations ----
  function initIntersectionObserver() {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Don't unobserve — let them stay visible
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe cards, tables, flow diagrams
    document.querySelectorAll('.card, .table-wrapper, .flow-diagram, .funnel, .code-block, .kanban-board, .quiz, .bug-form, .roadmap, .metric-card, .action-day').forEach(el => {
      el.classList.add('animate-in');
      observer.observe(el);
    });

    // Re-animate flow nodes when visible
    const flowObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const nodes = entry.target.querySelectorAll('.flow-node, .flow-arrow');
          nodes.forEach((node, i) => {
            node.style.animationDelay = (i * 0.1) + 's';
            node.style.animationPlayState = 'running';
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.flow-diagram').forEach(diagram => {
      flowObserver.observe(diagram);
    });
  }

  // ---- Keyboard Navigation ----
  document.addEventListener('keydown', (e) => {
    // Alt+1-9 to jump to chapters
    if (e.altKey && e.key >= '1' && e.key <= '9') {
      e.preventDefault();
      const chNum = parseInt(e.key);
      const target = document.getElementById('ch' + chNum);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // ---- Start ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
