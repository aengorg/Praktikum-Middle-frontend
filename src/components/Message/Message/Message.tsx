import React from 'react';
import './Message.scss';

import { IMessageContent, IUser } from './types';
import { formatTime } from '../../../utils/format';
import { Avatar } from '../../UI/Avatar/Avatar';

// types
interface Props {
  message: IMessageContent;
  user: IUser;
}

// component
export const Message = ({ message, user }: Props) => {
  const time: string = formatTime(message.date);

  return (
    <div className='message'>
      <Avatar className='message__avatar' avatar={user.avatar} title={user.name} />
      <div className='message__body'>
        <span className='message__user-name'>{user.name}</span>
        <span>{message.content}</span>
        <span className='message__time'>{time}</span>
      </div>
    </div>
  );
};