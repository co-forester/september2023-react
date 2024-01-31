
import css from './Launch.module.css'

const Launch = ({mission_name, launch_year, links:{mission_patch_small}}) => {
    return (
        <div className={css.Launch}>
           <div className={css.MissionNameLaunch}>mission_name: {mission_name}</div>
           <div>launch_year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};