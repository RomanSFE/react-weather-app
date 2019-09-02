import React from 'react';

const Form = props =>{
    return(
        <div className="container">
            <form onSubmit={props.loadweather}>
            <div className="row py-3">
                <div className="col-md-3 offset-md-2 py-2">
                    <input type="text" className="form-control" placeholder="Enter City" name="city" autoComplete="off"/>
                </div>
                <div className="col-md-3 py-2">
                    <input type="text" className="form-control" placeholder="Enter Country" name="country" autoComplete="off"/>
                </div>
                <div className="col-md-3 py-2">
                    <button className="btn btn-success">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}
export default Form;