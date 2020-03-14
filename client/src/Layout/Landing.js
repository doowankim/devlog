import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">de blog</h1>
                                <p className="lead">
                                    {' '}
                                    나의 이야기를 사람들에게 공유해보세요
                                </p>
                                <hr />
                                <a href="writing" className="btn btn-lg btn-light mr-2">
                                    글 쓰러 가기
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;