export function Modal() {
  return `
    <dialog class="modal">
      <div class="modal-content">
        <button type="button" id="close-button">X</button>
        <div> 
          <p id="users-text">Faça login para acessar seus dados!</p>
        </div>

        <form class="modal-inputs" id="login-form">
          <div class="input">
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required/>
          </div>

          <div class="input">
            <label for="password">Senha:</label>
            <div class="password-container">
              <input type="password" id="password" name="password" maxlength="20" required/>
              <button type="button" id="togglePassword" class="togglePasswordButton">
                <svg id="opened-eye" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg id="closed-eye" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </form>

        <button type="submit" id="submit-button" form="login-form">Login</button>
      </div>
    </dialog>
  `;
}

export function initModal() {
  const modal = document.querySelector('.modal');
  const form = document.querySelector('#login-form');
  const loginButton = document.querySelector('#login');
  const closeButton = document.querySelector('#close-button');
  const submitButton = document.querySelector('#submit-button');
  const usersText = document.querySelector('#users-text');
  const inputs = document.querySelectorAll('.modal-inputs .input input');
  const togglePasswordButton = document.querySelector('#togglePassword');
  const passwordInput = document.querySelector('#password');
  const openedEyeIcon = document.querySelector('#opened-eye');
  const closedEyeIcon = document.querySelector('#closed-eye');

  if (
    loginButton &&
    modal &&
    form &&
    closeButton &&
    submitButton &&
    usersText &&
    inputs.length &&
    togglePasswordButton &&
    passwordInput &&
    openedEyeIcon &&
    closedEyeIcon
  ) {
    loginButton.addEventListener('click', () => {
      modal.showModal();
    });

    closeButton.addEventListener('click', () => {
      modal.close();
      if (usersText.textContent.trim().includes('dados')) {
        form.reset();
      }
    });

    function togglePasswordVisibility() {
      const type = passwordInput.getAttribute('type');
      if (type === 'password') {
        passwordInput.setAttribute('type', 'text');
        openedEyeIcon.style.display = 'block';
        closedEyeIcon.style.display = 'none';
      } else {
        passwordInput.setAttribute('type', 'password');
        openedEyeIcon.style.display = 'none';
        closedEyeIcon.style.display = 'block';
      }
    }

    function closeModal(event) {
      if (event.target === modal) {
        modal.close();
        if (usersText.textContent.trim().includes('dados')) {
          form.reset();
        }
      }
    }

    function login(event) {
      event.preventDefault();
      let allFields = true;

      inputs.forEach((input) => {
        if (input.value.trim() === '') {
          allFields = false;
          return;
        }
      });

      if (!allFields) {
        usersText.textContent = 'Por favor, preencha todos os campos.';
        return;
      } else if (allFields && passwordInput.value.length < 8) {
        usersText.textContent = 'Por favor, insira uma senha entre 8 e 20 caracteres.';
        return;
      }

      usersText.textContent = 'Bem-vindo(a)! Login efetuado com sucesso.';
      submitButton.style.display = 'none';
      inputs.forEach((input) => {
        input.setAttribute('disabled', 'true');
      });
      setTimeout(() => {
        modal.close();
      }, 1500);
    }

    submitButton.addEventListener('click', login);
    togglePasswordButton.addEventListener('click', togglePasswordVisibility);
    modal.addEventListener('click', closeModal);
  }
}
