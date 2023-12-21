import {useRouter} from 'next/router';
 import RootLayout from './layout';
import { BannerFC } from '../components/banner/BannerFC'; 
import { IntroFC } from '../components/intro/IntroFC';
import { LoginFormCL, LoginFormFC } from '../components/login/LoginFormCL';

export default function Page() {



const navigation = useRouter();

    return (
<<<<<<< HEAD

        <>fdsfsdf</>
 
=======
<RootLayout>
     <BannerFC />
     <IntroFC />

     <LoginFormCL />
</  RootLayout> 
>>>>>>> 5f988e57903be787bca27559f2e79fbf6830842a
    )
  }

  