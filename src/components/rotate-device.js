import React from 'react';

const RotateDevice = () => {
    return (
        <div id="rotate-device" className="d-block d-sm-none">
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <h2>Please rotate your device</h2>
                                <img src={require('../assets/images/rotate-device.gif')} className="img-fluid" alt="Rotate your device" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RotateDevice;