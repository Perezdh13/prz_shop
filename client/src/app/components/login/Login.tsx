import React from 'react'

function Login() {
    return (
        <div>
<div style={{ display: "flex", justifyContent: "center", marginTop: "10vh"}}>
            <div style={{ width: "40vw" }}>
                <div className="mb-3" >
                    <label htmlFor="exampleFormControlInput1" className="form-label" style={{ display: "flex", justifyContent: "center" }}>Nombre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="mb-3" >
                    <label htmlFor="exampleFormControlInput1" className="form-label" style={{ display: "flex", justifyContent: "center" }}>Apellidos</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="mb-3">
                    <div className="col-auto" style={{ display: "flex", justifyContent: "center" }}>
                        <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                    </div>
                    <div className="col-auto">
                        <input type="password" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline" />
                    </div>
                    <div className="col-auto" style={{ display: "flex", justifyContent: "center" }}>
                        <span id="passwordHelpInline" className="form-text">
                            Must be 8-20 characters long.
                        </span>
                    </div>
                    <div className="col-auto" style={{ display: "flex", justifyContent: "center" }}>
                        <button type="button" className="btn btn-outline-warning" style={{margin:"1vw"}}>Login</button>
                    </div>
                    <div className="col-auto" style={{ display: "flex", justifyContent: "center" }}>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login