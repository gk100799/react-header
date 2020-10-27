import React, { Component } from 'react'

import { CoverProps } from './Constants'

export default class Cover extends Component<CoverProps> {

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading" data-testid="coverHeading">{this.props.coverHeading}</h1>
                    <p className="lead" data-testid="coverContent">{this.props.coverContent}</p>
                    <p className="lead">
                        <button data-testid="button" className="btn btn-lg btn-secondary">{this.props.buttonTitle}</button>
                    </p>
                </main>
            </div>
        )
    }
}
