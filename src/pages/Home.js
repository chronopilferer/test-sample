import React from 'react';

import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
        <main className="container mx-auto px-4 py-8">
          <section id="projects" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">프로젝트</h2>
            <p>여기에 프로젝트 내용을 추가하세요.</p>
          </section>

          <section id="about" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">소개</h2>
            <p>여기에 소개 내용을 추가하세요.</p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-bold mb-4">연락처</h2>
            <p>여기에 연락처 내용을 추가하세요.</p>
          </section>
        </main>
    </div>
  );
}

export default Home;
