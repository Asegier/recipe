import React from 'react';

const Header = ({handleInputChange, value, handleSearch}) => (
    <div className="col-lg-6 text-center">
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Search for..."
                value={value}
                onChange={handleInputChange}
            />
            <span className="input-group-btn">
                <button
                    className="btn btn-default"
                    type="button"
                    onClick={handleSearch}
                >Go!</button>
            </span>
        </div>
    </div>
);

export default Header