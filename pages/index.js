import Head from 'next/head';
import Logo from '../comps/Logo';
import Developer from '../comps/Developer';
import Information from '../comps/Information';
import Footer from '../comps/Footer';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const HomeCont = styled.div`
height: 812px;
background-color: #FFF8F8;
overflow: scroll;
padding-bottom: 80px;

.logo {
  margin-top: 30px;
}
  
.information {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.developer {
  margin: 20px;
}

`;

export default function Home() {
  const router = useRouter();


  return <HomeCont>

    <div className="logo">
      <Logo routeTo="/index2" />
    </div>
    <div className="information">
      <Information titletext="WHAT THIS APP DOES" paratext="This mobile application provides recipes focused on using the foods in your fridge to save time and costs, all while minimizing food waste." />
    </div>

    <div className="developer">
      <Developer name1="Iori Takeshita" content1="" name2="Claudia Shin" content2="" name3="Maggie Su" content3="" name4="Leighai Nishibata" content4="" />
    </div>

    <Footer/>


  </HomeCont>
}


