import { FacebookFilled, InstagramFilled, DiscordFilled } from '@ant-design/icons';
import { SOCIAL_LINKS } from './../constants/socialLinks';

import styles from "../css/baseLayouts/links.module.css"

const iconMap = {
    facebook: <FacebookFilled className={styles.icon} />,
    instagram: <InstagramFilled className={styles.icon} />,
    discord: <DiscordFilled className={styles.icon} />,
};

export const SocialLinks = () => (
    <>
        {SOCIAL_LINKS.map((link, index) => (
            <div key={index}>
                <a href={link.url} className={styles.link} target="_blank">
                    {iconMap[link.iconName]}
                </a>
            </div>
        ))}
    </>
);