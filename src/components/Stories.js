export default function Stories(){
  const stories = [
    {
      alt: "9gag",
      src: "./assets/img/9gag.jpg",
      name: "9gag"
    },
    {
      alt: "meowed",
      src: "./assets/img/meowed.jpg",
      name: "meowed"
    },
    {
      alt: "barked",
      src: "./assets/img/barked.jpg",
      name: "barked"
    },
    {
      alt: "nathan",
      src: "./assets/img/nathan.jpg",
      name: "nathanwpyle..."
    },
    {
      alt: "wawawiwa",
      src: "./assets/img/wawawiwa.jpg",
      name: "wawawiwac..."
    },
    {
      alt: "respondeai",
      src: "./assets/img/respondeai.jpg",
      name: "respondeai"
    },
    {
      alt: "filomoderna",
      src: "./assets/img/filomoderna.jpg",
      name: "filomoderna"
    },
    {
      alt: "memeriagourmet",
      src: "./assets/img/memeriagourmet.jpg",
      name: "memeriago..."
    },
  ];

  const storysReder = stories.map((story) => {return <Story alt={story.alt} src={story.src} name={story.name} />});
  return (
    <section class="stories">
      {storysReder}

      <ion-icon class="chevron-circle" name="chevron-forward-circle"></ion-icon>
    </section>
  );
}

function Story(props) {
  const Background = './assets/img/stories_background-removebg-preview.png';
  return (
    <div class="stories-user">
      <div style={{ backgroundImage: `url(${Background})`}} class="stories-user-profile">                 
        <img class="stories-user-img" alt={props.alt} src={props.src} />
      </div>
      <p class="stories-user-name">{props.name}</p>
    </div>
  );
}