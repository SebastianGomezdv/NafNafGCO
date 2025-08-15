document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('.formRegistro');
  if (!formulario) {
    console.error('formRegistro no encontrado');
    return;
  }

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor completa todos los campos correctamente.'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Tu cuenta ha sido creada correctamente.'
    }).then(() => {
      window.location.href = '/html/inicioSesion.html';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const formulario2 = document.querySelector('.formLogin');
  if (!formulario2) {
    console.error('formLogin no encontrado');
    return;
  }

  formulario2.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor completa todos los campos correctamente.'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Inicio de sesión exitoso',
      text: 'Has iniciado sesión correctamente.'
    }).then(() => {
      window.location.href = '/index.html';
    });
  });
});

