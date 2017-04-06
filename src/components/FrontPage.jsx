import React, { Component } from 'react';

import Search from './Search'
import Recipe from './Recipe'

class FrontPage extends Component {
    render() {

        return(
                <div>


                    <div className="wrapper">


                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <Search/>
                                </div>
                            </div>
                        </div>

                        <div className="container" id="search">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <Recipe/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }

}

export default FrontPage;
