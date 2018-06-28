// create the data

const data = [
  {
	name: 'Jimmy Dean',
	gender: 'Male',
	age: 32,
	lookginfor: 'female',
	location: 'New York, NY',
	image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },

  {
	name: 'Jenny Mae',
	gender: 'Female',
	age: 22,
	lookingfor: 'male',
	location: 'Greensboro, NC',
	image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },

  {
	name: 'Joe Smoe',
	gender: 'male',
	age: 24,
	lookingfor: 'women',
	location: 'New York, NY',
	image: 'https://randomuser.me/api/portraits/men/43.jpg'
  },
  {
	name: 'Gertrude Meckle',
	gender: 'Female',
	age: 64,
	lookingfor: 'man',
	location: 'Spokane, PA',
	image: 'https://randomuser.me/api/portraits/women/83.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
	  document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.lookingfor}</li>
      <li class="list-group-item">Perefernce: ${currentProfile.gender} looking for ${currentProfile.lookginfor}</li>
    </ul>
`;

  document.getElementById('imageDisplay').innerHTML = `
  <img src=${currentProfile.image} />
`;

  } else {
	// No more profiles
	window.location.reload();
  }

}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
	next: function() {
	  return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
	}
  };
}
