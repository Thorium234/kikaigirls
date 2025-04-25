function toggleChat() {
    const chat = document.getElementById('chatbot');
    chat.classList.toggle('hidden');
  }




function register() {
    const name = document.getElementById('regName').value;
    const adm = document.getElementById('regAdm').value;
    const stream = document.getElementById('regStream').value;

    if (name && adm && stream) {
      const student = { name, adm, stream };
      localStorage.setItem('student_' + adm, JSON.stringify(student));
      alert('Registration successful!');
    } else {
      alert('Please fill all fields!');
    }
    window.location.href="std-login.html"
  }

  function login() {
    const adm = document.getElementById('loginAdm').value;
    const data = localStorage.getItem('student_' + adm);

    if (data) {
      const student = JSON.parse(data);
      alert('Welcome' +"" +student.name +'from'+student.stream+ ""+'stream!');
      window.location.href="dashboard.html"
      //alert(`Welcome student.name from{student.stream} stream!`);
      // Redirect or show portal content here
      
    } else {
      alert('Admission number not found!');
    }
  }