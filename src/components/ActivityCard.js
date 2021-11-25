import React from 'react';

export default function ActivityCard({ timeframe, activity }) {

    const t = timeframe;

    function findPhrase() {
        let prevPhrase = '';
        if (timeframe === 'weekly') {
            prevPhrase = 'Last Week'
        }
        else if (timeframe === 'daily') {
            prevPhrase = 'Yesterday'
        }
        else if (timeframe === 'monthly') {
            prevPhrase = 'Last Month'
        }

        return prevPhrase
    }

    function createId(x) {
        return x
            .toLowerCase()
            .replace(/ /g, '-')
            ;
    }



    return (
        <div className="activity-card" id={createId(activity.title)} >
            <div class="activity-header" />
            <div class="activity-main-box">
                <div class="activity-title">
                    <h4>{activity.title}</h4>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="dots" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </div>
                </div>

                {activity.timeframes[t] ?
                    <div class="activity-details">
                        <p className="current">{activity.timeframes[t].current}hrs</p>
                        <p className="previous">{findPhrase()} - {activity.timeframes[t].previous}hrs</p>
                    </div>
                    : ''
                }

            </div>

        </div>
    )
}