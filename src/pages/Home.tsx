import Bottom from "../components/Bottom";
import Main from "../components/Main";
import common from "../styles/common.module.css";

export default function Home() {
  return (
    <div className={common + ""}>
      <Main />
      <Bottom />
    </div>
  );
}
