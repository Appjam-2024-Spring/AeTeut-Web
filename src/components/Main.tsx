import styles from "../styles/main.module.css";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Main() {
  useEffect(() => {
    let container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["container-title"]}>
        <h1 className={styles["title"]}>訃告</h1>
        <p className={styles["content"]}>
          訃홍길동님께서 별세하셨기에 삼가 알려드립니다.
          <br /> 가시는 길 깊은 애도와 <br /> 명복을 빌어주시길 진심으로
          바랍니다.
        </p>
      </div>
      <hr className={styles["line"]} />
      <div className={styles["container-content"]}>
        <div className={styles["content-date"]}>
          <span className={styles["name"]}>발인일</span>{" "}
          <span className={styles["value"]}>2024년 4월 20일</span>
        </div>
        <div className={styles["container-phone"]}>
          <span className={styles["name"]}>연락처</span>{" "}
          <span className={styles["value"]}>010 1234 5678</span>
        </div>
        <div className={styles["container-place"]}>
          <span className={styles["name"]}>영결장소</span>{" "}
          <span className={styles["value"]}>대전광역시 유성구 가정북로 76</span>
        </div>
      </div>
      <div className={styles["container-map"]}>
        <div id="map" className={styles["map"]} />
      </div>
    </div>
  );
}
