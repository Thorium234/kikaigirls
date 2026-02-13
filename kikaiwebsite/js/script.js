const STORAGE_KEYS = {
  students: 'kikai_students',
  session: 'currentStudent'
};

function toggleChat() {
  const chat = document.getElementById('chatbot');
  if (chat) {
    chat.classList.toggle('hidden');
  }
}

function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a[href]');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) {
      return;
    }

    if (href === path) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function setFormMessage(message, type) {
  const el = document.getElementById('formMessage');
  if (!el) {
    if (message) {
      alert(message);
    }
    return;
  }

  el.textContent = message || '';
  el.className = 'form-message';
  if (type) {
    el.classList.add(type);
  }
}

function readStudents() {
  const raw = localStorage.getItem(STORAGE_KEYS.students);
  if (!raw) {
    return {};
  }

  try {
    const students = JSON.parse(raw);
    return students && typeof students === 'object' ? students : {};
  } catch (error) {
    console.error('Invalid student collection in storage:', error);
    return {};
  }
}

function writeStudents(students) {
  localStorage.setItem(STORAGE_KEYS.students, JSON.stringify(students));
}

function getStoredStudent(adm) {
  if (!adm) {
    return null;
  }

  const students = readStudents();
  if (students[adm]) {
    return students[adm];
  }

  const legacyRaw = localStorage.getItem('student_' + adm);
  if (!legacyRaw) {
    return null;
  }

  try {
    const legacyStudent = JSON.parse(legacyRaw);
    if (!legacyStudent || typeof legacyStudent !== 'object') {
      return null;
    }

    students[adm] = {
      name: legacyStudent.name || '',
      adm: legacyStudent.adm || adm,
      stream: legacyStudent.stream || ''
    };
    writeStudents(students);
    return students[adm];
  } catch (error) {
    console.error('Invalid legacy student data in storage:', error);
    return null;
  }
}

function register() {
  const nameInput = document.getElementById('regName');
  const admInput = document.getElementById('regAdm');
  const streamInput = document.getElementById('regStream');

  const name = nameInput ? nameInput.value.trim() : '';
  const adm = admInput ? admInput.value.trim().toUpperCase() : '';
  const stream = streamInput ? streamInput.value.trim() : '';

  if (!name || !adm || !stream) {
    setFormMessage('Please complete all registration fields.', 'error');
    return;
  }

  if (name.length < 3) {
    setFormMessage('Full name must be at least 3 characters.', 'error');
    return;
  }

  if (!/^[A-Z0-9-]{4,15}$/.test(adm)) {
    setFormMessage('Admission number should be 4-15 characters (letters, numbers, or hyphen).', 'error');
    return;
  }

  if (stream.length < 2) {
    setFormMessage('Please enter a valid stream name.', 'error');
    return;
  }

  const students = readStudents();
  students[adm] = { name: name, adm: adm, stream: stream };
  writeStudents(students);

  setFormMessage('Registration successful. Redirecting to login...', 'success');
  setTimeout(function () {
    window.location.href = 'std-login.html';
  }, 700);
}

function login() {
  const admInput = document.getElementById('loginAdm');
  const adm = admInput ? admInput.value.trim().toUpperCase() : '';

  if (!adm) {
    setFormMessage('Enter your admission number to continue.', 'error');
    return;
  }

  const student = getStoredStudent(adm);
  if (!student) {
    setFormMessage('Admission number not found. Please register first.', 'error');
    return;
  }

  sessionStorage.setItem(STORAGE_KEYS.session, JSON.stringify(student));
  setFormMessage('Login successful. Redirecting to dashboard...', 'success');

  setTimeout(function () {
    window.location.href = 'dashboard.html';
  }, 500);
}

function logout() {
  sessionStorage.removeItem(STORAGE_KEYS.session);
  window.location.href = 'std-login.html';
}

function renderDashboard() {
  const nameEl = document.getElementById('studentName');
  const admEl = document.getElementById('studentAdm');
  const streamEl = document.getElementById('studentStream');
  const greetingEl = document.getElementById('dashboardGreeting');

  if (!nameEl || !admEl || !streamEl) {
    return;
  }

  const raw = sessionStorage.getItem(STORAGE_KEYS.session);
  if (!raw) {
    window.location.href = 'std-login.html';
    return;
  }

  try {
    const student = JSON.parse(raw);
    if (!student || !student.name || !student.adm) {
      throw new Error('Missing student session fields');
    }

    nameEl.textContent = student.name;
    admEl.textContent = student.adm;
    streamEl.textContent = student.stream || 'Not assigned';

    if (greetingEl) {
      greetingEl.textContent = 'Welcome back, ' + student.name + '.';
    }
  } catch (error) {
    console.error('Invalid session data:', error);
    logout();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setActiveNavLink();
  renderDashboard();
});
