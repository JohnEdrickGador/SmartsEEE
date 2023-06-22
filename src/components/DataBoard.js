import React from 'react'
import DataTile from './DataTile';

export default function DataBoard() {
    const classNames = ['illuminance-container', 'temp-container', 'humid-container', 'motion-container'];

    const tempApiReadKey = "WPAAONKTI1XJEUIB";
    const tempChannelId = "2155390";

    const lightApiReadKey = "0YIDYM3EUOH6MSGA";
    const lightChannelId = "2199572";

    const gyroApiReadKey = "WPAAONKTI1XJEUIB";
    const gyroChannelId = "2155390";

    return (
        <div className='databoard-container'>
            <div className='databoard-parent'>
                <DataTile className={classNames[0]} apiReadKey={lightApiReadKey} channelId={lightChannelId}/>
                <div className='row2'>
                    <div className='am2320'>
                        <DataTile className={classNames[1]} apiReadKey={tempApiReadKey} channelId={tempChannelId}/>
                        <DataTile className={classNames[2]} apiReadKey={tempApiReadKey} channelId={tempChannelId}/>
                    </div>
                    <DataTile className={classNames[3]} apiReadKey={gyroApiReadKey} channelId={gyroChannelId}/>
                </div>
            </div>
        </div>

    )
}
