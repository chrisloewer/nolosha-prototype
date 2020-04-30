

function DesktopMenu() {
  const [hoverRef1, isHovered1] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const [hoverRef3, isHovered3] = useHover();
  const [hoverRef4, isHovered4] = useHover();
  const [hoverRef5, isHovered5] = useHover();
  const [hoverRef6, isHovered6] = useHover();

  return (
    <div>
      <h2 className="center-text">Nolosha Cusub</h2>
      <div className="desktop-nav">
        <div className="desktop-nav__item" ref={hoverRef1}>
          Qoraal
          {isHovered1.active && <div className={isHovered1.priority ? "desktop-nav__expansion desktop-nav__expansion--priority" : "desktop-nav__expansion"}>
          <h2 className="center-text">Qoraal</h2>
        </div>}
        </div>
        <span className="desktop-nav__item" ref={hoverRef2}>Mawal / Muuqaal</span>
        <span className="desktop-nav__item" ref={hoverRef3}>Kitaabka Quduuska Ah</span>
        <span className="desktop-nav__item" ref={hoverRef4}>Jadwalka Idaacadda</span>
        <span className="desktop-nav__item" ref={hoverRef5}>Bogag Kale</span>
        <span className="desktop-nav__item" ref={hoverRef6}>Nagala soo xiriir</span>

       
       {isHovered2.active && <div className={isHovered2.priority ? "desktop-nav__expansion desktop-nav__expansion--priority" : "desktop-nav__expansion"}>
          <h2 className="center-text">Mawal</h2>
        </div>}
       {isHovered3.active && <div className={isHovered3.priority ? "desktop-nav__expansion desktop-nav__expansion--priority" : "desktop-nav__expansion"}>
          <h2 className="center-text">Kitaabka</h2>
        </div>}
       {isHovered4.active && <div className={isHovered4.priority ? "desktop-nav__expansion desktop-nav__expansion--priority" : "desktop-nav__expansion"}>
          <h2 className="center-text">Jadwalka</h2>
        </div>}
       {isHovered5.active && <div className={isHovered5.priority ? "desktop-nav__expansion desktop-nav__expansion--priority" : "desktop-nav__expansion"}>
          <h2 className="center-text">Bogag Kale</h2>
        </div>}
       {isHovered6.active && <div className={isHovered6.priority ? "desktop-nav__expansion desktop-nav__expansion--priority" : "desktop-nav__expansion"}>
          <h2 className="center-text">Nagala</h2>
        </div>}
      </div>
    </div>
  );
}


function useHover() {
  const [value, setValue] = React.useState(false);

  const ref = React.useRef(null);

  const handleMouseOver = () => setValue({
    active: true,
    priority: true,
  });
  const handleMouseOut = () => {
    setValue({
      active: true,
      priority: false,
    });
    setTimeout(() => {setValue({
      active: false,
      priority: false,
    })}, 1000);
  };

  React.useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

const desktopMenuContainer = document.getElementById('desktop-menu-container');
ReactDOM.render(<DesktopMenu />, desktopMenuContainer);
