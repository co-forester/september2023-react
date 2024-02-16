import  {useNavigate} from "react-router-dom";

import css from './UserDetails.module.css'

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, phone, website} = userDetails;

    const navigate = useNavigate();

    return (
        <div className={css.UserDetails}>
                <div className={css.Id}>
                    <div className={css.IdFild}>id:</div>
                    <div className={css.IdValue}>{id}</div>
                </div>
                <div className={css.Name}>
                    <div className={css.NameFild}>name:</div>
                    <div className={css.NameValue}>{name}</div>
                </div>
                <div className={css.Username}>
                    <div className={css.UsernameFild}>username:</div>
                    <div className={css.UsernameValue}>{username}</div>
                </div>
                <div className={css.Email}>
                    <div className={css.EmailFild}>email:</div>
                    <div className={css.EmailValue}>{email}</div>
                </div>
                <div className={css.Phone}>
                    <div className={css.PhoneFild}>phone:</div>
                    <div className={css.PhoneValue}>{phone}</div>
                </div>
                <div className={css.Website}>
                    <div className={css.WebsiteFild}>website:</div>
                    <div className={css.WebsiteValue}>{website}</div>
                </div>
                <button className={css.UserButton} onClick={() => navigate('posts')}>getPosts</button>
        </div>
    );
};

export {UserDetails};