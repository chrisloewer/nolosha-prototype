
const MOBILE_MENU = [
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

function MobileMenu() {

  const [menu, setMenu] = React.useState(MOBILE_MENU);

  // parent elements are arrays to keep track of history
  const [parentMenuArr, setParentMenuArr] = React.useState([]);
  const [parentTitleArr, setParentTitleArr] = React.useState([]);

  let menuItems = [];

  menu.forEach(x => {
    let hasSubMenu = x.subItems && x.subItems.length > 0;

    let listItem = <li
        className={ hasSubMenu ? 'mobile-menu__item mobile-menu__item--nested' : 'mobile-menu__item'}
        onClick={() => menuItemClick(menu, x.title, x.subItems)}
        key={x.title}
        title={x.alt}>
          {x.title}
      </li>;
    menuItems.push(listItem);
  });

  // Click handler for menu items. Should navigate to next menu if one exists
  function menuItemClick(baseMenu, title, subMenu) {
    if (subMenu && subMenu.length > 0) {
      parentMenuArr.push(baseMenu);
      parentTitleArr.push(title);
      setParentMenuArr(parentMenuArr);
      setParentTitleArr(parentTitleArr);
      setMenu(subMenu);
    }
  }

  // Click handler for title of the previous menu. Works as going up a directory
  function prevMenuClick() {
    let prevMenu = parentMenuArr.pop();
    let prevTitle = parentTitleArr.pop();
    setParentMenuArr(parentMenuArr);
    setParentTitleArr(parentTitleArr);
    setMenu(prevMenu);
  }

  // Resets menu to base state
  function resetMenu() {
    setParentMenuArr([]);
    setParentTitleArr([]);
    setMenu(MOBILE_MENU);
  }

  return (
    <div>
      {parentMenuArr && parentMenuArr.length > 0 && parentTitleArr && parentTitleArr.length > 0 && <h2
        onClick={prevMenuClick}>
          {parentTitleArr[parentTitleArr.length - 1]}
      </h2>}
      <ul className="mobile-menu">
        {menuItems}
      </ul>
      <h3
        onClick={resetMenu}>
          reset
      </h3>
    </div>
  );
}

const domContainer = document.getElementById('mobile-menu-container');
ReactDOM.render(<MobileMenu />, domContainer);
