import './header.css'

import { useState, useEffect, useRef } from "react";

//images
import assets from './assets/assetIndex';



function Header() {
  let [headerHeight, setHeaderHeight] = useState('auto')

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const prevScrollY = useRef(0);

  const [scrollPos, setScrollPos] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > scrollPos) {
        setScrollDirection('down');
        setHeaderHeight('0.3rem');
      } else {
        setScrollDirection('up');
        setHeaderHeight('auto');
      }
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  // Render your header component with scrollDirection as a prop
  return (
    <header 
      id='header' 
      className=''
      style={{height: headerHeight}}
    >
      <div>
        <div id='logoHeader' className='headerItem'> 
          <img
            src={assets.initialsThicc}
          />
        </div>
        <div id='homeHeader' className='headerItem'> home </div>
        <div id='aboutHeader' className='headerItem'> about </div>
        <div id='pricingHeader' className='headerItem'> pricing </div>
        <div id='contactHeader' className='headerItem'> contact </div>
      </div>
    </header>
  )
}

export default Header;