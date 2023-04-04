import './index.css';

const Switch = ({ isMonthly, onSwitchClick  }) => {


    return (
        <div className="main-container">
            <p className={isMonthly ? "" : "active"} onClick={!isMonthly ? null : onSwitchClick}>Annually</p>
            <div className={`main-switch ${isMonthly ? "" : "active"}`} onClick={onSwitchClick}>
                <div className={`switch ${isMonthly ? "" : "active"}`}></div>
            </div>
            <p className={!isMonthly ? "" : "active"} onClick={isMonthly ? null : onSwitchClick}>Monthly</p>
        </div>
    )
}

export default Switch;