import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './timeline.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui mobile reversed stackable two column grid left aligned container">
          <div className="four wide column">
            <div className="padding-md">
              <img class="ui medium circular image" src="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG8.png" />
              <h2 className="">Vytautas Sugintas</h2>
              <p>Labas as batas namas, kedas, megstu arbuzus</p>
              <div class="ui list">
                <div class="item">
                  <i class="users icon"></i>
                  <div class="content">
                    Swedbank AB
                  </div>
                </div>
                <div class="item">
                  <i class="marker icon"></i>
                  <div class="content">
                    Vilnius, LT
                  </div>
                </div>
                <div class="item">
                  <i class="mail icon"></i>
                  <div class="content">
                    <a href="mailto:jack@semantic-ui.com">vytautass@gmail.com</a>
                  </div>
                </div>
                <div class="item">
                  <i class="linkify icon"></i>
                  <div class="content">
                    <a href="http://www.semantic-ui.com">vytautass.lt</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nine wide column">
            <div className="padding-md">
              <h1>Skills</h1>
              <div class="ui divided selection list">
                <a class="item">
                  <div class="ui red horizontal label">JavaScript</div>
                  Expert
                </a>
                <a class="item">
                  <div class="ui red horizontal label">TypeScript</div>
                  Expert
                </a>
                <a class="item">
                  <div class="ui purple horizontal label">NodeJS</div>
                  Proficient
                </a>
              </div>

              <h1>Frameworks</h1>
              <div class="ui divided selection list">
                <a class="item">
                  <div class="ui red horizontal label">Angular</div>
                  Expert
                </a>
                <a class="item">
                  <div class="ui purple horizontal label">React</div>
                  Proficient
                </a>
              </div>

              <h1>Timeline</h1>
              <section>
                <ul class="timeline">
                  <li>
                    <div class="direction-r">
                      <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">Lorem ipsum.</span>
                        <span class="time-wrapper"><span class="time">Feb 2015</span></span>
                      </div>
                      <div class="desc">Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident.</div>
                    </div>
                  </li>

                  <li>
                    <div class="direction-l">
                      <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">Lorem ipsum Anim.</span>
                        <span class="time-wrapper"><span class="time">Dec 2014</span></span>
                      </div>
                      <div class="desc">Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore.</div>
                    </div>
                  </li>

                  <li>
                    <div class="direction-r">
                      <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">Lorem Occaecat.</span>
                        <span class="time-wrapper"><span class="time">July 2014</span></span>
                      </div>
                      <div class="desc">Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat reprehenderit sit id dolor consectetur ut.</div>
                    </div>
                  </li>
                </ul>
                </section>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
