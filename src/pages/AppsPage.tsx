import Header from '../components/Header/Header';
import Hero from '../sections/Hero/Hero';
import TrustedStrip from '../sections/TrustedStrip/TrustedStrip';
import OurApps from '../sections/OurApps/OurApps';
import Teaser from '../sections/Teaser/Teaser';

export default function AppsPage() {
  return (
    <>
      <Header active="APPS" />
      <main>
        <Hero />
        <TrustedStrip />
        <OurApps />
        <Teaser />
      </main>
    </>
  );
}
