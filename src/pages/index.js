import {useRouter} from 'next/router';
 import AppRootLayout from './layout';
import { BannerFC } from '../components/banner/BannerFC'; 
import { IntroFC } from '../components/intro/IntroFC';
export default function Page() {

const navigation = useRouter();

    return (
<AppRootLayout>
     <BannerFC />
     <IntroFC />
     </AppRootLayout> 
    )
  }

  