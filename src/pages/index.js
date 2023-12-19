import {useRouter} from 'next/router';
import { AppRootLayout } from './layout';
export default function Page() {

const navigation = useRouter();

    return (
<AppRootLayout>
     <p>Hello world</p>
     </AppRootLayout> 
    )
  }