import Header from '../components/Header/Header';
import WhatsNew from '../sections/WhatsNew/WhatsNew';

export default function UpdatesPage() {
  return (
    <>
      <Header active="UPDATES" />
      <main>
        <WhatsNew />
      </main>
    </>
  );
}
