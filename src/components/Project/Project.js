import React from "react";
import "./Project.css";
import CatTree from "./img/cattree.jpg";
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
            <h1>Na eat's</h1>
            <h4 className="project_date">2022. 1 - 2022. 2 (4인 프로젝트)</h4>
          </div>
          <div className="project_contents">
            <img src={CatTree} className="project_img" alt="CatTree" />
            <div className="project_section">
              <p>
                지출, 소비를 기록할 수 있는 가계부 어플입니다.
                <br />
                android 개발 1인, ios 개발 1인, 웹 개발 1인, 백엔드 1인 총
                4인으로 프로젝트를 진행하였습니다. 프로젝트를 진행한 것들 중에
                서버와 연동하는 작업이 제일 많았습니다. 그렇기에 서버를
                이해하는데 도움이 되었고 백엔드에도 흥미가 생겼습니다. 로그인
                기능, 푸쉬 메시지 등 해보지 않은 기능들을 사용해 보았고 디자인을
                직접하여 UI에 관에서도 고민을 많이 하게 되었습니다.
              </p>
              <hr />
              <h3>• 가계부 어플리케이션</h3>
              <h3>• skills - kotlin / nodejs / Mysql / AWS</h3>
              <h3>• 기여 - android Front-end 100%</h3>
              <a href="https://github.com/Kim-DG/keunsori-scheduler-cli">
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
                연습일정을 잡는 일 등 신경써야할 것들을 한번에 정리해 줄
                수있으면 좋겠다는 아이디어로 시작하였습니다.
                <br />
                처음 해보는 토이 프로젝트였고 백엔드도 이 프로젝트를 통해 처음
                진행해 보았습니다. 여태까지 해왔던 kotlin으로 제작 하기보다는
                새로운 시도를 해보고 싶어 flutter를 사용하게 되었고 백엔드는
                nodejs를 사용했습니다. 클라이언트와 서버를 동시에 진행하면서 앱
                개발환경을 더 이해할 수 있었습니다.
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
                4인으로 프로젝트를 진행하였습니다. 프로젝트를 진행한 것들 중에
                서버와 연동하는 작업이 제일 많았습니다. 그렇기에 서버를
                이해하는데 도움이 되었고 백엔드에도 흥미가 생겼습니다. 로그인
                기능, 푸쉬 메시지 등 해보지 않은 기능들을 사용해 보았고 디자인을
                직접하여 UI에 관에서도 고민을 많이 하게 되었습니다.
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
                가져와 출력 해주는 pose기능과 찍은 장소와 비슷한 장소를
                추천해주는 spot 기능이 있습니다. <br />이 프로젝트를 진행하면서
                android studio와 kotlin을 처음 사용해보았습니다. android
                cameraX, 권한설정, 서버연동, AI 연동 등 많은 기술을 사용했고
                app개발 프론트엔드 실력 향상의 큰 도움이 되었습니다. 하지만
                코드를 효율적으로 작성하지는 못하였고 후에 코드를 보여 어떻게
                해야 효율적으로 구성하였을까 고민하였습니다.
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
                가벼운 프로젝트 였습니다. 처음해본 프로젝트 였기에 생각보다 쉽지
                않았고 오래걸렸지만 프론트엔드와 백엔드의 연동을 좀 더 이해할 수
                있게 되었고 프론트 엔드 파트를 진행하면서 모바일 환경을 이해 할
                수 있었습니다.
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
