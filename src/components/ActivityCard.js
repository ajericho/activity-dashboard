import React from 'react';

export default function ActivityCard({ timeframe, activity }) {

    const t = timeframe;

    function createId(x)
{
    return x
        .toLowerCase()
        .replace(/ /g,'-')
        ;
}



    return (
        <div className="activity-card" id={createId(activity.title)} >
            <div class="activity-header" />
            <div class="activity-main-box">
                <div class="activity-title">
                    <h4>{activity.title}</h4>
                    <div>...</div>
                </div>

                {activity.timeframes[t] ?
                    <div class="activity-details">
                        <p className="current">{activity.timeframes[t].current}hrs</p>
                        <p className="previous">Last Week - {activity.timeframes[t].previous}hrs</p>
                    </div>
                    : ''
                }

            </div>

        </div>
    )
}