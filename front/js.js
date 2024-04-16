let fotoPerfil = document.querySelector(".profile-image");
let nombre = document.querySelector(".profile-name");
let descrip = document.querySelector(".profile-description");
let followers = document.querySelector(".followers");
let followeds = document.querySelector(".followeds");
let btnBuscar = document.querySelector(".btnBuscarUsuario");
let inputUsuario = document.querySelector(".usuario");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get("http://localhost:4000/test");
    const informacion = response.data.data;
    console.log(informacion);

    if (informacion.username) {
      const nombreDeUsuario = informacion.username;
      console.log("Nombre de usuario:", nombreDeUsuario);

      nombre.textContent = nombreDeUsuario;
      fotoPerfil.src = informacion.hd_profile_pic_url_info.url;
      descrip.textContent = informacion.biography;
      followers.textContent = "Seguidores " + informacion.follower_count;
      followeds.textContent = "Seguidos " + informacion.following_count;
    } else {
      console.log("La propiedad 'username' no está presente en la respuesta.");
    }
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
});

async function buscarUsuario() {
  function recargarPagina() {
    location.reload();
  }
  console.log(inputUsuario.value);
  try {
    const response = await axios.post(
      `http://localhost:4000/buscar/${inputUsuario.value}`
    );
    const informacion = response.data.data;
    console.log(informacion);

    if (informacion.username) {
      const nombreDeUsuario = informacion.username;
      console.log("Nombre de usuario:", nombreDeUsuario);

      nombre.textContent = nombreDeUsuario;
      fotoPerfil.src = informacion.hd_profile_pic_url_info.url;
      descrip.textContent = informacion.biography;
      followers.textContent = "Seguidores " + informacion.follower_count;
      followeds.textContent = "Seguidos " + informacion.following_count;
    } else {
      console.log("La propiedad 'username' no está presente en la respuesta.");
    }
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}
