// ── LANGUAGE DATA ──────────────────────────────────────────────────────────
const LANG = {
  sc: {
    siteTitle: '代理后台',
    siteSubtitle: '操作手册 · PC端',
    home: '首页',
    nav: [
      '使用前须知',
      '基本功能',
      '如何新增代理/会员',
      '如何为下级上/下分',
      '如何查看收益',
      '统计报表介绍',
      '占成比介绍',
      '有效投注比介绍',
      '其他功能',
      '时间定义',
    ],
    prev: '上一节',
    next: '下一节',
  },
  en: {
    siteTitle: 'Agent Backend',
    siteSubtitle: 'Operation Manual · PC',
    home: 'Home',
    nav: [
      'Before You Start',
      'Basic Features',
      'Add Agent / Member',
      'Deposit / Withdrawal for Downlines',
      'View Earnings',
      'Statistical Reports',
      'Commission Ratio',
      'Valid Bet Ratio',
      'Other Features',
      'Time Definitions',
    ],
    prev: 'Previous',
    next: 'Next',
  },
  vn: {
    siteTitle: 'Hệ thống đại lý',
    siteSubtitle: 'Hướng dẫn sử dụng · PC',
    home: 'Trang chủ',
    nav: [
      'Trước khi sử dụng',
      'Chức năng cơ bản',
      'Thêm đại lý / thành viên',
      'Nạp / Rút điểm cho cấp dưới',
      'Xem thu nhập',
      'Báo cáo thống kê',
      'Tỷ lệ hoa hồng',
      'Tỷ lệ cược hợp lệ',
      'Chức năng khác',
      'Định nghĩa thời gian',
    ],
    prev: 'Trước',
    next: 'Tiếp theo',
  },
  ph: {
    siteTitle: 'Agent Backend',
    siteSubtitle: 'Gabay sa Paggamit · PC',
    home: 'Home',
    nav: [
      'Bago Gamitin',
      'Mga Pangunahing Feature',
      'Magdagdag ng Agent / Miyembro',
      'Mag-deposit / Withdraw sa Downline',
      'Tingnan ang Kita',
      'Ulat ng Istatistika',
      'Commission Ratio',
      'Valid Bet Ratio',
      'Iba pang Feature',
      'Kahulugan ng Oras',
    ],
    prev: 'Nakaraan',
    next: 'Susunod',
  },
};

// ── STATE ──────────────────────────────────────────────────────────────────
let currentLang = 'sc';

// ── DOM REFS ───────────────────────────────────────────────────────────────
const langDropdownBtn = document.getElementById('langDropdownBtn');
const langDropdown = document.querySelector('.lang-dropdown');
const langDropdownMenu = document.getElementById('langDropdownMenu');
const langDropdownItems = document.querySelectorAll('.lang-dropdown-item');
const langCurrent = document.getElementById('langCurrent');
const langContent = document.querySelectorAll('[data-lang]');
const logoText = document.querySelector('.logo-text');
const logoSub = document.querySelector('.logo-sub');
const mobileTrigger = document.getElementById('mobileToggle');
const sidebar = document.querySelector('.sidebar');

// ── SWITCH LANGUAGE ────────────────────────────────────────────────────────
function setLang(lang) {
  if (!LANG[lang]) return;
  currentLang = lang;
  localStorage.setItem('manual_lang', lang);

  // Update current language display
  if (langCurrent) {
    const langNames = {
      sc: '简体中文',
      en: 'English',
      vn: 'Tiếng Việt',
      ph: 'Filipino'
    };
    langCurrent.textContent = langNames[lang];
  }

  // Show/hide translatable blocks (excluding the items inside the switcher itself)
  langContent.forEach(el => {
    if (el.closest('.lang-dropdown-menu')) return; // Don't hide the options
    el.style.display = el.dataset.lang === lang ? '' : 'none';
  });

  // Update header titles if elements exist (Note: siteTitle/siteSubtitle removed from LANG but kept for robustness)
  const siteTitle = LANG[lang].siteTitle || (lang === 'sc' ? '代理后台' : lang === 'vn' ? 'Hệ thống đại lý' : 'Agent Backend');
  const siteSubtitle = LANG[lang].siteSubtitle || (lang === 'sc' ? '操作手册 · PC端' : lang === 'vn' ? 'Hướng dẫn sử dụng · PC' : 'Operation Manual · PC');

  if (logoText) logoText.textContent = siteTitle;
  if (logoSub) logoSub.textContent = siteSubtitle;

  // Update Sidebar
  const navItems = document.querySelectorAll('.sidebar .nav-item');
  if (navItems.length > 0) {
    // 🏠 Home item
    const homeLabel = navItems[0].querySelector('.nav-label');
    if (homeLabel) homeLabel.textContent = LANG[lang].home;

    // Section items
    for (let i = 1; i < navItems.length; i++) {
      const label = navItems[i].querySelector('.nav-label');
      if (label && LANG[lang].nav[i - 1]) {
        label.textContent = LANG[lang].nav[i - 1];
      }
    }
  }

  // Update Document Title based on active page
  const sectionTitle = document.querySelector('.section.active .section-title');
  if (sectionTitle) {
    document.title = `${sectionTitle.textContent} - ${siteTitle}`;
  } else {
    document.title = siteTitle;
  }

  // Update all prev/next buttons
  document.querySelectorAll('.btn-prev').forEach(b => {
    const span = b.querySelector('span');
    if (span) span.textContent = LANG[lang].prev;
  });
  document.querySelectorAll('.btn-next').forEach(b => {
    const span = b.querySelector('span');
    if (span) span.textContent = LANG[lang].next;
  });

  // Active lang item style
  langDropdownItems.forEach(item => item.classList.toggle('active', item.dataset.lang === lang));

  // Close dropdown
  if (langDropdown) langDropdown.classList.remove('open');
}

// ── TOGGLE DROPDOWN ─────────────────────────────────────────────────────────
function toggleDropdown(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (langDropdown) {
    langDropdown.classList.toggle('open');
  }
}

// ── CLOSE DROPDOWN ───────────────────────────────────────────────────────────
function closeDropdown() {
  if (langDropdown) {
    langDropdown.classList.remove('open');
  }
}


// ── EVENTS ─────────────────────────────────────────────────────────────────
// Re-bind events after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Re-get elements to ensure they're fresh
  const dropdownBtn = document.getElementById('langDropdownBtn');
  const dropdownItems = document.querySelectorAll('.lang-dropdown-item');

  console.log('Re-binding events...');
  console.log('dropdownBtn:', dropdownBtn);
  console.log('dropdownItems:', dropdownItems.length);

  if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
      console.log('Dropdown button clicked!');
      e.preventDefault();
      e.stopPropagation();
      toggleDropdown(e);
    });
  }

  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      console.log('Language item clicked:', item.dataset.lang);
      e.preventDefault();
      e.stopPropagation();
      setLang(item.dataset.lang);
    });
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (langDropdown && !langDropdown.contains(e.target)) {
    closeDropdown();
  }
});

if (mobileTrigger) {
  mobileTrigger.addEventListener('click', () => sidebar.classList.toggle('open'));
}

// ── LIGHTBOX ─────────────────────────────────────────────────────────────
function initLightbox() {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  const lightboxImg = document.createElement('img');
  lightboxImg.className = 'lightbox-img';
  lightbox.appendChild(lightboxImg);
  document.body.appendChild(lightbox);

  document.querySelectorAll('.content-img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevent scroll
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// ── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('manual_lang') || 'sc';
  setLang(savedLang);
  initLightbox(); // New call here
});

