const Sections = [
  {
    id: 1,
    title: "Card Title 1",
    description: "This is the description for card 1.",
  },
  {
    id: 2,
    title: "Card Title 2",
    description: "This is the description for card 2.",
  },

  {
    id: 3,
    title: "Card Title 3",
    description: "This is the description for card 3.",
  },

  {
    id: 4,
    title: "Card Title 4",
    description: "This is the description for card 4.",
  },

  {
    id: 5,
    title: "Card Title 5",
    description: "This is the description for card 5.",
  },
  // Add more card objects here following the same format
];


const cardjs =document.querySelector('#cardjs');


Sections.forEach(section => {
	const card = document.createElement('div')
	card.innerHTML=`
	<h3>${section.title}</h3>
	<h4>${section.description}</h4>
	
	`

	cardjs.appendChild(card)
	
});