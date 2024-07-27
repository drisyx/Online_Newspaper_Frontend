import React from 'react'
import AppHeader from './AppHeader'
const DeleteSub = () => {
    return (
        <div>
            <AppHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                                <label htmlFor="" className="form-label">Subscriber Name</label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                                <button className="btn btn-success">DELETE</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default DeleteSub