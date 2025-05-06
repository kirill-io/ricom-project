import { Metadata } from 'next';
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "РИКОМ – рудничная взрывозащищённая светодиодная лента RSD-Ex",
  description: "Безопасное освещение от РИКОМ: рудничная взрывозащищённая лента RSD-Ex для промышленных зон. Сертифицировано, надёжно, готово к эксплуатации.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque, voluptates quisquam beatae est maxime quasi dolores itaque nemo adipisci molestiae earum aliquid assumenda dolore. Sequi minima numquam eligendi provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque in iure magnam quis, libero natus voluptas at nam harum quisquam voluptates quos nihil numquam quia praesentium dolor culpa ipsa.
    </div>
  );
}
