let admin = require("firebase-admin");
let serviceAccount = require("./jasmijn-schrofer-firebase-adminsdk-fbsvc-a726799439.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const films = [
  {
    id: 1,
    title: "Birth of Light",
    year: "2024",
    category: ["Documentary Film"],
    runtime: "23mins",
    thumbnail: "/birth-of-light-still-comp.jpg",
    description:
      "The Death of Darkness examines how life is influenced by the increasing use of artificial light and the question to what extent mankind has progressed.",
    awards: ["Best Documentary Short - Toronto Film Festival"],
  },
  {
    id: 2,
    title: "Tarikat",
    year: "2021",
    category: ["Documentary Film"],
    runtime: "17mins",
    thumbnail: "/tarikat-still.jpg",
    description:
      "Dive into an intimate, entrancing viewing experience that takes you into the midst of dhikr, a ritual at the heart of Sufism.",
    awards: ["Special Jury Prize - Rotterdam International Film Festival"],
  },
  {
    id: 3,
    title: "After Party: What young people do",
    year: "2018",
    category: ["Documentary Film", "Commissioned"],
    runtime: "23mins",
    thumbnail:
      "https://i.vimeocdn.com/video/702097057-5f3c093f9c8d58928b19e3d46936cbd5fbb307dec3c101f9551f50653d3221e5-d_1920x1080?&r=pad&region=us",
    description:
      "This documentary shows us what the Afterparty is about in a discreet and non-sensationalistic way.",
    awards: ["Best Documentary - Amsterdam Documentary Festival"],
  },
  {
    id: 4,
    title: "Unfold",
    year: "2014",
    category: ["Dance Film"],
    runtime: "7mins",
    thumbnail: "/unfold-still.jpg",
    description:
      "An intimate portrayal of transformation and self-discovery through movement and light.",
    awards: ["Best Experimental Film - Berlin Short Film Awards"],
  },
  {
    id: 5,
    title: "Te Allen Tijde",
    year: "2014",
    category: ["Dance Film", "Commissioned"],
    runtime: "3mins",
    thumbnail:
      "https://i.vimeocdn.com/video/460494841-e30e8fdc4c46f633992ef53ef8910988aac23e2b83f4b6f691c0fd1e18ba5d86-d_1920x1080?&r=pad&region=us",
    description:
      'This film is a dance registration of "TE ALLEN TIJDE"  (AT ANY TIME) performed in Museum Sonnenborgh',
    awards: ["Audience Choice Award - Cannes Short Film Corner"],
  },
  {
    id: 6,
    title: "Huis Werk",
    year: "2014",
    category: ["Commissioned"],
    runtime: "7mins",
    thumbnail: "/scrn-huis-werk-still.png",
    description:
      "Home Work provides an insight into the operations of a local Amsterdam hotel. It is a short documentary about a young Polish female immigrant who works as a chambermaid to financially supports her family back home.",
    awards: ["Critics Choice Award - Berlin International Film Festival"],
  },
];

async function seed() {
  const batch = db.batch();
  const filmsRef = db.collection("films");

  films.forEach((film) => {
    const docRef = filmsRef.doc(); // auto-id
    batch.set(docRef, film);
  });

  await batch.commit();
  console.log("Films added successfully");
}

seed();
