import styled from 'styled-components';

const AppStyles = styled.div`
body {
  background-color: white;
}

.header {
  display: flex;
}

.menuContainer {
  margin-left: 30px;
  margin-top: 20px;
}
.svg-icon {
  fill: currentColor;
}
.menuFolder {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
}
.menuFolder:hover {
  background-color: rgba(1, 1, 1, .05);
  cursor: pointer;
}
#logo {
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
}

.navBarContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100vw - 40px);
  height: 100px;
  margin-top: -10px;
  margin-bottom: 50px;
  margin-left: 50px;
}

.navLinks {
  padding: 10px 15px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-size: .9em;
  color: #111;
  cursor: pointer;
}

.navLinks:hover {
  text-decoration:underline;
}

#searchBar {
  background-color: rgba(1, 1, 1, .05);
  width: calc(100vw - 1200px + 375px);
  height: 55px;
  border-radius: 50em;
  margin-left: 40px;
  cursor: text;
  display: flex;
}

#searchBar:hover {
  background-color: rgba(1, 1, 1, .15);
}

.searchField {
  border: none;
  outline: none;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 200;
  background-color: rgba(1, 1, 1, 0);
  width: 220px;
  font-size: 1em;
}

.searchField:hover {
  background-color: rgba(1, 1, 1, 0);
}

.searchField::-webkit-search-cancel-button {
  display:none;
}

.userIconContainer {
  margin-left: 40px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.iconContainer {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
}
.iconContainer:hover {
  background-color: rgba(1, 1, 1, .04);
}
.userIcons {
  color:#111;
  /* margin: 10px; */
}

.st0{fill:#161717;}
.st1{fill:#0C5099;}

#productPath {
  font-family: 'Noto Sans', sans-serif;
  font-size: .7em;
  display:flex;
  margin-left: 100px;
  margin-top: -50px;
}

.singlePath {
  display:flex;
  align-items: center;
}
.singlePath:hover {
  text-decoration: underline;
}
.productName {
  display:flex;
  align-items:center;
}
#navDivider {
  background-color: rgba(1, 1, 1, .15);
  max-width: calc(100vw - 40px);
  height: 1px;
  margin-left: 100px;
  margin-right: 25px;
  margin-top: 5px;
  margin-bottom: 50px;
}


.imageGrid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100vw / 1.65);
  margin-left: 90px;
}

.imageContainer {
  width: calc(100vw / 3.5);
  height: calc(100vw / 3.5);
  /* background-color: red; */
  margin: 10px;
}

#productIdentifier {
  margin-left: 100px;
  font-weight: 700;
  font-family: 'Noto Sans', sans-serif;
  font-size: .7em;
  background-color: rgba(1, 1, 1, .09);
  width: 60px;
  height: 15px;
  padding-left: 8px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-top: 70px;
  margin-bottom: 60px;
}

#productIdentifierDivider {
  background-color: rgba(1, 1, 1, .15);
  width: calc(100vw / 1.75);
  height: 1px;
  margin-left: 100px;
  margin-right: 25px;
  margin-top: 5px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 1200px) {
  .imageContainer {
    width: calc(100vw / 4.2);
    height: calc(100vw / 4.2);
    /* background-color: red; */
    margin: 10px;
  }
  .imageGrid {
    width: calc(100vw / 1.9);
    margin-left: 30px;
  }

  .navLinks {
    display: none;
  }
  .menuContainer {
    display: none;
  }
  .navBarContainer {
    margin-left: 20px;
  }
  #searchBar {
    margin-left:20px;
    width: 680px;
  }
  #logo {
    width: 90px;
    height: 36px;
  }
  #productPath {
    margin-left: 40px;
  }
  #navDivider {
    margin-left: 40px;
  }
  #productIdentifier {
    margin-left: 40px;
  }
  #productIdentifierDivider {
    margin-left: 40px;
  }
}

@media only screen and (max-width: 900px) {
  .imageContainer {
    width: calc(100vw / 5);
    height: calc(100vw / 5);
    /* background-color: red; */
    margin: 10px;
  }
  .imageGrid {
    width: calc(100vw / 2);
  }
  #searchBar {
    height: 45px;
  }
  #logo {
    width: 75px;
    height: 30px;
  }
}

@media only screen and (max-width: 700px) {
  .navBarContainer {
    flex-wrap: wrap;
    height: 150px;
  }
  #searchBar {
    order: 4;
    margin-top: -45px;
  }
  #productPath {
    margin-top: -70px;
  }
}

.image {
  float: left;
  width: 100%;
  height: 100%;
  object-fit: cover;
  outline: none;
  cursor: pointer;
  box-sizing: inherit;
  color: transparent;
  border-style: none;
  left: 0;
  top: 0;
  overflow: none;
}

.carousel {
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: .4s;
  animation-name: slideIn;
  animation-duration: .4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@-webkit-keyframes slideIn {
  from {top: 100vh; opacity: 0; z-index: -1;}
  to {top: 0; opacity: 1; z-index: 1000;}
}
@keyframes slideIn {
  from {top: 100vh; opacity: 0; z-index: -1; }
  to {top: 0; opacity: 1; z-index: 1000;}
}

.bodyCarousel {
  overflow: hidden;
  margin: 0 auto;
}

#carouselContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  /* background-color: green; */
  width: 100vw;
  height: 80vh;
}

#imageAndArrowContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* background-color: green; */
  width: 100vw;
  height: 80vh;
}

.carouselImageContainer {
  align-self: flex-start;
  position: static;
  /* background-color: red; */
  height: calc(100vh / 1.35);
  width: calc(100vh / 1.35);
  max-width: 100vw;
  max-height: 100vw;
  flex-shrink: 0;
  overflow:hidden;
}
.notCurrentImageContainer {
  height: calc(100vh / 1.35);
  width: calc(100vh / 1.35);
  max-width: 100vw;
  max-height: 100vw;
  flex-shrink: 0;
}

#leftArrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  z-index: 1;
  border: thin solid rgba(1, 1, 1, .4);
  /* background-color: purple; */
  position: fixed;
  left: 20px;
  flex-shrink: 0;
  cursor: pointer;
  visibility: hidden;
}

#leftArrow:hover {
  border: thin solid rgba(1, 1, 1, 1);
}

#rightArrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: thin solid rgba(1, 1, 1, .4);
  text-align: center;
  z-index: 1;
  /* background-color: purple; */
  position: fixed;
  right: 20px;
  flex-shrink: 0;
  cursor: pointer;
  visibility: hidden;
}

#rightArrow:hover {
  border: thin solid rgba(1, 1, 1, 1);
}

#carouselContainer:hover #rightArrow {
  visibility: visible;
}
#carouselContainer:hover #leftArrow {
  visibility: visible;
}

.scrollContainer {
  width: 17vw;
  height: 15px;
  display: inline-block;
  cursor: pointer;
  transform: translateY(20px);
}
.scrollBar {
  width: 17vw;
  height: 2px;
  background-color: rgba(1, 1, 1, .3);
}

.highlightedScrollBar{
  background-color:rgba(1, 1, 1, 1);
}

.currentImage{
  float: left;
  width: 100%;
  height: 100%;
  object-fit: cover;
  outline: none;
  box-sizing: inherit;
  color: transparent;
  border-style: none;
  left: 0;
  top: 0;
  overflow: none;
  cursor: -moz-zoom-in;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
.zoomedImage{
  width: 200%;
  height: 200%;
  cursor: -moz-zoom-out;
  cursor: -webkit-zoom-out;
  cursor: zoom-out;
}
.hidden{
  display: none;
}
#exitCarousel{
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  align-self: flex-end;
  transform: translatex(-20px);
  /* transform: translatey(-5px); */
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  z-index: 100;
  /* background-color: red; */
}
#exitCarousel:hover{
  background-color: rgba(1, 1, 1, .04);
  cursor: pointer;
}
`;

export default AppStyles;