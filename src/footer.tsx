import './footer.css'

function Footer() {
  
  return (
    <footer>  
      <div id='horizontalRow'>

        <div id='footerSignature'>
          <a
            href='/home'
            target='_blank'
          >
            <img  
              id="footerReineYurkowskiSignature"
              src="./src/assets/mediaKits/reineYurkowskiAssets/full.svg"
              alt='twitter logo'
            />
          </a>
        </div>

        <div id="footerSocials">
          <a 
            href='https://www.artstation.com/reineyurkowski'
            target='_blank'
          >
            <img  
              id="artstationLogo"
              src="./src/assets/mediaKits/ArtStation Logo/vector/artstationLogo.svg"
              alt='artstation Logo'
            />
          </a>
          <a 
            href='https://www.linkedin.com/in/reine-y-326025a9/'
            target='_blank'
          >
            <img  
              id="linkedInLogo"
              src="./src/assets/mediaKits/linkedIn-Logos/LinkedIn-Logos/LI-In-Bug.png"
              alt='linked in logo'
            />
          </a>
          <a
            href='https://linktr.ee/reineyurkowski'
            target='_blank'
          >
            <img  
              id="linktreeLogo"
              src="./src/assets/mediaKits/linktree/med.png"
              alt='linktree logo'
            />
          </a>
          <a
            href='https://twitter.com/reineyurkowski'
            target='_blank'
          >
            <img  
              id="twitterLogo"
              src="./src/assets/mediaKits/twitter-logos/Twitter logo/SVG/Logo white.svg"
              alt='twitter logo'
            />
          </a>
          {
          /* <a
            href=''
            target='_blank'
          >
            <img  
              id=""
              src="./src/assets/mediaKits/"
              alt=''
            />
          </a> */
          }
        </div>

        <div id="footerContact">
          <div></div>
          <a href="tel:+1-(250)-216-2556">
            phone: +1-(250)-256-2556
          </a>
          <a href="mailto:reineyurkowski@gmail.com">
            email: reineyurkowski@gmail.com
          </a>
          <div></div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;