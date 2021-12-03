export default function Aside(){
  const sugestions = [
    {
      alt: "badvibes",
      src: "./assets/img/badvibes.jpg",
      title: "bad.vibes.memes"
    },
    {
      alt: "chibird",
      src: "./assets/img/chibird.jpg",
      title: "chibirdart"
    },
    {
      alt: "razoesparaacreditar",
      src: "./assets/img/razoesparaacreditar.jpg",
      title: "razoesparaacreditar"
    },
    {
      alt: "adorableanimals",
      src: "./assets/img/adorableanimals.jpg",
      title: "adorable_animals"
    },
    {
      alt: "smallcats",
      src: "./assets/img/smallcats.jpg",
      title: "smallcutecats"
    }
  ];

  const sugestionsRender = sugestions.map((sugestion) => {
    return <Sugestion alt={sugestion.alt} src={sugestion.src} title={sugestion.title} />
  });

  return (
    <aside class="aside">
      <div class="aside-fixed">
        <header class="aside-header">
          <div class="aside-header-content">
            <div class="aside-header-profile">
              <img alt="logo" src="./assets/img/catana.jpg" />
            </div>
            <div class="aside-header-description">
              <p class="title">catanacomics</p>
              <p class="subtitle">Catana</p>
            </div>
          </div>
          <div class="description">
            <p class="sugestions">Sugestões para você</p>
            <p class="see-all">Ver tudo</p>
          </div>
        </header>

        <div class="aside-content">
          {sugestionsRender}
        </div>

        <footer class="aside-footer">
          <p class="mb18">
            <a href="https://about.instagram.com/">Sobre</a> • 
            <a href="https://help.instagram.com/">Ajuda</a> • 
            <a href="https://about.instagram.com/blog/">Imprensa</a> • 
            <a href="https://developers.facebook.com/docs/instagram">API</a> • 
            <a href="https://www.instagram.com/about/jobs/">Carreiras</a> • 
            <a href="https://www.instagram.com/legal/privacy/">Privacidade</a> •
            <a href="https://www.instagram.com/legal/terms/">Termos</a> • 
            <a href="https://www.instagram.com/explore/locations/">Localizações</a> • 
            <a href="https://www.instagram.com/directory/profiles/">Contas mais relevantes</a> • 
            <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a> • 
            <a href="https://www.instagram.com/">Idioma</a>
          </p>
          
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </footer>
      </div>
    </aside>    
  );
}

function Sugestion(props) {
  return (
    <div class="aside-flex">
      <div class="aside-items">
        <div class="aside-content-profile">
          <img alt={props.alt} src={props.src} />
        </div>
        <div class="aside-content-description">
          <p class="title">{props.title}</p>
          <p class="following">Segue você</p>
        </div>
      </div>
      <div class="follow">
        <p>Seguir</p>
      </div>
    </div>
  );
}