import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import Search from './Search'
import Recipe from './Recipe'

class FrontPage extends Component {
    render() {

        return(
          <div>


            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <Search/>
                    </div>
                </div>
            </div>



              <div className="section white">
                <div className="row container">
                  <div className="row">
                    <div className="col s12">
      
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
