import React, { useEffect, useState} from 'react';
import {Checkbox , IconButton} from '@material-ui/core'
import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './EmailList.css'
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
    // state is a way keeping variables in react
    const [emails, setEmails] = useState([]);

    // useEffect is a piece of code which basically says, (its a react hook)
    // says run this piece of code when the email list component loads, run at once, as well when the variable changes inside that
    useEffect(()=> {
        db.collection('emails')
        .orderBy('timestamp', 'decs')
        .onSnapshot(snapshot => 
            setEmails(
                snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
        );
    }, [])

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
                <div className="emailList__settingRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1a73e8"  />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"  />
            </div>

            <div className="emailList__List">
                {emails.map(({id, data: {to, subject, message, timestamp
                }}) => (
                    <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
                <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test"
                time="10pm"
                />

                <EmailRow 
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="This is a test slkfjksabkfbskjfbsiuygsgfjsk"
                time="10pm"
                />


            </div>
        </div>
    )
}

export default EmailList
