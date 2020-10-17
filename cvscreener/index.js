console.log('---CVSCREENER---');

let data = [
  {
    name: "Rohan Das",
    age: 18,
    language: 'Python',
    framework: 'Django',
    image: "https://randomuser.me/api/portraits/men/61.jpg"
  },
  {
    name: "Juliana Crain",
    age: 18,
    language: 'Go',
    framework: 'Go Framework',
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "Ashwariya Rai",
    age: 38,
    language: 'Node Js',
    framework: 'Angualar Js',
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "Carrie Mathison",
    age: 28,
    language: 'Python',
    framework: 'Flask',
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
]

// CV iterator usage

function cvItrerator(profiles) {
  let nextIndex = 0;
  return {
    next: function(){
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
    }
  };
}
const candidates = cvItrerator(data);
nextCV();
// Button Listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById('image');
  let profile = document.getElementById('profile');
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">Languague: ${currentCandidate.language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
    `;
  } else {
    // alert('Profile finished');
    window.location.reload();
  }

}
