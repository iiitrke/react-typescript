import {useRouter} from 'next/router';
import { AppRootLayout } from './layout';
import { BannerFC } from '../components/banner/BannerFC';
export default function Page() {

const navigation = useRouter();

    return (
<AppRootLayout>
     <p>Hello world</p>
     <BannerFC />
     </AppRootLayout> 
    )
  }