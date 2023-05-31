import './iconAvatar.css';

//TODO: AGREGAR INDEX.JS
export function IconAvatar({ name }) {
  function getInitials(name) {
    const words = name.split(" "); // Dividir la cadena en palabras
    let initials = "";

    // Obtener las primeras letras de las dos primeras palabras
    for (let i = 0; i < 2 && i < words.length; i++) {
      initials += words[i][0].toUpperCase();
    }

    return initials;
  }

  let initialName = getInitials(name);


  return <span className='login-avatar'>{initialName}</span>;
}
