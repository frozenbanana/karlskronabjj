import { IconButton } from "@chakra-ui/react";
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/Layout.module.css';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <IconButton aria-label='Go to Facebook site' icon={<SocialIcon url="https://www.facebook.com/KarlskronaBJJ"/>} />
        <IconButton aria-label='Go to Instagram site' icon={<SocialIcon url="https://www.instagram.com/karlskronabjj"/>} />
        <IconButton aria-label='Send an email' icon={<SocialIcon url="mailto:Karlskronafightcenter@gmail.com"/>} />
      </footer>
    );
}