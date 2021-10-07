import pleasewerk from '../images/Pleasewerk.gif'
import styled from 'styled-components'
const WrapperHero = styled.div`
  height: 100vh;
  width: 100vh;
  bg-color: palevioletred;
  &:onClick {
height: 5vh;
width: 5vh;
position: relative;
 };
  `;
function HeroQ(props) {
  return (
    <div className="App">
<WrapperHero 
      <div className = "heroSmack"> <img src={pleasewerk} /></div>

    </div>
  );
}

export default HeroQ;
