const decorationLayer = document.querySelector('.decoration-layer')
const introSection = document.querySelector('.team-intro-section')

// --------- Data ------------- //
const teamProfile = [
  {
    employeeID: 1,
    name: {
      first: 'Teunis',
      last: 'Alting',
    },
    title: 'Chief Executive Officer',
    experience: 'Aliquam ex arcu, porttitor sed imperdiet ut, vehicula porta odio. Donec mattis quis tortor id dapibus. Curabitur maximus magna in nulla luctus convallis eu a diam. Proin non libero facilisis, elementum purus a, gravida risus. Quisque semper felis in scelerisque posuere.',
    imgSrc: 'https://randomuser.me/api/portraits/men/39.jpg',
  },
  {
    employeeID: 2,
    name: {
      first: 'Rachel',
      last: 'Torres',
    },
    title: 'Chief Operating Officer',
    experience: 'Nam sodales hendrerit ante. Pellentesque vitae nisl laoreet, iaculis purus at, viverra magna. Vivamus accumsan risus ac risus tristique maximus. Sed id euismod justo. Morbi volutpat nisl erat, malesuada iaculis lacus sodales sed.',
    imgSrc: 'https://randomuser.me/api/portraits/women/81.jpg',
  },{
    employeeID: 3,
    name: {
      first: 'Joel',
      last: 'Robertson',
    },
    title: 'Chief Financial Officer',
    experience: 'Ut ac vulputate ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam id eros dolor. Vestibulum ut tempus diam. Nullam nec congue orci, ut malesuada leo. Suspendisse potenti. Aliquam eget purus et purus cursus placerat.',
    imgSrc: 'https://randomuser.me/api/portraits/men/46.jpg',
  },{
    employeeID: 4,
    name: {
      first: 'Victor',
      last: 'Molina',
    },
    title: 'Chief Technology Officer',
    experience: 'Sed lacinia, orci ut mollis dignissim, arcu libero fringilla purus, ut vulputate ex urna eu libero. Quisque dictum lacinia venenatis. Aenean gravida quis massa id facilisis. Integer volutpat in sapien in dapibus. In sapien magna, convallis in rhoncus ut.',
    imgSrc: 'https://randomuser.me/api/portraits/men/43.jpg',
  },{
    employeeID: 5,
    name: {
      first: 'Jacqueline',
      last: 'Castro',
    },
    title: 'Chief Marketing Officer',
    experience: 'Phasellus mi ipsum, maximus quis massa eget, consectetur ullamcorper nunc. Aliquam eleifend scelerisque nibh, id fringilla velit tristique auctor. Nunc suscipit dolor feugiat, fringilla metus in, pellentesque turpis. Aenean semper a purus ut.',
    imgSrc: 'https://randomuser.me/api/portraits/women/6.jpg',
  },{
    employeeID: 6,
    name: {
      first: 'Belinda',
      last: 'Moulin',
    },
    title: 'Sales Manager',
    experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgSrc: 'https://randomuser.me/api/portraits/women/43.jpg',
  },{
    employeeID: 7,
    name: {
      first: 'Louis',
      last: 'Gautier',
    },
    title: 'Web Designer',
    experience: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    imgSrc: 'https://randomuser.me/api/portraits/men/71.jpg',
  },{
    employeeID: 8,
    name: {
      first: 'Magne',
      last: 'Lofthus',
    },
    title: 'Web Developer',
    experience: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    imgSrc: 'https://randomuser.me/api/portraits/women/84.jpg',
  },{
    employeeID: 9,
    name: {
      first: 'Magne',
      last: 'Lofthu',
    },
    title: 'Technical Specialist',
    experience: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    imgSrc: 'https://randomuser.me/api/portraits/men/51.jpg',
  },{
    employeeID: 10,
    name: {
      first: 'Clarisa',
      last: 'Silveira',
    },
    title: 'Data Analyst',
    experience: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    imgSrc: 'https://randomuser.me/api/portraits/women/77.jpg',
  },{
    employeeID: 11,
    name: {
      first: 'Loni',
      last: 'Stelzer',
    },
    title: 'Account Manager',
    experience: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    imgSrc: 'https://randomuser.me/api/portraits/women/54.jpg',
  }
]

// --------- display decorations--------- //
displayDecorations()

// --------- display cards--------- //
displayTeamIntro()

// ------ Scroll Animation / Card Fly in ------- //
cardsFlyIn() 

introSection.addEventListener('scroll', cardsFlyIn)

// ------------ Functions -------------- //

function displayDecorations() {
  decorationLayer.classList.add('show')
}

function displayTeamIntro() {
  teamProfile.forEach(member => {
    introSection.innerHTML += `
      <div class="card">
        <h3 class="name"><span class="first-name">${member.name.first}</span> <span class="last-name">${member.name.last}</span></h3>
        <div class="profile">
          <img class="avatar" src=${member.imgSrc} alt="image-avatar">
          <div class="info">
            <h4 class="title"><i class="fas fa-address-card"></i>${member.title}</h4>
            <p class="experience">${member.experience}</p>
          </div>
        </div>
      </div>
    `
  })
}

function cardsFlyIn() {
  const cards = document.querySelectorAll('.card')
  const triggerBottomLine = window.innerHeight * 0.8 

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top

    if (cardTop < triggerBottomLine) {
      card.classList.add('fly-in')
    } else {
      card.classList.remove('fly-in')
    }
  })
}
