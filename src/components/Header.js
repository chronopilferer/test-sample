import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import HeaderSlide from './HeaderSlide';

import '../styles/styles.css';

function Header() {
  return (
    <Carousel>
      <Carousel.Item>
        <HeaderSlide text="안녕하세요, XXX입니다" />
        <Carousel.Caption>
          <h3>제 포트폴리오에 오신 것을 환영합니다</h3>
          <p>도전과 문제 해결을 즐기는 개발자를 꿈꾸고 있습니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <HeaderSlide text="AI 서비스를 개발합니다" />
        <Carousel.Caption>
        <h3>머신러닝부터 딥러닝까지</h3>
        <p>데이터 전처리부터 모델 학습, 배포까지 전 과정을 직접 구현합니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HeaderSlide text="프로젝트를 확인해보세요" />
        <Carousel.Caption>
          <h3>최근 작업물들을 소개합니다</h3>
          <p>웹, 인공지능, 네트워크 분야의 다양한 프로젝트를 담았습니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;