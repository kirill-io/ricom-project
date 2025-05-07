import { Logo } from "./components";
import { LogoType } from "./components/Logo/Logo.props";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Logo type={LogoType.PRIMARY} />
      <Logo type={LogoType.SECONDARY} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque,
      voluptates quisquam beatae est maxime quasi dolores itaque nemo adipisci
      molestiae earum aliquid assumenda dolore. Sequi minima numquam eligendi
      provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
      eaque in iure magnam quis, libero natus voluptas at nam harum quisquam
      voluptates quos nihil numquam quia praesentium dolor culpa ipsa.
    </div>
  );
}
