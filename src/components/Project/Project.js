import React from "react";
import "./Project.css";
import CatTree from "./img/cattree.jpg";
import NaEats from "./img/naeats.jpg";
import GeoTech from "./img/geotech.jpg";
import KeunsoriScheduler from "./img/keunsorischeduler.jpg";
import CheckMoney from "./img/checkmoney.jpg";
import Pospot from "./img/pospot.jpg";
import { AiFillGithub } from "react-icons/ai";

function Project() {
  return (
    <div id="project" className="project">
      <div>
        <h1 className="project_title">Project</h1>

        <div className="project_containor">
          <div className="project_sub_title">
            <h1>Geo Tech One</h1>
            <h4 className="project_date">2022. 4 - 2022. 6 (2인 프로젝트)</h4>
          </div>
          <div className="project_contents">
            <img src={GeoTech} className="project_img" alt="GeoTech" />
            <div className="project_section">
              <p>
                외주를 맡아 작업한 그래프 출력 어플입니다.
                <br />
                synology nas와 연동하여 nas 저장소에 파일이 생길 때마다 푸시
                메시지를 전송하고 해당 파일을 읽어 그래프를 표시하는 기능을
                구현하였습니다. 저번 프로젝트와 같이 android jetpack을
                사용하였고 synology 사에서 자체적으로 api를 가지고 있었기 때문에
                서버와의 연결은 쉽게 구현하였고 nas에서 파일이 생성되는 시점을
                알아내 푸시 메시지를 보내는 기능을 파이썬 스크립트로
                작성하였습니다. 하지만 푸시 메시지를 받아 처리하는 데에 있어서
                많은 어려움을 겪었습니다. 에뮬레이터에서는 푸시 메시지가 오지만
                실제 기기에서는 오지 않는 문제가 발생하였는데 구글링을 통해서도
                쉽게 정보가 나오지 않았지만 다양한 키워드로 계속 검색해 본 끝에
                API 버전과 NotificationChannel 과의 연관성을 알아내 해결할 수
                있습니다. 또한 푸시 메시지를 누르면 해당 그래프로 바로 이동할 수
                있어야 했는데 파이어 베이스 서비스에서 jetpack의 view 이동을
                실행해야 하는 부분에 있어서 많은 시도 끝에 deeplink를 통해
                성공적으로 이동시킬 수 있었습니다.
                <br />
                이렇게 많은 시행착오를 겪으면서 jetpack의 많은 기능들을 사용해
                본 프로젝트였습니다.
              </p>
              <hr />
              <h3>• 발파 그래프 출력 어플리케이션</h3>
              <h3>• skills - kotlin / android jetpack</h3>
              <h3>• 기여 - android Front-end 70% / python script 100%</h3>
            </div>
          </div>
        </div>

        <div className="project_containor">
          <div className="project_sub_title">
            <h1>Na eat's</h1>
            <h4 className="project_date">2022. 1 - 2022. 5 (4인 프로젝트)</h4>
          </div>
          <div className="project_contents">
            <img src={NaEats} className="project_img" alt="NaEats" />
            <div className="project_section">
              <p>
                오늘 먹을 음식 메뉴를 추천해주는 앱입니다.
                <br />
                기능으로는 먹은 지 가장 오래된 음식들을 추천해 주는 기능,
                좋아하는 음식들을 추천해 주는 기능, 랜덤으로 추천해 주는 기능이
                있고 보조로 먹은 음식을 기록하는 기능과 좋아하는 음식, 싫어하는
                음식을 등록하는 기능이 있습니다. 앱 개발 2명, 백엔드 2명으로
                진행하였고 저는 앱 개발을 맡았습니다. 해당 프로젝트를 진행하면서
                android jetpack을 사용해 보았습니다. 선언형 ui는 플러터로
                프로젝트를 진행해 보며 경험하였고 평소 자주 사용하던 언어인
                kotlin을 사용해 큰 어려움을 겪지 않았습니다. 또한 새로운 기술을
                사용하는 것에 재미를 느끼며 개발하였습니다. 프로젝트를
                진행할수록 확실히 코드를 작성하는 것에 익숙해져서 더욱 간결하고
                깔끔하게 작성하는 것에 신경을 쓸 수 있었고 스스로의 성장을 느낀
                프로젝트였습니다.
              </p>
              <hr />
              <h3>• 음식추천 어플리케이션</h3>
              <h3>
                • skills - kotlin / android jetpack / nestjs / swagger / azure
              </h3>
              <h3>• 기여 - android Front-end 50%</h3>
              <a href="https://github.com/Kim-DG/naeats-android">
                <AiFillGithub size={40} />
              </a>
            </div>
          </div>
        </div>

        <div className="project_containor">
          <div className="project_sub_title">
            <h1>큰소리 스케쥴러</h1>
            <h4 className="project_date">2021. 11 - 2021. 12 (1인 프로젝트)</h4>
          </div>
          <div className="project_contents">
            <img
              src={KeunsoriScheduler}
              className="project_img"
              alt="KeunsoriScheduler"
            />
            <div className="project_section">
              <p>
                동아리에서 해마다 두번 진행하는 공연을 도와주고 기록하는
                어플입니다.
                <br />
                동아리 활동을 하며 공연을 많이 해봤는데 공연의 곡을 선정하는 일,
                연습 일정을 잡는 일 등 신경 써야 할 것들을 한 번에 정리해 줄 수
                있으면 좋겠다는 아이디어로 시작하였습니다.
                <br />
                처음 해보는 개인 프로젝트였고 새로운 언어, 새로운 프레임워크의
                사용, 백엔드를 직접 해보고 싶어 시작하게 되었습니다. 프론트엔드
                쪽으로는 하이브리드 앱 개발이 가능하다는 점, 사용자가 계속
                증가하고 있는 프레임워크라는 점, 선언형 프로그래밍을 사용해 보고
                싶어 플러터를 선택하게 되었고, 백엔드 쪽으로는 처음 해보는
                것이기 때문에 사용자가 많아 정보를 쉽게 얻을 수 있고 범용성 있는
                언어인 자바스크립트를 사용한다는 점에서 node js를 선택하게
                되었습니다.
                <br />
                여태까지 해본 개발은 명령형 UI여서 처음 해보는 선언형 UI에
                색다른 재미를 느꼈습니다. activity와 layout을 두 개의 파일로
                나누지 않아도 된다는 점에서 무척 편하였고 recycle view를
                사용하기 위한 adaptor와 같은 파일도 나누지 않고 한 함수안에서
                구현할 수 있다는 점 그렇기에 코드를 더 깔끔하게 작성할 수 있다는
                점에서 선언형 UI에 대해 더욱 흥미가 가게 되었습니다.
                <br />
                백엔드도 처음 해보는 것이었기에 기초부터 TDD로 구현하였습니다.
                덕분에 오류가 생겨도 어느 곳에서 생긴지 금방 알 수 있었고
                Mysql과 연동하여 어려움 없이 구현하였습니다. 서버의 호스팅은
                heroku를 사용해 보았습니다.
              </p>
              <hr />
              <h3>• 공연관리 어플리케이션</h3>
              <h3>• skills - flutter / nodejs / Mysql / Heroku</h3>
              <h3>• 기여 - Front-end 100% / Back-end 100%</h3>
              <a href="https://github.com/Kim-DG/keunsori-scheduler-cli">
                <AiFillGithub size={40} />
              </a>
            </div>
          </div>
        </div>

        <div className="project_containor">
          <div className="project_sub_title">
            <h1>CheckMoney</h1>
            <h4 className="project_date">2021. 10 - 2021. 12 (4인 프로젝트)</h4>
          </div>
          <div className="project_contents">
            <img src={CheckMoney} className="project_img" alt="CheckMoney" />
            <div className="project_section">
              <p>
                지출, 소비를 기록할 수 있는 가계부 어플입니다.
                <br />
                android 개발 1인, ios 개발 1인, 웹 개발 1인, 백엔드 1인 총
                4인으로 프로젝트를 진행하였습니다.
                <br />
                프로젝트를 진행한 것들 중에 서버와 연동하는 작업이 제일
                많았습니다. api에서 어떤 정보가 필요할지 함께 회의하였고
                retrofit과 okhttp3 라이브러리를 사용하여 서버와 연동하였습니다.
                졸업 프로젝트에서 안드로이드 개발을 해보아서 코드를 작성하는 게
                저번보다는 익숙했지만 로그인 기능, 푸시 메시지 등 해보지 않은
                기능, 구현해야 할 기능이 훨씬 많아 자잘한 버그, 오류가 많이
                생겼고 코드를 많이 들여다보게 되었고 왜 버그가 일어났는지, 어떤
                코드를 잘못 작성했는지, 찾기 힘들다면 어떤 이유인지 고민하게
                되었습니다.
                <br />
                프로젝트를 진행하면서 spinner, viewpager, chart 등 새로운 화면과
                내용을 구현해 보았고 안드로이드 개발에 좀 더 익숙해지는 경험이
                되었습니다.
              </p>
              <hr />
              <h3>• 가계부 어플리케이션</h3>
              <h3>• skills - kotlin / nodejs / Mysql / AWS</h3>
              <h3>• 기여 - android Front-end 100%</h3>
              <a href="https://github.com/Kim-DG/check-money-android">
                <AiFillGithub size={40} />
              </a>
            </div>
          </div>
        </div>

        <div className="project_containor">
          <div className="project_sub_title">
            <h1>POSPOT</h1>
            <h4 className="project_date">2021. 3 - 2021. 11 (3인 프로젝트)</h4>
          </div>
          <div className="project_contents">
            <img src={Pospot} className="project_img" alt="Pospot" />
            <div className="project_section">
              <p>
                졸업프로젝트로 만든 포즈 추천 어플입니다. <br />
                사진을 찍으면 인공지능 모델이 찍은 장소와 어울리는 포즈를 DB에서
                가져와 출력해 주는 pose 기능과 찍은 장소와 비슷한 장소를 추천해
                주는 spot 기능이 있습니다. <br />이 프로젝트를 진행하면서
                android studio와 kotlin을 처음 사용해 보았습니다. 처음에는
                카메라를 구현하는 것에 대해 어려움이 있었습니다. 안드로이드에서
                제공하는 camera 라이브러리를 사용해 보았는데 카메라 화면을
                커스텀 할 수 없어 cameraX라는 라이브러리를 사용하였고 저희
                프로젝트에서 사용하는 이미지들을 커스텀 하여 적용시켰습니다.
                <br />
                또한 이 프로젝트는 AI를 사용하여 DB에 있는 포즈와 장소를 추천해
                주는데 직전 학기에 들었던 인공지능 수업을 바탕으로 장소를
                인식하는 AI 모델을 제작하였습니다. 이 AI에서 동작이 오래 걸릴 수
                있어 AI가 작동하고 이미지를 출력하는 코드에서는 코루틴으로
                비동기 처리하였습니다.
                <br /> 안드로이드 앱 개발을 처음 하다 보니 필요한 기능을
                구현하는 데에 미숙한 부분이 많았지만 생명주기가 어떻게 되는지,
                액티비티와 레이아웃의 작동 방식, 코드를 어떻게 깔끔히 작성할지에
                대한 고민을 하면서 안드로이드 개발의 기초를 익혔습니다
                <br /> 해당 졸업프로젝트 장려상을 수상하였습니다.
              </p>
              <hr />
              <h3>• 포즈 추천 어플리케이션</h3>
              <h3>• skills - kotlin / Pytorch / Mysql / Ubuntu / git / AWS</h3>
              <h3>• 기여 - Front-end 100% / AI 50%</h3>
              <a href="https://github.com/Kim-DG/POSPOT">
                <AiFillGithub size={40} />
              </a>
            </div>
          </div>
        </div>

        <div className="project_containor">
          <div className="project_sub_title">
            <h1>CatTree</h1>
            <h4 className="project_date">2020. 12 - 2021. 4 (5인 프로젝트)</h4>
          </div>
          <div className="project_contents">
            <img src={CatTree} className="project_img" alt="CatTree" />
            <div className="project_section">
              <p>
                보드게임 '펭귄파티'를 모티브로한 모바일 게임입니다. <br />
                프로젝트 경험을 쌓고자 동아리 활동을 같이했던 친구들과 시작한
                가벼운 프로젝트였습니다. 유니티를 통해 C# 코드를 적용시키는
                방법을 익혔습니다. 또한 서버의 정보를 받아오고 사용자의 액션을
                통해 서버의 정보를 보내는 코드를 작성하면서 무지했던 조금이나마
                서버를 이해했고 프론트엔드와 백엔드가 어떻게 협업하는지 경험해
                볼 수 있었습니다.
              </p>
              <hr />
              <h3>• 모바일 게임</h3>
              <h3>• skills - unity / c# / git / AWS</h3>
              <h3>• 기여 - Front-end 70%</h3>
              <a href="https://github.com/Kim-DG/cat-tower-card-game-client">
                <AiFillGithub size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
