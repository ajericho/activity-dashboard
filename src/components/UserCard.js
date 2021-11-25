import React from 'react';
import avatar from '../images/image-jeremy.png';

export default function UserCard({ timeframe, switchDaily, switchWeekly, switchMonthly }) {
    return (
        <div className="user-card">
            <div class="user-main-box">
                <div class="user-avatar">
                    <img src={avatar} alt='Jeremy Robson' />
                </div>
                <div class="user-info">
                    <p>Report for</p>
                    <h3>Jeremy Robson</h3>
                </div>
            </div>
            <div class="menu">
                <ul>
                    <li>
                        <button
                            className={timeframe === 'daily' ? 'active' : ''}
                            onClick={switchDaily}> Daily
                        </button>
                    </li>
                    <li>

                        <button
                            className={timeframe === 'weekly' ? 'active' : ''}
                            onClick={switchWeekly}> Weekly
                        </button>
                    </li>
                    <li>
                        <button
                            className={timeframe === 'monthly' ? 'active' : ''}
                            onClick={switchMonthly}> Monthly
                        </button>
                    </li>

                </ul>


            </div>
        </div>
    )
}