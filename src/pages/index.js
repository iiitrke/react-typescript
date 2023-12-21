import {useRouter} from 'next/router';
 import RootLayout from './layout';
import { BannerFC } from '../components/banner/BannerFC'; 
import { IntroFC } from '../components/intro/IntroFC';
import { LoginFormCL, LoginFormFC } from '../components/login/LoginFormCL';

export default function Page() {



const navigation = useRouter();

    return (
<RootLayout>
     <BannerFC />
     <IntroFC />

     <LoginFormCL />
</  RootLayout> 
    )
  }

  