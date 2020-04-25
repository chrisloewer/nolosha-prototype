
let mobileMenu = [
  {
    title: 'Qoraal',
    alt: 'Literature',
    subItems: [
      {
        title: 'Aqoondirsad',
        alt: 'Courses',
        subItems: [
          {
            title: 'Ilaah Keliya Iyo Jid Keliya'
          },
          {
            title: 'Wixii Aan Ka Maqalnay Nebiyada',
            subItems: [
              {
                title: 'Hordhac'
              },
              {
                title: 'Casharka 1aad - Nuux'
              },
              {
                title: 'Casharka 2aad - Ibraahim'
              },
              {
                title: 'Casharka 3aad - Yuusuf'
              },
              {
                title: 'Casharka 4aad - Muuse'
              },
              {
                title: `Casharka 5aad - Daa'uud`
              },
              {
                title: 'Casharka 6aad - Ishaacyaah'
              },
              {
                title: 'Casharka 7aad - Yooxanaa Baabtiisaha'
              },
              {
                title: 'Casharka 8aad - Ciise'
              },
            ]
          },
        ]
      },
      {
        title: 'Qoraal Gaaban',
        alt: 'Tracts',
      },
      {
        title: 'Taariikhda Kiniisadda ee Soomaaliya',
        alt: 'History',
      },
      {
        title: 'Suugaan',
        alt: 'Poetry',
        subItems: [
          {
            title: 'Qaynuunka dahabkaa',
          },
          {
            title: 'Ilaahow na tilmaanoo'
          },
          {
            title: 'Xalay Baan Masiixii Arkoo'
          },
          {
            title: 'Guullow Ilaahow'
          },
          {
            title: 'Nuurkii Adduunka'
          },
        ]
      },
    ]
  },
  {
    title: 'Mawal / Muuqaal',
    alt: 'Audio/Visual'
  },
  {
    title: 'Kitaabka Quduuska Ah',
    alt: 'Bible',
    subItems: [
      {
        title: 'Axdigii Hore',
        alt: 'Old Testament'
      },
      {
        title: 'Axdigii Cusub',
        alt: 'New Testament'
      },
    ]
  },
  {
    title: 'Jadwalka Idaacadda',
    alt: 'Broadcast Schedule'
  },
  {
    title: 'Bogag Kale',
    alt: 'Other Pages'
  },
  {
    title: 'Nagala soo xiriir',
    alt: 'Contact'
  },
];

function initializeMobileMenu() {
  if (!state) {
    console.error('state is not defined');
    return false;
  }

  let menuSection = document.getElementById('mobile-menu-container');
  let ul = document.createElement('ul').setAttribute('class', 'mobile-menu');

  return true;
}


// Build the <ul> and fill with <li>, appending result to parent container
function createMobileMenuDOM(parentContainer, menuArr) {
  let ul = document.createElement('ul').setAttribute('class', 'mobile-menu');
}

