import PageTemplate from '@/_components/page-template';
import './about.css';

export default function About() {
  return (
      <PageTemplate title="about" backgroundImage="/images/7.svg">
        <div className="about-text">
            Le Fog is an independent music project founded in 2020 by Adam Robson that combines raw recording techniques, aphoristic lyrics, electrified rock, contemporary folk, and electronic music. Created in Portland, Oregon.
        </div>
      </PageTemplate>
  );
}
