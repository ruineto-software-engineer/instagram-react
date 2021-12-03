export default function Navbar(){
  return (
    <nav class="navbar">
      <div class="navbar-content">
        <div class="nav-brand">
          <ion-icon class="brand-icon" name="logo-instagram"></ion-icon>
          <div class="navbar-divider-vertical"></div>
          <img class="brand-name" alt="logo" src="./assets/img/logo.png" />
        </div>
        <input class="nav-search" type="text" placeholder="Pesquisar" />
        <div class="nav-icons">
          <ion-icon class="navbar-paper-plane" name="paper-plane-outline"></ion-icon>
          <ion-icon class="navbar-compass m25" name="compass-outline"></ion-icon>
          <ion-icon class="navbar-heart mr25" name="heart-outline"></ion-icon>
          <ion-icon class="navbar-person" name="person-outline"></ion-icon>
        </div>
      </div>
      <div class="navbar-content-mobile">
        <div class="navbar-icons-mobile">
          <ion-icon class="brand-mobile-icon" name="logo-instagram"></ion-icon>
          <img class="brand-name" alt="logo" src="./assets/img/logo.png" />
          <ion-icon class="navbar-mobile-paper-plane" name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
}