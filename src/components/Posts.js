export default function Posts(){
  const posts = [
    {
      name: "meowed",
      logo: "meowed",
      class: "",
      postContent: "coby-the-cat",
      footerLikeImg: "respondeai",
      footerLikeName: "respondeai",
      footerLikeNumber: "101.523",
      footerCommentProfile: "Não" 
    },
    {
      name: "barked",
      logo: "barked",
      class: "",
      postContent: "bennieandmaple",
      footerLikeImg: "adorableanimals",
      footerLikeName: "adorable_animals",
      footerLikeNumber: "120.568",
      footerCommentProfile: "Não" 
    },
    {
      name: "razoesparaacreditar",
      logo: "razoesparaacreditar",
      class: "video",
      postContent: "",
      footerLikeImg: "badvibes",
      footerLikeName: "bad.vibes.memes",
      footerLikeNumber: "125.568",
      footerCommentProfile: "Não" 
    },
    {
      name: "netflixbrasil",
      logo: "netflix",
      class: "mb",
      postContent: "bethhamon",
      footerLikeImg: "smallcats",
      footerLikeName: "smallcutecats",
      footerLikeNumber: "67.523",
      footerCommentProfile: "Sim" 
    },
    {
      name: "barked",
      logo: "barked",
      class: "",
      postContent: "aussie",
      footerLikeImg: "chibird",
      footerLikeName: "chibirdart",
      footerLikeNumber: "120.568",
      footerCommentProfile: "Não" 
    },
  ];

  const postsRender = posts.map((post) => {
    return <CardPost class={post.class} logo={post.logo} name={post.name} postContent={post.postContent} footerLikeImg={post.footerLikeImg} footerLikeName={post.footerLikeName} footerLikeNumber={post.footerLikeNumber} footerCommentProfile={post.footerCommentProfile} />
  });

  return (
    <div class="posts">      
      {postsRender}
    </div>    
  );
}

function CardPost(props){
  return (
    <div class={`card-post ${props.class}`}>
      <header class="card-post-header">
        <div class="card-post-header-row">
          <div class="card-post-profile">
            <div class="card-post-img">
              <img alt="logo" src={`./assets/img/${props.logo}.jpg`} />
            </div>
            <p class="card-post-name">{props.name}</p>
          </div>
          <ion-icon class="card-post-config" name="ellipsis-horizontal"></ion-icon>
        </div>
      </header>

      {props.class === "video" ?

        <video width="100%" controls="controls" autoplay="autoplay" muted="muted">
          <source src="./assets/video/video.mp4" type="video/mp4" />
          <source src="./assets/video/video.ogv" type="video/ogg" />
          Seu navegador não suporta a tag de vídeo.
        </video>  
        
        :

        <img class="card-post-content" alt="logo" src={`./assets/img/${props.postContent}.jpg`} />
      }

      <footer class="card-post-footer">
        <div class="footer-content-icons">
          <div class="footer-row-icons">
            <div class="footer-icons-group">
              <ion-icon class="icon-hover" name="heart-outline"></ion-icon>
              <ion-icon class="icon-hover m18" name="chatbubble-outline"></ion-icon>
              <ion-icon class="icon-hover" name="paper-plane-outline"></ion-icon>
            </div>
            <div class="footer-bookmark-icon">
              <ion-icon class="icon-hover" name="bookmark-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div class="footer-content-coments">
          <div class="footer-like-row">
            <div class="footer-like-profile">
              <img class="footer-like-img" alt="logo" src={`./assets/img/${props.footerLikeImg}.jpg`} />
            </div>
            <p>Curtido por <span class="bold underline">{props.footerLikeName}</span> e <span class="bold">outras {props.footerLikeNumber} pessoas</span></p>
          </div> 
        </div>

        {props.footerCommentProfile === "Sim" ?
          <div class="footer-add-comment">
            <div class="footer-comment-profile">
              <div class="comment-content">
                <span class="footer-comment-name">netflixbrasil</span> <span class="footer-comment">Deixem aqui o seu parabéns para a Beth Harmon. O Gambito da Rainha completa 1 ano hoje. 💓♟️</span>
                <div class="see-all-comments mt6">
                  <span>Ver todos os 194 comentários</span>
                </div>                                
                <div class="footer-comments-section">
                  <div class="footer-comment-section">
                    <ul>
                      <li><span class="footer-comment-name">bad.vibes.memes</span> <span class="footer-comment">Vi tudo em um dia só 😅😅😅</span></li>
                    </ul>
                    <ion-icon class="footer-comment-icon" name="heart-outline"></ion-icon>
                  </div>
                  <div class="footer-comment-section mt6">
                    <ul>
                      <li><span class="footer-comment-name">adorable_animals</span> <span class="footer-comment">👏👏👏</span></li> 
                    </ul>
                    <ion-icon class="footer-comment-icon" name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div class="post-time mt10">
                  <span>HÁ 2 HORAS</span>
                </div> 
              </div>
            </div>
            <div class="divider"></div>
            <div class="send-comment">
              <form class="send-comment-form">
                <ion-icon class="icon-happy" name="happy-outline"></ion-icon>
                <input class="input-comment" type="text" placeholder="Adicione um comentário..." />
                <input class="btn" type="button" value="Publicar" />
              </form>
            </div>
          </div>     
          : ""
        }                          
      </footer>
    </div>    
  );
}